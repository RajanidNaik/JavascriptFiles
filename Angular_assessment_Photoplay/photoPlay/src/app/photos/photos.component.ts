import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
data:any=[];
search:any;
color:boolean=false;
flag:any;
fevouriteData:any;
heart:Boolean=false;
  constructor(public service:PhotoPlayService, public router:Router) { }

  ngOnInit(): void {
    this.recentPhoto();
   
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');

  }
  recentPhoto(){
    if (localStorage.getItem('recentSearchPhoto')) {
      this.data = JSON.parse(localStorage.getItem('recentSearchPhoto') || '[]');
      
    }
  }
  detailsToImage(data:any){
    localStorage.setItem('goToImage',JSON.stringify(data));
  this.router.navigate(['/image'])
    }
    addtoFavourite(data:any){
      this.service.addfavourite(data);
     this.heart = true;
     location.reload()
     
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
        this.heart =true;
        
      }else{
        this.color =false;
        this.heart= false;
       
      }
      
    }
}
