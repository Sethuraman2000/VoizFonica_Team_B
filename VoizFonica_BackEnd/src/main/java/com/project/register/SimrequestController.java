package com.project.register;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController

public class SimrequestController {
	@Autowired
	private SimrequestRepository reqrepo;
	
	@GetMapping("/getrequests")
	  public List<Simrequest> getAllEmails() {
	      return reqrepo.findAll();
	  }
	@DeleteMapping("/deleterequest/{id}")
	  public void deleteemail(@PathVariable("id") int id) {
	      reqrepo.deleteById(id);
	  }
	@PostMapping("/addrequest")
	  public Simrequest createemail(@RequestBody Simrequest request) {
	      return reqrepo.save(request);
	  }
}
