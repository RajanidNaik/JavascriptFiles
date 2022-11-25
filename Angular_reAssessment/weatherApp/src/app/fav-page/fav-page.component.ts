import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FavDilogComponent } from '../fav-dilog/fav-dilog.component';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
  mobileMedia:any = window.matchMedia('(max-width:750px)');
  constructor(private dialog:MatDialog,public service:WeatherService,public router:Router) { }
  fevouriteData:any;
  count:any;
  faran:any;
  temp:any;
  ngOnInit(): void {
    this.getFevData();
    
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
    this.dialog.open(FavDilogComponent,dialogConfig
      
    )   
  }
  getFevData(){
    this.fevouriteData = JSON.parse(this.service.getfavourite() || '[]');
    
    
    
    this.count = this.fevouriteData.length;
   
    // if(sessionStorage.getItem('fara')){
    //   console.log('done')
    //   this.temp = ((1.8*((this.fevouriteData[0].temp)-273.15))+32).toFixed(0);
    //   console.log(this.temp)
    // }else{
    //   this.temp = ((this.fevouriteData[0].temp)-273.15).toFixed(0);
    //   console.log(this.temp)
    // }
  }

  removeFavourite(fev:any){
    fev['like']=false;
    this.service.removeFavourite(fev);
    this.service.updateRecentSearch(fev);
    this.getFevData();
  }

  detailsToHome(data:any){

    this.service.setData(data);

    this.getFevData();
    this.router.navigate(['/homePage']);
  }
 
}
