import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {
data:any;

// zoom:boolean= false;
// zoomouts:boolean=false;

color:boolean=false;
flag:any;
fevouriteData:any;
heart:Boolean=false;
zoomIn:boolean=false;
scale=1;
scaleXY ='scale('+1+')';
  constructor(public service:PhotoPlayService, public router:Router) { }

  ngOnInit(): void {
    this.vedio();
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
   
  }
  vedio(){
    if(localStorage.getItem('goToImage')){
  this.data = JSON.parse(localStorage.getItem('goToImage') || '[]');
  
 
    }
  }
  // zoomImage(){
  //   // let i = 1.5;
  //   // this.width = String(scale(i+0.5))
  //   this.zoom =true;
  //   this.zoomouts =false;
   
   
  // }
  // zoomout(){
  //   this.zoomouts =true;
  //   this.zoom =false;
    
  // }
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
  zoomOut(){
    if(this.scale >= 0.5){
      this.scale -= 0.1;
    }
    this.scaleXY = 'scale(' + this.scale +')';
    this.scale = Math.round(this.scale*10)/10;
    this.zoomIn =false;
  }
  zoomIns(){
    if(this.scale <= 2){
      this.scale += 0.1;
    }
    this.scale = Math.round(this.scale*10)/10;
    this.scaleXY = 'scale(' + this.scale +')';
   
    this.zoomIn =true;
  }
}


