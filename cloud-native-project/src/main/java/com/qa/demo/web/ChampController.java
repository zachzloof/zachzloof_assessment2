package com.qa.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.demo.domain.Champ;
import com.qa.demo.service.ChampService;

@RestController
public class ChampController {
	
	private ChampService service;
	
	@Autowired
	public ChampController (ChampService s) {
		super();
		this.service=s;
	}
	
	@PostMapping("/create")
	public ResponseEntity<Champ> createChampion (@RequestBody Champ c) {
		Champ create = this.service.create(c);
		ResponseEntity<Champ> res = new ResponseEntity<Champ>(create, HttpStatus.CREATED);
		return res;
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Champ>> getAllChampions() {
		return ResponseEntity.ok(this.service.getAll());
	}
	
	@GetMapping("/get/{id}")
	public Champ getChampionById(@PathVariable Integer id) {
		return this.service.getById(id);
	}
	
	@GetMapping("/getByFName/{fName}")
	public ResponseEntity<List<Champ>> getChampionsByFirstName(@PathVariable String fName) {
		List<Champ> list = this.service.getChampByFirstName(fName);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getByLName/{lName}")
	public ResponseEntity<List<Champ>> getChampionsByLastName(@PathVariable String lName) {
		List<Champ> list = this.service.getChampByLastName(lName);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getByDefences/{defences}")
	public ResponseEntity<List<Champ>> getChampionsByDefences(@PathVariable Integer defences) {
		List<Champ> list = this.service.getChampByDefences(defences);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getByDivision/{division}")
	public ResponseEntity<List<Champ>> getChampionsByDivision(@PathVariable String division) {
		List<Champ> list = this.service.getChampByDivision(division);
		return ResponseEntity.ok(list);
	}
	
	@PutMapping("/replace/{id}")
	public ResponseEntity<Champ> updateChampion(@PathVariable Integer id, @RequestBody Champ newChampion) {
		Champ body = this.service.replace(id, newChampion);
		ResponseEntity<Champ> res = new ResponseEntity<Champ>(body, HttpStatus.ACCEPTED);
		return res;
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<?> deleteChampion(@PathVariable Integer id) {
		this.service.remove(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
