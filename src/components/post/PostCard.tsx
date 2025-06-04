
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostActions } from "./PostActions";
import { PostRepliesSection } from "./PostRepliesSection";
import MuteDialog from "./MuteDialog";
import { toast } from "@/hooks/use-toast";

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
  createdAt: Date | string;
  likes: number;
  comments: number;
  shares: number;
  reposts?: number;
  isLiked?: boolean;
  isReposted?: boolean;
  replies?: ReplyData[];
  isVerified?: boolean;
  mediaUrl?: string;
  mediaType?: 'youtube' | 'tiktok' | 'gif';
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
  reposts = 0,
  isLiked = false,
  isReposted = false,
  replies = [],
  isVerified = false,
  mediaUrl,
  mediaType
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [reposted, setReposted] = useState(isReposted);
  const [repostCount, setRepostCount] = useState(reposts);
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

  const handleRepost = () => {
    if (reposted) {
      setRepostCount(prev => prev - 1);
    } else {
      setRepostCount(prev => prev + 1);
    }
    setReposted(!reposted);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    // Share functionality handled by ShareDialog
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
    
    toast({
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          Reply posted
        </div>
      ),
      duration: 2000
    });
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
      <CardHeader className="pb-3">
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
        <PostContent 
          content={content} 
          image={image} 
          mediaUrl={mediaUrl}
          mediaType={mediaType}
        />
      </CardContent>
      
      <CardFooter className="py-0">
        <PostActions
          liked={liked}
          likeCount={likeCount}
          repliesCount={postReplies.length}
          repostCount={repostCount}
          isBookmarked={isBookmarked}
          isReposted={reposted}
          onLike={handleLike}
          onReply={handleReplyClick}
          onBookmark={handleBookmark}
          onShare={handleShare}
          onRepost={handleRepost}
          postId={id}
          postContent={content}
          authorName={author.name}
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
