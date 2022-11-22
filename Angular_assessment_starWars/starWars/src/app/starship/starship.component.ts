import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
url="https://swapi.dev/api/starships/"
userSub$:Subscription | undefined;
starship:any;
button:boolean=false;
prebutton:boolean = false;
  constructor(private data:CacheResolverService,public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('characters');
    sessionStorage.removeItem('planetsS');
    sessionStorage.removeItem('filmsS');
    sessionStorage.removeItem('speciesS');
    sessionStorage.removeItem('vehiclesS');
    if(sessionStorage.getItem('starshipS')){
      this.starship = JSON.parse((sessionStorage.getItem('starshipS'))as any)
    }else{
    this. getStarship();
    }
  }
  getStarship(){
    this.userSub$ =this.data.getUser(this.url).subscribe({
      next:(users:any)=>{
        console.log(`Data received`,users);
      this.starship = users;
        }
        ,
        error:(err)=>{
          console.error(err)
          
        }
      
    })
  }
  next(){
    this.data.getUser(this.starship?.next).subscribe(data=>{
      this.starship = data;
      sessionStorage.setItem('starshipS',JSON.stringify(this.starship));
      console.log(this.starship);
      
      if(this.starship.next == null){
        this.button =true;
        console.log('done');
       }
    })
  }
  previous(){
    this.data.getUser(this.starship?.previous).subscribe(data=>{
      this.starship = data;
      sessionStorage.setItem('starshipS',JSON.stringify(this.starship));
      if(this.starship.previous == null){
        this.prebutton =true;
        console.log('done');
       }
    })
  }
  storeData(data:any){
    localStorage.setItem('starships',JSON.stringify(data));
    this.router.navigate(["/starshipYoda"]);
  }
}
