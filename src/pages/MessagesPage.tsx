
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Search, SendHorizontal, MessageSquare } from "lucide-react";
import ConversationList from "@/components/messages/ConversationList";
import MessageThread from "@/components/messages/MessageThread";
import NewMessageDialog from "@/components/messages/NewMessageDialog";
import { useToast } from "@/hooks/use-toast";

// Mock data for users
const mockUsers = [
  { id: "1", name: "Alex Johnson", avatar: "/placeholder.svg", status: "online" },
  { id: "2", name: "Morgan Smith", avatar: "/placeholder.svg", status: "offline" },
  { id: "3", name: "Jordan Taylor", avatar: "/placeholder.svg", status: "online" },
  { id: "4", name: "Casey Brown", avatar: "/placeholder.svg", status: "offline" },
  { id: "5", name: "Riley Davis", avatar: "/placeholder.svg", status: "online" },
];

// Mock data for conversations
const mockConversations = [
  {
    id: "1",
    user: mockUsers[0],
    lastMessage: "Hey, how's it going?",
    timestamp: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    user: mockUsers[1],
    lastMessage: "Did you see the latest post?",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    user: mockUsers[2],
    lastMessage: "Let's meet up tomorrow",
    timestamp: "Wed",
    unread: 0,
  },
  {
    id: "4",
    user: mockUsers[3],
    lastMessage: "Thanks for your help!",
    timestamp: "Mon",
    unread: 0,
  },
  {
    id: "5",
    user: mockUsers[4],
    lastMessage: "I'll check it out later",
    timestamp: "May 10",
    unread: 0,
  },
];

const MessagesPage = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(conversations[0].id);
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const activeConversation = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  const filteredConversations = conversations.filter(
    (conv) => 
      conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (message: string) => {
    if (!selectedConversation || !message.trim()) return;

    // In a real app, you'd use an API call here to send the message
    // For now, we'll update the UI optimistically
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedConversation) {
        return {
          ...conv,
          lastMessage: message,
          timestamp: "Just now",
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully",
    });
  };

  const handleStartNewConversation = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) return;

    // Check if conversation already exists
    const existingConv = conversations.find(
      (conv) => conv.user.id === userId
    );

    if (existingConv) {
      setSelectedConversation(existingConv.id);
    } else {
      // Create new conversation
      const newConversation = {
        id: `new-${Date.now()}`,
        user,
        lastMessage: "New conversation",
        timestamp: "Just now",
        unread: 0,
      };

      setConversations([newConversation, ...conversations]);
      setSelectedConversation(newConversation.id);
    }

    setIsNewMessageOpen(false);
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-6 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Messages</h1>
          <Button onClick={() => setIsNewMessageOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>

        <Card className="shadow-md border-border/50">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(80vh-120px)]">
              {/* Conversation List */}
              <div className="border-r border-border/50 md:col-span-1">
                <div className="p-3 border-b border-border/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search messages..." 
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <ScrollArea className="h-[calc(80vh-180px)]">
                  {filteredConversations.length > 0 ? (
                    <ConversationList 
                      conversations={filteredConversations}
                      selectedId={selectedConversation}
                      onSelect={setSelectedConversation}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">No conversations found</p>
                    </div>
                  )}
                </ScrollArea>
              </div>

              {/* Message Thread */}
              <div className="md:col-span-2 flex flex-col h-full">
                {selectedConversation && activeConversation ? (
                  <MessageThread 
                    conversation={activeConversation}
                    onSendMessage={handleSendMessage}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Select a conversation or start a new one</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <NewMessageDialog 
        isOpen={isNewMessageOpen}
        onClose={() => setIsNewMessageOpen(false)}
        users={mockUsers}
        onSelectUser={handleStartNewConversation}
      />
    </AppLayout>
  );
};

export default MessagesPage;
