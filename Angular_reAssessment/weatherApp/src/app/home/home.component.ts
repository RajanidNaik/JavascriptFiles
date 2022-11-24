import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
date = new Date;
menu:boolean=false;
search:boolean=false;
cityName:any;
weatherdata:any;
  constructor( public service:WeatherService,public router:Router) { }

  ngOnInit(): void {
    // this.weatherdata =JSON.parse(this.service.getWeatherData() || '{}')
   
  }
onclick(){
  this.menu =!this.menu;
}
onSearchClick(){
  this.search =!this.search;
}
onserach(){
  let data = this.service.getData(this.cityName) ;
  console.log(this.cityName);
  this.router.navigate(['/homePage']);
  //.then(()=>{
    // window.location.reload();
  // });
}
@HostListener('document:keydown.enter') keydata() {
  let data = this.service.getData(this.cityName);
  console.log(this.cityName);
  this.router.navigate(['/homePage'])
  //.then(()=>{
  //   window.location.reload();
  // });
}
}
