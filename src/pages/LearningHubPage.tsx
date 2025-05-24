
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockTicker from "@/components/stocks/StockTicker";

// Import our components
import LearningPathsTab from "@/components/learning/LearningPathsTab";
import GlossaryTab from "@/components/learning/GlossaryTab";
import StreaksTab from "@/components/learning/StreaksTab";
import ProgressCard from "@/components/learning/ProgressCard";
import RecommendedContent from "@/components/learning/RecommendedContent";

// Import mock data
import { learningPaths, glossaryTerms, streaksData, weekDays } from "@/components/learning/mockData";

interface LearningHubPageProps {
  initialTab?: string;
}

const LearningHubPage: React.FC<LearningHubPageProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "learn");
  const location = useLocation();

  // Set activeTab based on URL path
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
      <div className="max-w-full mx-auto pb-12">
        <div className="mb-4">
          <StockTicker compact={true} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4 flex-wrap">
          <div className="w-full md:w-auto md:flex-1">
            <ProgressCard completedModules={5} totalModules={26} quizzesCompleted={4} badgesEarned={2} />
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learn">Learning Paths</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
            <TabsTrigger value="streaks">Streaks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="space-y-4">
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
