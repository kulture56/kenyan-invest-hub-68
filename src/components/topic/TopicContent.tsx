
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CreatePostBox from "@/components/post/CreatePostBox";
import StockTicker from "@/components/stocks/StockTicker";
import JobsFilter from "@/components/jobs/JobsFilter";
import { TopicTabs } from "./TopicTabs";

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

interface TopicContentProps {
  topicSlug?: string;
  posts: Post[];
}

export const TopicContent: React.FC<TopicContentProps> = ({ topicSlug, posts }) => {
  const shouldShowProminentTicker = topicSlug === 'stocks';
  const isJobsTopic = topicSlug === 'jobs';

  return (
    <>
      {shouldShowProminentTicker && (
        <div className="w-full">
          <StockTicker />
        </div>
      )}

      {!shouldShowProminentTicker && (
        <div className="w-full">
          <StockTicker compact={true} />
        </div>
      )}

      {isJobsTopic && (
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-3">Filter Jobs</h3>
            <JobsFilter />
          </CardContent>
        </Card>
      )}

      <CreatePostBox />

      <TopicTabs posts={posts} topicSlug={topicSlug} />
    </>
  );
};
