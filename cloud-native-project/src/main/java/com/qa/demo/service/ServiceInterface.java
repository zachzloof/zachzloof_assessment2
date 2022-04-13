package com.qa.demo.service;

import java.util.List;

public interface ServiceInterface<T> {
	
	T create(T t);
	
	List<T>getAll();
	
	T getById(Integer id);
	
	T replace(Integer id, T t);
	
	void remove(Integer id);
}
