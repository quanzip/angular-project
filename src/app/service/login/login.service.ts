import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import {People} from "../../model/people";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8084/login';
  constructor( private http: HttpClient) { }

  go(people: People): Observable<any>{
    return this.http.post('${this.baseUrl}', people)
  }

}
