import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  location: string = "";
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
    setInterval(() => this.getWeather(), 30000);
  }

  getWeather(): void {
    if (this.location) {
      this.weatherService.getWeather(this.location).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  updateLocation(event: any): void {
    this.location = event.target.value;
    this.getWeather();
  }
}
