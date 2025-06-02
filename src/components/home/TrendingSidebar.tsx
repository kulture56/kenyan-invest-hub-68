
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

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
            <TrendingUp className="h-5 w-5 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                <span className="font-medium">{topic.name}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {topic.posts} posts
              </Badge>
            </div>
          ))}
          <Button variant="ghost" className="w-full justify-between text-sm mt-3">
            View all topics
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Suggested Questions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Suggested Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full text-left justify-start p-3 h-auto text-sm text-muted-foreground hover:text-foreground"
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
