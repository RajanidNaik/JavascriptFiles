import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit {
data:any;
color:boolean=false;
flag:any;
fevouriteData:any;
heart:Boolean=false;
  constructor(public service:PhotoPlayService, public router:Router) { }

  ngOnInit(): void {
    this.vedio();
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
    console.log(this.data)
  }
vedio(){
  if(localStorage.getItem('goTovideo')){
this.data = JSON.parse(localStorage.getItem('goTovideo') || '[]');
console.log(this.data)
  }
}
addtoFavourite(data:any){
  this.service.addfavourite(data);
 this.heart = true;
 location.reload();
 
}
removeFavourite(data:any){
 
  this.service.removeFavourite(data);
  this.heart=false;
   location.reload();
 
}
checkFev(data:any){
  this.flag=0;
  for(let fev of this.fevouriteData){
    if(data.id == fev.id){
      this.flag=1;
      break;
    }
  }
  if(this.flag == 1){
    this.color = true;
    this.heart =true
    
  }else{
    this.color =false;
    this.heart= false;
   
  }
}
}
