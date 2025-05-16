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
      <CardContent>
        <div className="space-y-2">
          {insights.map(insight => <div key={insight.id} className="p-2 hover:bg-primary/5 rounded-md cursor-pointer transition-colors" onClick={() => navigate(`/topics/${insight.topic.toLowerCase()}`)}>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm text-zinc-950">{insight.title}</h3>
                <Badge variant="outline" className="text-[10px] h-5 bg-purple-900">
                  {insight.topic}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground mt-1">
                <span className="text-purple-900">{insight.source}</span>
                <span>{insight.date}</span>
              </div>
            </div>)}
        </div>
      </CardContent>
    </Card>;
};
export default TopInsightsCard;