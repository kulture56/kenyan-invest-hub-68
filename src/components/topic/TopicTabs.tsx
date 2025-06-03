
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

export const TopicTabs: React.FC<TopicTabsProps> = ({ posts, topicSlug }) => {
  return (
    <Tabs defaultValue="latest">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="latest">Latest</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>
      </TabsList>
      <TabsContent value="latest" className="space-y-4 mt-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h3 className="text-lg font-medium mb-2">No posts yet</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                {getTopicDescription(topicSlug)}
              </p>
              <Button className="mt-4">Create First Post</Button>
            </CardContent>
          </Card>
        )}
      </TabsContent>
      <TabsContent value="popular" className="space-y-4 mt-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <h3 className="text-lg font-medium mb-2">Popular Posts</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Popular posts will appear here based on engagement metrics.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
