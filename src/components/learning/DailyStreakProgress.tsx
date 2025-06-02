
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
  const progressPercentage = Math.min((questionsAnswered / dailyGoal) * 100, 100);
  const isGoalReached = questionsAnswered >= dailyGoal;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Daily Progress</h3>
        </div>
        <Badge variant={isGoalReached ? "default" : "secondary"}>
          {questionsAnswered}/{dailyGoal}
        </Badge>
      </div>
      
      <Progress value={progressPercentage} className="mb-4" />
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {isGoalReached ? "Goal reached!" : `${dailyGoal - questionsAnswered} more to go`}
        </span>
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4 text-orange-500" />
          <span className="font-medium">{currentStreak} day streak</span>
        </div>
      </div>
    </Card>
  );
};

export default DailyStreakProgress;
