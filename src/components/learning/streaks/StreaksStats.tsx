
import React from "react";
import { Separator } from "@/components/ui/separator";

interface StreaksStatsProps {
  currentStreak: number;
  longestStreak: number;
  thisWeek: number;
}

const StreaksStats: React.FC<StreaksStatsProps> = ({
  currentStreak,
  longestStreak,
  thisWeek
}) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="text-center">
        <div className="text-2xl lg:text-3xl font-bold">{currentStreak}</div>
        <div className="text-xs text-muted-foreground">Current Streak</div>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="text-center">
        <div className="text-2xl lg:text-3xl font-bold">{longestStreak}</div>
        <div className="text-xs text-muted-foreground">Longest Streak</div>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="text-center">
        <div className="text-2xl lg:text-3xl font-bold">{thisWeek}</div>
        <div className="text-xs text-muted-foreground">This Week</div>
      </div>
    </div>
  );
};

export default StreaksStats;
