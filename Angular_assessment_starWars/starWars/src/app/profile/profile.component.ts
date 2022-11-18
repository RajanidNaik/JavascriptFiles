import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 click:boolean=false;
 films:boolean=false;
 species:boolean=false;
 starship:boolean=false;
 vehicles:boolean=false;
 planet:boolean = false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
onclick(){
  this.click=true;
}
onFilms(){
  this.films=true;
}
onSpecies(){
  this.species=true;
}
onPlanets(){
 this.planet =true;
}
onStarship(){
  this.starship=true;
}
onVehicles(){
 this.vehicles=true;
}
}
