import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs' 
@Injectable({
  providedIn: 'root'
})
export class MyEmployeeService {
  private apiServiceUrl='http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getEmployee():Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/employee/all`)
  }
}
