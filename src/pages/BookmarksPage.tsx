import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedPostCard } from "@/components/home/FeedPostCard";
import { Bookmark, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/Post";
const BookmarksPage = () => {
  // Mock bookmarked posts data with all required properties
  const bookmarkedPosts: Post[] = [{
    id: "1",
    author: {
      name: "Sarah Kimani",
      username: "@sarah_k",
      avatar: "/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png",
      verified: true,
      institution: "Equity Bank"
    },
    content: "Just learned about diversification strategies for the Kenyan market. The key is balancing between government bonds, equities, and real estate. What's your preferred allocation?",
    timestamp: "2 hours ago",
    created_at: new Date("2024-01-20T10:00:00Z").toISOString(),
    updated_at: new Date("2024-01-20T10:00:00Z").toISOString(),
    likes: 45,
    comments: 12,
    reposts: 8,
    shares: 5,
    bookmarks: 23,
    topic: "Investment Strategy",
    category: "Education",
    is_verified: true
  }, {
    id: "2",
    author: {
      name: "David Mwangi",
      username: "@david_invest",
      avatar: "/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png",
      verified: true,
      institution: "KCB Bank"
    },
    content: "NSE performance this quarter has been impressive. Technology stocks are leading gains with Safaricom up 15%. Perfect time to review your portfolio allocation.",
    timestamp: "4 hours ago",
    created_at: new Date("2024-01-20T08:00:00Z").toISOString(),
    updated_at: new Date("2024-01-20T08:00:00Z").toISOString(),
    likes: 67,
    comments: 18,
    reposts: 15,
    shares: 9,
    bookmarks: 34,
    topic: "Market Analysis",
    category: "News",
    is_verified: true
  }, {
    id: "3",
    author: {
      name: "Grace Wanjiku",
      username: "@grace_finance",
      avatar: "/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png",
      verified: true,
      institution: "NCBA Bank"
    },
    content: "Treasury bills rates at 16.8% - highest in months! Consider laddering your fixed income investments for better liquidity management. Here's how I structure mine...",
    timestamp: "6 hours ago",
    created_at: new Date("2024-01-20T06:00:00Z").toISOString(),
    updated_at: new Date("2024-01-20T06:00:00Z").toISOString(),
    likes: 89,
    comments: 25,
    reposts: 20,
    shares: 12,
    bookmarks: 56,
    topic: "Fixed Income",
    category: "Strategy",
    is_verified: true
  }];
  const savedCollections = [{
    name: "Investment Strategies",
    count: 12,
    color: "bg-blue-500"
  }, {
    name: "Market Analysis",
    count: 8,
    color: "bg-green-500"
  }, {
    name: "Educational Content",
    count: 15,
    color: "bg-purple-500"
  }, {
    name: "Expert Insights",
    count: 6,
    color: "bg-orange-500"
  }];
  return <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Your Bookmarks</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          

          

          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              
              <CardContent className="p-0">
                <div className="space-y-1">
                  {bookmarkedPosts.map(post => <FeedPostCard key={post.id} post={post} />)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              
              
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>;
};
export default BookmarksPage;