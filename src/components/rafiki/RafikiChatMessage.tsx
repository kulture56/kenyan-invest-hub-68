
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
  // Format the message content to handle newlines and URLs
  const formatContent = (content: string) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textWithLinks = content.replace(
      urlRegex,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary underline">$1</a>'
    );

    // Convert newlines to <br> tags
    const textWithBreaks = textWithLinks.replace(/\n/g, '<br />');
    
    return { __html: textWithBreaks };
  };

  return (
    <div
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex gap-3 max-w-[85%] ${message.isUser ? "flex-row-reverse" : ""}`}>
        <Avatar className={`h-8 w-8 ${message.isUser ? "" : "bg-accent"} shrink-0`}>
          {message.isUser ? (
            <>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </>
          ) : (
            <AvatarFallback className="text-white">R</AvatarFallback>
          )}
        </Avatar>

        <div
          className={`rounded-lg px-4 py-2 ${
            message.isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          }`}
        >
          <p 
            className="text-sm whitespace-pre-wrap break-words"
            dangerouslySetInnerHTML={formatContent(message.content)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default RafikiChatMessage;
