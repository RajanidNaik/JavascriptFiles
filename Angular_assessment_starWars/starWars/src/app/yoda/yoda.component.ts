import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {
charecter:any;
charectorDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
getData(){
  this.charecter =localStorage.getItem('character');
  this.charectorDetails =JSON.parse(this.charecter);
  console.log(this.charectorDetails);
  
}
}
