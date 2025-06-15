
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
  // trendingTopics, (Removed, as per request)
  suggestedQuestions
}) => {
  return (
    <aside className="space-y-6 px-2 py-4">
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center gap-2">
          <MessageSquare className="h-4 w-4 text-purple-700" />
          <CardTitle className="text-sm text-purple-700 font-bold">
            AI Suggests
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-1">
          <ul className="space-y-3">
            {suggestedQuestions.map((q, i) => (
              <li key={i}>
                <Badge className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded">
                  Suggested
                </Badge>
                <span className="block mt-1 text-sm text-foreground">{q}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
export default TrendingSidebar;
