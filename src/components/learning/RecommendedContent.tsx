import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, ChevronRight } from "lucide-react";
const RecommendedContent = () => {
  return <div className="mt-8 border-t pt-6">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        
        
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
    </div>;
};
export default RecommendedContent;