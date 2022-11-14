import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Information } from '../information';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
public date=new Date;
display:boolean=true;
menuVarialbe:boolean=false;
serachVariable:boolean=false;
cityName:any;
object= new Information();


  constructor(public service:WeatherService , public router:Router) { }

  ngOnInit(): void {
    let weatherDetails:any = localStorage.getItem('weatherDeatail');
    let finalDetails=JSON.parse(weatherDetails);
  this.object.cityName = finalDetails['name'];
  this.object.temp=(finalDetails['main'].temp).toFixed(0);
  this.object.imageId = finalDetails['weather'][0];
  this.object.image = `http://openweathermap.org/img/wn/${this.object.imageId.icon}@2x.png`;
  this.object.info = finalDetails['weather'][0].description;
  let list:any=[];
  if(localStorage.getItem('recentSearchWeather')){
    
    let oldData = [JSON.parse(localStorage.getItem('recentSearchWeather')|| '[]')];
    list= [this.object,...oldData];
    console.log(list)
    console.log(oldData);
  }else{
    localStorage.setItem('recentSearchWeather',JSON.stringify(list));
  }
  
  console.log(this.object);
  }
openMenu(){
  this.menuVarialbe =! this.menuVarialbe;
}
openSearch(){
  this.serachVariable=!this.serachVariable;
}
onSearchCity(cityname:any){
  this.service.getData(this.cityName).subscribe((result)=>{
    localStorage.setItem('weatherDeatail',JSON.stringify(result));
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  })
}


}
