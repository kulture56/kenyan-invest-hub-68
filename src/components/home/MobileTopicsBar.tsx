
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

interface Topic {
  name: string;
  slug: string;
}

interface MobileTopicsBarProps {
  topics: Topic[];
  selectedTopic: string | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MobileTopicsBar: React.FC<MobileTopicsBarProps> = ({
  topics,
  selectedTopic,
  activeTab,
  onTabChange
}) => {
  const navigate = useNavigate();

  const handleTopicClick = (topicSlug: string) => {
    navigate(`/topics/${topicSlug}`);
  };

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
    <div className="fixed bottom-12 left-0 right-0 bg-background border-t border-border z-30 px-2 py-2">
      {/* Feed Tabs */}
      <div className="mb-2">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-0.5 bg-secondary/50 h-8">
            <TabsTrigger 
              value="for-you"
              className="data-[state=active]:bg-primary data-[state=active]:text-white text-sm py-1"
            >
              For You
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white text-sm py-1"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Topics - Horizontally Scrollable */}
      <div className="overflow-x-auto pb-1 no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {topicCategories.map(topic => (
            <Badge 
              key={topic.name} 
              variant={selectedTopic === topic.slug ? "default" : "outline"}
              onClick={() => handleTopicClick(topic.slug)}
              className="cursor-pointer hover:scale-105 transition-transform px-2 py-1 text-xs whitespace-nowrap bg-yellow-500 flex-shrink-0"
            >
              {topic.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileTopicsBar;
