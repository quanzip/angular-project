import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import {People} from "../../model/people";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = 'http://localhost:8084/api/people';
  constructor( private http: HttpClient) { }

  getPeople(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updatePeople(people: Object): Observable<any>{
    return this.http.put(`${this.baseUrl}`, people)
  }

  createPeople(people: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, people)
  }

  deletePeople(id: number): Observable<any>{
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
  }

  getListPeople(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
