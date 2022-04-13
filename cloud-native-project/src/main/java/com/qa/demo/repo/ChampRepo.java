package com.qa.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.demo.domain.Champ;

@Repository
public interface ChampRepo extends JpaRepository<Champ, Integer>{
	
	List<Champ> findbyFNameIgnoreCase(String fName);
	List<Champ> findbyLNameIgnoreCase(String lName);
	List<Champ> findbyDefences(Integer defences);
	List<Champ> findbyDivisionIgnoreCase(String division);
		
}
