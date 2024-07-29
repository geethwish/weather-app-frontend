import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-weather-summary-card",
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: "./weather-summary-card.component.html",
  styleUrl: "./weather-summary-card.component.css",
})
export class WeatherSummaryCardComponent {
  @Input() data: WeatherDataObject | null = null;
  locationIcon = faLocationDot;

  getTheDayByDate(date: string) {
    const dateObj: Date = new Date(date);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    const dayName: string = dateObj.toLocaleDateString("en-US", options);
    return dayName;
  }
}
