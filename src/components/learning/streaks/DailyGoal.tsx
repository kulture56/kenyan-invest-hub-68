
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface DailyGoalProps {
  dailyGoal: number;
  progress?: number;
}

const DailyGoal: React.FC<DailyGoalProps> = ({
  dailyGoal,
  progress = 65
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Today's Goal</span>
        <Badge variant="outline">{dailyGoal} points</Badge>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default DailyGoal;
