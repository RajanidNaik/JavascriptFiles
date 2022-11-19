import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-yoda',
  templateUrl: './planet-yoda.component.html',
  styleUrls: ['./planet-yoda.component.css']
})
export class PlanetYodaComponent implements OnInit {
planet:any;
planetDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.planet =localStorage.getItem('planets');
    this.planetDetails =JSON.parse(this.planet);
    console.log(this.planetDetails);
    
  }

}
