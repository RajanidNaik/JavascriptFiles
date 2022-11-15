import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';
import { Information } from '../information';

const API_URL = environment.API_URL;
const API_KEY = environment.API_Key;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public date= new Date();
weatherDetails:any;
finalDetails:any;
// temp:any;
// weatherInfo:any;
// cityName:any;
// weatherIcon:any;
// icons:any;
// humidity:any;
// wind:any;
// visibility:any;
// pressure:any;
// temp_max:any;
// temp_min:any;
color:boolean=false;
data = new Information();


  constructor(public http:HttpClient,public service:WeatherService , public router:Router) { }

  ngOnInit(): void {
    this.weatherDetails = localStorage.getItem('weatherDeatail');
    this.finalDetails=JSON.parse(this.weatherDetails);
    // this.temp = ((this.finalDetails['main'].temp)-273.15).toFixed(0);
    // this.cityName = this.finalDetails['name'];
    // this.weatherInfo = this.finalDetails['weather'][0].description;
    // this.humidity = this.finalDetails['main'].humidity;
    // this.wind = this.finalDetails['wind'].speed;
    // this.visibility = ((this.finalDetails['visibility'])/1000).toFixed(0);
    // this.pressure = this.finalDetails['main'].pressure;
    // this.temp_max = ((this.finalDetails['main'].temp_max)-273.15).toFixed(0);
    // this.temp_min = ((this.finalDetails['main'].temp_min)-273.15).toFixed(0);
    // this.icons = this.finalDetails['weather'][0];
    // this.weatherIcon = `http://openweathermap.org/img/wn/${this.icons.icon}@2x.png`;
    
    // this.onFavourite();
    this.data.cityName = this.finalDetails['name'];
    this.data.temp = ((this.finalDetails['main'].temp)-273.15).toFixed(0);
    this.data.info = this.finalDetails['weather'][0].description;
    this.data.humidity = this.finalDetails['main'].humidity;
    this.data.wind = this.finalDetails['wind'].speed;
    this.data.visibility = ((this.finalDetails['visibility'])/1000).toFixed(0);
    this.data.pressure = this.finalDetails['main'].pressure;
    this.data.temp_Max = ((this.finalDetails['main'].temp_max)-273.15).toFixed(0);
    this.data.temp_min = ((this.finalDetails['main'].temp_min)-273.15).toFixed(0);
    this.data.imageId = this.finalDetails['weather'][0];
    this.data.image = `http://openweathermap.org/img/wn/${this.data.imageId.icon}@2x.png`;
    console.log(this.data);
    
    

  }

tempConvert(){
   this.data.temp =((this.finalDetails['main'].temp-273.15).toFixed(0));
}
tempFara(){
  this.data.temp=((1.8*((this.finalDetails['main'].temp)-273.15))+32).toFixed(0);
}
onClickFav(){
  this.onFavourite();
  this.color =! this.color;
  // this.service.getData(this.data.cityName).subscribe((result)=>{
  //   localStorage.setItem('favouriteDeatail',JSON.stringify(result));
  //   this.router.navigate(['home']).then(() => {
  //     window.location.reload();
     
  //   });
  // })
  
  
}
onFavourite(){
   let list:any=[];
  if(localStorage.getItem('favouriteDeatail')){
    let oldData = JSON.parse(localStorage.getItem('favouriteDeatail') || '[]');
    console.log(oldData);
    list= [this.data,...oldData];
    console.log(list);
  }
  else{
    list = [this.data];
  }
  localStorage.setItem('favouriteDeatail',JSON.stringify(list));
}


}
