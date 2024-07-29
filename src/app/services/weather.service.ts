import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { AxiosService } from "./axios.service";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient, private axiosService: AxiosService) {}

  getWeather(location: string): Observable<any> {
    return from(this.axiosService.get(`/weather?location=${location}`));
  }
}
