package com.qa.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.demo.domain.Champ;

@Repository
public interface ChampRepo extends JpaRepository<Champ, Integer>{
	
	List<Champ> findByFirstNameIgnoreCase(String firstName);
	List<Champ> findByLastNameIgnoreCase(String lastName);
	List<Champ> findByDefences(Integer defences);
	List<Champ> findByDivisionIgnoreCase(String division);
		
}
