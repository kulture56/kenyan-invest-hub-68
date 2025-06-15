
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageSquare } from "lucide-react";

interface TrendingSidebarProps {
  trendingTopics: Array<{
    name: string;
    posts: number;
  }>;
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({
  trendingTopics,
  suggestedQuestions
}) => {
  return (
    <aside>
      <Card className="mb-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-orange-700 dark:text-orange-300">
            <TrendingUp className="h-5 w-5 text-orange-500 dark:text-orange-400" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {trendingTopics.map((topic, idx) => (
              <li key={topic.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-200 group-hover:bg-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-700 dark:group-hover:bg-orange-900/70 transition-colors px-2 py-0.5">
                    #{idx + 1}
                  </Badge>
                  <span className="font-medium text-orange-900 dark:text-orange-100">{topic.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-2 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 border-blue-200 dark:border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-blue-700 dark:text-blue-300">
            <MessageSquare className="h-5 w-5 text-blue-400 dark:text-blue-300" />
            Suggested Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {suggestedQuestions.map((question, idx) => (
              <li key={idx} className="flex items-center gap-2 pl-1">
                <span className="text-blue-700 dark:text-blue-200 font-semibold">Q{idx + 1}</span>
                <span className="text-blue-900 dark:text-blue-50">{question}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="text-xs text-muted-foreground text-center mt-4">
        Discover which topics are gaining traction. Join trending discussions!
      </div>
    </aside>
  );
};

export default TrendingSidebar;
