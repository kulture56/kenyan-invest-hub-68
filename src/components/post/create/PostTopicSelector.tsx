
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface PostTopicSelectorProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

const topics = ["Investments", "Financial Education", "Market News", "Technology", "Trading", "Career Development", "Personal Finance", "Cryptocurrency", "Real Estate"];

export const PostTopicSelector: React.FC<PostTopicSelectorProps> = ({
  selectedTopic,
  onTopicChange
}) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Select value={selectedTopic} onValueChange={onTopicChange}>
        <SelectTrigger className="w-full sm:w-48 text-muted-foreground">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedTopic && (
        <Badge className="font-bold text-base bg-primary/10 text-primary border-primary/20" style={{ fontSize: '16px' }}>
          {selectedTopic}
        </Badge>
      )}
    </div>
  );
};
