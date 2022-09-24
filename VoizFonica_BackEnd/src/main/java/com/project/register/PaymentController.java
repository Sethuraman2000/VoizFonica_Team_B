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
public class PaymentController {
	@Autowired
	PaymentRepository payrepo;
	
	@GetMapping("/getpayments")
	  public List<Payment> getAllpayments() {
	      return payrepo.findAll();
	  }
	@DeleteMapping("/deletepayment/{id}")
	  public void deletepayment(@PathVariable("id") int id) {
	      payrepo.deleteById(id);
	  }
	@PostMapping("/addpayment")
	  public Payment createpayment(@RequestBody Payment payment) {
	      return payrepo.save(payment);
	  }
}
