
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import { XStyleNavigation } from "@/components/home/XStyleNavigation";
import { FeedPostCard } from "@/components/home/FeedPostCard";
import { CreatePostBox } from "@/components/post/CreatePostBox";
import SearchResults from "@/components/home/SearchResults";
import { AIChatbox } from "@/components/home/AIChatbox";
import { usePosts } from "@/hooks/usePosts";
import { useHomeData } from "@/hooks/useHomeData";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
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
    setSearchQuery(""); // Clear search when changing tabs
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => setIsSearching(false), 500);
    } else {
      setIsSearching(false);
    }
  };

  const renderPostsSkeleton = () => (
    <div className="space-y-1">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-3">
          <div className="flex items-center space-x-3 mb-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
          <Skeleton className="h-3 w-full mb-1" />
          <Skeleton className="h-3 w-3/4" />
        </Card>
      ))}
    </div>
  );

  return (
    <AppLayout>
      {/* Fixed Navigation Bar directly below header */}
      <div className="sticky top-14 z-30 bg-background border-b border-border/30 -mt-2">
        <XStyleNavigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-4 mt-1">
          {/* Main content */}
          <div className="md:col-span-3 space-y-1">
            {/* Search Bar - Mobile only (desktop search is in navbar) */}
            {isMobile && (
              <Card>
                <CardContent className="p-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search topics, posts, or users..." 
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Search Results */}
            {searchQuery && (
              <SearchResults 
                query={searchQuery}
                posts={posts}
                loading={isSearching}
              />
            )}

            {/* Regular content - only show if not searching */}
            {!searchQuery && (
              <>
                {/* Top Insights Section - only show on For You tab */}
                {activeTab === "for-you" && <TopInsightsCard insights={topInsights} />}

                {/* Create Post Box */}
                <CreatePostBox />

                {/* Posts Feed */}
                <div className="space-y-1">
                  {loading ? (
                    renderPostsSkeleton()
                  ) : error ? (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-6">
                        <h3 className="text-lg font-medium mb-1 text-red-500">Error loading posts</h3>
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
                      <CardContent className="flex flex-col items-center justify-center py-6">
                        <h3 className="text-lg font-medium mb-1">No posts yet</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Be the first to share something in this topic
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </>
            )}
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

      {/* AI Chatbox */}
      <AIChatbox />
    </AppLayout>
  );
};

export default Index;
