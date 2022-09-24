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
public class PlansController {
	    @Autowired
	    PlansRepository plansRepository;
	    
	    @GetMapping("/getplans")
	    public List<Plans> getAllPlans(){
	        return plansRepository.findAll();
	        
	    }
	    
	    @PostMapping("/addplans")
	    public Plans createPlans(@RequestBody Plans plans) {
	        return plansRepository.save(plans);
	    }
	    @DeleteMapping("/deleteplan/{id}")
	    public void deletePlan(@PathVariable("id") int id) {
	    	plansRepository.deleteById(id);
	    }
}
