
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
  
  // Define our new topic categories
  const topicCategories: Topic[] = [
    { name: "Investments", slug: "investments" },
    { name: "Institutions", slug: "institutions" },
    { name: "Savings & Financial Wellness", slug: "savings-financial-wellness" },
    { name: "Trading", slug: "trading" },
    { name: "Community & Social", slug: "community-social" },
    { name: "Financial Education", slug: "financial-education" },
    { name: "Market News", slug: "market-news" },
    { name: "Technology", slug: "technology" },
    { name: "Businesses", slug: "businesses" }
  ];
  
  return (
    <div className="mb-6 overflow-x-auto pb-2 no-scrollbar">
      <div className="flex flex-wrap gap-2">
        {topicCategories.map(topic => (
          <Badge 
            key={topic.name} 
            variant={selectedTopic === topic.slug ? "default" : "outline"} 
            onClick={() => handleTopicClick(topic.slug)} 
            className="cursor-pointer hover:scale-105 transition-transform px-3 py-1 text-xs whitespace-nowrap"
          >
            {topic.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TopicsBar;
