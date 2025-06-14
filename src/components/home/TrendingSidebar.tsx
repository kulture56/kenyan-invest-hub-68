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
  return;
};
export default TrendingSidebar;