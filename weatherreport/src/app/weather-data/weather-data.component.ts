import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

@Input() WeatherData :any;

  constructor() { }

  ngOnInit(): void {
  }

}
