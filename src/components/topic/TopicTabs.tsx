import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/components/post/PostCard";
import { getTopicDescription } from "./TopicInfo";
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
  isVerified: boolean;
}
interface TopicTabsProps {
  posts: Post[];
  topicSlug?: string;
}
export const TopicTabs: React.FC<TopicTabsProps> = ({
  posts,
  topicSlug
}) => {
  return <Tabs defaultValue="latest">
      
      <TabsContent value="latest" className="space-y-4 mt-4">
        {posts.length > 0 ? posts.map(post => <PostCard key={post.id} {...post} />) : <Card>
            
          </Card>}
      </TabsContent>
      <TabsContent value="popular" className="space-y-4 mt-4">
        
      </TabsContent>
    </Tabs>;
};