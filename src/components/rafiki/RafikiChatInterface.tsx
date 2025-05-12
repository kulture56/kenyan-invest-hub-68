
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import RafikiChatMessage from "./RafikiChatMessage";
import RafikiLoadingIndicator from "./RafikiLoadingIndicator";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface RafikiChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
}

const RafikiChatInterface = ({ 
  messages, 
  isLoading, 
  onSendMessage 
}: RafikiChatInterfaceProps) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <>
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="space-y-6 py-2">
            {messages.map((message) => (
              <RafikiChatMessage key={message.id} message={message} />
            ))}

            {isLoading && <RafikiLoadingIndicator />}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Textarea
          placeholder="Ask Rafiki about investments, market trends, or financial advice..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={!input.trim() || isLoading}
          className="bg-gelt-green hover:bg-gelt-green/90"
        >
          Send
        </Button>
      </div>
    </>
  );
};

export default RafikiChatInterface;
