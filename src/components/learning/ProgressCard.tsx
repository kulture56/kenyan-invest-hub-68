
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2 } from "lucide-react";

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
  const progressPercentage = (completedModules / totalModules) * 100;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Award className="h-5 w-5 text-amber-500" />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Overall Completion</span>
          <Badge variant="outline">{completedModules}/{totalModules} Modules</Badge>
        </div>
        <Progress value={progressPercentage} className="h-2" />
        
        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-sm">{quizzesCompleted} Quizzes Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="text-sm">{badgesEarned} Badges Earned</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
