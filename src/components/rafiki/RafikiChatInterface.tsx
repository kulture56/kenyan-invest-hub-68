
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <>
      <Card className="mb-4 h-[60vh] flex flex-col">
        <CardContent className="p-4 flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6 py-2">
              {messages.map((message) => (
                <RafikiChatMessage key={message.id} message={message} />
              ))}

              {isLoading && <RafikiLoadingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Textarea
          placeholder="Ask Rafiki about investments, market trends, or financial advice..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none min-h-[80px]"
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
          className="bg-gelt-green hover:bg-gelt-green/90 h-auto"
        >
          Send
        </Button>
      </div>
    </>
  );
};

export default RafikiChatInterface;
