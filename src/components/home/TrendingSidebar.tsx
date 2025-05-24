
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
    navigate('/rafiki', { state: { suggestedQuestion: question } });
  };

  return (
    <div className="space-y-4">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <img 
              src="/lovable-uploads/d28d989c-e282-47dd-8e05-6184295539da.png" 
              alt="Trending" 
              className="h-5 w-5"
            />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.slice(0, 5).map((topic, index) => (
            <div key={topic.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {index + 1}.
                </span>
                <a 
                  href={`/topics/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {topic.name}
                </a>
              </div>
              <Badge variant="secondary" className="text-xs">
                {topic.posts}
              </Badge>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-xs text-primary hover:text-accent">
            View all topics
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </CardContent>
      </Card>

      {/* Rafiki AI Assistant */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Rafiki AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Get instant answers to your investment questions
          </p>
          <div className="space-y-2">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full text-left justify-start text-xs p-2 h-auto"
                onClick={() => handleQuestionClick(question)}
              >
                <MessageSquare className="h-3 w-3 mr-2 shrink-0 text-primary" />
                <span className="truncate">{question}</span>
              </Button>
            ))}
          </div>
          <Button 
            className="w-full text-xs" 
            onClick={() => navigate('/rafiki')}
          >
            Chat with Rafiki
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
