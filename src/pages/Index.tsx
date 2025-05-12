
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CreatePostBox } from "@/components/post/CreatePostBox";
import { PostCard } from "@/components/post/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartBar, ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for initial rendering
const mockPosts = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "James Mwangi",
      username: "jamesmwangi",
      avatar: "/placeholder.svg",
    },
    content: "The Nairobi Stock Exchange is showing promising signs of recovery after last week's dip. What investments are you all looking at right now? I'm considering adding more banking stocks to my portfolio. #NSE",
    topic: "STOCKS",
    createdAt: new Date(Date.now() - 2000000),
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "Sarah Kamau",
      username: "sarahk",
      avatar: "/placeholder.svg",
    },
    content: "Just got approved for Stawi loan with a 9% interest rate. Any tips on how to maximize this capital for my small business?",
    topic: "BANKS",
    createdAt: new Date(Date.now() - 5000000),
    likes: 17,
    comments: 12,
    shares: 2,
  },
  {
    id: "3",
    author: {
      id: "user3",
      name: "Michael Odhiambo",
      username: "mikeodhi",
      avatar: "/placeholder.svg",
    },
    content: "Today's T-Bill rates have been announced. The 91-day T-Bill is at 9.2%, the 182-day at 10.1%, and the 364-day at 10.8%. This continues to be an attractive risk-free investment for those looking to park funds short term.",
    image: "https://source.unsplash.com/random/800x500/?chart",
    topic: "TBILLS",
    createdAt: new Date(Date.now() - 20000000),
    likes: 42,
    comments: 15,
    shares: 8,
  },
];

const topicsList = [
  { name: "STOCKS", slug: "stocks" },
  { name: "SACCOS", slug: "saccos" },
  { name: "CRYPTOCURRENCIES", slug: "crypto" },
  { name: "BANKS", slug: "banks" },
  { name: "TBILLS", slug: "bills-bonds" },
  { name: "MMFS", slug: "mmfs" },
  { name: "FUNDS", slug: "funds" },
  { name: "FOREX", slug: "forex" },
  { name: "INDICES", slug: "indices" },
  { name: "VENTURE CAPITAL", slug: "vc" },
  { name: "INSURANCE", slug: "insurance" }
];

const trendingTopics = [
  { name: "STOCKS", posts: 120 },
  { name: "SACCOS", posts: 85 },
  { name: "CRYPTOCURRENCIES", posts: 67 },
  { name: "FOREX", posts: 53 },
  { name: "BANKS", posts: 45 },
  { name: "TBILLS", posts: 32 },
];

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleTopicClick = (topicSlug: string) => {
    navigate(`/topics/${topicSlug}`);
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Home</h1>
          <p className="text-muted-foreground">Your investment community feed</p>
        </div>

        <div className="mb-6 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex flex-wrap gap-2 min-w-max">
            {topicsList.map((topic) => (
              <Badge
                key={topic.name}
                variant={selectedTopic === topic.slug ? "default" : "outline"}
                className="cursor-pointer hover:scale-105 transition-transform px-2 py-0.5 text-xs"
                onClick={() => handleTopicClick(topic.slug)}
              >
                #{topic.name}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="for-you" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary/50">
            <TabsTrigger 
              value="for-you"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              For You
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Following
            </TabsTrigger>
          </TabsList>
          <TabsContent value="for-you" className="mt-4 animate-fade-in">
            <CreatePostBox />
            
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="following" className="mt-4 animate-fade-in">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Find investors to follow</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
                Follow other investors to customize your feed with insights that matter to you
              </p>
              <Button className="bg-primary hover:bg-primary/90 transition-colors">
                Discover Users
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="fixed right-6 top-24 w-72 hidden lg:block">
        <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-primary">Trending Topics</h3>
              <ChartBar className="h-4 w-4 text-primary" />
            </div>
            <ul className="space-y-3">
              {trendingTopics.map((topic) => (
                <li key={topic.name} className="hover-scale">
                  <a 
                    href={`/topics/${topic.name.toLowerCase()}`}
                    className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-foreground font-medium">#{topic.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{topic.posts}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="ghost" className="px-0 mt-4 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center">
              <span>View all topics</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="mt-4 border border-primary/10 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full purple-gradient flex items-center justify-center animate-float">
                <span className="text-xs font-bold text-white">R</span>
              </div>
              <h3 className="font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rafiki Says</h3>
            </div>
            <p className="text-sm text-foreground bg-white/50 p-3 rounded-lg border border-primary/10">
              "Treasury bills yield has increased by 0.3% this week, creating an opportunity for short-term investments."
            </p>
            <Button variant="ghost" className="px-0 mt-4 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center">
              <span>Ask Rafiki</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
