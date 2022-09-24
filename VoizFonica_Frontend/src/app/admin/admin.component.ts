import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _service:SigninService,private _router:Router) { }
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  ngOnInit(): void {
    
    
  }
  logout(){

    sessionStorage.clear();
  
    alert("You have been logged out!")    
  
    this._router.navigate(['/adminlogin']);
  
  }

}
