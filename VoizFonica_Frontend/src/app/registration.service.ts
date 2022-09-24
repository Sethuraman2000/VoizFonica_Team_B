import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    
    private baseUrl = 'http://localhost:9002/';  
    constructor(private http:HttpClient) { }
    




    public logInUserFromRemote(register:Register):Observable<any>
  {
    return this.http.post(`${this.baseUrl}` + 'addregistration', register);
  }









    getRegisterList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`+'getregistration');  //will change ...As Per ordermanagement
 
    }
    //below this all the API will be there. We can have the multiple conect
 
    // createRegistration(register: object): Observable<object> {
 
    //   return this.http.post(`${this.baseUrl}`+'addregistration', register);
 
    // }
 
 
 
    deleteRegistration(id: number): Observable<any> {
 
      return this.http.delete(`${this.baseUrl}deleteregister/${id}`, { responseType: 'text' });
 
    }
 
 
 
    getRegistration(id: number): Observable<Object> {
 
      return this.http.get(`${this.baseUrl}/registration/${id}`);
 
    }
 
 
 
    updateRegistration(id: number, value: any): Observable<Object> {
 
      return this.http.post(`${this.baseUrl}/update-register/${id}`, value);
 
    }
    
 
  }
