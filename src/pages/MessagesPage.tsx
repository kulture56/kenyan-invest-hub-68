
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useToast } from "@/hooks/use-toast";
import MessagesHeader from "@/components/messages/MessagesHeader";
import MessagesLayout from "@/components/messages/MessagesLayout";
import NewMessageDialog from "@/components/messages/NewMessageDialog";
import { mockUsers, mockConversations } from "@/components/messages/mockData";

const MessagesPage = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(conversations[0].id);
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

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
        <MessagesHeader onNewMessage={() => setIsNewMessageOpen(true)} />
        
        <MessagesLayout
          conversations={conversations}
          selectedConversation={selectedConversation}
          searchQuery={searchQuery}
          onSelectConversation={setSelectedConversation}
          onSearchChange={setSearchQuery}
          onSendMessage={handleSendMessage}
        />
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
