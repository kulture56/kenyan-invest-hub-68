
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ConversationSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ConversationSearch: React.FC<ConversationSearchProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="p-3 border-b border-border/50">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search messages..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ConversationSearch;
