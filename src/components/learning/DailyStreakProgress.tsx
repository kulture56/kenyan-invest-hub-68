
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Flame } from "lucide-react";

interface DailyStreakProgressProps {
  currentStreak: number;
  dailyGoal: number;
  todayProgress: number;
  compact?: boolean;
}

const DailyStreakProgress: React.FC<DailyStreakProgressProps> = ({
  currentStreak,
  dailyGoal,
  todayProgress,
  compact = false
}) => {
  const progressPercentage = (todayProgress / dailyGoal) * 100;

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-2 bg-primary/5 rounded-lg border">
        <div className="flex items-center gap-1">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-medium">{currentStreak}</span>
        </div>
        <div className="flex-1">
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Target className="h-3 w-3" />
          {todayProgress}/{dailyGoal}
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="font-semibold text-orange-700 dark:text-orange-300">
              {currentStreak} Day Streak!
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Target className="h-4 w-4" />
            Daily Goal: {dailyGoal} points
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Today's Progress</span>
            <span className="font-medium">{todayProgress}/{dailyGoal} points</span>
          </div>
          <Progress 
            value={progressPercentage} 
            className="h-2 bg-orange-100 dark:bg-orange-900"
          />
          {progressPercentage >= 100 && (
            <p className="text-xs text-green-600 dark:text-green-400 font-medium">
              🎉 Daily goal completed! Keep the streak going!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStreakProgress;
