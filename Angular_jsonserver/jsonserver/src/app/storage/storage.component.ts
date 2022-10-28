import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
key:any;
value:any;
local:any;
session:any;
cookieName:any;
allCookie:any;
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
   
  }
  //store the data
save(){
  sessionStorage.setItem(this.key,this.value);
  localStorage.setItem(this.key,this.value);
  this.cookieService.set(this.key,this.value)
 this.reset();
}

//retrive the data
retrive(){
  this.session=sessionStorage.getItem(this.key);
  this.local=localStorage.getItem(this.key);
  this.cookieName=this.cookieService.get(this.key);
  this.allCookie=this.cookieService.getAll();
}
remove(){
  sessionStorage.removeItem(this.key);
  localStorage.removeItem(this.key);
  this.cookieService.delete(this.key);
}
clearAll(){
  sessionStorage.clear();
  localStorage.clear();
  this.cookieService.deleteAll();
}
reset(){
  this.key='';
  this.value='';
}
}
