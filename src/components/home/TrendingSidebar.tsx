
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageSquare } from "lucide-react";

interface TrendingSidebarProps {
  trendingTopics: Array<{ name: string; posts: number }>;
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({
  trendingTopics,
  suggestedQuestions
}) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors">
              <span className="text-sm font-medium">{topic.name}</span>
              <Badge variant="secondary" className="text-xs">
                {topic.posts} posts
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Suggested Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full text-left justify-start h-auto p-2 text-xs"
            >
              {question}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
