import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SigninService } from '../signin.service';
import { Register } from '../register';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class signinComponent implements OnInit {
  alertWithSuccess(){
    Swal.fire("Thank You",'Successfully Logged In','success')
  }
  alertForMail(){
    Swal.fire("Thank You",'Successfully Logged In','success')
  }
  register=new Register();
  admin=new Admin();
  mesg='';
  mithresh: any;
  signinService: any;
  deleteMessage: any;
  userName:any;
  
  constructor(private _service:SigninService,private _router:Router,private http: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }  
  

  loginUser(){
    this._service.logInUserFromRemote(this.register).subscribe(
    data=>{
      console.log("Response Received",data);
      sessionStorage.setItem('name',data.name);
      console.log("Response Received",data.name,sessionStorage.getItem('name'));
      sessionStorage.setItem('number',data.number);
      console.log("Response Received",data.number,sessionStorage.getItem('number'));
      sessionStorage.setItem('email',data.email);
      console.log("Response Received",data.email,sessionStorage.getItem('email'));
      sessionStorage.setItem('age',data.age);
      console.log("Response Received",data.age,sessionStorage.getItem('age'));
      Swal.fire("Welcome!",'Successfully Logged In','success');
      this._router.navigate(['/userdashboard'])
      
    },
    error=>{
      console.log("Exception Occured");
      Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: 'You have Entered Wrong Credentials!',
        footer: '<a href="">Forgot Password</a>'
      })
    }
    )

  }
  

}
