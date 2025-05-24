import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleQuestionClick = (question: string) => {
    navigate('/rafiki', {
      state: {
        suggestedQuestion: question
      }
    });
  };
  return <div className="space-y-4">
      {/* Trending Topics */}
      <Card>
        
        
      </Card>

      {/* Rafiki AI Assistant */}
      <Card>
        
        
      </Card>
    </div>;
};
export default TrendingSidebar;