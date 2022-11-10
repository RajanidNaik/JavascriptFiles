import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
      favourite:boolean=false;
      favouriteDetails:any;
      favWeatherDetails:any;
      count:number=0;
      cityName:any;
      imgId:any;
      weatherImg:any;
      temp:any;
      weatherInfo:any;
      favourites:any=[];
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.favouriteDetails = localStorage.getItem('favouriteDeatail');
    this.favWeatherDetails=JSON.parse(this.favouriteDetails);
    console.log(this.favWeatherDetails);
    // if(this.favWeatherDetails != null){
    this.cityName = this.favWeatherDetails['name'];
    this.imgId = this.favWeatherDetails['weather'][0];
    this.weatherImg = `http://openweathermap.org/img/wn/${this.imgId.icon}@2x.png`;
    this.temp = ((this.favWeatherDetails['main'].temp)-273.15).toFixed(0);
    this.weatherInfo = this.favWeatherDetails['weather'][0].description;
    //}
    this.favourites.push([this.cityName,this.temp,this.weatherInfo,this.weatherImg]);
    console.log(this.favourites);
    this.count = this.favourites.length;
    console.log(this.favourites.length)
    if(this.favourites.length === 0){
      this.favourite=true;
    }
  }
  

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38.17%';
    this.dialog.open(FavoriteDialogComponent,dialogConfig
      
    )   
  }

}
