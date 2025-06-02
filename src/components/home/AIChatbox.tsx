import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Settings, Key, X, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}
export const AIChatbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [tempApiKey, setTempApiKey] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Load API key from localStorage
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const saveApiKey = () => {
    if (!tempApiKey.trim()) {
      toast({
        description: "Please enter a valid API key",
        variant: "destructive"
      });
      return;
    }
    setApiKey(tempApiKey);
    localStorage.setItem('openai_api_key', tempApiKey);
    setIsSettingsOpen(false);
    toast({
      description: "API key saved successfully!"
    });
  };
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (!apiKey) {
      toast({
        description: "Please set your OpenAI API key first",
        variant: "destructive"
      });
      setIsSettingsOpen(true);
      return;
    }
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{
            role: 'system',
            content: 'You are Rafiki AI Assistant, a helpful financial and investment advisor. Provide clear, informative responses about investments, trading, and financial topics.'
          }, ...messages.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          })), {
            role: 'user',
            content: inputMessage
          }],
          max_tokens: 500,
          temperature: 0.7
        })
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      toast({
        description: "Failed to get AI response. Please check your API key.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const clearChat = () => {
    setMessages([]);
    toast({
      description: "Chat cleared"
    });
  };
  if (isMinimized) {
    return <div className="fixed bottom-4 right-4 z-50">
        
      </div>;
  }
  return <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 h-96 flex flex-col shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              Rafiki AI Assistant
              {apiKey && <Badge variant="secondary" className="text-xs">Connected</Badge>}
            </CardTitle>
            <div className="flex gap-1">
              <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Settings className="h-3 w-3" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>API Settings</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">OpenAI API Key</label>
                      <Input type="password" placeholder="sk-..." value={tempApiKey} onChange={e => setTempApiKey(e.target.value)} className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Your API key is stored locally and never shared.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={saveApiKey} className="flex-1">
                        Save
                      </Button>
                      <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsMinimized(true)}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-3 gap-2">
          <div className="flex-1 overflow-y-auto space-y-2 max-h-64">
            {messages.length === 0 && <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <MessageSquare className="h-8 w-8 mb-2" />
                <p className="text-sm">Ask me anything about investments!</p>
              </div>}
            
            {messages.map(message => <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {message.content}
                </div>
              </div>)}
            
            {isLoading && <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground p-2 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{
                  animationDelay: '0.1s'
                }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{
                  animationDelay: '0.2s'
                }}></div>
                  </div>
                </div>
              </div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <Textarea placeholder="Ask about investments..." value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyPress={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }} className="flex-1 min-h-[36px] max-h-20 resize-none" rows={1} />
            <Button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} size="icon" className="h-9 w-9">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {messages.length > 0 && <Button variant="ghost" size="sm" onClick={clearChat} className="text-xs">
              Clear chat
            </Button>}
        </CardContent>
      </Card>
    </div>;
};