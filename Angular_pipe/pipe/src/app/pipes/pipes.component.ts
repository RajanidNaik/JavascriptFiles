import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  public name="rajaniNaik";
   message=" happay deepavali";
   person={
    'firstname':'Ram',
    'lastname':'sita'
   }
   date=new Date();
  ngOnInit(): void {
  }

}
