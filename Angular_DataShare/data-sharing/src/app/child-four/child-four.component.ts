import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service'
@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {
  messageToSend:string='';
  constructor(private sharedService:SharedService) { }
  editMessage:string='';
  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(
      (messageToSend:any)=>(this.messageToSend=messageToSend)
    );
  }
  onEdit(){
    this.sharedService.changeMessage(this.editMessage);
  }

}
