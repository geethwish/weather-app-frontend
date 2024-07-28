import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

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
}
