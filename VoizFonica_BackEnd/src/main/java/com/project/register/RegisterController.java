package com.project.register;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.register.Register;
import com.project.register.RegisterRepository;

@CrossOrigin
@RestController
public class RegisterController{
  @Autowired
  private RegisterRepository registrationRepository;
  @Autowired
  private RegisterService service;
  // delete operation

  @DeleteMapping("/deleteusers/{id}")
  public void deleteRegisteration(@PathVariable("id") int id) {
      registrationRepository.deleteById(id);
  }
  // create employee rest api
  
  // get all employees
  @GetMapping("/getregistration")
  public List<Register> getAllRegister() {
      return registrationRepository.findAll();
  }

  @PostMapping("/login")  
  public Register loginuser(@RequestBody Register user) throws Exception {
      String tempnumber = user.getNumber();
      String temppassword = user.getPassword();
      Register userObj=null;
      
      if(tempnumber!=null && temppassword!=null)
      {
          userObj=service.findByNumberAndPassword(tempnumber, temppassword);
      }
      if(userObj == null) {
          throw new Exception("Wrong credentials");
      }
      return userObj;
  }
  
  
  @PostMapping("/addregistration")
  public Register registerUser(@RequestBody Register user) throws Exception {
      String tempnumber=user.getNumber();
      
      if(tempnumber!=null && !"".equals(tempnumber)) {
          Register userObj =service.findByNumber(tempnumber);
          if(userObj !=null) {
              throw new Exception("User with "+tempnumber+" already exists");
          }
      }
      
  Register userObj=null;
  userObj=service.saveRegister(user);
  return userObj;
  }
  
  
  
  @PutMapping("/update/{id}")
  public Register saveorUpdateuser(@RequestBody Register user) {
	  registrationRepository.save(user);
      return user;
}
  
}