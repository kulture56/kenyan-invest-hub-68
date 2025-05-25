
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostActions } from "./PostActions";
import { PostRepliesSection } from "./PostRepliesSection";
import MuteDialog from "./MuteDialog";

interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

interface ReplyData {
  id: string;
  author: PostAuthor;
  content: string;
  createdAt: Date;
  likes: number;
}

interface PostProps {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  topic?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  replies?: ReplyData[];
  isVerified?: boolean;
}

export const PostCard: React.FC<PostProps> = ({
  id,
  author,
  content,
  image,
  topic,
  createdAt,
  likes,
  comments,
  shares,
  isLiked = false,
  replies = [],
  isVerified = false
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [postReplies, setPostReplies] = useState<ReplyData[]>(replies);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [muteDialogOpen, setMuteDialogOpen] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    // Share functionality
  };

  const handleReply = (content: string) => {
    const newReply: ReplyData = {
      id: `reply-${Date.now()}`,
      author: {
        id: "current-user",
        name: "Current User",
        username: "currentuser",
        avatar: "/placeholder.svg"
      },
      content,
      createdAt: new Date(),
      likes: 0
    };
    setPostReplies(prev => [...prev, newReply]);
    setShowReplies(true);
    setShowReplyBox(false);
  };

  const handleReplyClick = () => {
    setShowReplyBox(!showReplyBox);
    if (!showReplies && postReplies.length > 0) {
      setShowReplies(true);
    }
  };

  const handleMuteClick = () => {
    setMuteDialogOpen(true);
  };

  const handleShowReplies = () => {
    setShowReplies(true);
  };

  return (
    <Card className="mb-4 animate-fade-in border border-primary/10 hover:border-primary/30 transition-all">
      <CardHeader className="pb-2">
        <PostHeader
          author={author}
          createdAt={createdAt}
          topic={topic}
          isVerified={isVerified}
          postId={id}
          onMuteClick={handleMuteClick}
        />
      </CardHeader>
      
      <CardContent className="py-0">
        <PostContent content={content} image={image} />
      </CardContent>
      
      <CardFooter className="py-0">
        <PostActions
          liked={liked}
          likeCount={likeCount}
          repliesCount={postReplies.length}
          isBookmarked={isBookmarked}
          onLike={handleLike}
          onReply={handleReplyClick}
          onBookmark={handleBookmark}
          onShare={handleShare}
        />
      </CardFooter>
      
      <PostRepliesSection
        showReplyBox={showReplyBox}
        showReplies={showReplies}
        replies={postReplies}
        onReply={handleReply}
        onShowReplies={handleShowReplies}
      />
      
      <MuteDialog 
        open={muteDialogOpen} 
        onOpenChange={setMuteDialogOpen}
        author={author}
      />
    </Card>
  );
};
