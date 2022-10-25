import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }
  displayName=false;
  age=20;
  color='';
  languages=['Kannada','English','Hindi','Tamil','Telugu','Malayalam'];
  background='';
  ngOnInit(): void {
  }
value=12;

}

