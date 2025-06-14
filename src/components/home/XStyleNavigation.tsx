
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface XStyleNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const mainTabs = [
  { id: "for-you", label: "For You" },
  { id: "following", label: "Following" },
  { id: "topics", label: "Topics" }
];

// Updated topic tabs to match current topics
const topicTabs = [
  { id: "stocks", label: "Stocks" },
  { id: "securities", label: "Securities" },
  { id: "funds", label: "Funds" },
  { id: "saccos", label: "Saccos" },
  { id: "insurance", label: "Insurance" },
  { id: "real-estate", label: "Real Estate" },
  { id: "technology", label: "Technology" },
  { id: "biz", label: "Biz" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "trading", label: "Trading" },
  { id: "market-analysis", label: "Market Analysis" },
  { id: "news", label: "News" }
];

export const XStyleNavigation: React.FC<XStyleNavigationProps> = ({
  activeTab,
  onTabChange
}) => {
  const [showTopics, setShowTopics] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMainTabClick = (tabId: string) => {
    if (tabId === "topics") {
      setShowTopics(true);
      // Default to first topic if not already on a topic
      if (!topicTabs.find(topic => topic.id === activeTab)) {
        onTabChange("stocks");
      }
    } else {
      setShowTopics(false);
      onTabChange(tabId);
    }
  };

  const handleTopicClick = (topicId: string) => {
    onTabChange(topicId);
    setShowTopics(true);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const currentMainTab = topicTabs.find(topic => topic.id === activeTab) ? "topics" : activeTab;
  const selectedTopic = topicTabs.find(topic => topic.id === activeTab);

  return (
    <div className="bg-background/95 backdrop-blur w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main segmented navigation */}
        <div className="flex justify-center px-4 py-2">
          <div className="flex bg-secondary/50 rounded-lg p-1">
            {mainTabs.map((tab) => (
              <div key={tab.id} className="relative">
                {tab.id === "topics" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1",
                          currentMainTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                        )}
                      >
                        {selectedTopic ? selectedTopic.label : tab.label}
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-48 max-h-80 overflow-y-auto z-50 bg-white border border-gray-200 shadow-lg"
                      align="center"
                    >
                      {topicTabs.map((topic) => (
                        <DropdownMenuItem
                          key={topic.id}
                          onClick={() => handleTopicClick(topic.id)}
                          className={cn(
                            "cursor-pointer px-3 py-2 text-sm hover:bg-accent",
                            activeTab === topic.id && "bg-accent text-accent-foreground font-medium"
                          )}
                        >
                          {topic.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    onClick={() => handleMainTabClick(tab.id)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                      currentMainTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    )}
                  >
                    {tab.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
