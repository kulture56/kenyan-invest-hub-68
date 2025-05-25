
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageSquare, Bookmark, Share, CheckCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/hooks/usePosts";

interface FeedPostCardProps {
  post: Post;
}

export const FeedPostCard: React.FC<FeedPostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const getTopicDisplay = (topic: string) => {
    const topicMap: { [key: string]: string } = {
      'institutions': 'INSTITUTIONS',
      'trading': 'TRADING',
      'news': 'NEWS',
      'technology': 'TECHNOLOGY',
      'businesses': 'BUSINESSES',
      'real estate': 'REAL ESTATE',
      'financial education': 'FINANCIAL EDUCATION',
      'investments': 'INVESTMENTS'
    };
    return topicMap[topic] || topic.toUpperCase();
  };

  return (
    <Card className="mb-4 animate-fade-in border border-primary/10 hover:border-primary/30 transition-all">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex gap-3">
          <Avatar className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <AvatarImage src={post.author_avatar || "/placeholder.svg"} alt={post.author_name || "User"} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {(post.author_name || "U")[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground hover:underline cursor-pointer">
                {post.author_name || "Anonymous"}
              </span>
              {post.is_verified && (
                <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-500" />
              )}
              <span className="text-sm text-muted-foreground">
                @{post.author_username || "user"}
              </span>
            </div>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span>
                {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
              </span>
              <span>•</span>
              <Badge variant="outline" className="text-primary border-primary/20 hover:border-primary/30 transition-colors text-xs py-0 px-2">
                #{getTopicDisplay(post.topic)}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <p className="whitespace-pre-line">{post.content}</p>
        {post.image_url && (
          <div className="mt-3 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
            <img 
              src={post.image_url} 
              alt="Post attachment" 
              className="w-full h-auto hover:scale-[1.01] transition-transform" 
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-4 py-2 flex justify-between text-muted-foreground">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 text-sm rounded-full px-3 ${
              liked ? "text-primary bg-primary/10 hover:bg-primary/20" : "hover:bg-primary/10 hover:text-primary"
            }`} 
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`} />
            <span>{likeCount}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-sm rounded-full px-3 hover:bg-primary/10 hover:text-primary"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>{post.comments}</span>
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
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary"
          >
            <Share className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
