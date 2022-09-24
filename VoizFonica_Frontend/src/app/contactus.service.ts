import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from './contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private baseUrl = 'http://localhost:9002/';  
  constructor(private http:HttpClient) { }
  getContactList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getemails');  //will change ...As Per ordermanagement

  }
  //below this all the API will be there. We can have the multiple conect

  createContact(contactus: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'addemail', contactus);

  }



  deleteContact(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteemail/${id}`, { responseType: 'text' });

  }


}
