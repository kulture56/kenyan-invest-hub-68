
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface XStyleNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationTabs = [
  { id: "for-you", label: "For You", description: "Algorithmically curated feed" },
  { id: "following", label: "Following", description: "Posts from people you follow" },
  { id: "institutions", label: "Institutions", description: "Verified companies and organizations" },
  { id: "trading", label: "Trading", description: "Forex, stocks, and trading discussions" },
  { id: "news", label: "News", description: "Breaking financial news" },
  { id: "technology", label: "Technology", description: "Tech companies and startups" },
  { id: "businesses", label: "Businesses", description: "Business opportunities and networking" },
  { id: "real-estate", label: "Real Estate", description: "Property investments and news" },
  { id: "financial-education", label: "Financial Education", description: "Learning and educational content" },
  { id: "investments", label: "Investments", description: "Investment vehicles and opportunities" }
];

export const XStyleNavigation: React.FC<XStyleNavigationProps> = ({
  activeTab,
  onTabChange
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="border-b border-border/30 bg-background/95 backdrop-blur sticky top-14 z-20">
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-1 min-w-max px-4">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 hover:bg-accent/50",
                  activeTab === tab.id
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator button for mobile */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            className="h-8 w-8 p-0 bg-background/80 backdrop-blur"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
