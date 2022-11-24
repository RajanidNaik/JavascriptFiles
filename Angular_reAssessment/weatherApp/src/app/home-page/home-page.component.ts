import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
weatherdata:any;
temp_min:any;
temp_max:any;
wind:any;
visibility:any;
temp:any;
pressure:any;
humidity:any;
  constructor(public service:WeatherService,public router:Router) { }

  ngOnInit(): void {
    this.call();
this.weatherdata =JSON.parse(this.service.getWeatherData() || '{}')
console.log(this.weatherdata);
this.temp_max =(this.weatherdata.temp_max-273.15).toFixed(0);
this.temp_min = (this.weatherdata.temp_min-273.15).toFixed(0);
this.wind = this.weatherdata.wind;
this.pressure =this.weatherdata.pressure;
this.visibility = ((this.weatherdata.visibility)/1000).toFixed(0);
this.humidity = this.weatherdata.humidity;
this.temp = ((this.weatherdata.temp)-273.15).toFixed(0);
}
call(){
  this.weatherdata =JSON.parse(this.service.getWeatherData() || '{}')
}
tempcenti(){
  this.temp = ((this.weatherdata.temp)-273.15).toFixed(0);
}
tepFara(){
  this.temp = ((1.8*((this.weatherdata.temp)-273.15))+32).toFixed(0);
}
}
