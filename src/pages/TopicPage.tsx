
import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { TopicHeader } from "@/components/topic/TopicHeader";
import { TopicContent } from "@/components/topic/TopicContent";
import { mockPostsByTopic } from "@/components/topic/mockData";

const TopicPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const posts = mockPostsByTopic[topicSlug as keyof typeof mockPostsByTopic] || mockPostsByTopic.default;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-4">
        <TopicHeader topicSlug={topicSlug} />
        <TopicContent topicSlug={topicSlug} posts={posts} />
      </div>
    </AppLayout>
  );
};

export default TopicPage;
