
import React, { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-12 left-0 right-0 bg-background border-t border-border z-30 px-1 py-1">
      {/* Feed Tabs */}
      <div className="mb-1">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-0.5 bg-secondary/50 h-7">
            <TabsTrigger 
              value="for-you"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs py-0.5"
            >
              For You
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs py-0.5"
            >
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Topics with Chevron Navigation */}
      <div className="relative flex items-center">
        {/* Left Chevron */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollLeft}
            className="absolute left-0 z-10 h-6 w-6 p-0 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full"
          >
            <ChevronLeft className="h-3 w-3 text-purple-600" />
          </Button>
        )}

        {/* Scrollable Topics Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar flex-1 mx-6"
          onScroll={checkScrollability}
        >
          <div className="flex gap-1.5 min-w-max px-1">
            {topicCategories.map(topic => (
              <Badge 
                key={topic.name} 
                variant={selectedTopic === topic.slug ? "default" : "outline"}
                onClick={() => handleTopicClick(topic.slug)}
                className="cursor-pointer hover:scale-105 transition-transform px-2 py-0.5 text-xs whitespace-nowrap bg-purple-500 text-white hover:bg-purple-600 flex-shrink-0"
              >
                {topic.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Chevron */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            className="absolute right-0 z-10 h-6 w-6 p-0 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full"
          >
            <ChevronRight className="h-3 w-3 text-purple-600" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileTopicsBar;
