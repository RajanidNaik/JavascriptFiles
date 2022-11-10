import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
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
mobileMedia:any = window.matchMedia("(max-width:480px)")
  constructor(public service:WeatherService , public router:Router) { }

  ngOnInit(): void {
   
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
