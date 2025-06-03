
import React from "react";
import { Info } from "lucide-react";
import { topicInfo } from "./TopicInfo";

interface TopicHeaderProps {
  topicSlug?: string;
}

export const TopicHeader: React.FC<TopicHeaderProps> = ({ topicSlug }) => {
  const topic = topicInfo[topicSlug as keyof typeof topicInfo] || {
    name: topicSlug?.charAt(0).toUpperCase() + topicSlug?.slice(1),
    icon: <Info className="h-5 w-5 text-primary" />
  };

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        {topic.icon}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">{topic.name}</h1>
      </div>
    </div>
  );
};
