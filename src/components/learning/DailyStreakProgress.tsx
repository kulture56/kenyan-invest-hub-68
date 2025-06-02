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
  return;
};
export default DailyStreakProgress;