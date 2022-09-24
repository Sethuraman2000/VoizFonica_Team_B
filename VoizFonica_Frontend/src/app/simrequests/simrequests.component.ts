import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Simrequest } from '../simrequest';
import { SimrequestService } from '../simrequest.service';

@Component({
  selector: 'app-simrequests',
  templateUrl: './simrequests.component.html',
  styleUrls: ['./simrequests.component.css']
})
export class SimrequestsComponent implements OnInit {
  simrequests: any;
  sethu: any;
  deleteMessage: any;
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  constructor(private simService: SimrequestService,private router:Router) {}

  ngOnInit(): void {
    this.sethu = 'sethu';
    this.simService.getSimList().subscribe((data: any) => {
      console.log('Hii all');
      this.simrequests = data;
    });
  }

  simrequest: Simrequest= new Simrequest();
  

  
    

  

  deletedata(id:any){
    this.simService.deleteSim(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.simService.getSimList().subscribe(data =>{
        this.simrequests =data
          })
      },
      error => console.log(error));
  }
  logout(){

    sessionStorage.clear();
  
    alert("You have been logged out!")    
  
    this.router.navigate(['/adminlogin']);
  
  }
}
