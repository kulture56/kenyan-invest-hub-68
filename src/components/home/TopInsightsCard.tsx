
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
    <Card className="mb-6 border border-primary/10">
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
      <CardContent>
        {insights.length > 0 ? (
          <div className="space-y-3">
            {insights.map((insight) => (
              <div key={insight.id} className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{insight.source}</span>
                  <Badge variant="outline" className="text-xs">{insight.topic}</Badge>
                  <span>{insight.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            <p className="text-sm">No insights available at the moment</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TopInsightsCard;
