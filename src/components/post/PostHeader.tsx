
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
  // Optional: Allow passing a verified badge color from parent (e.g., sampled from avatar image)
  verifiedColor?: string;
}

// Utility: get good contrast color
const getContrastColor = (theme: string) => (theme === "dark" ? "#fff" : "#000");

// Utility: fallback purple for check if we do not have a sampled color
const CHECKMARK_PURPLE = "#7446C6";

// Change below: add conditional color classes to username, and allow check mark to take a color.
export const PostHeader: React.FC<PostHeaderProps> = ({
  author,
  createdAt,
  topic,
  isVerified = false,
  postId,
  onMuteClick,
  verifiedColor,
}) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const navigate = useNavigate();

  const handleBlockUser = () => {
    setIsBlocked(true);
    toast({
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          Blocked {author.name}. You won't see their posts anymore.
        </div>
      )
    });
  };

  const handleReportPost = () => {
    navigate(`/report/${postId}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
    toast({
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          Post link copied to clipboard
        </div>
      )
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

  // Safely parse and validate the date
  const getValidDate = (dateInput: Date | string): Date => {
    if (dateInput instanceof Date) {
      return isNaN(dateInput.getTime()) ? new Date() : dateInput;
    }
    
    // Try to parse string as date
    const parsedDate = new Date(dateInput);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
    
    // If parsing fails, return current date as fallback
    console.warn(`Invalid date format: ${dateInput}, using current date as fallback`);
    return new Date();
  };

  const createdAtDate = getValidDate(createdAt);
  
  // Format the time with error handling
  const formatTime = (date: Date): string => {
    try {
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'just now';
    }
  };

  // Check: If dark mode, className = text-white; otherwise text-black
  // Tailwind + dark mode classes: dark:text-white text-black

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
            {/* Username: dynamic color */}
            <span
              className={`
                font-bold hover:underline cursor-pointer
                text-black dark:text-white
              `}
              style={{ fontSize: '20px' }}
            >
              {author.name}
            </span>
            {isVerified && (
              <img
                src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png"
                alt="Verified"
                className="h-5 w-5"
                style={{
                  // Use user-sampled color if provided, otherwise fallback purple
                  filter: 'none',
                  color: verifiedColor ?? CHECKMARK_PURPLE,
                  // actual img tinting is tricky with images, so optionally use a border or drop-shadow if needed
                  borderColor: verifiedColor ?? CHECKMARK_PURPLE,
                  borderWidth: verifiedColor ? 2 : 0,
                  borderStyle: verifiedColor ? "solid" : "none",
                  borderRadius: "50%",
                  boxShadow: verifiedColor ? `0 0 8px 0 ${verifiedColor}` : "none"
                }}
              />
            )}
            <span className="text-sm text-muted-foreground font-bold">
              @{author.username}
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground font-bold">
              {formatTime(createdAtDate)}
            </span>
          </div>
          {topic && (
            <Badge variant="outline" className="text-xs w-fit mt-1 font-bold text-purple-600 border-purple-600" style={{ fontSize: '16px' }}>
              {topic}
            </Badge>
          )}
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" style={{ color: "var(--icon-color)" }} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleCopyLink}>
            <Copy className="h-4 w-4 mr-2" style={{ color: "var(--icon-color)" }} />
            <span className="font-bold">Copy link</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onMuteClick}>
            <VolumeX className="h-4 w-4 mr-2" style={{ color: "var(--icon-color)" }} />
            <span className="font-bold">Mute {author.name}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleBlockUser} className="text-red-600 focus:text-red-600">
            <UserX className="h-4 w-4 mr-2" style={{ color: "var(--icon-color)" }} />
            <span className="font-bold">Block {author.name}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleReportPost} className="text-red-600 focus:text-red-600">
            <Flag className="h-4 w-4 mr-2" style={{ color: "var(--icon-color)" }} />
            <span className="font-bold">Report post</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

