import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL;
const API_KEY = environment.API_Key;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(public http:HttpClient) { }
  getData(cityName:any){
   return this.http.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`);
  }
  
  
}
