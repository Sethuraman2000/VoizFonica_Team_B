import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-viewmail',
  templateUrl: './viewmail.component.html',
  styleUrls: ['./viewmail.component.css']
})
export class ViewmailComponent implements OnInit {
  contactuss: any;
  sethu: any;
  deleteMessage: any;
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  constructor(private contactusService: ContactusService,private router:Router) {}

  ngOnInit(): void {
    this.sethu = 'sethu';
    this.contactusService.getContactList().subscribe((data: any) => {
      console.log('Hii all');
      this.contactuss = data;
    });
  }

  contactus: Contactus= new Contactus();
  

  
    

  

  deletedata(id:any){
    this.contactusService.deleteContact(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.contactusService.getContactList().subscribe(data =>{
        this.contactuss =data
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
