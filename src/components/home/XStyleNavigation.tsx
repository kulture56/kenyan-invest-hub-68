
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface XStyleNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const mainTabs = [
  { id: "for-you", label: "For You" },
  { id: "following", label: "Following" },
  { id: "topics", label: "Topics" }
];

const topicTabs = [
  { id: "institutions", label: "Institutions" },
  { id: "trading", label: "Trading" },
  { id: "news", label: "News" },
  { id: "technology", label: "Technology" },
  { id: "businesses", label: "Businesses" },
  { id: "real-estate", label: "Real Estate" },
  { id: "financial-education", label: "Financial Education" },
  { id: "investments", label: "Investments" },
  { id: "savings", label: "Savings" },
  { id: "market-analysis", label: "Market Analysis" }
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
        onTabChange("institutions");
      }
    } else {
      setShowTopics(false);
      onTabChange(tabId);
    }
  };

  const handleTopicClick = (topicId: string) => {
    onTabChange(topicId);
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

  return (
    <div className="bg-background/95 backdrop-blur w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main segmented navigation */}
        <div className="flex justify-center px-4 py-2">
          <div className="flex bg-secondary/50 rounded-lg p-1">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
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
            ))}
          </div>
        </div>

        {/* Topics horizontal scroll - only show when Topics is selected */}
        {(showTopics || topicTabs.find(topic => topic.id === activeTab)) && (
          <div className="relative border-t border-border/30">
            {isMobile && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollLeft}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8 p-0 bg-background/90 backdrop-blur border border-border/50 rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollRight}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 h-8 w-8 p-0 bg-background/90 backdrop-blur border border-border/50 rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide px-4 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-1 min-w-max">
                {topicTabs.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicClick(topic.id)}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-200 border",
                      activeTab === topic.id
                        ? "bg-yellow-500 text-black border-yellow-600"
                        : "border-border text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
