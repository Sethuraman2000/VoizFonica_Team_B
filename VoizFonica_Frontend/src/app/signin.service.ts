import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { Register } from './register';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private baseUrl = 'http://localhost:9002/';

  constructor(private _http:HttpClient) { }

  public logInUserFromRemote(register:Register):Observable<any>
  {
    return this._http.post(`${this.baseUrl}` + 'login', register);
  }
  public adminlogin(admin:Admin):Observable<any>
  {
    return this._http.post(`${this.baseUrl}` + 'adminlogin', admin);
  }
  
  getUserList(): Observable<any> {
    return this._http.get(`${this.baseUrl}` + 'getregistration'); //will change ...As Per ordermanagement
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}deleteusers/${id}`, {
      responseType: 'text',
    });
  }
  
  
}