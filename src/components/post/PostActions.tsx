
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Bookmark, Share, Repeat2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ShareDialog } from "./ShareDialog";

interface PostActionsProps {
  liked: boolean;
  likeCount: number;
  repliesCount: number;
  repostCount: number;
  isBookmarked: boolean;
  isReposted: boolean;
  onLike: () => void;
  onReply: () => void;
  onBookmark: () => void;
  onShare: () => void;
  onRepost: () => void;
  postId?: string;
  postContent?: string;
  authorName?: string;
}

export const PostActions: React.FC<PostActionsProps> = ({
  liked,
  likeCount,
  repliesCount,
  repostCount,
  isBookmarked,
  isReposted,
  onLike,
  onReply,
  onBookmark,
  onShare,
  onRepost,
  postId = "default",
  postContent = "",
  authorName = "Anonymous"
}) => {
  const handleLike = () => {
    onLike();
    toast({
      description: liked ? "Unliked" : "Liked",
      duration: 2000
    });
  };

  const handleReply = () => {
    onReply();
    // Toast will be shown when reply is actually posted
  };

  const handleRepost = () => {
    onRepost();
    toast({
      description: isReposted ? "Repost removed" : "Reposted",
      duration: 2000
    });
  };

  const handleBookmark = () => {
    onBookmark();
    toast({
      description: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      duration: 2000
    });
  };

  return (
    <div className="px-4 py-3 flex justify-between text-muted-foreground">
      <div className="flex gap-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-2 text-sm rounded-full px-4 py-2 ${
            liked ? "text-red-500 bg-red-50 hover:bg-red-100" : "hover:bg-red-50 hover:text-red-500"
          }`} 
          onClick={handleLike}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
          <span className="font-medium">{likeCount}</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 text-sm rounded-full px-4 py-2 hover:bg-blue-50 hover:text-blue-500" 
          onClick={handleReply}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="font-medium">{repliesCount}</span>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-2 text-sm rounded-full px-4 py-2 ${
            isReposted ? "text-purple-500 bg-purple-50 hover:bg-purple-100" : "hover:bg-purple-50 hover:text-purple-500"
          }`} 
          onClick={handleRepost}
        >
          <Repeat2 className={`h-5 w-5 ${isReposted ? "text-purple-500" : ""}`} />
          <span className="font-medium">{repostCount}</span>
        </Button>
      </div>
      
      <div className="flex gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center text-sm rounded-full p-2 hover:bg-blue-50 hover:text-blue-500 ${
            isBookmarked ? "text-blue-500 bg-blue-50" : ""
          }`} 
          onClick={handleBookmark}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-blue-500" : ""}`} />
          <span className="sr-only">Bookmark</span>
        </Button>
        
        <ShareDialog postId={postId} postContent={postContent} authorName={authorName}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-sm rounded-full p-2 hover:bg-green-50 hover:text-green-500"
          >
            <Share className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </ShareDialog>
      </div>
    </div>
  );
};
