
import React from "react";
import { MessageSquare } from "lucide-react";

interface EmptyConversationStateProps {
  message: string;
}

const EmptyConversationState: React.FC<EmptyConversationStateProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <MessageSquare className="h-12 w-12 text-muted-foreground mb-2" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export default EmptyConversationState;
