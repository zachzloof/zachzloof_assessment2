package com.qa.demo.domain;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;

public class ChampTest {
	
	@Test
	public void testEquals() {
		EqualsVerifier.forClass(Champ.class)
		.suppress(Warning.NONFINAL_FIELDS)
		.usingGetClass()
		.verify();
	}

}
