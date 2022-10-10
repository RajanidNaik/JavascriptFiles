import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
            <input [(ngModel)]="name" type="text">
            {{name}}`,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
