
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface Topic {
  name: string;
  slug: string;
}

interface TopFeedNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  selectedTopic?: string;
}

const TopFeedNavigation: React.FC<TopFeedNavigationProps> = ({
  activeTab,
  onTabChange,
  selectedTopic
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleTopicClick = (topicSlug: string) => {
    navigate(`/topics/${topicSlug}`);
  };

  const topicCategories: Topic[] = [
    { name: "Investments", slug: "investments" },
    { name: "Institutions", slug: "institutions" },
    { name: "Savings", slug: "savings-financial-wellness" },
    { name: "Trading", slug: "trading" },
    { name: "Jamii", slug: "community-social" },
    { name: "Financial Education", slug: "financial-education" },
    { name: "News", slug: "market-news" },
    { name: "Technology", slug: "technology" },
    { name: "Businesses", slug: "businesses" }
  ];

  return (
    <div className="sticky top-14 bg-background/95 backdrop-blur border-b border-border z-20">
      {/* Main Feed Tabs */}
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-0.5 bg-transparent border-b-0 h-12">
            <TabsTrigger 
              value="for-you"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none font-medium"
            >
              For You
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none font-medium"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Topics Scrollable Bar */}
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-2 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {topicCategories.map(topic => (
            <Badge 
              key={topic.name} 
              variant={selectedTopic === topic.slug ? "default" : "outline"}
              onClick={() => handleTopicClick(topic.slug)}
              className="cursor-pointer hover:scale-105 transition-transform px-3 py-1 text-xs whitespace-nowrap flex-shrink-0 bg-yellow-500 hover:bg-yellow-600"
            >
              {topic.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFeedNavigation;
