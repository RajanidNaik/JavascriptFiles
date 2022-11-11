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
 temp:any;
 cityName:any;
 weatherInfo:any;
 imgId:any;
 weatherImg:any;
 search:any;
  constructor(private dialog:MatDialog,public service:WeatherService) { }
 
  ngOnInit(): void {
    localStorage.setItem('recentSearch',this.searchHistory);
    this.search = localStorage.getItem('recentSearch');
    console.log(this.search)
    this.recentHistory=JSON.parse(this.search);
    console.log(this.recentHistory);
    if(this.recentHistory != null){
    this.temp = ((this.recentHistory['main'].temp)-273.15).toFixed(0);
    this.cityName = this.recentHistory['name'];
    this.weatherInfo = this.recentHistory['weather'][0].description;
    this.imgId = this.recentHistory['weather'][0];
    this.weatherImg = `http://openweathermap.org/img/wn/${this.imgId.icon}@2x.png`;
    }else{
      this.recentSearch=false;
    }
    this.recentSearchHistory=([this.cityName,this.temp,this.weatherInfo,this.weatherImg]);
   
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
