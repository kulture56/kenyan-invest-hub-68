import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send, X, Minimize2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const RafikiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contextualTip, setContextualTip] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const location = useLocation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Get the current topic from the URL, if any
  const getCurrentTopic = () => {
    const path = location.pathname;
    const topicMatch = path.match(/\/topics\/([^\/]+)/);
    if (topicMatch) {
      return topicMatch[1].replace(/-/g, ' ');
    }
    return null;
  };

  // Set contextual tip based on current location
  useEffect(() => {
    const currentTopic = getCurrentTopic();
    if (currentTopic) {
      setContextualTip(`Ask me about ${currentTopic} or any investment questions!`);
    } else {
      setContextualTip("Ask me about investments, market trends, or financial advice!");
    }
  }, [location.pathname]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hide the widget completely on mobile
  if (isMobile) {
    return null;
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const currentTopic = getCurrentTopic();
      const contextPrompt = currentTopic ? 
        `The user is currently browsing the ${currentTopic} topic. Consider this context when responding.` : "";
      
      const { data, error } = await supabase.functions.invoke('rafiki-chat', {
        body: { 
          query: input,
          contextPrompt 
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      const rafikiResponse: Message = {
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

      const errorResponse: Message = {
        id: `rafiki-error-${Date.now()}`,
        content: "I'm sorry, I encountered an error. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleViewFullChat = () => {
    if (messages.length > 0) {
      // If there are messages, navigate with the latest question
      const lastUserMessage = messages.filter(m => m.isUser).pop();
      if (lastUserMessage) {
        navigate('/rafiki', { state: { suggestedQuestion: lastUserMessage.content } });
      } else {
        navigate('/rafiki');
      }
    } else {
      navigate('/rafiki');
    }
    setIsOpen(false);
  };

  const quickQuestions = [
    "What are the best investment options in Kenya?",
    "How do I start investing with KES 10,000?",
    "What's the current NSE performance?",
    "Tell me about Treasury Bills",
  ];

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={toggleWidget}
        className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
        size="lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-50 w-80 h-96 shadow-xl border-primary/20">
          <div className="flex items-center justify-between p-3 border-b bg-primary/5 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">R</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Rafiki AI</p>
                <p className="text-xs text-muted-foreground">Investment Assistant</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleViewFullChat}>
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleWidget}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <CardContent className="p-0 flex flex-col h-80">
            {messages.length === 0 ? (
              <div className="flex-1 p-4 space-y-3">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">{contextualTip}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Quick questions:</p>
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start h-auto py-2 px-3 text-xs"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <ScrollArea className="flex-1 p-3">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-2 rounded-lg text-xs ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-2 rounded-lg text-xs">
                        Rafiki is thinking...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            )}

            {/* Input Area */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask Rafiki anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="h-9 w-9"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default RafikiChatWidget;
