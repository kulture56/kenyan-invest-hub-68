import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface TopInsight {
  id: string;
  title: string;
  source: string;
  topic: string;
  date: string;
}
interface TopInsightsCardProps {
  insights: TopInsight[];
}
const TopInsightsCard: React.FC<TopInsightsCardProps> = ({
  insights
}) => {
  const navigate = useNavigate();
  return <Card className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
      
      
    </Card>;
};
export default TopInsightsCard;