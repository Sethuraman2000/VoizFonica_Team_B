package com.project.register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
	
	@Autowired
    private RegisterRepository repo;

	public Register saveRegister(Register Register) {
        return repo.save(Register);
    }
   
    public Register findByNumberAndPassword(String number,String password) {
        return repo.findByNumberAndPassword(number,password);
        
    }

	public Register findByNumber(String number) {
		// TODO Auto-generated method stub
		return repo.findByNumber(number);
	}

}
