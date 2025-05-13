
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Topic {
  name: string;
  slug: string;
}

interface TopicsBarProps {
  topics: Topic[];
  selectedTopic: string | null;
}

const TopicsBar: React.FC<TopicsBarProps> = ({ topics, selectedTopic }) => {
  const navigate = useNavigate();

  const handleTopicClick = (topicSlug: string) => {
    navigate(`/topics/${topicSlug}`);
  };

  return (
    <div className="mb-6 overflow-x-auto pb-2 no-scrollbar">
      <div className="flex flex-wrap gap-2 min-w-max">
        {topics.map((topic) => (
          <Badge
            key={topic.name}
            variant={selectedTopic === topic.slug ? "default" : "outline"}
            className="cursor-pointer hover:scale-105 transition-transform px-2 py-0.5 text-xs"
            onClick={() => handleTopicClick(topic.slug)}
          >
            #{topic.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TopicsBar;
