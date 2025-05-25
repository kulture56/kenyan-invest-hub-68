
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import TopFeedNavigation from "@/components/home/TopFeedNavigation";
import { EnhancedCreatePostBox } from "@/components/post/EnhancedCreatePostBox";
import { PostCard } from "@/components/post/PostCard";
import { useHomeData } from "@/hooks/useHomeData";

const Index = () => {
  const {
    posts,
    topics,
    trendingTopics,
    suggestedQuestions,
    topInsights,
    selectedTopic
  } = useHomeData();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <AppLayout>
      {/* Top Feed Navigation - replaces old topics bar and feed tabs */}
      <TopFeedNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedTopic={selectedTopic}
      />

      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-4">
          {/* Main content */}
          <div className="md:col-span-3 space-y-3 pt-2">
            {/* Top Insights Section */}
            <TopInsightsCard insights={topInsights} />

            {/* Enhanced Post Creation */}
            <EnhancedCreatePostBox />
            
            {/* Feed Content */}
            <div className={`space-y-3 ${isMobile ? 'pb-24' : 'pb-4'}`}>
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          
          {/* Right sidebar content */}
          {!isMobile && (
            <div className="md:col-span-1 pt-2">
              <TrendingSidebar 
                trendingTopics={trendingTopics} 
                suggestedQuestions={suggestedQuestions} 
              />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
