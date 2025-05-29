
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Trophy, Target } from "lucide-react";

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
    <Card className="w-full max-w-sm bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">Daily Progress</span>
          </div>
          <Badge variant={isGoalReached ? "default" : "secondary"} className="text-xs">
            {questionsAnswered}/{dailyGoal}
          </Badge>
        </div>
        
        <Progress value={progressPercentage} className="mb-3 h-2" />
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            <span>{dailyGoal - questionsAnswered > 0 ? `${dailyGoal - questionsAnswered} more to go` : "Goal reached!"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="h-3 w-3" />
            <span>{currentStreak} day streak</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStreakProgress;
