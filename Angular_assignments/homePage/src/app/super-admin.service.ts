import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface superAdmin extends Array<superAdmin[]> {
  name:string;
  empCode:string;
  emailId:string;
  id:string
}



@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http:HttpClient) { }
  getSuperAdmins(){
    return this.http.get("http://localhost:3000/superAdmin");
  }
  addSuperAdmin(body:any):Observable<superAdmin[]>{
    return this.http.post<superAdmin[]>("http://localhost:3000/superAdmin",body);
  }
  updateSuperAdmin(body:any){
    return this.http.put("http://localhost:3000/superAdmin",body);
  }
  deleteSuperAdmin(id:any){
return this.http.delete("http://localhost:3000/superAdmin/"+id);
  }
}
