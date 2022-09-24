import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Simrequest } from '../simrequest';
import { SimrequestService } from '../simrequest.service';

@Component({
  selector: 'app-newsim',
  templateUrl: './newsim.component.html',
  styleUrls: ['./newsim.component.css']
})
export class NewsimComponent implements OnInit {

  simrequest: Simrequest = new Simrequest();
 
  profileForm:any;

  constructor(private simService: SimrequestService, private http: HttpClient,private formBuilder:FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
      port: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      
      pincode: new FormControl('', [Validators.required]),
      
    });
   }



  get f() {
    return this.profileForm.controls
  }
  get name(){
    return this.profileForm.get('name');
  }
  
  get number(){
    return this.profileForm.get('number');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get age(){
    return this.profileForm.get('age');
  }
  get product(){
    return this.profileForm.get('product');
  }
  get port(){
    return this.profileForm.get('port');
  }
  get address(){
    return this.profileForm.get('address');
  }
  
  get pincode(){
    return this.profileForm.get('pincode');
  }
 
  reg() {
    this.simrequest.name = this.f['name'].value;
    
    this.simrequest.number = this.f['number'].value;
    this.simrequest.email = this.f['email'].value;
    this.simrequest.age = this.f['age'].value;
    this.simrequest.product = this.f['product'].value;
    this.simrequest.port = this.f['port'].value;
    this.simrequest.address = this.f['address'].value;
    this.simrequest.pincode = this.f['pincode'].value; 
    
        
    Swal.fire("Request received",'Our Team will reach you out soon','success');
    this.postdata();
  }

  postdata() {
 
    this.simService.createSim(this.simrequest)
      .subscribe(data => console.log(data), error =>{ console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Sorry.. Not Received Your Request',
          text: 'Please Try Again!',
          
        })
      }
      
      );
    this.simrequest = new Simrequest();

  }
  ngOnInit(): void {
  }
}
