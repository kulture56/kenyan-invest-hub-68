
import React, { useState, useEffect, useCallback } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import RafikiHeader from "@/components/rafiki/RafikiHeader";
import RafikiChatInterface from "@/components/rafiki/RafikiChatInterface";
import RafikiSidebar from "@/components/rafiki/RafikiSidebar";
import { useLocation } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Jambo I'm Rafiki, your AI investment assistant. How can I help you with your investment safari leo?\n\nYou can ask me about:\n- Current money market fund rates\n- Stock recommendations on NSE\n- SACCO dividend rates comparison\n- Best investment options for beginners\n- Investment risk management strategies\n- Learning modules recommendations\n- Career opportunities in finance",
    isUser: false,
    timestamp: new Date(),
  },
];

const RafikiPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

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
    
    // Check for suggested question from location state (coming from widget)
    if (location.state?.suggestedQuestion) {
      const question = location.state.suggestedQuestion;
      handleSendMessage(question);
      // Clear the location state to prevent asking the same question on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [fetchChatHistory, location.state]);

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
      // Get the current topic context if any
      const path = location.pathname;
      const topicMatch = path.match(/\/topics\/([^\/]+)/);
      const contextPrompt = topicMatch ? 
        `The user is currently browsing the ${topicMatch[1]} topic. Consider this context when responding.` : "";
      
      // Parse for special formatting and suggestions
      const hasPoll = input.includes('[POLL]');
      const hasChart = input.includes('[CHART:');
      const shouldSuggestLearning = input.toLowerCase().includes('learn') || input.toLowerCase().includes('understand') || input.toLowerCase().includes('study');
      const shouldSuggestJobs = input.toLowerCase().includes('career') || input.toLowerCase().includes('job') || input.toLowerCase().includes('work');
      
      // Enhanced context for learning and job suggestions
      const enhancedPrompt = `${contextPrompt}
        
        ${shouldSuggestLearning ? 'The user seems interested in learning. Consider suggesting relevant learning modules from GELT platform such as:' +
        '- Stock Market Fundamentals (Beginner, 4 weeks)' +
        '- SACCO Investment Guide (Intermediate, 3 weeks)' +
        '- Cryptocurrency Basics (Advanced, 6 weeks)' : ''}
        
        ${shouldSuggestJobs ? 'The user seems interested in career opportunities. Consider suggesting relevant finance jobs in Kenya such as:' +
        '- Investment Analyst positions' +
        '- Financial Advisor roles' +
        '- SACCO management positions' +
        '- Banking sector opportunities' +
        '- Fintech startup roles' : ''}
        
        Always provide helpful, practical advice specific to the Kenyan financial market.`;
      
      // Call Supabase Edge Function to get response from OpenAI
      const { data, error } = await supabase.functions.invoke('rafiki-chat', {
        body: { 
          query: input,
          contextPrompt: enhancedPrompt,
          formatting: {
            hasPoll,
            hasChart,
            shouldSuggestLearning,
            shouldSuggestJobs
          }
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
