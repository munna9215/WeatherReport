import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
 export class WeatherService {

private data : string;
private url : string
  constructor(private http : HttpClient) {

   }

   getWeatherByCountry(city:string){
      this.url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d96a33eb4f17f26c1e1e39e491b0cb4a";
      console.log(this.url);
      return this.http.get(this.url);
      // .map(res => res.json())
      // .subscribe(
      // (data) => this.data = data); 
   }

   getWeatherByZipCode(lat:number,lon:number){
    
  }

   getWeatherByCoords(lat:number,lon:number){
    this.url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=d96a33eb4f17f26c1e1e39e491b0cb4a";
    console.log(this.url);
    return this.http.get(this.url); 
   }
}
