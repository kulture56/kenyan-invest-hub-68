
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Users, Tag } from "lucide-react";

interface CreatePostBoxProps {
  onSubmit?: (content: string, topic?: string) => void;
  placeholder?: string;
  defaultTopic?: string;
}

export const CreatePostBox: React.FC<CreatePostBoxProps> = ({ 
  onSubmit,
  placeholder = "Share your investment insights or ask a question...",
  defaultTopic 
}) => {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState(defaultTopic || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (onSubmit) onSubmit(content, topic);
      setContent("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card className="mb-6 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder={placeholder}
              className="min-h-[80px] resize-none border-none focus-visible:ring-0 p-0 text-base bg-transparent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2 pt-0 border-t border-border/50">
        <div className="flex gap-2">
          <Button type="button" size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
            <Image className="h-4 w-4 mr-2" />
            <span>Media</span>
          </Button>
          
          <Button type="button" size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
            <Tag className="h-4 w-4 mr-2" />
            <span>Topic</span>
          </Button>
          
          <Button type="button" size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
            <Users className="h-4 w-4 mr-2" />
            <span>Mention</span>
          </Button>
        </div>
        <Button 
          onClick={handleSubmit} 
          disabled={!content.trim() || isSubmitting}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </CardFooter>
    </Card>
  );
};
