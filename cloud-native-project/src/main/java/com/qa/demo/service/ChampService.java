package com.qa.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.demo.repo.ChampRepo;
import com.qa.demo.domain.Champ;

@Service
public class ChampService implements ServiceInterface<Champ>{
	
	private ChampRepo rep;
	
	@Autowired
	public ChampService(ChampRepo rep) {
		super();
		this.rep=rep;
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
		return null;
	}

	@Override
	public Champ getById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Champ replace(Integer id, Champ t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void remove(Integer id) {
		// TODO Auto-generated method stub
		
	}

	
}
