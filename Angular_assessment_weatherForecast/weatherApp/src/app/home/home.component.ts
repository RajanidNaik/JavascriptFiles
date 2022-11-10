import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';

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
temp:any;
weatherInfo:any;
cityName:any;
weatherIcon:any;
icons:any;
humidity:any;
wind:any;
visibility:any;
pressure:any;
temp_max:any;
temp_min:any;
color:boolean=false;

  constructor(public http:HttpClient,public service:WeatherService , public router:Router) { }

  ngOnInit(): void {
    this.weatherDetails = localStorage.getItem('weatherDeatail');
    this.finalDetails=JSON.parse(this.weatherDetails);
    console.log(this.finalDetails);
    this.temp=(this.finalDetails['main'].temp);
    this.cityName = this.finalDetails['name'];
    this.weatherInfo = this.finalDetails['weather'][0].description;
    this.humidity = this.finalDetails['main'].humidity;
    this.wind = this.finalDetails['wind'].speed;
    this.visibility = ((this.finalDetails['visibility'])*2.236936).toFixed(2);
    this.pressure = this.finalDetails['main'].pressure;
    this.temp_max = ((this.finalDetails['main'].temp_max)-273.15).toFixed(0);
    this.temp_min = ((this.finalDetails['main'].temp_min)-273.15).toFixed(0);
    this.icons = this.finalDetails['weather'][0];
    // this.weatherIcon =this.icons.icon;
    this.weatherIcon = `http://openweathermap.org/img/wn/${this.icons.icon}@2x.png`;
    
  }

tempConvert(){
   this.temp =((this.finalDetails['main'].temp-273.15).toFixed(2));
}
tempFara(){
  this.temp=((1.8*((this.finalDetails['main'].temp)-273.15))+32).toFixed(2);
}
onClickFav(){
  this.color=true;
  this.service.getData(this.cityName).subscribe((result)=>{
    localStorage.setItem('favouriteDeatail',JSON.stringify(result));
    this.router.navigate(['home']).then(() => {

      window.location.reload();

    });
  })
}


}
