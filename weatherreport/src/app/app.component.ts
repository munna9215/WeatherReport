import { Component, NgModule } from '@angular/core';
import { WeatherService } from './weather.service'
import { Weather } from './appdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherreport';
  data = new Weather('', 0, 0, '');
  wData: any;

  jsonData: Object = new Object;

  constructor(private _weatherService: WeatherService) {
  }

  getWeather() {
    console.log(this.data.city);
    console.log(this.data.latitude);
    console.log(this.data.longitude);
    if (this.data.city.length > 0) {
      this.jsonData = this._weatherService.getWeatherByCountry(this.data.city).subscribe(data => this.jsonData = data);
    }
    else {
      this.jsonData = this._weatherService.getWeatherByCoords(this.data.latitude, this.data.longitude).subscribe(data => this.jsonData = data);
    }
    console.log(this.jsonData);
  }

}
