import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface login extends Array<login[]> {
  name:string;
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http:HttpClient) { }

  getAllUser():Observable<login[]>{
    return this.http.get<login[]>("http://localhost:3000/users");
  }
  updateUser(body:any,id:any):Observable<login[]>{
return this.http.put<login[]>("http://localhost:3000/users/"+id,body);
  }
}
