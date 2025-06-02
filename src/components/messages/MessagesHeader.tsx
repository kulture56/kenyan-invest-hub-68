import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
interface MessagesHeaderProps {
  onNewMessage: () => void;
}
const MessagesHeader: React.FC<MessagesHeaderProps> = ({
  onNewMessage
}) => {
  return <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-purple-800">
        Messages
      </h1>
      <Button onClick={onNewMessage}>
        <PlusCircle className="mr-2 h-4 w-4" />
        New Message
      </Button>
    </div>;
};
export default MessagesHeader;