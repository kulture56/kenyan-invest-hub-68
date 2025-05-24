
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TopicsBar from "@/components/home/TopicsBar";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import FeedTabs from "@/components/home/FeedTabs";
import MobileTopicsBar from "@/components/home/MobileTopicsBar";
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
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-4">
          {/* Main content - adjusted width for better centering */}
          <div className="md:col-span-3 space-y-2">
            {/* Topics Bar - Desktop only */}
            {!isMobile && <TopicsBar topics={topics} selectedTopic={selectedTopic} />}

            {/* Top Insights Section */}
            <TopInsightsCard insights={topInsights} />

            {/* Feed Tabs - Desktop only */}
            {!isMobile && <FeedTabs posts={posts} />}
            
            {/* Mobile Feed Content */}
            {isMobile && (
              <div className="pb-24 space-y-2">
                <div className="space-y-2">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-card rounded-lg border p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-sm">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">@{post.author.username}</p>
                        </div>
                      </div>
                      <p className="text-sm mb-2">{post.content}</p>
                      {post.image && (
                        <img src={post.image} alt="Post content" className="w-full rounded-lg mb-2" />
                      )}
                      <div className="flex items-center gap-4 text-muted-foreground text-xs">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                        <span>{post.shares} shares</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right sidebar content - now properly positioned */}
          {!isMobile && (
            <div className="md:col-span-1">
              <TrendingSidebar 
                trendingTopics={trendingTopics} 
                suggestedQuestions={suggestedQuestions} 
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Topics Bar - Fixed at bottom above footer */}
      {isMobile && (
        <MobileTopicsBar 
          topics={topics} 
          selectedTopic={selectedTopic}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}
    </AppLayout>
  );
};

export default Index;
