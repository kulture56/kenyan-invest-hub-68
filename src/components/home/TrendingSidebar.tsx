
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, ArrowRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TrendingTopic {
  name: string;
  posts: number;
}

interface SuggestedQuestion {
  text: string;
}

interface TrendingSidebarProps {
  trendingTopics: TrendingTopic[];
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({
  trendingTopics,
  suggestedQuestions
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  
  // Updated trending topics to match our new categories
  const updatedTrendingTopics: TrendingTopic[] = [
    { name: "Investments", posts: 254 },
    { name: "Financial Education", posts: 187 },
    { name: "Market News", posts: 143 },
    { name: "Technology", posts: 98 },
    { name: "Trading", posts: 76 }
  ];
  
  return (
    <div className="sticky top-24 w-72 hidden lg:block">
      <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between p-4 border-b border-primary/10">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-primary">Trending Categories</h3>
              <ChartBar className="h-4 w-4 text-primary" />
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Menu className="h-4 w-4 text-primary" />
                <span className="sr-only">Toggle topics</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent>
            <CardContent className="p-4 pt-2">
              <ul className="space-y-2">
                {updatedTrendingTopics.map(topic => (
                  <li key={topic.name} className="hover-scale">
                    <a 
                      href={`/topics/${topic.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} 
                      className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-foreground font-medium">{topic.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{topic.posts}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="px-0 mt-3 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center">
                <span>View all categories</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
      
      <Card className="mt-4 border border-primary/10 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-primary/5 to-accent/5">
        
      </Card>
    </div>
  );
};

export default TrendingSidebar;
