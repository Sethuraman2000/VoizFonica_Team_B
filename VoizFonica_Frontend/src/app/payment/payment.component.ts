import { Component, OnInit } from '@angular/core';
import{jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { Payment } from '../payment';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../payment.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

  ngOnInit(): void {
  }
  payment: Payment = new Payment();
 
  profileForm:any;
  

  constructor(private paymentService: PaymentService, private http: HttpClient,private formBuilder:FormBuilder) {
    this.profileForm = this.formBuilder.group({
      product: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),      
      cardnumber: new FormControl('', [Validators.required]),      
    });
   }



  get f() {
    return this.profileForm.controls
  }
  get product(){
    return this.profileForm.get('product');
  }
  get amount(){
    return this.profileForm.get('amount');
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
  get cardnumber(){
    return this.profileForm.get('cardnumber');
  }
 
  reg() {
    this.payment.product = this.f['product'].value;
    this.payment.amount = this.f['amount'].value;
    this.payment.name = this.f['name'].value;
    
    this.payment.number = this.f['number'].value;
    this.payment.email = this.f['email'].value;
    
    this.payment.cardnumber= this.f['cardnumber'].value;    
    Swal.fire("Done",'Payment Successful','success');
    this.postdata();
  }

  postdata() {
 
    this.paymentService.createPayment(this.payment)
      .subscribe(data => {console.log(data);
        

      }
        , error =>{ console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: 'You have Entered Wrong Credentials!',
          footer: '<a href="">Forgot Password</a>'
        })
      }
      
      );
    this.payment = new Payment();


    
  
    }

}
