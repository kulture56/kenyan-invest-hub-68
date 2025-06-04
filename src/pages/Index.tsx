
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
import TrendingSidebar from "@/components/home/TrendingSidebar";
import { XStyleNavigation } from "@/components/home/XStyleNavigation";
import { FeedPostCard } from "@/components/home/FeedPostCard";
import CreatePostBox from "@/components/post/CreatePostBox";
import SearchResults from "@/components/home/SearchResults";
import { AIChatbox } from "@/components/home/AIChatbox";
import { usePosts } from "@/hooks/usePosts";
import { useHomeData } from "@/hooks/useHomeData";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Enhanced example posts with new features
const examplePosts = [
  {
    id: "example1",
    user_id: "user1",
    content: "Just closed a fantastic investment opportunity in renewable energy. The future is green and profitable! 🌱💰",
    topic: "Investments",
    timestamp: new Date(Date.now() - 2000000).toISOString(),
    created_at: new Date(Date.now() - 2000000).toISOString(),
    updated_at: new Date(Date.now() - 2000000).toISOString(),
    likes: 42,
    comments: 15,
    shares: 8,
    reposts: 12,
    author_name: "Alice Wanjiku",
    author_username: "alicew",
    author_avatar: "/placeholder.svg",
    is_verified: true,
    image_url: "/lovable-uploads/photo-1518770660439-4636190af475"
  },
  {
    id: "example2",
    user_id: "user2",
    content: "Breaking: New fintech regulations announced by CBK. This will reshape the digital payments landscape in Kenya. What are your thoughts?",
    topic: "Market News",
    timestamp: new Date(Date.now() - 5000000).toISOString(),
    created_at: new Date(Date.now() - 5000000).toISOString(),
    updated_at: new Date(Date.now() - 5000000).toISOString(),
    likes: 28,
    comments: 12,
    shares: 6,
    reposts: 8,
    author_name: "John Muthuri",
    author_username: "johnm",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    mediaType: "youtube" as const
  },
  {
    id: "example3",
    user_id: "user3",
    content: "Check out this amazing explanation of cryptocurrency trends! Perfect for beginners 📈",
    topic: "Cryptocurrency",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    created_at: new Date(Date.now() - 7200000).toISOString(),
    updated_at: new Date(Date.now() - 7200000).toISOString(),
    likes: 35,
    comments: 18,
    shares: 10,
    reposts: 15,
    author_name: "Sarah Tech",
    author_username: "sarahtech",
    author_avatar: "/placeholder.svg",
    is_verified: true,
    mediaUrl: "https://media.giphy.com/media/26BRrSvJUa0crqw4E/giphy.gif",
    mediaType: "gif" as const
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { posts, loading, error } = usePosts(activeTab);
  const { trendingTopics, suggestedQuestions, topInsights, selectedTopic } = useHomeData();
  const isMobile = useIsMobile();

  // Combine example posts with real posts
  const allPosts = [...examplePosts, ...posts];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 500);
    } else {
      setIsSearching(false);
    }
  };

  const renderPostsSkeleton = () => (
    <div className="space-y-1">
      {[1, 2, 3].map(i => (
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
      <div className="sticky top-14 z-30 bg-background border-b border-border/30">
        <XStyleNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 space-y-1">
            {isMobile && (
              <Card>
                <CardContent className="p-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search topics, posts, or users..." 
                      className="pl-9" 
                      value={searchQuery} 
                      onChange={e => handleSearch(e.target.value)} 
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {searchQuery && (
              <SearchResults query={searchQuery} posts={allPosts} loading={isSearching} />
            )}

            {!searchQuery && (
              <>
                {activeTab === "for-you" && <TopInsightsCard insights={topInsights} />}

                <CreatePostBox />

                <div className="space-y-1">
                  {loading ? renderPostsSkeleton() : 
                   error ? (
                     <Card>
                       <CardContent className="flex flex-col items-center justify-center py-6">
                         <h3 className="text-lg font-medium mb-1 text-red-500">Error loading posts</h3>
                         <p className="text-sm text-muted-foreground text-center">{error}</p>
                       </CardContent>
                     </Card>
                   ) : 
                   allPosts.length > 0 ? (
                     allPosts.map(post => <FeedPostCard key={post.id} post={post} />)
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
          
          {!isMobile && <TrendingSidebar trendingTopics={trendingTopics} suggestedQuestions={suggestedQuestions} />}
        </div>
      </div>

      <AIChatbox />
    </AppLayout>
  );
};

export default Index;
