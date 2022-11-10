import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
 recentSearch:boolean=true;
 recentSearchHistory:any=[];
 searchHistory:any;
 recentHistory:any;
 temp:any;
 cityName:any;
 weatherInfo:any;
 imgId:any;
 weatherImg:any;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.searchHistory = localStorage.getItem('weatherDeatail');
    this.recentHistory=JSON.parse(this.searchHistory);
    this.temp = ((this.recentHistory['main'].temp)-273.15).toFixed(0);
    this.cityName = this.recentHistory['name'];
    this.weatherInfo = this.recentHistory['weather'][0].description;
    this.imgId = this.recentHistory['weather'][0];
    this.weatherImg = `http://openweathermap.org/img/wn/${this.imgId.icon}@2x.png`
    this.recentSearchHistory.push([this.cityName,this.temp,this.weatherInfo,this.weatherImg]);
    if(this.recentSearchHistory.length == 0){
      this.recentSearch=false;
    }
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38.17%';
    this.dialog.open(RecentDialogComponent,dialogConfig
      
    )   
  }
}
