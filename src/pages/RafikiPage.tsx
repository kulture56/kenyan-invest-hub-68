
import React, { useState, useEffect, useCallback } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import RafikiHeader from "@/components/rafiki/RafikiHeader";
import RafikiChatInterface from "@/components/rafiki/RafikiChatInterface";
import RafikiSidebar from "@/components/rafiki/RafikiSidebar";

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch chat history when component mounts
  const fetchChatHistory = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchChatHistory();
  }, [fetchChatHistory]);

  const handleSendMessage = async (input: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
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

  const handleQuestionSelected = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4">
        <RafikiHeader />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <RafikiChatInterface 
              messages={messages}
              isLoading={isLoading}
              onSendMessage={handleSendMessage}
            />
          </div>

          <div className="lg:order-last order-first">
            <RafikiSidebar onQuestionSelected={handleQuestionSelected} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RafikiPage;
