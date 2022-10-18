import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import{ ChildSecondComponent } from './child-second/child-second.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  
  title = 'data-sharing';
  currentParentData="";
  sendData(){
    this.currentParentData="RajaniNaik";
  }
  // events = ['music', 'dance', 'act'];
  parentdata='';
  addEvent(newEvent: string) {
    // this.events.push(newEvent);
    this.parentdata=newEvent;
    
  }
  message:string='';
  @ViewChild(ChildSecondComponent) child!:ChildSecondComponent;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
    this.message=this.child.secondChild;
  }
}
