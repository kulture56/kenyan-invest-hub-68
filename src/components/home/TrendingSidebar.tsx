
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TrendingTopic {
  name: string;
  posts: number;
}

interface TrendingSidebarProps {
  trendingTopics: TrendingTopic[];
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({
  trendingTopics,
  suggestedQuestions
}) => {
  return (
    <div className="space-y-4">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <img src="/lovable-uploads/e185559d-e241-40b2-8d0b-d25079f6212e.png" alt="Trending" className="w-5 h-5" />
            Trending Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
              <span className="text-sm font-medium">{topic.name}</span>
              <Badge variant="secondary" className="text-xs">
                {topic.posts}
              </Badge>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10" size="sm">
            <span className="text-sm">View all topics</span>
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
