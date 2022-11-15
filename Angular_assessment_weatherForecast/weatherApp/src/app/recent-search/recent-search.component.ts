import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
 recentSearch:boolean=true;
 recentSearchHistory:any=[];
 searchHistory:any = localStorage.getItem('weatherDeatail');
 recentHistory:any;
//  temp:any;
//  cityName:any;
//  weatherInfo:any;
//  imgId:any;
//  weatherImg:any;
 search:any;
 mobileMedia:any = window.matchMedia('(max-width:480px)');
  constructor(private dialog:MatDialog,public service:WeatherService) { }
 
  ngOnInit(): void {
    // localStorage.setItem('recentSearch',this.searchHistory);
    this.search = localStorage.getItem('recentSearchWeather');
    this.recentHistory=JSON.parse(this.search);
    
   
    if(this.recentHistory == null){
      this.recentSearch=false;
    }
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38.17%';
    if(this.mobileMedia.matches){
      dialogConfig.height='22%';
      dialogConfig.width='80%';
    }
    this.dialog.open(RecentDialogComponent,dialogConfig
      
    )   
  }
}
