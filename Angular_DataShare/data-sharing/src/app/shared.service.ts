import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
//create a property
messageSource=new BehaviorSubject("service's Default message");
currentMessage=this.messageSource.asObservable();//to monitor from anywhere
  constructor() { }
  //create a method to edit
  public changeMessage(message:string):void{
    this.messageSource.next(message);
  }
}
