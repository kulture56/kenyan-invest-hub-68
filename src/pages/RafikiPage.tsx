
import React, { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, ChartBar, Coins, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  // Fetch chat history when component mounts
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const { data, error } = await supabase
          .from('rafiki_chat_history')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching chat history:', error);
          return;
        }

        if (data && data.length > 0) {
          const historyMessages: Message[] = data.flatMap(item => [
            {
              id: `user-${item.id}`,
              content: item.message,
              isUser: true,
              timestamp: new Date(item.created_at),
            },
            {
              id: `rafiki-${item.id}`,
              content: item.response,
              isUser: false,
              timestamp: new Date(item.created_at),
            }
          ]);
          
          setMessages([initialMessages[0], ...historyMessages]);
        }
      } catch (error) {
        console.error('Error in fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

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
      // Call Supabase Edge Function to get response from OpenAI
      const { data, error } = await supabase.functions.invoke('rafiki-chat', {
        body: { query: input }
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

      // Store conversation in database
      const { error: insertError } = await supabase
        .from('rafiki_chat_history')
        .insert({
          message: input,
          response: data.response,
        });

      if (insertError) {
        console.error('Error storing chat history:', insertError);
        toast({
          title: "Error",
          description: "Failed to save conversation. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Error",
        description: "Failed to get response from Rafiki. Please try again.",
        variant: "destructive",
      });

      const errorResponse: Message = {
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
