import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TopicsBar from "@/components/home/TopicsBar";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import FeedTabs from "@/components/home/FeedTabs";
import MobileNavigation from "@/components/home/MobileNavigation";
import { useHomeData } from "@/hooks/useHomeData";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const {
    posts,
    topics,
    trendingTopics,
    suggestedQuestions,
    topInsights,
    selectedTopic
  } = useHomeData();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return <AppLayout>
      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-6">
          {/* Main content - adjusted width for better centering */}
          <div className="md:col-span-3 space-y-4">
            {/* Topics Bar */}
            <TopicsBar topics={topics} selectedTopic={selectedTopic} />

            {/* Top Insights Section */}
            <TopInsightsCard insights={topInsights} />

            {/* Feed Tabs */}
            <FeedTabs posts={posts} />
          </div>
          
          {/* Right sidebar content - now properly positioned */}
          {!isMobile}
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileNavigation />}
    </AppLayout>;
};
export default Index;