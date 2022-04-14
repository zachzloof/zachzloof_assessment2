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
		private String firstName;
		
		@Column(nullable=false)
		private String lastName;
		
		@Column(nullable=false)
		private Integer age;
		
		@Column(nullable=false)
		private Integer wins;
		
		@Column(nullable=false)
		private Integer losses;
		
		@Column
		private Integer defences;
		
		@Column
		private Integer bonuses;
		
		@Column(nullable=false)
		private String division;

		// This is my constructor that was generated using all fields
		public Champ(Integer id, String firstName, String lastName, Integer age, Integer wins, Integer losses,
				Integer defences, Integer bonuses, String division) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.wins = wins;
			this.losses = losses;
			this.defences = defences;
			this.bonuses = bonuses;
			this.division = division;
		}
		 
		// This is my superclass constructor
		public Champ() {
			super();
			// TODO Auto-generated constructor stub
		}

	
		// This is my generated to-string method
		@Override
		public String toString() {
			return "Champ [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
					+ ", wins=" + wins + ", losses=" + losses + ", defences=" + defences + ", bonuses=" + bonuses
					+ ", division=" + division + "]";
		}

		// These are my getters and setters for all fields
		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public Integer getAge() {
			return age;
		}

		public void setAge(Integer age) {
			this.age = age;
		}

		public Integer getWins() {
			return wins;
		}

		public void setWins(Integer wins) {
			this.wins = wins;
		}

		public Integer getLosses() {
			return losses;
		}

		public void setLosses(Integer losses) {
			this.losses = losses;
		}

		public Integer getDefences() {
			return defences;
		}

		public void setDefences(Integer defences) {
			this.defences = defences;
		}

		public Integer getBonuses() {
			return bonuses;
		}

		public void setBonuses(Integer bonuses) {
			this.bonuses = bonuses;
		}

		public String getDivision() {
			return division;
		}

		public void setDivision(String division) {
			this.division = division;
		}
		
		// These two methods are my hashcode and equals methods, these will be used for unit testing later on.
	

	
}
