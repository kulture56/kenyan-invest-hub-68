
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  progress: number;
  modules: number;
  completed: number;
  image: string;
  tags: string[];
  featured?: boolean;
}

interface LearningPathsTabProps {
  learningPaths: LearningPath[];
}

const LearningPathsTab: React.FC<LearningPathsTabProps> = ({ learningPaths }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map(path => (
        <Card key={path.id} className={`overflow-hidden ${path.featured ? 'border-primary/50' : ''}`}>
          <div className="h-32 bg-muted flex items-center justify-center">
            <img src={path.image} alt={path.title} className="w-full h-full object-cover" />
          </div>
          
          <CardHeader className="pb-2">
            {path.featured && (
              <div className="flex mb-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>
              </div>
            )}
            <CardTitle>{path.title}</CardTitle>
            <CardDescription>{path.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="pb-2">
            <div className="flex justify-between items-center mb-1 text-sm">
              <span>Progress</span>
              <span>{path.completed}/{path.modules} modules</span>
            </div>
            <Progress value={path.progress} className="h-2" />
            
            <div className="flex gap-2 mt-3 flex-wrap">
              {path.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button className="w-full">
              {path.progress > 0 ? "Continue Learning" : "Start Learning"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LearningPathsTab;
