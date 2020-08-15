import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
 export class WeatherService {

private url : string
  constructor(private http : HttpClient) {

   }

   getWeatherByCountry(city:string){
      this.url = "https://samples.openweathermap.org/data/2.5/weather?q="+city+"&appid=d96a33eb4f17f26c1e1e39e491b0cb4a";
      console.log(this.url);
      return this.http.get(this.url);
   }

   getWeatherByZipCode(){

   }

   getWeatherByCoord(){

   }
}
