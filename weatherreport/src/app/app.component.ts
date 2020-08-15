import { Component,NgModule } from '@angular/core';
import {WeatherService} from './weather.service'
import{Weather} from './appdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherreport';
  data = new Weather('',0,0,'');  


  constructor(private _weatherService:WeatherService){
  }

getWeather(){ 
  console.log(this.data.city);
  var result =  this._weatherService.getWeatherByCountry(this.data.city);
  console.log(result);
}


}
