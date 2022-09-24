package com.project.register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AdminService {
	@Autowired
    private AdminRepository adminrepo;

	public Admin findByUsernameAndPassword(String tempusername, String temppassword) {
		// TODO Auto-generated method stub
		return adminrepo.findByUsernameAndPassword(tempusername,temppassword);
	}

}
