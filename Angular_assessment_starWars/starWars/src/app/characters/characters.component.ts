import { Component, OnInit } from '@angular/core';
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
url:any;
  constructor(private data:CacheResolverService) { }

  ngOnInit(): void {
    // this.getPeople();
  }
  // this.users=this.users['results'] 
getPeople(){
  this.userSub$ =this.data.getUser(this.url).subscribe({
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
    console.log(this.people);
    
    // this.users =this.users['results'];
  })
}
previous(){
  this.data.getUser(this.people?.previous).subscribe(data=>{
    this.people = data;
    // this.users = this.users['results'];
  })
}
}
