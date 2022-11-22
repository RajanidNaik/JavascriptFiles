import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  userSub$:Subscription | undefined;
  vehicles:any;
  url="https://swapi.dev/api/vehicles/";
  
  constructor(private data:CacheResolverService,public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('characters');
    sessionStorage.removeItem('planetsS');
    sessionStorage.removeItem('filmsS');
    sessionStorage.removeItem('speciesS');
    sessionStorage.removeItem('starshipS');
    if(sessionStorage.getItem('vehiclesS')){
      this.vehicles = JSON.parse((sessionStorage.getItem('vehiclesS'))as any)
    }else{
    this.getPlanets();
    }
  }
  getPlanets(){
    this.userSub$ =this.data.getUser(this.url).subscribe({
      next:(users:any)=>{
        console.log(`Data received`,users);
      this.vehicles = users;
        }
        ,
        error:(err)=>{
          console.error(err)
          
        }
      
    })
  }
  next(){
    this.data.getUser(this.vehicles?.next).subscribe(data=>{
      this.vehicles = data;
      sessionStorage.setItem('vehiclesS',JSON.stringify(this.vehicles));
      console.log(this.vehicles);
      
      
    })
  }
  previous(){
    this.data.getUser(this.vehicles?.previous).subscribe(data=>{
      this.vehicles = data;
      sessionStorage.setItem('vehiclesS',JSON.stringify(this.vehicles));
      
    })
  }
  storeData(data:any){
    localStorage.setItem('vehicles',JSON.stringify(data));
    this.router.navigate(["/vehicleYoda"]);
  }
}
