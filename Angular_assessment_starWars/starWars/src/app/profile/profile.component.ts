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
  this.router.navigate(["/character"]);
}
onFilms(){
  this.films=true;
  this.router.navigate(["/films"]);
}
onSpecies(){
  this.species=true;
  this.router.navigate(["/species"]);
}
onPlanets(){
 this.planet =true;
 this.router.navigate(["/planets"]);
}
onStarship(){
  this.starship=true;
  this.router.navigate(["/starship"]);
}
onVehicles(){
 this.vehicles=true;
 this.router.navigate(["/vehicles"]);
}
}
