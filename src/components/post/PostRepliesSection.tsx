
import React from "react";
import { Button } from "@/components/ui/button";
import ReplyBox from "./ReplyBox";
import { PostReply } from "./PostReply";

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

interface PostRepliesSectionProps {
  showReplyBox: boolean;
  showReplies: boolean;
  replies: ReplyData[];
  onReply: (content: string) => void;
  onShowReplies: () => void;
}

export const PostRepliesSection: React.FC<PostRepliesSectionProps> = ({
  showReplyBox,
  showReplies,
  replies,
  onReply,
  onShowReplies
}) => {
  return (
    <>
      {showReplyBox && (
        <div className="px-4 pb-2">
          <ReplyBox onSubmit={onReply} />
        </div>
      )}
      
      {showReplies && replies.length > 0 && (
        <div className="px-4 pb-4 pt-1 border-t border-border/30 mt-1">
          <div className="pl-6 border-l border-primary/10">
            {replies.map(reply => (
              <PostReply key={reply.id} reply={reply} />
            ))}
          </div>
        </div>
      )}
      
      {!showReplies && replies.length > 0 && (
        <div className="px-4 pb-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs text-primary hover:text-primary/80" 
            onClick={onShowReplies}
          >
            Show {replies.length} {replies.length === 1 ? "reply" : "replies"}
          </Button>
        </div>
      )}
    </>
  );
};
