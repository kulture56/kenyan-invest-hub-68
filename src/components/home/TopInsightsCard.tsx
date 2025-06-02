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
  return <Card className="mb-6 border border-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Top Insights
          </CardTitle>
          <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-primary">
            View all <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      
    </Card>;
};
export default TopInsightsCard;