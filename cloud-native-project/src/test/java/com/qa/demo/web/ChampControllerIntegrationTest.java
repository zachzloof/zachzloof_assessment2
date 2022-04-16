package com.qa.demo.web;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.demo.domain.Champ;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc 
@Sql(scripts = { "classpath:champ-schema.sql", "classpath:champ-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles("test")
public class ChampControllerIntegrationTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper mapper;
	
	@Test
	void testCreate() throws Exception {
		Champ testChamp = new Champ(null, "nate", "diaz", 30, 25, 10, 0, 2, "welterweight");
		String testChampAsJSON = this.mapper.writeValueAsString(testChamp);
		RequestBuilder request = post("/create").contentType(MediaType.APPLICATION_JSON).content(testChampAsJSON);

		Champ testCreatedChamp = new Champ(3, "nate", "diaz", 30, 25, 10, 0, 2, "welterweight");
		String testCreatedPersonAsJSON = this.mapper.writeValueAsString(testCreatedChamp);

		ResultMatcher checkStatus = status().isCreated();
		ResultMatcher checkBody = content().json(testCreatedPersonAsJSON);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
}
