
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

const TopicsBar: React.FC<TopicsBarProps> = ({
  topics,
  selectedTopic
}) => {
  const navigate = useNavigate();
  
  const handleTopicClick = (topicSlug: string) => {
    navigate(`/topics/${topicSlug}`);
  };

  // Updated topic categories with new names
  const topicCategories: Topic[] = [
    { name: "Stocks", slug: "stocks" },
    { name: "Securities", slug: "securities" },
    { name: "Funds", slug: "funds" },
    { name: "Saccos", slug: "saccos" },
    { name: "Insurance", slug: "insurance" },
    { name: "Real Estate", slug: "real-estate" },
    { name: "Technology", slug: "technology" },
    { name: "Biz", slug: "biz" },
    { name: "Entrepreneurship", slug: "entrepreneurship" },
    { name: "Trading", slug: "trading" },
    { name: "Market analysis", slug: "market-analysis" },
    { name: "News", slug: "news" }
  ];

  return (
    <div className="mb-6 overflow-x-auto pb-2 no-scrollbar">
      <div className="flex flex-wrap gap-2">
        {topicCategories.map(topic => (
          <Badge 
            key={topic.name} 
            variant={selectedTopic === topic.slug ? "default" : "outline"}
            onClick={() => handleTopicClick(topic.slug)}
            className="cursor-pointer hover:scale-105 transition-transform px-3 py-1 text-xs whitespace-nowrap bg-yellow-500"
          >
            {topic.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TopicsBar;
