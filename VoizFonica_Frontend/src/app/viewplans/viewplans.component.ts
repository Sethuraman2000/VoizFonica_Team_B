import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Plans } from '../plans';
import { PlanserviceService } from '../planservice.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewplans',
  templateUrl: './viewplans.component.html',
  styleUrls: ['./viewplans.component.css']
})
export class ViewplansComponent implements OnInit {
  plans: any;
  sethu: any;
  deleteMessage: any;
  profileForm: any;
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  constructor(private planService: PlanserviceService,private http: HttpClient,private formBuilder:FormBuilder,private _router:Router) {
    this.profileForm = this.formBuilder.group({
      card: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      voice: new FormControl('', [Validators.required]),
      sms: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),      
      validity: new FormControl('', [Validators.required]),
      
    });
   }
  

  ngOnInit(): void {
    this.sethu = 'sethu';
    this.planService.getPlanList().subscribe((data: any) => {
      console.log('Hii all');
      this.plans = data;
    });
  }

  plan: Plans = new Plans();
  
  



get f() {
  return this.profileForm.controls
}
get card(){
  return this.profileForm.get('card');
}
get amount(){
  return this.profileForm.get('amount');
}
get voice(){
  return this.profileForm.get('voice');
}
get sms(){
  return this.profileForm.get('sms');
}
get data(){
  return this.profileForm.get('data');
}

get validity(){
  return this.profileForm.get('validity');
}

reg() {
  this.plan.card = this.f['card'].value;
  this.plan.amount = this.f['amount'].value;
  this.plan.voice = this.f['voice'].value;
  this.plan.sms = this.f['sms'].value;    
  this.plan.data = this.f['data'].value;   
  this.plan.validity = this.f['validity'].value;    
  
  this.postdata();
}

postdata() {

  this.planService.createPlan(this.plan)
    .subscribe(
      data=>{
        console.log("Response Received");
        console.log(data);
       
        Swal.fire("Added",'Plan Added Successfully','success');
        this._router.navigate(['/viewplans'])
      },error=>{
        console.log("Exception Occured");
        Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: 'User with Same  Mobile Number Already Exists!',
          footer: '<a href="/plan">Try Again</a>'
        })
      }
    
    );
  this.plan = new Plans();
  }

  
    

  

  deletedata(id:any){
    this.planService.deletePlan(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.planService.getPlanList().subscribe(data =>{
        this.plans =data
          })
      },
      error => console.log(error));
  }
  logout(){

    sessionStorage.clear();
  
    alert("You have been logged out!")    
  
    this._router.navigate(['/adminlogin']);
  
  }
}
