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
  return <div className="space-y-4">
      {/* Trending Topics */}
      <Card>
        
        
      </Card>

      {/* Suggested Questions */}
      <Card>
        
        
      </Card>
    </div>;
};
export default TrendingSidebar;