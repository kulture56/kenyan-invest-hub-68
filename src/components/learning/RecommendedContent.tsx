
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, ChevronRight } from "lucide-react";

const RecommendedContent = () => {
  const recommendedItems = [
    {
      id: 1,
      title: "Understanding Stock Market Basics",
      description: "Learn the fundamentals of stock trading and investment strategies",
      duration: "15 min read",
      difficulty: "Beginner",
      trending: true
    },
    {
      id: 2,
      title: "Cryptocurrency Investment Guide",
      description: "Comprehensive guide to investing in digital currencies",
      duration: "20 min read",
      difficulty: "Intermediate",
      trending: false
    },
    {
      id: 3,
      title: "Real Estate Investment Strategies",
      description: "Explore different approaches to real estate investing",
      duration: "12 min read",
      difficulty: "Advanced",
      trending: true
    }
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          Recommended Learning
        </CardTitle>
        <CardDescription>
          Curated content based on your learning progress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{item.title}</h4>
                  {item.trending && (
                    <Badge variant="secondary" className="text-xs">
                      Trending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{item.duration}</span>
                  <span>•</span>
                  <Badge variant="outline" className="text-xs">
                    {item.difficulty}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Start
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Recommendations
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendedContent;
