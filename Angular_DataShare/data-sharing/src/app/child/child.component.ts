import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childData="Rajani";
  @Output() newChildEvent=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewEvent(value: string) {
    this.newChildEvent.emit(value);
  }
}
