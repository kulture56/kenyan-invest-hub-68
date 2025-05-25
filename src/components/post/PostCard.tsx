
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, MoreHorizontal, Bookmark } from "lucide-react";
import { VerifiedBadge, isVerifiedInstitution } from "@/components/ui/verified-badge";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  id: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  topic: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  topic,
  createdAt,
  likes,
  comments,
  shares,
  image
}) => {
  const isVerified = isVerifiedInstitution(author.name);

  return (
    <Card className="bg-card hover:bg-card/50 transition-colors border border-border/50">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-foreground text-sm">{author.name}</p>
                {isVerified && <VerifiedBadge />}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>@{author.username}</span>
                <span>•</span>
                <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Topic Badge */}
        <Badge variant="secondary" className="mb-3 text-xs">
          {topic}
        </Badge>

        {/* Content */}
        <div className="mb-3">
          <p className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </div>

        {/* Image */}
        {image && (
          <div className="mb-3">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full rounded-lg border border-border object-cover max-h-96"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 transition-colors p-0 h-auto">
              <Heart className="h-4 w-4 mr-1" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500 transition-colors p-0 h-auto">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 transition-colors p-0 h-auto">
              <Share className="h-4 w-4 mr-1" />
              <span className="text-xs">{shares}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-yellow-500 transition-colors p-0 h-auto">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
