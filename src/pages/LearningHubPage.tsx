
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
      <div className="max-w-full mx-auto px-4 pb-16">
        <div className="mb-6">
          <StockTicker compact={true} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-6 flex-wrap">
          <div className="w-full md:w-auto md:flex-1">
            <ProgressCard 
              completedModules={5} 
              totalModules={26} 
              quizzesCompleted={4} 
              badgesEarned={2} 
            />
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <img src="/lovable-uploads/800e50e9-0765-41ca-9728-eb655c16f679.png" alt="Learn" className="w-4 h-4" />
              <span>Learning Paths</span>
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <img src="/lovable-uploads/b2fe3736-d342-4f1d-b060-8bb25c5271de.png" alt="Glossary" className="w-4 h-4" />
              <span>Financial Glossary</span>
            </TabsTrigger>
            <TabsTrigger value="streaks" className="flex items-center gap-2">
              <img src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" alt="Streaks" className="w-4 h-4" />
              <span>Learning Streaks</span>
            </TabsTrigger>
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
