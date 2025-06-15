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
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          {liked ? "Unliked" : "Liked"}
        </div>
      ),
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
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          {isReposted ? "Repost removed" : "Reposted"}
        </div>
      ),
      duration: 2000
    });
  };

  const handleBookmark = () => {
    onBookmark();
    toast({
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          {isBookmarked ? "Removed from bookmarks" : "Added to bookmarks"}
        </div>
      ),
      duration: 2000
    });
  };

  return (
    <div className="px-2 sm:px-4 py-3 flex justify-between text-muted-foreground">
      <div className="flex gap-3 sm:gap-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-1 sm:gap-2 text-sm rounded-full px-2 sm:px-4 py-2 ${
            liked ? "text-purple-600 bg-purple-50 hover:bg-purple-100" : "hover:bg-purple-50 hover:text-purple-600"
          }`} 
          onClick={handleLike}
        >
          <Heart className={`h-4 sm:h-5 w-4 sm:w-5${liked ? " fill-purple-600" : ""}`} style={{ color: "var(--icon-color)" }} />
          <span className="font-medium text-xs sm:text-sm">{likeCount}</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 sm:gap-2 text-sm rounded-full px-2 sm:px-4 py-2 hover:bg-purple-50 hover:text-purple-600" 
          onClick={handleReply}
        >
          <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" style={{ color: "var(--icon-color)" }} />
          <span className="font-medium text-xs sm:text-sm">{repliesCount}</span>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-1 sm:gap-2 text-sm rounded-full px-2 sm:px-4 py-2 ${
            isReposted ? "text-purple-600 bg-purple-50 hover:bg-purple-100" : "hover:bg-purple-50 hover:text-purple-600"
          }`} 
          onClick={handleRepost}
        >
          <Repeat2 className="h-4 sm:h-5 w-4 sm:w-5" style={{ color: "var(--icon-color)" }} />
          <span className="font-medium text-xs sm:text-sm">{repostCount}</span>
        </Button>
      </div>
      
      <div className="flex gap-2 sm:gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center text-sm rounded-full p-2 hover:bg-purple-50 hover:text-purple-600 ${
            isBookmarked ? "text-purple-600 bg-purple-50" : ""
          }`} 
          onClick={handleBookmark}
        >
          <Bookmark className={`h-4 sm:h-5 w-4 sm:w-5${isBookmarked ? " fill-purple-600" : ""}`} style={{ color: "var(--icon-color)" }} />
          <span className="sr-only">Bookmark</span>
        </Button>
        
        <ShareDialog postId={postId} postContent={postContent} authorName={authorName}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-sm rounded-full p-2 hover:bg-purple-50 hover:text-purple-600"
          >
            <Share className="h-4 sm:h-5 w-4 sm:w-5" style={{ color: "var(--icon-color)" }} />
            <span className="sr-only">Share</span>
          </Button>
        </ShareDialog>
      </div>
    </div>
  );
};
