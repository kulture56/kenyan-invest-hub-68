
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Bookmark, Share } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PostActionsProps {
  liked: boolean;
  likeCount: number;
  repliesCount: number;
  isBookmarked: boolean;
  onLike: () => void;
  onReply: () => void;
  onBookmark: () => void;
  onShare: () => void;
}

export const PostActions: React.FC<PostActionsProps> = ({
  liked,
  likeCount,
  repliesCount,
  isBookmarked,
  onLike,
  onReply,
  onBookmark,
  onShare
}) => {
  const handleBookmark = () => {
    onBookmark();
    toast({
      description: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      duration: 2000
    });
  };

  const handleShare = () => {
    onShare();
    toast({
      description: "Sharing options opened",
      duration: 2000
    });
  };

  return (
    <div className="px-4 py-2 flex justify-between text-muted-foreground">
      <div className="flex gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-1 text-sm rounded-full px-3 ${
            liked ? "text-primary bg-primary/10 hover:bg-primary/20" : "hover:bg-primary/10 hover:text-primary"
          }`} 
          onClick={onLike}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`} />
          <span>{likeCount}</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-sm rounded-full px-3 hover:bg-primary/10 hover:text-primary" 
          onClick={onReply}
        >
          <MessageSquare className="h-4 w-4 text-primary" />
          <span>{repliesCount}</span>
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
          <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`} />
          <span className="sr-only">Bookmark</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary" 
          onClick={handleShare}
        >
          <Share className="h-4 w-4 text-primary" />
          <span className="sr-only">Share</span>
        </Button>
      </div>
    </div>
  );
};
