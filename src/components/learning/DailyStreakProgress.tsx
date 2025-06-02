
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Flame } from "lucide-react";

interface DailyStreakProgressProps {
  questionsAnswered: number;
  dailyGoal: number;
  currentStreak: number;
}

const DailyStreakProgress: React.FC<DailyStreakProgressProps> = ({
  questionsAnswered,
  dailyGoal,
  currentStreak
}) => {
  const progressPercentage = (questionsAnswered / dailyGoal) * 100;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Daily Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Questions Answered</span>
            <span>{questionsAnswered}/{dailyGoal}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Flame className="h-4 w-4 text-orange-500" />
          <span>{currentStreak} day streak</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStreakProgress;
