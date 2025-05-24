
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface GlossarySearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const GlossarySearch: React.FC<GlossarySearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search glossary terms..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default GlossarySearch;
