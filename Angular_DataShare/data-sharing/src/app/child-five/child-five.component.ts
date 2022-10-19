import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../subject.service'

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit {

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }
sendMessage(data:any){
  this.subjectService.sendMsgTo(data.value);
}
}
