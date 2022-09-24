import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlanserviceService } from '../planservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  number:any;
  name:any;
  age:any;
  email:any;
  amount:any;
  voice:any;
  sms:any;
  data:any;
  validity:any;
  sethu: any;
  plans: any;
  constructor(private planService:PlanserviceService,private router:Router) { }

  ngOnInit(): void {

    this.name=sessionStorage.getItem('name');
    this.number=sessionStorage.getItem('number');
    this.email=sessionStorage.getItem('email');
    this.age=sessionStorage.getItem('age');
    this.amount=sessionStorage.getItem('amount');
    this.voice=sessionStorage.getItem('voice');
    this.data=sessionStorage.getItem('data');
    this.sms=sessionStorage.getItem('sms');
    this.validity=sessionStorage.getItem('validity');
    this.sethu = 'sethu';
    this.planService.getonePlanList().subscribe((data: any) => {
      console.log('Hii all');
      this.plans = data;
    });
  }
  plan: Plans = new Plans();
  logout(){

    sessionStorage.clear();
  
    alert("You have been logged out!")    
  
    this.router.navigate(['/signin']);
  
  }
}
