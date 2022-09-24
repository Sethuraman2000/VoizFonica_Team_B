package com.project.register;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminRepository adminrepo;	
	@Autowired
	private AdminService service;
	
	@PostMapping("/adminlogin")  
	  public Admin loginuser(@RequestBody Admin admin) throws Exception {
	      String tempusername = admin.getUsername();
	      String temppassword = admin.getPassword();
	      Admin userObj=null;
	      
	      if(tempusername!=null && temppassword!=null)
	      {
	          userObj=service.findByUsernameAndPassword(tempusername, temppassword);
	      }
	      if(userObj == null) {
	          throw new Exception("Wrong credentials");
	      }
	      return userObj;
	  }
	@PostMapping("/addadmin")
	  public Admin createpayment(@RequestBody Admin admin) {
	      return adminrepo.save(admin);
	  }

}
