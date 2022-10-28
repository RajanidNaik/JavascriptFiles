import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SharedEmployee } from './shared-employee';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
   url:string='http://localhost:3000/employees';
   
  getEmployees():Observable<SharedEmployee>{
    return this.http.get<SharedEmployee>('http://localhost:3000/employees');
    
  }
}
