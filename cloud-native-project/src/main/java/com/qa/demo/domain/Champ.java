package com.qa.demo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Champ {
	
	
	//These are my attributes for the champion(Champ) entity
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable=false)
	private String fName;
	
	@Column(nullable=false)
	private String lName;
	
	@Column(nullable=false)
	private Integer age;
	
	@Column(nullable=false)
	private Integer wins;
	
	@Column(nullable=false)
	private Integer losses;
	
	@Column(nullable=false)
	private Integer defences;
	
	@Column
	private Integer bonuses;
	
	@Column(nullable=false)
	private String division;
	

}
