
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, ArrowRight, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({ trendingTopics, suggestedQuestions }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed right-6 top-24 w-72 hidden lg:block">
      <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-primary">Trending Topics</h3>
            <ChartBar className="h-4 w-4 text-primary" />
          </div>
          <ul className="space-y-3">
            {trendingTopics.map((topic) => (
              <li key={topic.name} className="hover-scale">
                <a 
                  href={`/topics/${topic.name.toLowerCase()}`}
                  className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-primary/5 transition-colors"
                >
                  <span className="text-foreground font-medium">#{topic.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{topic.posts}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" className="px-0 mt-4 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center">
            <span>View all topics</span>
            <ArrowRight className="h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
      
      <Card className="mt-4 border border-primary/10 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-float">
              <span className="text-xs font-bold text-white">R</span>
            </div>
            <h3 className="font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rafiki Says</h3>
          </div>
          <p className="text-sm text-foreground bg-white/50 p-3 rounded-lg border border-primary/10">
            "Treasury bills yield has increased by 0.3% this week, creating an opportunity for short-term investments."
          </p>
          <h4 className="text-sm font-medium mt-4 mb-2">Ask Rafiki about:</h4>
          <div className="space-y-2">
            {suggestedQuestions.map((question, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="sm" 
                className="text-xs justify-start w-full h-auto py-1.5 hover:bg-primary/5"
                onClick={() => navigate('/rafiki', { state: { suggestedQuestion: question } })}
              >
                <span className="truncate">{question}</span>
              </Button>
            ))}
          </div>
          <Button 
            variant="ghost" 
            className="px-0 mt-4 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center"
            onClick={() => navigate('/rafiki')}
          >
            <span>Ask Rafiki</span>
            <ArrowRight className="h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
