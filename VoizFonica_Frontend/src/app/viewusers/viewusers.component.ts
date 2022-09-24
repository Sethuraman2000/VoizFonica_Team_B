import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Register } from '../register';

import { Message } from '../message';
import { MessageService } from '../message.service';
import { RegistrationService } from '../registration.service';
import { SigninService } from '../signin.service';


@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})

export class ViewusersComponent implements OnInit {
  registers: any;
  sethu: any;
  deleteMessage: any;
  profileForm: any;
  profilesForm: any;
  alertWithMail(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  constructor(private messageService: MessageService,private http: HttpClient,private registerService: RegistrationService,private signinService: SigninService,private formBuilder:FormBuilder,private _router:Router) {
    this.profilesForm = this.formBuilder.group({
      
      numbers: new FormControl('', [Validators.required,Validators.maxLength(10)]),
      
      message: new FormControl('', [Validators.required,Validators.minLength(20)]),
      
    });
  }
  get f() {
    return this.profilesForm.controls
  }
  get numbers(){
    return this.profilesForm.get('numbers');
  }
  get message(){
    return this.profilesForm.get('message');
  }
  
  
  ngOnInit(): void {
    
      this.sethu = 'sethu';
      this.signinService.getUserList().subscribe((data: any) => {
        console.log('Hii all');
        this.registers = data;
      });
  
    
  }

  messagess: Message = new Message();
  

  

  deletedata(id:any){
    this.signinService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.signinService.getUserList().subscribe(data =>{
        this.registers =data
          })
      },
      error => console.log(error));
  }
  
  
  messages(){
      this.messagess.numbers = this.f['numbers'].value;
      this.messagess.message = this.f['message'].value;
      this.postdata();
  }
  postdata() {
 
    this.messageService.messageforuser(this.messagess)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.messagess = new Message();
}
logout(){

  sessionStorage.clear();

  alert("You have been logged out!")    

  this._router.navigate(['/adminlogin']);

}
}
