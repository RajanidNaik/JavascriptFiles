import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
date = new Date;
menu:boolean=false;
search:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  this.menu =!this.menu;
}
onSearchClick(){
  this.search =!this.search;
}
}
