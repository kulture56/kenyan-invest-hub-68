
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, ChartBar, Coins, FileText } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm Rafiki, your AI investment assistant. How can I help you with your investment journey in Kenya today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const RafikiPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
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

    // Simulate Rafiki's response
    setTimeout(() => {
      const rafikiResponse: Message = {
        id: `rafiki-${Date.now()}`,
        content: generateRafikiResponse(input),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, rafikiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateRafikiResponse = (query: string): string => {
    // This is a simple mock AI - in a real app this would be connected to an actual AI service
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("stocks") || lowerQuery.includes("nse")) {
      return "The Nairobi Securities Exchange (NSE) has been showing moderate growth this quarter. Top performing sectors include banking, telecommunications, and energy. I recommend diversifying your portfolio across these sectors for balanced exposure. Would you like specific stock recommendations?";
    }
    
    if (lowerQuery.includes("sacco") || lowerQuery.includes("saving")) {
      return "SACCOs in Kenya offer competitive returns compared to traditional savings accounts, with annual dividend rates ranging from 8% to 14%. The most stable SACCOs include Stima, Mwalimu, and Harambee. When choosing a SACCO, consider their historical dividend rates, loan terms, and digital banking capabilities.";
    }
    
    if (lowerQuery.includes("treasury") || lowerQuery.includes("t-bill") || lowerQuery.includes("bonds")) {
      return "Current Treasury Bills rates in Kenya: 91-day (9.2%), 182-day (10.1%), and 364-day (10.8%). Government bonds offer higher yields for longer lock-in periods. These are low-risk investments backed by the Kenyan government and provide a stable income stream through interest payments.";
    }
    
    if (lowerQuery.includes("crypto") || lowerQuery.includes("bitcoin")) {
      return "Cryptocurrency investments in Kenya exist in a regulatory grey area. While there's growing adoption, be aware of the high volatility and regulatory uncertainty. If investing in crypto, consider limiting it to a small percentage of your overall portfolio (5-10%). Always use reputable exchanges like Binance or local options like Chipper Cash.";
    }

    return "That's an interesting question about the Kenyan investment landscape. To give you the most accurate information, could you provide more specific details about the investment type, your goals, or the timeframe you're considering?";
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rafiki</h1>
              <p className="text-muted-foreground">Your AI investment assistant</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="space-y-6 py-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
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
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[80%]">
                        <Avatar className="h-8 w-8 bg-accent">
                          <AvatarFallback>R</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg px-4 py-2 bg-muted">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse"></div>
                            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse delay-150"></div>
                            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse delay-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Suggested Questions</h3>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => setInput("What are the current T-Bill rates in Kenya?")}
              >
                <FileText className="mr-2 h-4 w-4" />
                <span className="text-xs text-left">What are the current T-Bill rates?</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => setInput("Which stocks on NSE have the highest growth potential?")}
              >
                <ChartBar className="mr-2 h-4 w-4" />
                <span className="text-xs text-left">Best NSE stocks to buy now?</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => setInput("Which SACCOs in Kenya offer the best dividend rates?")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                <span className="text-xs text-left">Best SACCOs by dividend rates?</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => setInput("Is cryptocurrency a good investment in Kenya?")}
              >
                <Coins className="mr-2 h-4 w-4" />
                <span className="text-xs text-left">Cryptocurrency in Kenya?</span>
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="text-sm font-medium mb-2">About Rafiki</h4>
              <p className="text-xs text-muted-foreground">
                Rafiki is an AI assistant trained to provide insights on Kenyan investments. 
                I can help with market trends, financial advice, and investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RafikiPage;
