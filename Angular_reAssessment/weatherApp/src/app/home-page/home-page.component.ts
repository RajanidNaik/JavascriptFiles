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
color:boolean=false;
centi:boolean=false;
fara:boolean=false;
flag:any;
  constructor(public service:WeatherService,public router:Router) { }

  ngOnInit(): void {
    
    this.call();
    if(this.flag == true){
      this.temp = this.tempcenti();
    }else{
      this.temp = this.tempFara();
    }
    
}
call(){
  this.weatherdata =JSON.parse(this.service.getWeatherData() || '{}');
  this.temp_max =(this.weatherdata.temp_max-273.15).toFixed(0);
this.temp_min = (this.weatherdata.temp_min-273.15).toFixed(0);
this.wind = this.weatherdata.wind;
this.pressure =this.weatherdata.pressure;
this.visibility = ((this.weatherdata.visibility)/1000).toFixed(0);
this.humidity = this.weatherdata.humidity;
// this.temp = ((this.weatherdata.temp)-273.15).toFixed(0);


}
FaraTemp(){
  if(sessionStorage.getItem('fara')){
    this.fara = true;
     this.weatherdata.centifara =  ((1.8*((this.weatherdata.temp)-273.15))+32).toFixed(0);
    console.log(this.weatherdata.centifara);
  }
    sessionStorage.setItem('fara',JSON.stringify(this.weatherdata.centifara));
  

}
tempcenti(){
 this.flag=true;
  sessionStorage.removeItem('fara');
  this.centi=true;
  this.fara=false;
  this.temp = ((this.weatherdata.temp)-273.15).toFixed(0);
  return this.temp;
  
}
tempFara(){
 this.flag=false;
  this.centi=false;
  this.fara=true;
  this.temp = ((1.8*((this.weatherdata.temp)-273.15))+32).toFixed(0);
  return this.temp;
}
addtoFavorite() {
  this.weatherdata['like'] = true;
  this.service.addfavourite(this.weatherdata);
  this.service.updateRecentSearch(this.weatherdata);

  this.color = true;
  this.call();
}

removeFavourite() {
  this.weatherdata['like'] = false;
  this.service.removeFavourite(this.weatherdata);
  this.service.updateRecentSearch(this.weatherdata);
  this.color = false;
  this.call();
}
}
