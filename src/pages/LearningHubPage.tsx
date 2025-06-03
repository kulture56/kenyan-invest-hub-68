
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockTicker from "@/components/stocks/StockTicker";
import DailyStreakProgress from "@/components/learning/DailyStreakProgress";
import LearningPathsTab from "@/components/learning/LearningPathsTab";
import GlossaryTab from "@/components/learning/GlossaryTab";
import StreaksTab from "@/components/learning/StreaksTab";
import ProgressCard from "@/components/learning/ProgressCard";
import RecommendedContent from "@/components/learning/RecommendedContent";
import { learningPaths, glossaryTerms, streaksData, weekDays } from "@/components/learning/mockData";

interface LearningHubPageProps {
  initialTab?: string;
}

const LearningHubPage: React.FC<LearningHubPageProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "learn");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/glossary") {
      setActiveTab("glossary");
    } else if (path === "/streaks") {
      setActiveTab("streaks");
    }
  }, [location]);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-2">
        <StockTicker compact={true} />
        
        <div className="flex justify-end">
          <DailyStreakProgress questionsAnswered={2} dailyGoal={3} currentStreak={streaksData.currentStreak} />
        </div>
        
        <ProgressCard completedModules={5} totalModules={26} quizzesCompleted={4} badgesEarned={2} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="learn">
            <LearningPathsTab learningPaths={learningPaths} />
          </TabsContent>
          
          <TabsContent value="glossary">
            <GlossaryTab glossaryTerms={glossaryTerms} />
          </TabsContent>
          
          <TabsContent value="streaks">
            <StreaksTab streaksData={streaksData} weekDays={weekDays} />
          </TabsContent>
        </Tabs>
        
        <RecommendedContent />
      </div>
    </AppLayout>
  );
};

export default LearningHubPage;
