import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import{ ChildSecondComponent } from './child-second/child-second.component';
import { SharedService } from './shared.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  number:number=0;
  title = 'data-sharing';
  currentParentData="Rajani";
  sendData(){
    this.currentParentData='RajaniNaik';
  }
  changeParentData(){
    this.currentParentData='Happy thoughts';
  }
  // events = ['music', 'dance', 'act'];
  parentdata='';
  addEvent(newEvent: string) {
    // this.events.push(newEvent);
    this.parentdata=newEvent;
    
  }
  constructor(private cdr:ChangeDetectorRef,private sharedService:SharedService) {}
  //view child
  message:string='';
  @ViewChild(ChildSecondComponent) child!:ChildSecondComponent;
  
  ngAfterViewInit(): void {
    
    this.message=this.child.secondChild;
    this.cdr.detectChanges();//remove error
  }

  // using shared service
  
  messageToSend:string='';
  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(
      (messageToSend)=>(this.messageToSend=messageToSend)
    );
  }
  onClick(){
    this.sharedService.changeMessage("Hello from parent component");
  }
}
