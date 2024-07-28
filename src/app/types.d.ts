interface ChatMessage {
  type: "BOT" | "USER";
  message: string;
  id: number;
}
