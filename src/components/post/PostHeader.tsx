
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Flag, UserX, VolumeX, Share, Copy } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface PostHeaderProps {
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  createdAt: Date | string;
  topic?: string;
  isVerified?: boolean;
  postId: string;
  onMuteClick?: () => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  author,
  createdAt,
  topic,
  isVerified = false,
  postId,
  onMuteClick
}) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const navigate = useNavigate();

  const handleBlockUser = () => {
    setIsBlocked(true);
    toast({
      description: `Blocked ${author.name}. You won't see their posts anymore.`
    });
  };

  const handleReportPost = () => {
    navigate(`/report/${postId}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
    toast({
      description: "Post link copied to clipboard"
    });
  };

  const handleSharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: `Post by ${author.name}`,
        url: `${window.location.origin}/post/${postId}`
      });
    } else {
      handleCopyLink();
    }
  };

  const createdAtDate = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {author.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-semibold hover:underline cursor-pointer">
              {author.name}
            </span>
            {isVerified && (
              <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-700 border-purple-200">
                ✓
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">
              @{author.username}
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              {formatDistanceToNow(createdAtDate, { addSuffix: true })}
            </span>
          </div>
          {topic && (
            <Badge variant="outline" className="text-xs w-fit mt-1 font-bold" style={{ fontSize: '14px' }}>
              {topic}
            </Badge>
          )}
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleCopyLink}>
            <Copy className="h-4 w-4 mr-2" />
            Copy link
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onMuteClick}>
            <VolumeX className="h-4 w-4 mr-2" />
            Mute {author.name}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleBlockUser} className="text-red-600 focus:text-red-600">
            <UserX className="h-4 w-4 mr-2" />
            Block {author.name}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleReportPost} className="text-red-600 focus:text-red-600">
            <Flag className="h-4 w-4 mr-2" />
            Report post
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
