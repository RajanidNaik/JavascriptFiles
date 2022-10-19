import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../subject.service'

@Component({
  selector: 'app-child-six',
  templateUrl: './child-six.component.html',
  styleUrls: ['./child-six.component.css']
})
export class ChildSixComponent implements OnInit {

  constructor(private subjectService:SubjectService) { }
recivedMsg:string='';
  ngOnInit(): void {
    this.subjectService.sendMessage.subscribe(d=>{
this.recivedMsg=d;
    })
  }

}
