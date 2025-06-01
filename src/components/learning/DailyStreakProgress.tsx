
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
    <Card className="w-full max-w-sm bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Daily Questions</h3>
            </div>
            <Badge variant={isGoalReached ? "default" : "secondary"}>
              {isGoalReached ? "Complete!" : "In Progress"}
            </Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Today's Progress</span>
              <span className="font-medium">{questionsAnswered}/{dailyGoal}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Points</span>
              </div>
              <p className="text-2xl font-bold text-primary">{questionsAnswered}</p>
              <p className="text-xs text-muted-foreground">out of {dailyGoal}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trophy className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">Streak</span>
              </div>
              <p className="text-2xl font-bold text-orange-500">{currentStreak}</p>
              <p className="text-xs text-muted-foreground">days</p>
            </div>
          </div>

          {/* Status Message */}
          <div className="text-center pt-2">
            {isGoalReached ? (
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Daily goal achieved!</span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {dailyGoal - questionsAnswered} question{dailyGoal - questionsAnswered !== 1 ? 's' : ''} remaining
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStreakProgress;
