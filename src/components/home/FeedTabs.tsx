
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import CreatePostBox from "@/components/post/CreatePostBox";
import { PostCard } from "@/components/post/PostCard";

interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  topic: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

interface FeedTabsProps {
  posts: Post[];
}

const FeedTabs: React.FC<FeedTabsProps> = ({ posts }) => {
  return (
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
          {posts.map((post) => (
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
  );
};

export default FeedTabs;
