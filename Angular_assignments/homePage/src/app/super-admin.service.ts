import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface superAdmin extends Array<superAdmin[]> {
  name:string;
  empCode:string;
  emailId:string;
  id:string;
}
interface Admin extends Array<Admin[]> {
  name:string;
  empCode:string;
  emailId:string;
  id:string;
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
  updateSuperAdmin(body:any,id:any){
    return this.http.put("http://localhost:3000/superAdmin/"+id,body);
  }
  deleteSuperAdmin(id:any){
return this.http.delete("http://localhost:3000/superAdmin/"+id);
  }

  getAdmins(){
    return this.http.get("http://localhost:3000/admins");
  }
  addAdmin(body:any):Observable<Admin[]>{
    return this.http.post<Admin[]>("http://localhost:3000/admins",body);
  }
  updateAdmin(body:any,id:any):Observable<Admin[]>{
    return this.http.put<Admin[]>("http://localhost:3000/admins/"+id,body);
  }
  deleteAdmin(id:any){
return this.http.delete("http://localhost:3000/admins/"+id);
  }
}
