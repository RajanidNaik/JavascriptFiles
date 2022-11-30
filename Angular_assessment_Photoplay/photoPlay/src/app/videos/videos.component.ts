import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
data:any=[];
color:boolean=false;
flag:any;
fevouriteData:any;
heart:Boolean=false;
  constructor(public router:Router,public service:PhotoPlayService) { }

  ngOnInit(): void {
    this.recentVedio();
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
  }
  recentVedio(){
    if (localStorage.getItem('recentSearchVideo')) {
      this.data = JSON.parse(localStorage.getItem('recentSearchVideo') || '[]');
      console.log(this.data);
      
    }
  }
  detailsToVideo(data:any){
  localStorage.setItem('goTovideo',JSON.stringify(data));
this.router.navigate(['/play'])
  }

  addtoFavourite(data:any){
    this.service.addfavourite(data);
    this.color=true;
    location.reload();
  }
  removeFavourite(data:any){
     
    this.service.removeFavourite(data);
    this.heart=false;
    location.reload();
    // this.getFevData();
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
