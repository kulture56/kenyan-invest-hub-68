
import React, { useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import OnboardingFlow from "@/components/onboarding/OnboardingFlow";
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
    selectedTopic,
    showOnboarding,
    setShowOnboarding,
    checkIfNewUser,
    completeOnboarding
  } = useHomeData();
  
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    checkIfNewUser();
  }, []);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Home</h1>
          <p className="text-muted-foreground">Your investment community feed</p>
        </div>

        {/* Topics Bar */}
        <TopicsBar topics={topics} selectedTopic={selectedTopic} />

        {/* Top Insights Section */}
        <TopInsightsCard insights={topInsights} />

        {/* Feed Tabs */}
        <FeedTabs posts={posts} />
      </div>
      
      {/* Right sidebar content */}
      <TrendingSidebar 
        trendingTopics={trendingTopics} 
        suggestedQuestions={suggestedQuestions} 
      />

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileNavigation />}

      {/* Onboarding Flow */}
      <Drawer open={showOnboarding} onOpenChange={setShowOnboarding}>
        <DrawerContent className="max-h-[90vh]">
          <OnboardingFlow completeOnboarding={completeOnboarding} />
        </DrawerContent>
      </Drawer>
    </AppLayout>
  );
};

export default Index;
