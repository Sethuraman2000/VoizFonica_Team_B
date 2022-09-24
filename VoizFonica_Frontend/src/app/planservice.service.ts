import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanserviceService {
  private baseUrl = 'http://localhost:9002/';  
  constructor(private http:HttpClient) { }
  getPlanList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getplans');  //will change ...As Per ordermanagement

  }
  //below this all the API will be there. We can have the multiple conect

  createPlan(plans: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'addplans', plans);

  }
  getonePlanList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getplans');  //will change ...As Per ordermanagement

  }




  deletePlan(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteplan/${id}`, { responseType: 'text' });

  }



  getPlan(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getplan/${id}`);

  }



  updatePlan(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/updateplan/${id}`, value);

  }
}
