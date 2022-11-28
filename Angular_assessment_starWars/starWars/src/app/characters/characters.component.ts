import { Component, OnInit } from '@angular/core';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CacheResolverService } from '../cache-resolver.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
userSub$:Subscription | undefined;
users:any;
people:any;
button:boolean=false;
prebutton:boolean = false;
imageId=0;

  constructor(private route: ActivatedRoute,private data:CacheResolverService,public router:Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('filmsS');
    sessionStorage.removeItem('speciesS');
    sessionStorage.removeItem('vehiclesS');
    sessionStorage.removeItem('starshipS');
    sessionStorage.removeItem('planetsS');
    if(sessionStorage.getItem('characters')){
      //  this.users = sessionStorage.getItem('characters') 
      // this.people = JSON.parse(this.users)
      // console.log(this.people);
      this.people = JSON.parse((sessionStorage.getItem('characters'))as any)
    }else{
      // this.getPeople();
      // let url =  "https://swapi.dev/api/people/";
      // this.userSub$ =this.data.getUser(url).subscribe({
      //   next:(users:any)=>{
      //     console.log(`Data received`,users);
      //   this.people = users;
      //     }
      //     ,
      //     error:(err)=>{
      //       console.error(err)
            
      //     }
        
      // })
      this.getPeople()
   }
   
  //this.getPeople()
    
  }
  // this.users=this.users['results'] 
getPeople(){
  let url =  "https://swapi.dev/api/people/";
  this.userSub$ =this.data.getUser(url).subscribe({
    next:(users:any)=>{
      console.log(`Data received`,users);
    this.people = users;
      }
      ,
      error:(err)=>{
        console.error(err)
        
      }
    
  })
}
next(){
  this.data.getUser(this.people?.next).subscribe(data=>{
    this.people = data;
    sessionStorage.setItem('characters',JSON.stringify(this.people));
    console.log(this.people);
    if(this.people.next == null){
      this.button =true;
      console.log('done');
     }else{
      this.button =false;
     }
    
    
  })
}
previous(){
  this.data.getUser(this.people?.previous).subscribe(data=>{
    this.people = data;
    sessionStorage.setItem('characters',JSON.stringify(this.people));
    if(this.people.previous == null){
      this.prebutton =true;
      console.log('done');
     }else{
      this.prebutton =false;
     }
  })
}
storeData(data:any){
  localStorage.setItem('character',JSON.stringify(data));
  this.router.navigate(["/yoda"],{relativeTo:this.route});
  
}

}
