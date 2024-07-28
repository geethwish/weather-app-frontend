import { Component } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { FormsModule } from "@angular/forms";
import { APILoaderService } from "../../services/api-loader.service";
import { CommonModule } from "@angular/common";
import { ChatBubbleComponent } from "../chat-bubble/chat-bubble.component";

@Component({
  selector: "app-chatbox",
  standalone: true,
  imports: [FormsModule, CommonModule, ChatBubbleComponent],
  templateUrl: "./chatbox.component.html",
  styleUrl: "./chatbox.component.css",
})
export class ChatboxComponent {
  chatInput: string = "";
  weatherData: any[] = [];

  messages: ChatMessage[] = [];
  constructor(
    private weatherService: WeatherService,
    public loaderService: APILoaderService
  ) {}

  ngOnInit(): void {
    if (this.chatInput !== "") {
      setInterval(() => this.getWeather(), 30000);
    }

    this.messages = [
      {
        type: "BOT",
        message: "Please enter location you wish to check weather details?",
        id: 1,
      },
    ];
  }

  getWeather(): void {
    if (this.chatInput) {
      this.weatherService.getWeather(this.chatInput).subscribe(
        (response) => {
          const data = response.data.forecast.forecastday;
          console.log(data);

          this.weatherData = data;

          this.loaderService.hide();

          console.log(this.weatherData);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  handleSubmit() {
    this.loaderService.show();
    const neMessage: ChatMessage = {
      type: "USER",
      id: this.messages.length + 1,
      message: this.chatInput,
    };

    const tempMessage = [...this.messages];
    tempMessage.push(neMessage);

    this.messages = [...tempMessage];
    this.getWeather();
  }
}
