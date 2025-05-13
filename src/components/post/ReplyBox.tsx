
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ReplyBoxProps {
  onSubmit: (content: string) => void;
}

const ReplyBox: React.FC<ReplyBoxProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // Submit the reply
    onSubmit(content);
    
    // Reset state
    setContent("");
    setIsSubmitting(false);
  };

  return (
    <div className="flex gap-3 mt-1">
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarImage src="/placeholder.svg" alt="You" />
        <AvatarFallback className="bg-primary/10 text-primary">Y</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <Textarea
          placeholder="Write a reply..."
          className="min-h-[60px] resize-none text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <Button 
            size="sm"
            onClick={handleSubmit}
            disabled={!content.trim() || isSubmitting}
            className="text-xs"
          >
            {isSubmitting ? "Replying..." : "Reply"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyBox;
