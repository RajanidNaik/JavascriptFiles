import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DeleteUserComponent } from './delete-user/delete-user.component';
interface User{
  name:string;
  email:string;
  phoneNumber:number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //type cast
  getAllUser():Observable<User>{

  // getAllUser(){


    //get method with headers
    const headers=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'123456'
    })
    const params2=new HttpParams()
    .set('pageNum','3')
    .set('pageSize','10');
    
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users",{headers:headers,params:params2})
    //simple get
    // return this.http.get("https://jsonplaceholder.typicode.com/users",{headers:headers,params:params2})
    .pipe(catchError((error) =>{       
      return throwError (error);    
                                          })
   )
  }
  addUser(body:any){
    const customHeaders=new HttpHeaders({
      'authenticationKey':'testing123456'
    });
    const customParams=new HttpParams()
    .set('userRole','admin');
    return this.http.post("https://jsonplaceholder.typicode.com/users",body,{headers:customHeaders,params:customParams})
  }
  //Http put method
  updateUser(){
    const putHeaders=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'123456',
      'userId':'testing'
    })
    const putParams=new HttpParams()
    .set('userId','testing');
    const putBody={
      name:'Naik',
      usrId:1
    }
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',putBody,{headers:putHeaders,params:putParams});
  }
  //Http delete method
  deleteUser(id:any){
    const deleteHeaders=new HttpHeaders({
      'content-type':'User1234',
      'authenticationToken':'678945'
    })
    const deleteParams=new HttpParams()
    .set('userRole','admin');
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id,{headers:deleteHeaders,params:deleteParams});
  }
}
