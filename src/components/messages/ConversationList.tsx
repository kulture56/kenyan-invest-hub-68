
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  return (
    <ul className="divide-y divide-border/50">
      {conversations.map((conversation) => (
        <li
          key={conversation.id}
          className={cn(
            "p-3 hover:bg-secondary/50 cursor-pointer transition-colors",
            selectedId === conversation.id && "bg-secondary"
          )}
          onClick={() => onSelect(conversation.id)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background",
                  conversation.user.status === "online" ? "bg-green-500" : "bg-gray-400"
                )}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <p className="font-medium truncate">{conversation.user.name}</p>
                <span className="text-xs text-muted-foreground flex-shrink-0">
                  {conversation.timestamp}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground truncate">
                  {conversation.lastMessage}
                </p>
                {conversation.unread > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-primary text-white text-xs h-5 min-w-5 flex items-center justify-center rounded-full flex-shrink-0"
                  >
                    {conversation.unread}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
