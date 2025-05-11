
import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock messages for demonstration
const mockMessages = [
  { id: "1", text: "Hey, how's it going?", sent: false, timestamp: "10:30 AM" },
  { id: "2", text: "I'm doing well, thanks for asking! How about you?", sent: true, timestamp: "10:31 AM" },
  { id: "3", text: "Pretty good! Have you seen the latest post on GELT?", sent: false, timestamp: "10:32 AM" },
  { id: "4", text: "Not yet, let me check it out.", sent: true, timestamp: "10:33 AM" },
  { id: "5", text: "It's about the new features they're rolling out next week.", sent: false, timestamp: "10:34 AM" },
  { id: "6", text: "Sounds interesting! I'll take a look.", sent: true, timestamp: "10:35 AM" },
  { id: "7", text: "Let me know what you think about it.", sent: false, timestamp: "10:36 AM" },
  { id: "8", text: "Sure thing! I'll let you know my thoughts after I read it.", sent: true, timestamp: "10:37 AM" },
];

type User = {
  id: string;
  name: string;
  avatar: string;
  status: string;
};

type Conversation = {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: number;
};

interface MessageThreadProps {
  conversation: Conversation;
  onSendMessage: (message: string) => void;
}

const MessageThread: React.FC<MessageThreadProps> = ({
  conversation,
  onSendMessage,
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add message to the thread
    const newMessage = {
      id: `new-${Date.now()}`,
      text: message,
      sent: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    
    // Call the parent handler
    onSendMessage(message);
    
    // Clear input
    setMessage("");
    
    // Simulate a reply after a short delay
    setTimeout(() => {
      const replyMessage = {
        id: `new-${Date.now() + 1}`,
        text: "Thanks for your message! I'll get back to you soon.",
        sent: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Header */}
      <div className="p-3 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
            <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{conversation.user.name}</p>
            <p className="text-xs text-muted-foreground">
              {conversation.user.status === "online" ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea 
        className="flex-1 p-4 overflow-y-auto"
        ref={scrollAreaRef}
        style={{ height: 'calc(80vh - 240px)' }}
      >
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.sent ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[70%] px-4 py-2 rounded-lg",
                  msg.sent
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary text-secondary-foreground rounded-tl-none"
                )}
              >
                <p>{msg.text}</p>
                <p className={cn(
                  "text-xs mt-1",
                  msg.sent ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input area */}
      <div className="p-3 border-t border-border/50 flex items-center gap-2">
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Paperclip className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          className="bg-secondary/50 border-none focus:ring-1 focus:ring-primary"
        />
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Smile className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button 
          onClick={handleSendMessage} 
          disabled={!message.trim()} 
          size="icon"
          className="flex-shrink-0"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default MessageThread;
