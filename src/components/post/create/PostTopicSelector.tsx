
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
  "Market Analysis", 
  "News"
];

export const PostTopicSelector: React.FC<PostTopicSelectorProps> = ({
  selectedTopic,
  onTopicChange
}) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Select value={selectedTopic} onValueChange={onTopicChange}>
        <SelectTrigger className="w-full sm:w-64 text-purple-600 font-bold border-purple-200 hover:border-purple-300 focus:border-purple-500 focus:ring-purple-200 transition-colors">
          <SelectValue placeholder="Select one topic" />
        </SelectTrigger>
        <SelectContent 
          className="z-[100] max-h-72 w-full min-w-[var(--radix-select-trigger-width)] bg-background border border-border shadow-xl rounded-lg overflow-hidden"
          position="popper"
          sideOffset={8}
          align="start"
        >
          <div className="p-2 border-b border-border bg-muted">
            <p className="text-xs text-muted-foreground font-medium">Choose a topic for your post</p>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {topics.map((topic) => (
              <SelectItem 
                key={topic} 
                value={topic} 
                className="font-medium hover:bg-accent focus:bg-accent cursor-pointer py-3 px-4 border-b border-border last:border-b-0 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-foreground">{topic}</span>
                </div>
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>
      {selectedTopic && (
        <Badge className="font-bold text-sm bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 transition-colors px-3 py-1">
          ✓ {selectedTopic}
        </Badge>
      )}
    </div>
  );
};
