import { HttpBackend, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
// import 'rxjs/add/operator/catch';
//for catch:
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/Observable/throw';
//for throw:
import {  throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// public _url:string="/assets/data/employees.json";
public _url:string="/assets/data/employees1.json";
  constructor(private http: HttpClient) { }
  //create services
  getEmployee():Observable<IEmployee[]>{
    // return this.http.get<IEmployee[]>(this._url);//get data from server
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
   //adding errorHamdler method
    // return [
    //   {"id":1, "name":"Andrew", "age":30},
    //   {"id":2, "name":"Brandon", "age":25},
    //   {"id":3, "name":"Christina", "age":26},
    //   {"id":4, "name":"Elena", "age":28}
    // ];
  }
  errorHandler(error:HttpErrorResponse)
    {
    return throwError(error.message|| "server error");
  }
}
