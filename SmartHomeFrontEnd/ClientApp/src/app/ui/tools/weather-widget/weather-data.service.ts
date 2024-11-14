import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from './WeatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  
  private URL: string = 'http://api.openweathermap.org/data/2.5/weather?q=Wien,at&APPID=87a5487bbe3ae1e0d1620fff5534bb49';


  constructor(private httpClient: HttpClient) { }

  public getWeatherInfo() {
    return this.httpClient.get<WeatherResponse>(`${this.URL}`).pipe();
  }
}
