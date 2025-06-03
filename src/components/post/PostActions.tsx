
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Bookmark, Share } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ShareDialog } from "./ShareDialog";

interface PostActionsProps {
  liked: boolean;
  likeCount: number;
  repliesCount: number;
  isBookmarked: boolean;
  onLike: () => void;
  onReply: () => void;
  onBookmark: () => void;
  onShare: () => void;
  postId?: string;
  postContent?: string;
  authorName?: string;
}

export const PostActions: React.FC<PostActionsProps> = ({
  liked,
  likeCount,
  repliesCount,
  isBookmarked,
  onLike,
  onReply,
  onBookmark,
  onShare,
  postId = "default",
  postContent = "",
  authorName = "Anonymous"
}) => {
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
            liked ? "text-primary bg-primary/10 hover:bg-primary/20" : "hover:bg-primary/10 hover:text-primary"
          }`} 
          onClick={onLike}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-primary text-primary" : ""}`} />
          <span className="font-medium">{likeCount}</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 text-sm rounded-full px-4 py-2 hover:bg-primary/10 hover:text-primary" 
          onClick={onReply}
        >
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="font-medium">{repliesCount}</span>
        </Button>
      </div>
      
      <div className="flex gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary ${
            isBookmarked ? "text-primary bg-primary/10" : ""
          }`} 
          onClick={handleBookmark}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-primary" : ""}`} />
          <span className="sr-only">Bookmark</span>
        </Button>
        
        <ShareDialog postId={postId} postContent={postContent} authorName={authorName}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary"
          >
            <Share className="h-5 w-5 text-primary" />
            <span className="sr-only">Share</span>
          </Button>
        </ShareDialog>
      </div>
    </div>
  );
};
