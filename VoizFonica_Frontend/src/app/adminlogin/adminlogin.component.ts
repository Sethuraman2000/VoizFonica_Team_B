import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Admin } from '../admin';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin=new Admin();
  constructor(private _service:SigninService,private _router:Router,private http: HttpClient,private formBuilder:FormBuilder) { }
  adminlogin(){
    
    this._service.adminlogin(this.admin).subscribe(
    data=>{
    Swal.fire("Welcome Admin!",'Successfully Logged In','success');
    
    this._router.navigate(['/admin'])

      },
    error=>{
        console.log("Exception Occured");
        Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: 'You have Entered Wrong Credentials!',
        
      })
      }
    )
    
      
  }
  

  ngOnInit(): void {
  }

}
