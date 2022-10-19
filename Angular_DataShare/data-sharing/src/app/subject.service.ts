import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
public sendMessage=new Subject<string>();
  constructor() { }
  sendMsgTo(data:any){
    this.sendMessage.next(data);
  }
}
