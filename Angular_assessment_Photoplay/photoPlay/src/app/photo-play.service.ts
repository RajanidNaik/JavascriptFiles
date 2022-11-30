import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f91700001000001d7321772ff394d61abf61639bb9e7e5e'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PhotoPlayService {

  constructor(public http:HttpClient) { }
  getPhoto(search:any):Observable<any>{
    const url="https://api.pexels.com/v1/search?query="+search+"&per_page=12"
return this.http.get<any>(url,httpOptions)
.pipe(catchError(this.handleError))
  }
 

  getVideo(search:any):Observable<any>{
    const url="https://api.pexels.com/videos/search?query="+search+"&per_page=12"

return this.http.get<any>(url,httpOptions)
.pipe(catchError(this.handleError))
  }


  handleError(error:any){
    return throwError(error.message || "server error")
  }
  addfavourite(data: any) {
    let list: any[] = [];
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let previousData = oldData.find((old: any) => {
        return old['id'] == data['id'];
      });
      if (previousData == undefined) {
        list = [data, ...oldData];
      } else {
        let searchData = oldData.indexOf(previousData);
        let currentValue = oldData.splice(searchData)[0];
        
        list = [currentValue, ...oldData];
      }
    } else {
      list = [data];
    }
    localStorage.setItem('favourite', JSON.stringify(list));
  }
  getfavourite() {
    if (localStorage.getItem('favourite')) {
      return localStorage.getItem('favourite');
    } else {
      return '[]';
    }
  }

  removeFavourite(data: any) {
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let presentData = oldData.find((old: any) => {
        return old['id'] == data['id'];
      });
      let index = oldData.indexOf(presentData);
      
      oldData.splice(index, 1);
      localStorage.setItem('favourite', JSON.stringify(oldData));
      
    }
  }
}
