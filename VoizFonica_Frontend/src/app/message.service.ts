import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:9002/';

  constructor(private http:HttpClient) { }
  messageforuser(Message: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'addmessage', Message);

  }
}
