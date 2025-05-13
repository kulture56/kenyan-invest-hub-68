
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Heart } from "lucide-react";

interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

interface ReplyProps {
  reply: {
    id: string;
    author: PostAuthor;
    content: string;
    createdAt: Date;
    likes: number;
  };
}

export const PostReply: React.FC<ReplyProps> = ({ reply }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(reply.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="py-3">
      <div className="flex items-start gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            {reply.author.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-1">
            <a href={`/profile/${reply.author.id}`} className="font-medium text-sm hover:underline">
              {reply.author.name}
            </a>
            <span className="text-xs text-muted-foreground">@{reply.author.username}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(reply.createdAt, { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm mt-1">{reply.content}</p>
          <div className="mt-1">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 px-2 py-1 h-auto text-xs rounded-full ${liked ? "text-accent" : ""}`}
              onClick={handleLike}
            >
              <Heart className={`h-3 w-3 ${liked ? "fill-accent text-accent" : ""}`} />
              <span>{likeCount}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
