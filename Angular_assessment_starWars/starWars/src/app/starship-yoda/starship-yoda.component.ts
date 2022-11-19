import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-yoda',
  templateUrl: './starship-yoda.component.html',
  styleUrls: ['./starship-yoda.component.css']
})
export class StarshipYodaComponent implements OnInit {
starship:any;
starshipDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.starship =localStorage.getItem('starships');
    this.starshipDetails =JSON.parse(this.starship);
    console.log(this.starshipDetails);
    
  }
}
