import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheResolverService {
  constructor(private http:HttpClient) { }
  getUser(url:string):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(
    url
    );
  }
  // searchUsers(name:string,latest:boolean): Observable<HttpResponse<any>> {
  //   const httpOptions ={
  //     headers :new HttpHeaders(),
  //   };
  //   if(latest){
  //     httpOptions.headers = httpOptions.headers.set('x-refresh')
  //   }
  // }
}
