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
 prochara:boolean=false;
 profilm:boolean=false
  constructor(public router:Router) { }

  ngOnInit(): void {
  //   if(sessionStorage.getItem('prochara')){
  //     this.prochara = JSON.parse((sessionStorage.getItem('prochara'))as any);
  //  }
//    if(sessionStorage.getItem('profilm')){
//     this.prochara = JSON.parse((sessionStorage.getItem('profilm'))as any);
//  }
   
  }
onclick(){
  this.click=true;
    // sessionStorage.setItem('prochara',JSON.stringify(this.click));

  this.router.navigate(["/character"]);
  
}
onFilms(){
  // sessionStorage.removeItem('prochara');
  this.films=true;
  // sessionStorage.setItem('profilm',JSON.stringify(this.films));
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
