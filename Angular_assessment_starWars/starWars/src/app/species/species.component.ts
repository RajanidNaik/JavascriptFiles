import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  userSub$:Subscription | undefined;
  species:any;
  url="https://swapi.dev/api/species/";
  button:boolean=false;
prebutton:boolean = false;
  constructor(private data:CacheResolverService, public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('characters');
    sessionStorage.removeItem('planetsS');
    sessionStorage.removeItem('filmsS');
    sessionStorage.removeItem('starshipS');
    sessionStorage.removeItem('vehiclesS');
    if(sessionStorage.getItem('speciesS')){
      this.species = JSON.parse((sessionStorage.getItem('speciesS'))as any)
    }else{
    this.getSpecies();
    }
  }
  getSpecies(){
    this.userSub$ =this.data.getUser(this.url).subscribe({
      next:(users:any)=>{
        console.log(`Data received`,users);
      this.species = users;
        }
        ,
        error:(err)=>{
          console.error(err)
          
        }
      
    })
  }
  next(){
    this.data.getUser(this.species?.next).subscribe(data=>{
      this.species = data;
      sessionStorage.setItem('speciesS',JSON.stringify(this.species));
      console.log(this.species);
      if(this.species.next == null){
        this.button =true;
        console.log('done');
       }
      
    })
  }
  previous(){
    this.data.getUser(this.species?.previous).subscribe(data=>{
      this.species = data;
      sessionStorage.setItem('speciesS',JSON.stringify(this.species));
      if(this.species.previous == null){
        this.prebutton =true;
        console.log('done');
       }
    })
  }
  storeData(data:any){
    localStorage.setItem('species',JSON.stringify(data));
    this.router.navigate(['/speciesYoda'])

  }
}
