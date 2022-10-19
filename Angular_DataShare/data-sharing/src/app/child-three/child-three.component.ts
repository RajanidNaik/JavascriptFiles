import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service'


@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  messageToSend:string='';
  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(
      (messageToSend:any)=>(this.messageToSend=messageToSend)
    );
  }
  onClick(){
    this.sharedService.changeMessage("Hello from child component");
  }
  

}
