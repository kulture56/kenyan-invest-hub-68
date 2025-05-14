
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, ChevronRight } from "lucide-react";

const RecommendedContent = () => {
  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5" />
        Recommended for You
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="h-24 bg-muted relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Understanding the NSE</CardTitle>
            <CardDescription className="text-xs">5 min video</CardDescription>
          </CardHeader>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <span>Watch Now</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">MMF Glossary Terms</CardTitle>
            <CardDescription className="text-xs">Key terms for money market funds</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-sm">
              <ul className="list-disc pl-4 space-y-1">
                <li>Yield</li>
                <li>Liquidity</li>
                <li>Interest Rate Risk</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <span>View Terms</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Risk Assessment Quiz</CardTitle>
            <CardDescription className="text-xs">Find your risk tolerance</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <Badge variant="outline">5 minutes</Badge>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <span>Take Quiz</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RecommendedContent;
