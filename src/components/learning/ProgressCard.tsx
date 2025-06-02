
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
  const progressPercentage = Math.round((completedModules / totalModules) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Modules Completed</span>
            <span>{completedModules}/{totalModules}</span>
          </div>
          <Progress value={progressPercentage} />
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center mb-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-sm text-muted-foreground">Quizzes</p>
            <p className="font-semibold">{quizzesCompleted}</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-1">
              <Award className="h-4 w-4 text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground">Badges</p>
            <p className="font-semibold">{badgesEarned}</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-1">
              <Trophy className="h-4 w-4 text-orange-500" />
            </div>
            <p className="text-sm text-muted-foreground">Progress</p>
            <p className="font-semibold">{progressPercentage}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
