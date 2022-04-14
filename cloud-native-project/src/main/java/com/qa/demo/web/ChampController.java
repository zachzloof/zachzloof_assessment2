package com.qa.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

}
