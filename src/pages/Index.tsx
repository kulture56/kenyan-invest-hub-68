
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import { XStyleNavigation } from "@/components/home/XStyleNavigation";
import { FeedPostCard } from "@/components/home/FeedPostCard";
import { CreatePostBox } from "@/components/post/CreatePostBox";
import { usePosts } from "@/hooks/usePosts";
import { useHomeData } from "@/hooks/useHomeData";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  const { posts, loading, error } = usePosts(activeTab);
  const {
    trendingTopics,
    suggestedQuestions,
    topInsights,
    selectedTopic
  } = useHomeData();
  const isMobile = useIsMobile();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderPostsSkeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </Card>
      ))}
    </div>
  );

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        {/* X-Style Navigation - Always visible below header */}
        <XStyleNavigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="md:grid md:grid-cols-4 gap-4 mt-4">
          {/* Main content */}
          <div className="md:col-span-3 space-y-2">
            {/* Top Insights Section */}
            <TopInsightsCard insights={topInsights} />

            {/* Create Post Section */}
            <CreatePostBox />

            {/* Posts Feed */}
            <div className="space-y-2">
              {loading ? (
                renderPostsSkeleton()
              ) : error ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <h3 className="text-lg font-medium mb-2 text-red-500">Error loading posts</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {error}
                    </p>
                  </CardContent>
                </Card>
              ) : posts.length > 0 ? (
                posts.map((post) => (
                  <FeedPostCard key={post.id} post={post} />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Be the first to share something in this topic
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Right sidebar content */}
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
    </AppLayout>
  );
};

export default Index;
