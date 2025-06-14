
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

  return (
    <Card className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold flex items-center gap-2 text-purple-700 dark:text-purple-300">
          <Sparkles className="h-5 w-5" />
          Top Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.slice(0, 3).map((insight) => (
          <div key={insight.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1">{insight.title}</h4>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">{insight.topic}</Badge>
                <span className="text-xs text-muted-foreground">{insight.source}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="ml-2">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button variant="outline" className="w-full mt-3" onClick={() => navigate('/insights')}>
          View All Insights
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopInsightsCard;
