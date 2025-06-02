
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2, BookOpen, Trophy } from "lucide-react";

interface ProgressCardProps {
  completedModules: number;
  totalModules: number;
  quizzesCompleted: number;
  badgesEarned: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  completedModules,
  totalModules,
  quizzesCompleted,
  badgesEarned
}) => {
  const progressPercentage = Math.round(completedModules / totalModules * 100);
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-primary" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Modules Completed</span>
            <span className="font-medium">{completedModules}/{totalModules}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground">{progressPercentage}% complete</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-sm">Quizzes</span>
            <Badge variant="secondary">{quizzesCompleted}</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Badges</span>
            <Badge variant="secondary">{badgesEarned}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
