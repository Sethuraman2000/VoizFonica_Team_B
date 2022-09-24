package com.project.register;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MessageController {
	@Autowired
	private MessageRepository mesrepo;
	
	@GetMapping("/getmessage")
	  public List<Message> getAllEmails() {
	      return mesrepo.findAll();
	  }
	@GetMapping("/getmessage/{number}")
	  public Optional<Message> getbymessage(@PathVariable("number") int number) {
	      return mesrepo.findById(number);
	  }
	@DeleteMapping("/deletemessage/{number}")
	  public void deleteemail(@PathVariable("number") int number) {
	      mesrepo.deleteById(number);
	  }
	@PostMapping("/addmessage")
	  public Message createemails(@RequestBody Message mes) {
	      return mesrepo.save(mes);
	  }

}
