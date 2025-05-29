
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

const LearningHubPage: React.FC<LearningHubPageProps> = ({
  initialTab
}) => {
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
      {/* Optimized container with minimal spacing */}
      <div className="max-w-4xl mx-auto space-y-1">
        {/* Compact stock ticker */}
        <StockTicker compact={true} />
        
        {/* Progress card with optimized spacing */}
        <ProgressCard completedModules={5} totalModules={26} quizzesCompleted={4} badgesEarned={2} />
        
        {/* Main content tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
            <TabsTrigger value="streaks">Streaks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="mt-1">
            <LearningPathsTab learningPaths={learningPaths} />
          </TabsContent>
          
          <TabsContent value="glossary" className="mt-1">
            <GlossaryTab glossaryTerms={glossaryTerms} />
          </TabsContent>
          
          <TabsContent value="streaks" className="mt-1">
            <StreaksTab streaksData={streaksData} weekDays={weekDays} />
          </TabsContent>
        </Tabs>
        
        {/* Recommended content with minimal spacing */}
        <RecommendedContent />
      </div>
    </AppLayout>
  );
};

export default LearningHubPage;
