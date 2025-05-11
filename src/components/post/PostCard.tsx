
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageSquare, Repeat2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
  username: string;
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
}) => {
  const [liked, setLiked] = React.useState(isLiked);
  const [likeCount, setLikeCount] = React.useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="post-card mb-4 animate-fade-in">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <a href={`/profile/${author.id}`} className="font-medium hover:underline">
              {author.name}
            </a>
            <span className="text-sm text-muted-foreground">@{author.username}</span>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
            {topic && (
              <>
                <span>•</span>
                <a href={`/topics/${topic.toLowerCase()}`} className="text-primary hover:underline">
                  #{topic}
                </a>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="whitespace-pre-line">{content}</p>
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={image} alt="Post attachment" className="w-full h-auto" />
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 py-2 flex gap-4 text-muted-foreground">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 text-sm ${liked ? "text-gelt-orange" : ""}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-gelt-orange text-gelt-orange" : ""}`} />
          <span>{likeCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
          <MessageSquare className="h-4 w-4" />
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
          <Repeat2 className="h-4 w-4" />
          <span>{shares}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
