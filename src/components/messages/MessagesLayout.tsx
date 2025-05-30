
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ConversationList from "./ConversationList";
import MessageThread from "./MessageThread";
import ConversationSearch from "./ConversationSearch";
import EmptyConversationState from "./EmptyConversationState";

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

interface MessagesLayoutProps {
  conversations: Conversation[];
  selectedConversation: string | null;
  searchQuery: string;
  onSelectConversation: (id: string) => void;
  onSearchChange: (query: string) => void;
  onSendMessage: (message: string) => void;
}

const MessagesLayout: React.FC<MessagesLayoutProps> = ({
  conversations,
  selectedConversation,
  searchQuery,
  onSelectConversation,
  onSearchChange,
  onSendMessage,
}) => {
  const filteredConversations = conversations.filter(
    (conv) => 
      conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeConversation = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  return (
    <Card className="shadow-md border-border/50">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(80vh-120px)]">
          {/* Conversation List */}
          <div className="border-r border-border/50 md:col-span-1">
            <ConversationSearch 
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
            />
            
            <ScrollArea className="h-[calc(80vh-180px)]">
              {filteredConversations.length > 0 ? (
                <ConversationList 
                  conversations={filteredConversations}
                  selectedId={selectedConversation}
                  onSelect={onSelectConversation}
                />
              ) : (
                <EmptyConversationState message="No conversations found" />
              )}
            </ScrollArea>
          </div>

          {/* Message Thread */}
          <div className="md:col-span-2 flex flex-col h-full">
            {selectedConversation && activeConversation ? (
              <MessageThread 
                conversation={activeConversation}
                onSendMessage={onSendMessage}
              />
            ) : (
              <EmptyConversationState message="Select a conversation or start a new one" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessagesLayout;
