import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
public name="RajaniNaik";
public message="Welcome to angularScript";
public person={
  firstName:"Jhon",
  lastName:"Doe"
};
public date=new Date;
  constructor() { }

  ngOnInit(): void {
  }

}
