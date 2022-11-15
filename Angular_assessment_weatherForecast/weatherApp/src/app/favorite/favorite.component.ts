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
      color:boolean=false;
      favouriteDetails:any;
      favWeatherDetails:any;
      count:number=0;
      cityName:any;
      imgId:any;
      weatherImg:any;
      temp:any;
      weatherInfo:any;
      favourites:any=[];
      mobileMedia:any = window.matchMedia('(max-width:480px)');
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.favouriteDetails = localStorage.getItem('favouriteDeatail');
    this.favWeatherDetails=JSON.parse(this.favouriteDetails) ;
    console.log(this.favWeatherDetails);
    if(this.favWeatherDetails == null){
    // this.cityName = this.favWeatherDetails['name'];
    // this.imgId = this.favWeatherDetails['weather'][0];
    // this.weatherImg = `http://openweathermap.org/img/wn/${this.imgId.icon}@2x.png`;
    // this.temp = ((this.favWeatherDetails['main'].temp)-273.15).toFixed(0);
    // this.weatherInfo = this.favWeatherDetails['weather'][0].description;
    // }else{
      this.favourite=true;
    }
    // this.favourites.push([this.cityName,this.temp,this.weatherInfo,this.weatherImg]);
    // console.log(this.favourites);
    this.count = this.favWeatherDetails.length;
    
    
  }
  

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.25%';
    dialogConfig.width='38.17%';
    if(this.mobileMedia.matches){
      dialogConfig.height='22%';
      dialogConfig.width='80%';
    }
    this.dialog.open(FavoriteDialogComponent,dialogConfig
      
    )   
  }
onFav(){
this.color = !this.color;
localStorage.removeItem('favouriteDeatail');
}
}
