import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import TopInsightsCard from "@/components/home/TopInsightsCard";
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

// Enhanced example posts where the `topic` values exactly match the navigation topics.
// There is now at least one example for each topic.
const examplePosts = [
  {
    id: "example-stocks",
    user_id: "user1",
    content: "Safaricom stock is showing strong momentum. Great time to research their fundamentals!",
    topic: "Stocks",
    timestamp: new Date(Date.now() - 1000000).toISOString(),
    created_at: new Date(Date.now() - 1000000).toISOString(),
    updated_at: new Date(Date.now() - 1000000).toISOString(),
    likes: 30,
    comments: 7,
    shares: 4,
    reposts: 2,
    author_name: "Winnie Mugo",
    author_username: "wmugo",
    author_avatar: "/placeholder.svg",
    is_verified: true,
    image_url: ""
  },
  {
    id: "example-securities",
    user_id: "user2",
    content: "Government securities remain a reliable choice for risk-averse investors in 2025.",
    topic: "Securities",
    timestamp: new Date(Date.now() - 2300000).toISOString(),
    created_at: new Date(Date.now() - 2300000).toISOString(),
    updated_at: new Date(Date.now() - 2300000).toISOString(),
    likes: 19,
    comments: 6,
    shares: 2,
    reposts: 1,
    author_name: "Collins Kosgei",
    author_username: "ckosgei",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-funds",
    user_id: "user3",
    content: "I just diversified into equity funds. The returns look promising!",
    topic: "Funds",
    timestamp: new Date(Date.now() - 3900000).toISOString(),
    created_at: new Date(Date.now() - 3900000).toISOString(),
    updated_at: new Date(Date.now() - 3900000).toISOString(),
    likes: 25,
    comments: 9,
    shares: 5,
    reposts: 0,
    author_name: "Grace Otieno",
    author_username: "gotieno",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-saccos",
    user_id: "user4",
    content: "Saccos offer not only loans, but also impressive annual dividends. Don't overlook them!",
    topic: "Saccos",
    timestamp: new Date(Date.now() - 5100000).toISOString(),
    created_at: new Date(Date.now() - 5100000).toISOString(),
    updated_at: new Date(Date.now() - 5100000).toISOString(),
    likes: 18,
    comments: 4,
    shares: 2,
    reposts: 3,
    author_name: "John Kariuki",
    author_username: "jkar",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-insurance",
    user_id: "user5",
    content: "Why is life insurance so important for young families? Peace of mind is priceless.",
    topic: "Insurance",
    timestamp: new Date(Date.now() - 6500000).toISOString(),
    created_at: new Date(Date.now() - 6500000).toISOString(),
    updated_at: new Date(Date.now() - 6500000).toISOString(),
    likes: 12,
    comments: 2,
    shares: 1,
    reposts: 0,
    author_name: "Esther Nduta",
    author_username: "ndutae",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-realestate",
    user_id: "user6",
    content: "Land in Ngong has appreciated by 8% in just two years. Real Estate is still king!",
    topic: "Real Estate",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    created_at: new Date(Date.now() - 7200000).toISOString(),
    updated_at: new Date(Date.now() - 7200000).toISOString(),
    likes: 22,
    comments: 3,
    shares: 2,
    reposts: 1,
    author_name: "Paul Njoroge",
    author_username: "pnjoroge",
    author_avatar: "/placeholder.svg",
    is_verified: true,
    image_url: ""
  },
  {
    id: "example-technology",
    user_id: "user7",
    content: "Fintech apps make investing seamless for everyday Kenyans. Which is your favorite?",
    topic: "Technology",
    timestamp: new Date(Date.now() - 8500000).toISOString(),
    created_at: new Date(Date.now() - 8500000).toISOString(),
    updated_at: new Date(Date.now() - 8500000).toISOString(),
    likes: 17,
    comments: 6,
    shares: 2,
    reposts: 2,
    author_name: "Kevin Ochieng",
    author_username: "kevtech",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-biz",
    user_id: "user8",
    content: "Pivoting my small biz to digital sales channels has doubled my profits in 3 months.",
    topic: "Biz",
    timestamp: new Date(Date.now() - 9100000).toISOString(),
    created_at: new Date(Date.now() - 9100000).toISOString(),
    updated_at: new Date(Date.now() - 9100000).toISOString(),
    likes: 10,
    comments: 1,
    shares: 0,
    reposts: 0,
    author_name: "Lilian Mwangi",
    author_username: "lmwangi",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-entrepreneurship",
    user_id: "user9",
    content: "Entrepreneurship is tough, but a good network is everything. Join local meetups—seriously!",
    topic: "Entrepreneurship",
    timestamp: new Date(Date.now() - 10400000).toISOString(),
    created_at: new Date(Date.now() - 10400000).toISOString(),
    updated_at: new Date(Date.now() - 10400000).toISOString(),
    likes: 15,
    comments: 4,
    shares: 1,
    reposts: 0,
    author_name: "Brian Mutuku",
    author_username: "brianmut",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-trading",
    user_id: "user10",
    content: "Day trading isn't for the faint-hearted. Know your stop-loss levels!",
    topic: "Trading",
    timestamp: new Date(Date.now() - 11700000).toISOString(),
    created_at: new Date(Date.now() - 11700000).toISOString(),
    updated_at: new Date(Date.now() - 11700000).toISOString(),
    likes: 8,
    comments: 3,
    shares: 2,
    reposts: 2,
    author_name: "Samuel Kiptoo",
    author_username: "skiptoo",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
  },
  {
    id: "example-marketanalysis",
    user_id: "user11",
    content: "NSE monthly market analysis: Growth in blue chips but watch retail investor sentiment closely.",
    topic: "Market Analysis",
    timestamp: new Date(Date.now() - 13200000).toISOString(),
    created_at: new Date(Date.now() - 13200000).toISOString(),
    updated_at: new Date(Date.now() - 13200000).toISOString(),
    likes: 18,
    comments: 3,
    shares: 1,
    reposts: 0,
    author_name: "Angela Kimani",
    author_username: "angiek",
    author_avatar: "/placeholder.svg",
    is_verified: true,
    image_url: ""
  },
  {
    id: "example-news",
    user_id: "user12",
    content: "CBK reduces lending rate. How will this impact consumer credit demand?",
    topic: "News",
    timestamp: new Date(Date.now() - 14800000).toISOString(),
    created_at: new Date(Date.now() - 14800000).toISOString(),
    updated_at: new Date(Date.now() - 14800000).toISOString(),
    likes: 9,
    comments: 2,
    shares: 0,
    reposts: 0,
    author_name: "Janet Wamae",
    author_username: "jwamae",
    author_avatar: "/placeholder.svg",
    is_verified: false,
    image_url: ""
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
      <div className="sticky top-0 z-30 bg-background border-b border-border/30">
        <XStyleNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Make max width larger and drop grid columns for trending sidebar */}
      <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="space-y-1"> {/* Removed grid, make everything full width inside */}
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
      </div>
      <AIChatbox />
    </AppLayout>
  );
};

export default Index;
