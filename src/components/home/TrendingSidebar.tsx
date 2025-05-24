
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TrendingTopic {
  name: string;
  posts: number;
}

interface SuggestedQuestion {
  text: string;
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
  
  return (
    <div className="sticky top-24 w-72 hidden lg:block">
      <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-4">
          <h3 className="font-medium text-primary mb-3">Financial Tips</h3>
          <p className="text-sm text-muted-foreground">
            Stay updated with the latest investment insights and market trends from the GELT community.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSidebar;
