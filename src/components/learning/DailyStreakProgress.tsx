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
  const progressPercentage = questionsAnswered / dailyGoal * 100;
  return <Card>
      
      
    </Card>;
};
export default DailyStreakProgress;