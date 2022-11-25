import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Information } from './information';
const API_URL = environment.API_URL;
const API_KEY = environment.API_Key;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }
  weatherData = new Information();
  data:any;
  getData(cityName:any){
    
    return this.http.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`).subscribe((result=>{
      this.data = result;
      this.weatherData.name =this.data['name'];
      let weatherDetails = this.data['weather'][0];
            let weather = weatherDetails.icon;
            this.weatherData.icon = weather;
            this.weatherData.temp = this.data['main'].temp;
            this.weatherData.description = this.data['weather'][0].description;
            this.weatherData.temp_min = this.data['main'].temp_min;
            this.weatherData.temp_max = this.data['main'].temp_max;
            this.weatherData.pressure = this.data['main'].pressure;
            this.weatherData.humidity = this.data['main'].humidity;
            this.weatherData.wind = this.data['wind'].speed;
            this.weatherData.visibility = this.data['visibility'];
            this.weatherData.like = false;
            this.weatherData.centifara =this.data['main'].temp;
            this.setData(this.weatherData);
            this.addRecentSearch(this.weatherData);
    }));

   }
   getWeatherData() {
    if (localStorage.getItem('weather')) {
      return localStorage.getItem('weather');
    } else {
      localStorage.setItem('weather', JSON.stringify(this.weatherData));
      return localStorage.getItem('weather');
    }
  }
  setData(data: any) {
    if (localStorage.getItem('weather')) {
      if (localStorage.getItem('favourite')) {
        let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
        let previousData = oldData.find((old: any) => {
          return old['name'] == data['name'];
        });
        if (previousData) {
          localStorage.setItem('weather', JSON.stringify(previousData));
          this.addRecentSearch(previousData);
        } else {
          localStorage.setItem('weather', JSON.stringify(data));
        }
      } else {
        localStorage.setItem('weather', JSON.stringify(data));
      }
    } else {
      localStorage.setItem('weather', JSON.stringify(this.weatherData));
    }
  }
  addRecentSearch(data: any) {
    let list: any[] = [];
    if (localStorage.getItem('recentSearch')) {
      let oldData = JSON.parse(localStorage.getItem('recentSearch') || '[]');
      let previousData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });

      if (previousData == undefined) {
        list = [data, ...oldData];
      } else {
        let searchData = oldData.indexOf(previousData);
        let currentValue = oldData.splice(searchData, 1)[0];

        
        list = [currentValue, ...oldData];
      }
    } else {
      list = [data];
    }
    localStorage.setItem('recentSearch', JSON.stringify(list));
  }

  updateRecentSearch(data: any) {
    let oldData = JSON.parse(this.getRecentSearch() || '[]');
    let listData = oldData.find((old: any) => {
      return old['name'] == data['name'];
    });

    let index = oldData.indexOf(listData);
    oldData[index] = data;
    localStorage.setItem('recentSearch', JSON.stringify(oldData));
    
  }

  getRecentSearch() {
    if (localStorage.getItem('recentSearch')) {
      return localStorage.getItem('recentSearch');
    } else {
      return '[]';
    }
  }

  addfavourite(data: any) {
    let list: any[] = [];
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let previousData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });
      if (previousData == undefined) {
        list = [data, ...oldData];
      } else {
        let searchData = oldData.indexOf(previousData);
        let currentValue = oldData.splice(searchData)[0];
        
        list = [currentValue, ...oldData];
      }
    } else {
      list = [data];
    }
    localStorage.setItem('favourite', JSON.stringify(list));
  }

  getfavourite() {
    if (localStorage.getItem('favourite')) {
      return localStorage.getItem('favourite');
    } else {
      return '[]';
    }
  }

  removeFavourite(data: any) {
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let presentData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });
      let index = oldData.indexOf(presentData);
      console.log(index)
      oldData.splice(index, 1);
      localStorage.setItem('favourite', JSON.stringify(oldData));
      
    }
  }
}
