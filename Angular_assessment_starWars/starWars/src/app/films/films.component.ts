import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  url = "https://swapi.dev/api/films/";
  userSub$:Subscription | undefined;
  films:any;
  button:boolean=false;
prebutton:boolean = false;
load:boolean=true;
  constructor(private data:CacheResolverService,public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('characters');
    sessionStorage.removeItem('planetsS');
    sessionStorage.removeItem('speciesS');
    sessionStorage.removeItem('vehiclesS');
    sessionStorage.removeItem('starshipS');
    if(sessionStorage.getItem('filmsS')){
      this.films = JSON.parse((sessionStorage.getItem('filmsS'))as any)
    }else{
      this.getFilms();
    }

    
  }
  getFilms(){
    this.load =false;
    this.userSub$ = this.data.getUser(this.url).subscribe({
      next:(users:any)=>{
        this.films = users;
        console.log(`Data received`,users);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  next(){
    this.data.getUser(this.films?.next).subscribe(data=>{
      this.films = data;
      sessionStorage.setItem('filmsS',JSON.stringify(this.films));
      console.log(this.films);
      if(this.films.next == null){
        this.button =true;
        console.log('done');
       }
      
      // this.users =this.users['results'];
    })
  }
  previous(){
    this.data.getUser(this.films?.previous).subscribe(data=>{
      this.films = data;
      sessionStorage.setItem('filmsS',JSON.stringify(this.films));
      // this.users = this.users['results'];
      if(this.films.previous == null){
        this.prebutton =true;
        console.log('done');
       }
    })
  }
  storeData(data:any){
    localStorage.setItem('films',JSON.stringify(data));
    this.router.navigate(["/filmYoda"]);
  }

}
