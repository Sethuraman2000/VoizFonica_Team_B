import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  payments: any;
  sethu: any;
  deleteMessage: any;
  alertWithSuccess(){
    Swal.fire("Logged out",'You have been Successfully Logged Out','success')
  }
  constructor(private paymentService: PaymentService,private router:Router) {}
  
  ngOnInit(): void {
    this.sethu = 'sethu';
    this.paymentService.getPaymentList().subscribe((data: any) => {
      console.log('Hii all');
      console.log(data);

      sessionStorage.setItem('amount',data.amount);
      console.log("Response Received",data.amount,sessionStorage.getItem('amount'));
      this.payments = data;
    });

  }

  payment: Payment = new Payment();
  

  
    
  

  deletedata(id:any){
    this.paymentService.deletePayment(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.paymentService.getPaymentList().subscribe(data =>{
        this.payments =data
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
