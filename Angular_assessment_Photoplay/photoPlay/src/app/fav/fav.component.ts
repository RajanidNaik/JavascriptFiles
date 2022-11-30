import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
image:any;
fevouriteData:any;
photo:any;
head:boolean= false;
  constructor(public service:PhotoPlayService,public router:Router) { }

  ngOnInit(): void {
    this.getFevData();
  }
  getFevData(){
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
  
  }
  removeFavourite(data:any){
     
    this.service.removeFavourite(data);
    
    this.getFevData();
  }
  userName(data:any){
    if(data.photographer){
      return data.photographer
    }else{
      return data.user.name;
    }
  }
  checkImage(data:any){
    
    if(data.src){
      this.image = true;
      

    }else{
      this.image = false;
    }
  }
  detailsToImage(data:any){
    this.checkImage(data);
    if(this.image == true){
      localStorage.setItem('goToImage',JSON.stringify(data));
      this.router.navigate(['/image'])
    }else{
      localStorage.setItem('goTovideo',JSON.stringify(data));
      console.log('no')
      this.router.navigate(['/play'])
    }
   
    }
    @HostListener('window:scroll', []) onScrollEvent(){
    
     if(window.pageYOffset >15) {
       this.head = true;
     
     }
     if(window.pageYOffset == 0  ){
       this.head = false;
     }
 
   } 
}
