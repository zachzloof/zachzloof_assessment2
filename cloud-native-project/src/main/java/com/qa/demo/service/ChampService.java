package com.qa.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.qa.demo.repo.ChampRepo;
import com.qa.demo.domain.Champ;

@Service
public class ChampService implements ServiceInterface<Champ>{
	
	private ChampRepo rep;
	
	@Autowired
	public ChampService(ChampRepo repo) {
		super();
		this.rep=repo;
	}

	@Override
	public Champ create(Champ t) {
		// TODO Auto-generated method stub
		Champ create = this.rep.save(t);
		return create;
	}

	@Override
	public List<Champ> getAll() {
		// TODO Auto-generated method stub
		return this.rep.findAll();
	}

	@Override
	public Champ getById(Integer id) {
		// TODO Auto-generated method stub
		Optional<Champ> read = this.rep.findById(id);
		return read.get();
	}

	@Override
	public Champ replace(Integer id, Champ t) {
		// TODO Auto-generated method stub
		Champ oldChamp = this.rep.findById(id).get();
		
		oldChamp.setAge(t.getAge());
		oldChamp.setBonuses(t.getBonuses());
		oldChamp.setDefences(t.getDefences());
		oldChamp.setDivision(t.getDivision());
		oldChamp.setFirstName(t.getFirstName());
		oldChamp.setLastName(t.getLastName());
		oldChamp.setLosses(t.getLosses());
		oldChamp.setWins(t.getWins());
		
		Champ newChamp = this.rep.save(oldChamp);
		return newChamp;
	}

	@Override
	public void remove(@PathVariable Integer id) {
		// TODO Auto-generated method stub
		this.rep.deleteById(id);
	}
	
	public List<Champ> getChampByFirstName(String fName) {
		List<Champ> championList = this.rep.findByFirstNameIgnoreCase(fName);
		return championList;
	}
	
	public List<Champ> getChampByLastName(String lName) {
		List<Champ> championList = this.rep.findByLastNameIgnoreCase(lName);
		return championList;
	}
	
	public List<Champ> getChampByDefences(Integer defences) {
		List<Champ> championList = this.rep.findByDefences(defences);
		return championList;
	}
	
	public List<Champ> getChampByDivision(String division) {
		List<Champ> championList = this.rep.findByDivisionIgnoreCase(division);
		return championList;
	}

	
}
