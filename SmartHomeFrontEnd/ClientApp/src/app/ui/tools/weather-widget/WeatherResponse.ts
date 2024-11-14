export class WeatherResponse {
    main: MainData;
    weather: Weather[];
}

export class MainData {
    temp: number;
    humidity: number;
}

export class Weather {
    main: string;
    description: string;
    icon: string;
}