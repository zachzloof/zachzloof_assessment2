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

		// This is my constructor that was generated using all fields
		public Champ(Integer id, String fName, String lName, Integer age, Integer wins, Integer losses,
				Integer defences, Integer bonuses, String division) {
			super();
			this.id = id;
			this.fName = fName;
			this.lName = lName;
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



		// These are my getters and setters for all fields
		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getfName() {
			return fName;
		}

		public void setfName(String fName) {
			this.fName = fName;
		}

		public String getlName() {
			return lName;
		}

		public void setlName(String lName) {
			this.lName = lName;
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
		
		// This is my generated to-string method
		@Override
		public String toString() {
			return "Champ [id=" + id + ", fName=" + fName + ", lName=" + lName + ", age=" + age + ", wins=" + wins
					+ ", losses=" + losses + ", defences=" + defences + ", bonuses=" + bonuses + ", division="
					+ division + "]";
		}
		
		// These two methods are my hashcode and equals methods, these will be used for unit testing later on.
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((age == null) ? 0 : age.hashCode());
			result = prime * result + ((bonuses == null) ? 0 : bonuses.hashCode());
			result = prime * result + ((defences == null) ? 0 : defences.hashCode());
			result = prime * result + ((division == null) ? 0 : division.hashCode());
			result = prime * result + ((fName == null) ? 0 : fName.hashCode());
			result = prime * result + ((id == null) ? 0 : id.hashCode());
			result = prime * result + ((lName == null) ? 0 : lName.hashCode());
			result = prime * result + ((losses == null) ? 0 : losses.hashCode());
			result = prime * result + ((wins == null) ? 0 : wins.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Champ other = (Champ) obj;
			if (age == null) {
				if (other.age != null)
					return false;
			} else if (!age.equals(other.age))
				return false;
			if (bonuses == null) {
				if (other.bonuses != null)
					return false;
			} else if (!bonuses.equals(other.bonuses))
				return false;
			if (defences == null) {
				if (other.defences != null)
					return false;
			} else if (!defences.equals(other.defences))
				return false;
			if (division == null) {
				if (other.division != null)
					return false;
			} else if (!division.equals(other.division))
				return false;
			if (fName == null) {
				if (other.fName != null)
					return false;
			} else if (!fName.equals(other.fName))
				return false;
			if (id == null) {
				if (other.id != null)
					return false;
			} else if (!id.equals(other.id))
				return false;
			if (lName == null) {
				if (other.lName != null)
					return false;
			} else if (!lName.equals(other.lName))
				return false;
			if (losses == null) {
				if (other.losses != null)
					return false;
			} else if (!losses.equals(other.losses))
				return false;
			if (wins == null) {
				if (other.wins != null)
					return false;
			} else if (!wins.equals(other.wins))
				return false;
			return true;
		}
}
