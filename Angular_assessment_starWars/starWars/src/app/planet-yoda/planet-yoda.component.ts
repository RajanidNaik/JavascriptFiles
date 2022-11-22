import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-yoda',
  templateUrl: './planet-yoda.component.html',
  styleUrls: ['./planet-yoda.component.css']
})
export class PlanetYodaComponent implements OnInit {
planet:any;
planetDetails:any;
image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.planetDetails.name == "Kamino"){
      this.image = "/assets/download (3).jpeg"
    }else if(this.planetDetails.name == "Utapau"){
this.image = "/assets/download (4).jpeg";
    }
    else{
      this.image = "/assets/yodahut.webp";
    }
  }
  getData(){
    this.planet =localStorage.getItem('planets');
    this.planetDetails =JSON.parse(this.planet);
    console.log(this.planetDetails);
    
  }

}
