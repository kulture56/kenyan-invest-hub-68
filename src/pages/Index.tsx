
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CreatePostBox } from "@/components/post/CreatePostBox";
import { PostCard } from "@/components/post/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const trendingTopics = [
  { name: "STOCKS", posts: 120 },
  { name: "SACCOS", posts: 85 },
  { name: "CRYPTOCURRENCIES", posts: 67 },
  { name: "BANKS", posts: 45 },
  { name: "TBILLS", posts: 32 },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Home</h1>
          <p className="text-muted-foreground">Your investment community feed</p>
        </div>

        <Tabs defaultValue="for-you" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you" className="mt-4">
            <CreatePostBox />
            
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="following" className="mt-4">
            <div className="flex flex-col items-center justify-center py-12">
              <h3 className="text-lg font-medium mb-2">Find investors to follow</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Follow other investors to customize your feed with insights that matter to you
              </p>
              <Button>Discover Users</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="fixed right-6 top-24 w-64 hidden lg:block">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Trending Topics</h3>
            <ul className="space-y-2">
              {trendingTopics.map((topic) => (
                <li key={topic.name}>
                  <a 
                    href={`/topics/${topic.name.toLowerCase()}`}
                    className="flex items-center justify-between text-sm hover:text-primary"
                  >
                    <span>#{topic.name}</span>
                    <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="link" className="px-0 mt-2 text-sm">
              View all topics
            </Button>
          </CardContent>
        </Card>
        
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xs font-bold">R</span>
              </div>
              <h3 className="font-medium">Rafiki Says</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              "Treasury bills yield has increased by 0.3% this week, creating an opportunity for short-term investments."
            </p>
            <Button variant="link" className="px-0 mt-2 text-sm">
              Ask Rafiki
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
