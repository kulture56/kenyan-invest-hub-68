
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Trophy, Target, CheckCircle } from "lucide-react";

interface DailyStreakProgressProps {
  questionsAnswered: number;
  dailyGoal: number;
  currentStreak: number;
}

const DailyStreakProgress: React.FC<DailyStreakProgressProps> = ({
  questionsAnswered = 2,
  dailyGoal = 3,
  currentStreak = 7
}) => {
  const progressPercentage = Math.min(questionsAnswered / dailyGoal * 100, 100);
  const isGoalReached = questionsAnswered >= dailyGoal;

  return (
    <Card className="max-w-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Daily Goal</span>
          </div>
          <Badge variant={isGoalReached ? "default" : "secondary"}>
            {questionsAnswered}/{dailyGoal}
          </Badge>
        </div>
        
        <Progress value={progressPercentage} className="h-2 mb-3" />
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Questions answered today</span>
          <div className="flex items-center gap-1">
            <Trophy className="h-3 w-3" />
            <span>{currentStreak} day streak</span>
          </div>
        </div>
        
        {isGoalReached && (
          <div className="flex items-center gap-1 mt-2 text-green-600">
            <CheckCircle className="h-3 w-3" />
            <span className="text-xs font-medium">Goal reached!</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyStreakProgress;
