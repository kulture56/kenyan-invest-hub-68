
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
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Course Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedModules}/{totalModules} modules
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {progressPercentage}% completed
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <BookOpen className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-lg font-bold">{completedModules}</p>
              <p className="text-xs text-muted-foreground">Modules</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-lg font-bold">{quizzesCompleted}</p>
              <p className="text-xs text-muted-foreground">Quizzes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Award className="h-4 w-4 text-purple-500" />
              </div>
              <p className="text-lg font-bold">{badgesEarned}</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
