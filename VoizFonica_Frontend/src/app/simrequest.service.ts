import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimrequestService {

  
  private baseUrl = 'http://localhost:9002/';  
    constructor(private http:HttpClient) { }
    getSimList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`+'getrequests');  //will change ...As Per ordermanagement
 
    }
    //below this all the API will be there. We can have the multiple conect
 
    createSim(simrequests: object): Observable<object> {
 
      return this.http.post(`${this.baseUrl}`+'addrequest', simrequests);
 
    }
 
 
 
    deleteSim(id: number): Observable<any> {
 
      return this.http.delete(`${this.baseUrl}deleterequest/${id}`, { responseType: 'text' });
 
    }
 
 
 
    getSim(id: number): Observable<Object> {
 
      return this.http.get(`${this.baseUrl}/getrequests/${id}`);
 
    }
 
 
 
    updateSim(id: number, value: any): Observable<Object> {
 
      return this.http.post(`${this.baseUrl}/update-register/${id}`, value);
 
    }
}
