import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactus: Contactus = new Contactus();
  
  
  
  constructor(private contactusService: ContactusService, private http: HttpClient,private formBuilder:FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      
      
      number: new FormControl('', [Validators.required]),
      
      message: new FormControl('', [Validators.required]),
      
      
    });
   }

  get f() {
    return this.profileForm.controls
  }
  get name(){
    return this.profileForm.get('name');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get number(){
    return this.profileForm.get('number');
  }  
  get message(){
    return this.profileForm.get('message');
  }
  
 
  reg() {
    this.contactus.name = this.f['name'].value;
    this.contactus.email = this.f['email'].value;
    this.contactus.number = this.f['number'].value;
    
    this.contactus.message = this.f['message'].value;
      
    alert("Successfully Submitted");
    this.postdata();
  }

  postdata() {
 
    this.contactusService.createContact(this.contactus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contactus = new Contactus();

  }
  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    name: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]),

   email: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    
    ]),
    

      number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]{0-9}')
     ]),

 message: new FormControl('', [
    Validators.required,
    Validators.minLength(20),
  ]),
});
}
