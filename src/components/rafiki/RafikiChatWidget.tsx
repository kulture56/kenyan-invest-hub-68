
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, MessageSquareText, Send, MinusCircle, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const RafikiChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contextualTip, setContextualTip] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const location = useLocation();
  
  // Get the current topic from the URL, if any
  const getCurrentTopic = () => {
    const path = location.pathname;
    if (path.startsWith('/topics/')) {
      return path.split('/')[2];
    }
    return null;
  };
  
  // Set contextual tip based on current location
  useEffect(() => {
    const topic = getCurrentTopic();
    if (topic) {
      switch (topic) {
        case 'stocks':
          setContextualTip("Ask me about stock market trends or company analysis on the NSE!");
          break;
        case 'banks':
          setContextualTip("Want to know about the best banking options in Kenya? Ask me!");
          break;
        case 'saccos':
          setContextualTip("SACCOs often have competitive rates. Ask me about MMF alternatives too!");
          break;
        case 'mmfs':
          setContextualTip("Money Market Funds are a great low-risk investment. Ask me for the best rates!");
          break;
        default:
          setContextualTip("How can I help with your investment decisions today?");
      }
    } else {
      setContextualTip("Ask me anything about Kenyan investments!");
    }
  }, [location]);
  
  // Initialize with a contextual greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const topic = getCurrentTopic();
      let initialMessage = "Hello! I'm Rafiki, your AI investment assistant. How can I help you with your investment journey in Kenya today?";
      
      if (topic) {
        initialMessage = `Hello! I see you're interested in ${topic}. I can provide information about this investment option or answer any other questions you might have.`;
      }
      
      setMessages([
        {
          id: "initial-message",
          content: initialMessage,
          isUser: false,
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, messages.length, location]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const topic = getCurrentTopic();
      let contextPrompt = "";
      
      if (topic) {
        contextPrompt = `The user is currently browsing the ${topic} topic. Consider this context when responding.`;
      }

      // Call Supabase Edge Function to get response from OpenAI
      const { data, error } = await supabase.functions.invoke('rafiki-chat', {
        body: { 
          query: input,
          contextPrompt 
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      const rafikiResponse = {
        id: `rafiki-${Date.now()}`,
        content: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, rafikiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Error",
        description: "Failed to get response from Rafiki. Please try again.",
        variant: "destructive",
      });

      const errorResponse = {
        id: `rafiki-error-${Date.now()}`,
        content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-accent hover:bg-accent/90 z-50 flex items-center justify-center p-0 overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src="/lovable-uploads/93b40e8a-192d-4ff9-9614-6ad174a7617b.png" 
          alt="Rafiki" 
          className="w-full h-full object-cover"
        />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-200 ease-in-out">
      <Card className={`w-80 md:w-96 shadow-lg transition-all duration-300 ease-in-out ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
        <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-accent p-0 overflow-hidden">
              <img 
                src="/lovable-uploads/93b40e8a-192d-4ff9-9614-6ad174a7617b.png" 
                alt="Rafiki" 
                className="w-full h-full object-cover"
              />
            </Avatar>
            <CardTitle className="text-sm">Rafiki Assistant</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 rounded-full" 
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 rounded-full" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-grow h-[calc(100%-112px)] overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-3 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] rounded-lg px-3 py-2 ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] bg-muted rounded-lg px-3 py-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>
            
            <CardFooter className="p-3 border-t flex-col gap-2">
              {contextualTip && (
                <div className="flex items-center gap-2 w-full bg-accent/10 rounded-md p-2 text-xs">
                  <Info className="h-3 w-3 text-accent shrink-0" />
                  <p className="text-muted-foreground">{contextualTip}</p>
                </div>
              )}
              <div className="flex gap-2 w-full">
                <Textarea
                  placeholder="Ask Rafiki something..."
                  className="resize-none min-h-[40px] h-10 pt-2 text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  size="icon"
                  className="h-10 w-10"
                  disabled={!input.trim() || isLoading}
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default RafikiChatWidget;
