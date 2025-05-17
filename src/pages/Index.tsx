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
      <div className="md:grid md:grid-cols-12 gap-6">
        {/* Main content - spans more columns on larger screens */}
        <div className="md:col-span-12 lg:col-span-8 xl:col-span-9 space-y-6">
          <div>
            
            
          </div>

          {/* Topics Bar */}
          <TopicsBar topics={topics} selectedTopic={selectedTopic} />

          {/* Top Insights Section */}
          <TopInsightsCard insights={topInsights} />

          {/* Feed Tabs */}
          <FeedTabs posts={posts} />
        </div>
        
        {/* Right sidebar content - only visible on larger screens */}
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <TrendingSidebar trendingTopics={trendingTopics} suggestedQuestions={suggestedQuestions} />
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileNavigation />}
    </AppLayout>;
};
export default Index;