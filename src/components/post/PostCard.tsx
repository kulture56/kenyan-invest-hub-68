
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageSquare, Bookmark, Share, MoreHorizontal, VolumeX, Flag } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import ReplyBox from "./ReplyBox";
import { PostReply } from "./PostReply";
import { toast } from "@/hooks/use-toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
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
  
  const navigate = useNavigate();

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
    toast({
      description: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      duration: 2000
    });
  };
  const handleShare = () => {
    toast({
      description: "Sharing options opened",
      duration: 2000
    });
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
  const handleMuteClick = () => {
    setMuteDialogOpen(true);
  };
  
  const handleReportClick = () => {
    navigate(`/report/${id}`);
  };

  return <Card className="mb-4 animate-fade-in border border-primary/10 hover:border-primary/30 transition-all">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row gap-3 justify-between">
        <div className="flex gap-3">
          <Avatar className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-primary/10 text-primary">{author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <a href={`/profile/${author.id}`} className="font-medium hover:underline text-foreground hover:text-primary transition-colors">
                {author.name}
              </a>
              {isVerified && (
                <img 
                  src="/lovable-uploads/a48a1151-7e0c-4824-9523-a1f04c863334.png" 
                  alt="Verified" 
                  className="w-4 h-4"
                />
              )}
              <span className="text-sm text-muted-foreground">@{author.username}</span>
            </div>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span>{formatDistanceToNow(createdAt, {
                addSuffix: true
              })}</span>
              {topic && <>
                  <span>•</span>
                  <a href={`/topics/${topic.toLowerCase()}`}>
                    <Badge variant="outline" className="text-primary border-primary/20 hover:border-primary/30 transition-colors text-xs py-0 px-2 bg-yellow-500">
                      #{topic}
                    </Badge>
                  </a>
                </>}
            </div>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Post menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleMuteClick} className="cursor-pointer">
              <VolumeX className="mr-2 h-4 w-4" />
              <span>Mute</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleReportClick} className="cursor-pointer">
              <Flag className="mr-2 h-4 w-4" />
              <span>Report</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <p className="whitespace-pre-line">{content}</p>
        {image && <div className="mt-3 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
            <img src={image} alt="Post attachment" className="w-full h-auto hover:scale-[1.01] transition-transform" />
          </div>}
      </CardContent>
      
      <CardFooter className="px-4 py-2 flex justify-between text-muted-foreground">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className={`flex items-center gap-1 text-sm rounded-full px-3 ${liked ? "text-primary bg-primary/10 hover:bg-primary/20" : "hover:bg-primary/10 hover:text-primary"}`} onClick={handleLike}>
            <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`} />
            <span>{likeCount}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm rounded-full px-3 hover:bg-primary/10 hover:text-primary" onClick={() => {
          setShowReplyBox(!showReplyBox);
          if (!showReplies && postReplies.length > 0) {
            setShowReplies(true);
          }
        }}>
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>{postReplies.length}</span>
          </Button>
        </div>
        
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" className={`flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary ${isBookmarked ? "text-primary bg-primary/10" : ""}`} onClick={handleBookmark}>
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`} />
            <span className="sr-only">Bookmark</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center text-sm rounded-full p-2 hover:bg-primary/10 hover:text-primary" onClick={handleShare}>
            <Share className="h-4 w-4 text-primary" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </CardFooter>
      
      {showReplyBox && <div className="px-4 pb-2">
          <ReplyBox onSubmit={handleReply} />
        </div>}
      
      {showReplies && postReplies.length > 0 && <div className="px-4 pb-4 pt-1 border-t border-border/30 mt-1">
          <div className="pl-6 border-l border-primary/10">
            {postReplies.map(reply => <PostReply key={reply.id} reply={reply} />)}
          </div>
        </div>}
      
      {!showReplies && postReplies.length > 0 && <div className="px-4 pb-3">
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary/80" onClick={() => setShowReplies(true)}>
            Show {postReplies.length} {postReplies.length === 1 ? "reply" : "replies"}
          </Button>
        </div>}
      
      <MuteDialog 
        open={muteDialogOpen} 
        onOpenChange={setMuteDialogOpen}
        author={author}
      />
    </Card>;
};
