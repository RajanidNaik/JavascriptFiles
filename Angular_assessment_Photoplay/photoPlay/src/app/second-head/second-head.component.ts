import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoPlayService } from '../photo-play.service';
@Component({
  selector: 'app-second-head',
  templateUrl: './second-head.component.html',
  styleUrls: ['./second-head.component.css']
})
export class SecondHeadComponent implements OnInit {
  data:any=[];
  search:any;
  vedio:any;
  constructor(public service:PhotoPlayService, public router:Router) { }

  ngOnInit(): void {
  }
  searchPhoto(){
    this.searchVedio();
    this.service.getPhoto(this.search).subscribe((result:any)=>{
      this.data = result.photos;
      
      localStorage.setItem('recentSearchPhoto', JSON.stringify(this.data));
      
    },(error)=>{
      alert(`We couldn't find anything for ${this.search}.Try to refine your search`);
    })
    this.router.navigate(['/photo'])
  }
  
  searchVedio(){
    this.service.getVideo(this.search).subscribe((result:any)=>{
this.vedio = result.videos;

localStorage.setItem('recentSearchVideo', JSON.stringify(this.vedio));
    })
  }
  @HostListener('document:keydown.enter') keydataPhoto() {
     this.searchPhoto();
  }
  @HostListener('document:keydown.enter') keydataVideo() {
    this.searchVedio();
 }
}
