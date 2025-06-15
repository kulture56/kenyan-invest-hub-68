import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import StreaksStats from "./StreaksStats";
import DailyGoal from "./DailyGoal";
import WeeklyChart from "./WeeklyChart";
import DailyQuestions from "./DailyQuestions";
interface StreaksData {
  currentStreak: number;
  longestStreak: number;
  thisWeek: number;
  dailyGoal: number;
  weeklyPoints: number[];
}
interface StreaksOverviewProps {
  streaksData: StreaksData;
  weekDays: string[];
}

// Mock daily streak questions
const dailyQuestions = [{
  id: 1,
  text: "What is the current Treasury Bill rate in Kenya?",
  completed: true
}, {
  id: 2,
  text: "Which stock had the highest gain on NSE yesterday?",
  completed: true
}, {
  id: 3,
  text: "What's the recommended minimum emergency fund size?",
  completed: false
}, {
  id: 4,
  text: "What is the current inflation rate in Kenya?",
  completed: false
}];
const StreaksOverview: React.FC<StreaksOverviewProps> = ({
  streaksData,
  weekDays
}) => {
  return <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="h-5 w-5 text-amber-500">
            <img src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" alt="Streaks" className="h-full w-full object-contain" />
          </div>
          Streaks
        </CardTitle>
        <CardDescription>Keep learning daily to build streaks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <StreaksStats currentStreak={streaksData.currentStreak} longestStreak={streaksData.longestStreak} thisWeek={streaksData.thisWeek} />
        
        <DailyGoal dailyGoal={streaksData.dailyGoal} />
        
        <WeeklyChart weekDays={weekDays} weeklyPoints={streaksData.weeklyPoints} />
        
        
        
        <DailyQuestions questions={dailyQuestions} />
      </CardContent>
    </Card>;
};
export default StreaksOverview;