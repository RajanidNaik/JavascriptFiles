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
centi:boolean=true;
color:boolean=false;
fara:boolean=false;
data = new Information();
temp:any;


  constructor(public http:HttpClient,public service:WeatherService , public router:Router) { }

  ngOnInit(): void {
    this.weatherDetails = localStorage.getItem('weatherDeatail');
    this.finalDetails=JSON.parse(this.weatherDetails);
    this.data.cityName = this.finalDetails['name'];
    this.temp = ((this.finalDetails['main'].temp)-273.15).toFixed(0);
    this.data.temp = ((this.finalDetails['main'].temp)).toFixed(0);
    this.data.info = this.finalDetails['weather'][0].description;
    this.data.humidity = this.finalDetails['main'].humidity;
    this.data.wind = this.finalDetails['wind'].speed;
    this.data.visibility = ((this.finalDetails['visibility'])/1000).toFixed(0);
    this.data.pressure = this.finalDetails['main'].pressure;
    this.data.temp_Max = ((this.finalDetails['main'].temp_max)-273.15).toFixed(0);
    this.data.temp_min = ((this.finalDetails['main'].temp_min)-273.15).toFixed(0);
    this.data.imageId = this.finalDetails['weather'][0];
    this.data.image = `http://openweathermap.org/img/wn/${this.data.imageId.icon}@2x.png`;
    console.log(this.data)
  }

tempConvert(){
  this.centi=true;
  this.fara=false;
   this.temp =((this.finalDetails['main'].temp-273.15).toFixed(0));
}
tempFara(){
  this.centi=false;
  this.fara=true;
  this.temp=((1.8*((this.finalDetails['main'].temp)-273.15))+32).toFixed(0);
}
onClickFav(){
  this.onFavourite();
  this.color =! this.color;
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
