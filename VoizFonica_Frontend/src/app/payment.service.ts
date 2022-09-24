import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:9002/';  
  constructor(private http:HttpClient) { }
  getPaymentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getpayments');  //will change ...As Per ordermanagement

  }
  //below this all the API will be there. We can have the multiple conect

  createPayment(payment: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'addpayment', payment);

  }



  deletePayment(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deletepayment/${id}`, { responseType: 'text' });

  }



  getPayment(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getpayments/${id}`);

  }



  updateRegistration(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-register/${id}`, value);

  }
}