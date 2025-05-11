
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageSquare, Repeat2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";

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
    <Card className="mb-4 animate-fade-in border border-primary/10 hover:border-primary/30 transition-all">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row gap-3">
        <Avatar className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-primary/10 text-primary">{author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <a href={`/profile/${author.id}`} className="font-medium hover:underline text-foreground hover:text-primary transition-colors">
              {author.name}
            </a>
            <span className="text-sm text-muted-foreground">@{author.username}</span>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
            {topic && (
              <>
                <span>•</span>
                <a href={`/topics/${topic.toLowerCase()}`}>
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 hover:border-primary/30 transition-colors text-xs py-0 px-2">
                    #{topic}
                  </Badge>
                </a>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="whitespace-pre-line">{content}</p>
        {image && (
          <div className="mt-3 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
            <img src={image} alt="Post attachment" className="w-full h-auto hover:scale-[1.01] transition-transform" />
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 py-2 flex gap-6 text-muted-foreground">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 text-sm rounded-full px-3 ${liked ? "text-accent bg-accent/10 hover:bg-accent/20" : "hover:bg-primary/10"}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-accent text-accent" : ""}`} />
          <span>{likeCount}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-sm rounded-full px-3 hover:bg-primary/10"
        >
          <MessageSquare className="h-4 w-4" />
          <span>{comments}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-sm rounded-full px-3 hover:bg-primary/10"
        >
          <Repeat2 className="h-4 w-4" />
          <span>{shares}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
