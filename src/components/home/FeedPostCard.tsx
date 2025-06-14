
import React from "react";
import { PostCard } from "@/components/post/PostCard";
import { Post } from "@/hooks/usePosts";

interface FeedPostCardProps {
  post: Post & {
    reposts?: number;
    mediaUrl?: string;
    mediaType?: 'youtube' | 'tiktok' | 'gif';
  };
}

export const FeedPostCard: React.FC<FeedPostCardProps> = ({ post }) => {
  const author = {
    id: post.user_id || "unknown",
    name: post.author_name || "Anonymous",
    username: post.author_username || "anonymous",
    avatar: post.author_avatar || "/placeholder.svg"
  };

  return (
    <PostCard
      id={post.id}
      author={author}
      content={post.content}
      image={post.image_url}
      topic={post.topic}
      createdAt={new Date(post.timestamp || post.created_at)}
      likes={post.likes}
      comments={post.comments}
      shares={post.shares}
      reposts={post.reposts || 0}
      isVerified={post.is_verified}
      mediaUrl={post.mediaUrl}
      mediaType={post.mediaType}
    />
  );
};
