import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { StateService } from "../../services/state.service";
import { getFirstLetters } from "../../utils/stringUtils";

@Component({
  selector: "app-chat-bubble",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chat-bubble.component.html",
  styleUrl: "./chat-bubble.component.css",
})
export class ChatBubbleComponent {
  @Input() text: string = "";
  @Input() type: "BOT" | "USER" = "BOT";
  constructor(private stateService: StateService) {}

  userDetails:
    | {
        email: string;
        name: string;
        _id: string;
      }
    | undefined;

  getFirstLetters(text: string): string {
    return getFirstLetters(text);
  }

  ngOnInit() {
    this.stateService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
    });
  }
}
