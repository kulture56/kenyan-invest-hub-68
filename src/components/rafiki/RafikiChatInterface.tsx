
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import RafikiChatMessage from "./RafikiChatMessage";
import RafikiLoadingIndicator from "./RafikiLoadingIndicator";
import { Tag, Image as ImageIcon, BarChart3, LineChart } from "lucide-react";

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
  const [showFormatting, setShowFormatting] = useState(false);
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

  const handleInsertTag = (tagType: string) => {
    let insertText = "";
    switch (tagType) {
      case "topic":
        insertText = "#topic";
        break;
      case "mention":
        insertText = "@username";
        break;
      case "poll":
        insertText = "[POLL]\nOption 1\nOption 2\nOption 3";
        break;
      case "chart":
        insertText = "[CHART: Investment Growth]";
        break;
      default:
        insertText = "";
    }
    
    setInput((prev) => prev + (prev ? " " + insertText : insertText));
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

      <div className="space-y-2">
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
        
        {showFormatting && (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => handleInsertTag("topic")}
            >
              <Tag className="h-4 w-4 mr-1" />
              <span className="text-xs">Topic</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => handleInsertTag("mention")}
            >
              <span className="text-xs mr-1">@</span>
              <span className="text-xs">Mention</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => handleInsertTag("poll")}
            >
              <LineChart className="h-4 w-4 mr-1" />
              <span className="text-xs">Poll</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => handleInsertTag("chart")}
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              <span className="text-xs">Chart</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8"
            >
              <ImageIcon className="h-4 w-4 mr-1" />
              <span className="text-xs">Image</span>
            </Button>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFormatting(!showFormatting)}
            className="h-10"
          >
            {showFormatting ? "Hide Options" : "Formatting Options"}
          </Button>
          
          <Button 
            onClick={handleSendMessage} 
            disabled={!input.trim() || isLoading}
            className="bg-gelt-green hover:bg-gelt-green/90 flex-1"
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default RafikiChatInterface;
