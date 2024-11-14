import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  now: Date = new Date();
  displayTime: string = "00:00";

  temperature: string = "°C";
  humidity: string = "%"
  weatherIcon: string = "http://openweathermap.org/img/wn/01d.png";

  constructor(private weatherService: WeatherDataService) {

    setInterval(() => {
      this.updateDate();
    }, 1000);

    setInterval(() => {
      this.updateWeatherData();  
    }, 1000*60*10);
  }

  ngOnInit() {
    this.updateDate();
    this.updateWeatherData();
  }

  private updateDate() {
    this.now = (new Date());
      this.displayTime = formatDate(new Date(), "HH:mm", "de");
  }

  private updateWeatherData() {
    this.weatherService.getWeatherInfo()
      .subscribe(data => {
        this.temperature = (data.main.temp - 273.15).toFixed(1) + " °C";
        this.humidity = data.main.humidity.toFixed() + " %";
        this.weatherIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      });
  }

}
