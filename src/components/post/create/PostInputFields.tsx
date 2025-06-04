
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PostInputFieldsProps {
  title: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export const PostInputFields: React.FC<PostInputFieldsProps> = ({
  title,
  content,
  onTitleChange,
  onContentChange
}) => {
  return (
    <>
      <Input
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="border-none text-base font-medium placeholder:text-muted-foreground focus:ring-0"
        style={{ fontSize: '16px' }}
      />
      
      <Textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="min-h-[100px] border-none resize-none focus:ring-0 text-base placeholder:text-muted-foreground"
      />
    </>
  );
};
