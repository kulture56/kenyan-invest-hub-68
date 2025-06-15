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
        {posts.length > 0 ? posts.map(post => {}) : <Card>
            
          </Card>}
      </TabsContent>
      
      <TabsContent value="popular" className="space-y-4 mt-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <h3 className="text-lg font-medium mb-2">Popular posts coming soon</h3>
            <p className="text-sm text-muted-foreground text-center">
              We're working on showing the most popular posts in this topic
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>;
};