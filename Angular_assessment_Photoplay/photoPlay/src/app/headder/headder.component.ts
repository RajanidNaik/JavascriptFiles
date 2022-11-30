import { Component, OnInit,HostListener } from '@angular/core';
import { PhotoPlayService } from '../photo-play.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {
  data:any=[];
  search:any;
  vedio:any;
  
  constructor(public service:PhotoPlayService) { }

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
  }
  
  searchVedio(){
    this.service.getVideo(this.search).subscribe((result:any)=>{
this.vedio = result.videos;

localStorage.setItem('recentSearchVideo', JSON.stringify(this.vedio));
    })
  }
  @HostListener('document:keydown.enter') keydataPhoto() {
     this.searchPhoto();
     console.log('done')
  }
  @HostListener('document:keydown.enter') keydataVideo() {
    this.searchVedio();
 }
}
