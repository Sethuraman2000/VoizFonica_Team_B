import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Register } from '../register';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({



  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']



})

export class RegisterComponent implements OnInit {
  register: Register = new Register();
 
  profileForm:any;

  constructor(private registrationService: RegistrationService, private http: HttpClient,private formBuilder:FormBuilder,private _router:Router) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      age: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(2)]),
      number: new FormControl('', [Validators.required,Validators.maxLength(10)]),
        
      email: new FormControl('', [Validators.required,Validators.minLength(2)]),
      
      password: new FormControl('', [Validators.required]),
      
      
    });
   }



  get f() {
    return this.profileForm.controls
  }
  get name(){
    return this.profileForm.get('name');
  }
  get age(){
    return this.profileForm.get('age');
  }
  get number(){
    return this.profileForm.get('number');
  }
  get email(){
    return this.profileForm.get('email');
  }
  
  get password(){
    return this.profileForm.get('password');
  }
  
 
  reg() {
    this.register.name = this.f['name'].value;
    this.register.age = this.f['age'].value;
    this.register.number = this.f['number'].value;
    this.register.email = this.f['email'].value;     
    this.register.password = this.f['password'].value;    
    
    this.sujidata();
  }

  sujidata() {
 
    this.registrationService.logInUserFromRemote(this.register)
      .subscribe(
        data=>{
          
          
          Swal.fire("Welcome To VoizFonica!",'Registration Successful','success');
          this._router.navigate(['/signin'])
        },error=>{
          console.log("Exception Occured");
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'User with Same  Mobile Number Already Exists!',
            footer: '<a href="/register">Try Again</a>'
          })
        }
      
      );
    this.register = new Register();

  }
  ngOnInit(): void {
  }

}
