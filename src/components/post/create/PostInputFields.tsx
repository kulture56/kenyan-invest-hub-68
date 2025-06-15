
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
        required
        placeholder="Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="border-none text-xl font-bold placeholder:text-muted-foreground placeholder:font-bold focus:ring-0"
        style={{ fontSize: '20px' }}
      />
      
      <Textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="min-h-[100px] border-none resize-none focus:ring-0 text-base placeholder:text-muted-foreground placeholder:font-bold"
      />
    </>
  );
};
