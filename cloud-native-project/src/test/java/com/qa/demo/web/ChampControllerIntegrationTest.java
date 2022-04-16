package com.qa.demo.web;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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
		String testCreatedChampAsJSON = this.mapper.writeValueAsString(testCreatedChamp);
		ResultMatcher checkStatus = status().isCreated();
		ResultMatcher checkBody = content().json(testCreatedChampAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getAllTest() throws Exception {
		RequestBuilder request = get("/getAll");
		List<Champ> testChampions = List.of(new Champ(1, "nate", "diaz", 35, 20, 10, 0, 5, "welterweight"), new Champ(2, "israel", "adesanya", 28, 28, 1, 5, 7, "middleweight"));
		String json = this.mapper.writeValueAsString(testChampions);
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getByIdTest() throws Exception {
		RequestBuilder request = get("/get/2");
		String json = this.mapper.writeValueAsString(new Champ(2, "israel", "adesanya", 28, 28, 1, 5, 7, "middleweight"));
		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getByFirstNameTest() throws Exception {
		RequestBuilder request = get("/getByFName/israel");

		List<Champ> testChampions = List.of(new Champ(2, "israel", "adesanya", 28, 28, 1, 5, 7, "middleweight"));
		String json = this.mapper.writeValueAsString(testChampions);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getByLastNameTest() throws Exception {
		RequestBuilder request = get("/getByLName/diaz");

		List<Champ> testChampions = List.of(new Champ(1, "nate", "diaz", 35, 20, 10, 0, 5, "welterweight"));
		String json = this.mapper.writeValueAsString(testChampions);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getByDefencesTest() throws Exception {
		RequestBuilder request = get("/getByDefences/0");

		List<Champ> testChampions = List.of(new Champ(1, "nate", "diaz", 35, 20, 10, 0, 5, "welterweight"));
		String json = this.mapper.writeValueAsString(testChampions);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void getByDivisionTest() throws Exception {
		RequestBuilder request = get("/getByDivision/welterweight");

		List<Champ> testChampions = List.of(new Champ(1, "nate", "diaz", 35, 20, 10, 0, 5, "welterweight"));
		String json = this.mapper.writeValueAsString(testChampions);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(json);

		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testReplace() throws Exception {
		Champ testChamp = new Champ(null, "max", "holloway", 28, 35, 4, 8, 5, "featherweight");
		String testChampAsJSON = this.mapper.writeValueAsString(testChamp);
		RequestBuilder request = put("/replace/1").contentType(MediaType.APPLICATION_JSON).content(testChampAsJSON);
		
		Champ testUpdatedChamp = new Champ(1, "max", "holloway", 28, 35, 4, 8, 5, "featherweight");
		String testUpdatedChampAsJSON = this.mapper.writeValueAsString(testUpdatedChamp);
		
		ResultMatcher checkStatus = status().isAccepted();
		ResultMatcher checkBody = content().json(testUpdatedChampAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testRemove() throws Exception {
		this.mvc.perform(delete("/remove/1")).andExpect(status().isNoContent());
	}
	
}
