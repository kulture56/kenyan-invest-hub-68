
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Search, Filter, Calendar, TrendingUp, Users, Briefcase } from "lucide-react";
import { FeedPostCard } from "@/components/home/FeedPostCard";

// Mock bookmarked posts data
const mockBookmarkedPosts = [
  {
    id: "bookmark-1",
    author: {
      name: "Investment Pro",
      username: "@investpro",
      avatar: "/placeholder.svg",
      verified: true,
      institution: "Goldman Sachs"
    },
    content: "Here's why I think tech stocks are undervalued right now. The P/E ratios are historically low compared to growth potential...",
    timestamp: "2h",
    likes: 245,
    comments: 32,
    reposts: 15,
    bookmarks: 89,
    topic: "Technology",
    category: "investments"
  },
  {
    id: "bookmark-2",
    author: {
      name: "Market Analyst",
      username: "@marketguru",
      avatar: "/placeholder.svg",
      verified: true,
      institution: "JP Morgan"
    },
    content: "Breaking: Fed signals potential rate cuts in Q2. This could be a game-changer for growth stocks. Here's my analysis...",
    timestamp: "5h",
    likes: 567,
    comments: 89,
    reposts: 134,
    bookmarks: 203,
    topic: "Market News",
    category: "news"
  },
  {
    id: "bookmark-3",
    author: {
      name: "Crypto Expert",
      username: "@cryptomaster",
      avatar: "/placeholder.svg",
      verified: true,
      institution: "Coinbase"
    },
    content: "Bitcoin's correlation with traditional markets is weakening. This could signal a maturation of the crypto space...",
    timestamp: "1d",
    likes: 892,
    comments: 156,
    reposts: 267,
    bookmarks: 445,
    topic: "Cryptocurrency",
    category: "investments"
  },
  {
    id: "bookmark-4",
    author: {
      name: "Financial Advisor",
      username: "@financeguru",
      avatar: "/placeholder.svg",
      verified: false,
      institution: null
    },
    content: "Your emergency fund should cover 6-12 months of expenses. Here's how to build one systematically...",
    timestamp: "2d",
    likes: 423,
    comments: 67,
    reposts: 89,
    bookmarks: 234,
    topic: "Personal Finance",
    category: "education"
  }
];

const BookmarksPage = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState(mockBookmarkedPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredPosts = bookmarkedPosts.filter(post => {
    const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.topic.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && post.category === activeTab;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "investments": return <TrendingUp className="h-4 w-4" />;
      case "news": return <Calendar className="h-4 w-4" />;
      case "education": return <Users className="h-4 w-4" />;
      default: return <Briefcase className="h-4 w-4" />;
    }
  };

  const categories = [
    { id: "all", label: "All", count: bookmarkedPosts.length },
    { id: "investments", label: "Investments", count: bookmarkedPosts.filter(p => p.category === "investments").length },
    { id: "news", label: "News", count: bookmarkedPosts.filter(p => p.category === "news").length },
    { id: "education", label: "Education", count: bookmarkedPosts.filter(p => p.category === "education").length }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-6 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bookmarks
          </h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search bookmarks..." 
                className="pl-9 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="shadow-md border-border/50">
          <CardContent className="p-0">
            <div className="border-b border-border/50 p-4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      {getCategoryIcon(category.id)}
                      <span>{category.label}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <ScrollArea className="h-[calc(80vh-200px)]">
              {filteredPosts.length > 0 ? (
                <div className="space-y-1 p-1">
                  {filteredPosts.map((post) => (
                    <FeedPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    {searchQuery ? "No bookmarks found" : "No bookmarks yet"}
                  </h3>
                  <p className="text-muted-foreground">
                    {searchQuery 
                      ? `No bookmarks match "${searchQuery}". Try a different search term.`
                      : "Start bookmarking posts to save them for later reading."}
                  </p>
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default BookmarksPage;
