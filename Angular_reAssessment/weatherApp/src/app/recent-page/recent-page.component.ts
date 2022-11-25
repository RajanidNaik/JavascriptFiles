import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecDialogComponent } from '../rec-dialog/rec-dialog.component';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-recent-page',
  templateUrl: './recent-page.component.html',
  styleUrls: ['./recent-page.component.css']
})
export class RecentPageComponent implements OnInit {
  mobileMedia:any = window.matchMedia('(max-width:750px)');
  recentData:any;
  color:boolean=false;
  fevouriteData:any;
  length:any;
  constructor(private dialog:MatDialog,public service:WeatherService,public router:Router) { }

  ngOnInit(): void {
    this.getRecentData();
    
    
    
  }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38%';
    if(this.mobileMedia.matches){
      dialogConfig.height='20%';
      dialogConfig.width='90%';
    }
    this.dialog.open(RecDialogComponent,dialogConfig
      
    )   
  }
  getRecentData() {
    this.recentData = JSON.parse(this.service.getRecentSearch() || '[]');
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
    this.length = this.recentData.length;
    console.log(this.length)
    if(this.length >0){
      if(this.recentData[0].like == true ){
        this.color = true;
       
      }
      else{ 
        this.color = false;
      }
    }
      
    
    
    
  }
  addtoFavorite(recent: any) {
   this.color =true;
    recent['like'] = true;
    this.service.addfavourite(recent);
    this.service.updateRecentSearch(recent);
    this.getRecentData();
  }

  removeFavourite(recent: any) {
    this.color = false;
    recent['like'] = false;
    this.service.removeFavourite(recent);
    this.service.updateRecentSearch(recent);
    this.getRecentData();
  }

  detailsToHome(data: any) {
    this.service.setData(data);
    this.getRecentData();
    this.router.navigate(['/homePage']);
  }
}
