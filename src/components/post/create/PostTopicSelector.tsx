
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface PostTopicSelectorProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

const topics = [
  "Stocks", 
  "Securities", 
  "Funds", 
  "Saccos", 
  "Insurance", 
  "Real Estate", 
  "Technology", 
  "Biz", 
  "Entrepreneurship", 
  "Trading", 
  "Market analysis", 
  "News"
];

export const PostTopicSelector: React.FC<PostTopicSelectorProps> = ({
  selectedTopic,
  onTopicChange
}) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Select value={selectedTopic} onValueChange={onTopicChange}>
        <SelectTrigger className="w-full sm:w-48 text-purple-600 font-bold">
          <SelectValue placeholder="Select one topic" />
        </SelectTrigger>
        <SelectContent 
          className="z-50 max-h-60 overflow-auto bg-background border border-border shadow-lg"
          position="popper"
          sideOffset={4}
        >
          {topics.map((topic) => (
            <SelectItem 
              key={topic} 
              value={topic} 
              className="font-bold hover:bg-purple-50 focus:bg-purple-50 cursor-pointer"
            >
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedTopic && (
        <Badge className="font-bold text-base bg-purple-600/10 text-purple-600 border-purple-600/20" style={{ fontSize: '16px' }}>
          {selectedTopic}
        </Badge>
      )}
    </div>
  );
};
