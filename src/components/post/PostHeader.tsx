
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, VolumeX, Flag } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

interface PostHeaderProps {
  author: PostAuthor;
  createdAt: Date | string;
  topic?: string;
  isVerified?: boolean;
  postId: string;
  onMuteClick: () => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  author,
  createdAt,
  topic,
  isVerified = false,
  postId,
  onMuteClick
}) => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate(`/report/${postId}`);
  };

  // Safely convert createdAt to Date object
  const getValidDate = (date: Date | string): Date => {
    if (date instanceof Date) {
      return isNaN(date.getTime()) ? new Date() : date;
    }
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
  };

  const validDate = getValidDate(createdAt);

  return (
    <div className="pb-2 pt-4 px-4 flex flex-row gap-3 justify-between">
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
                src="/lovable-uploads/b01c2fed-c55d-468c-a20e-3fb895691c6f.png" 
                alt="Verified" 
                className="w-4 h-4"
              />
            )}
            <span className="text-sm text-muted-foreground">@{author.username}</span>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>{formatDistanceToNow(validDate, { addSuffix: true })}</span>
            {topic && (
              <>
                <span>•</span>
                <a href={`/topics/${topic.toLowerCase()}`}>
                  <Badge variant="outline" className="text-primary border-primary/20 hover:border-primary/30 transition-colors text-xs py-0 px-2 bg-yellow-500">
                    #{topic}
                  </Badge>
                </a>
              </>
            )}
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
          <DropdownMenuItem onClick={onMuteClick} className="cursor-pointer">
            <VolumeX className="mr-2 h-4 w-4" />
            <span>Mute</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleReportClick} className="cursor-pointer">
            <Flag className="mr-2 h-4 w-4" />
            <span>Report</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
