import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  userSub$:Subscription | undefined;
  planets:any;
  url="https://swapi.dev/api/planets/";
  button:boolean=false;
prebutton:boolean = false;
  constructor(private data:CacheResolverService,public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('characters');
    sessionStorage.removeItem('filmsS');
    sessionStorage.removeItem('speciesS');
    sessionStorage.removeItem('vehiclesS');
    sessionStorage.removeItem('starshipS');
    if(sessionStorage.getItem('planetsS')){
      this.planets = JSON.parse((sessionStorage.getItem('planetsS'))as any)
    }else{
    this.getPlanets();
    }
  }
  getPlanets(){
    this.userSub$ =this.data.getUser(this.url).subscribe({
      next:(users:any)=>{
        console.log(`Data received`,users);
      this.planets = users;
        }
        ,
        error:(err)=>{
          console.error(err)
          
        }
      
    })
  }
  next(){
    this.data.getUser(this.planets?.next).subscribe(data=>{
      this.planets = data;
      sessionStorage.setItem('planetsS',JSON.stringify(this.planets));
      console.log(this.planets);
      if(this.planets.next == null){
        this.button =true;
        console.log('done');
       }
      
    })
  }
  previous(){
    this.data.getUser(this.planets?.previous).subscribe(data=>{
      this.planets = data;
      sessionStorage.setItem('planetsS',JSON.stringify(this.planets));
      if(this.planets.previous == null){
        this.prebutton =true;
        console.log('done');
       }
     
    })
  }
  storeData(data:any){
    localStorage.setItem('planets',JSON.stringify(data));
    this.router.navigate(["/planetYoda"]);
  }
}
