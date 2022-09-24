package com.project.register;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository  extends JpaRepository<Register,Integer>{
	public Register findByNumber(String number);

	Register findByNumberAndPassword(String number, String password);

	public void deleteByNumber(String number);
	
  }

