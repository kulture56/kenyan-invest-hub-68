
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface RafikiChatMessageProps {
  message: Message;
}

const RafikiChatMessage = ({ message }: RafikiChatMessageProps) => {
  return (
    <div
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex gap-3 max-w-[80%] ${message.isUser ? "flex-row-reverse" : ""}`}>
        <Avatar className={`h-8 w-8 ${message.isUser ? "" : "bg-accent"}`}>
          {message.isUser ? (
            <>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </>
          ) : (
            <AvatarFallback>R</AvatarFallback>
          )}
        </Avatar>

        <div
          className={`rounded-lg px-4 py-2 ${
            message.isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default RafikiChatMessage;
