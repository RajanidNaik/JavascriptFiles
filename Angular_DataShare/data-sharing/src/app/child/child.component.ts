import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() childData="Rajani";
  @Output() newChildEvent=new EventEmitter<string>();


@Input() numberTorecive:number=1;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['numberTorecive']&& changes['numberTorecive'].currentValue){
    this.numberTorecive=changes['numberTorecive'].currentValue + changes['numberTorecive'].previousValue;
  }else{
    this.numberTorecive=0;
  }
}

  ngOnInit(): void {
  }
  addNewEvent(value: string) {
    this.newChildEvent.emit(value);
  }
}
