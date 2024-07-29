import { Component } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { FormsModule } from "@angular/forms";
import { APILoaderService } from "../../services/api-loader.service";
import { CommonModule } from "@angular/common";
import { ChatBubbleComponent } from "../chat-bubble/chat-bubble.component";
import { WeatherSummaryCardComponent } from "../weather-summary-card/weather-summary-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-chatbox",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ChatBubbleComponent,
    WeatherSummaryCardComponent,
    FontAwesomeModule,
  ],
  templateUrl: "./chatbox.component.html",
  styleUrl: "./chatbox.component.css",
})
export class ChatboxComponent {
  chatInput: string = "";
  tempChatInput: string = "";
  weatherData: WeatherDataObject | null = null;
  planeIcon = faPaperPlane;
  messages: ChatMessage[] = [];
  constructor(
    private weatherService: WeatherService,
    public loaderService: APILoaderService
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.tempChatInput !== "") {
        this.getWeather(this.tempChatInput);
      }
    }, 30000);

    this.messages = [
      {
        type: "BOT",
        message: "Please enter location you wish to check weather details?",
        id: 1,
      },
    ];
  }

  setMessage(type: "BOT" | "USER", message: string) {
    const neMessage: ChatMessage = {
      type: type,
      id: this.messages.length + 1,
      message: message,
    };
    const tempMessage = [...this.messages];
    tempMessage.push(neMessage);
    this.messages = [...tempMessage];
  }

  getWeather(tempMessage: string): void {
    if (tempMessage !== undefined && tempMessage !== "") {
      this.weatherService.getWeather(tempMessage).subscribe(
        (response) => {
          const data = response.data;
          this.weatherData = data;
          this.chatInput = "";
        },
        (error) => {
          this.loaderService.hide();
          this.setMessage(
            "BOT",
            `Failed to fetch forecast data for ${this.chatInput}`
          );
          console.error(error);
        }
      );
    } else {
      if (this.chatInput) {
        this.weatherService.getWeather(this.chatInput).subscribe(
          (response) => {
            const data = response.data;
            this.weatherData = data;
            this.loaderService.hide();
            this.setMessage(
              "BOT",
              `Displaying the 14-day weather forecast for ${this.chatInput}`
            );
            this.tempChatInput = this.chatInput;
            this.chatInput = "";
          },
          (error) => {
            this.loaderService.hide();
            this.setMessage(
              "BOT",
              `Failed to fetch forecast data for ${this.chatInput}`
            );
            console.error(error);
          }
        );
      }
    }
  }

  handleSubmit() {
    this.loaderService.show();
    this.setMessage("USER", this.chatInput);
    this.getWeather("");
  }
}
