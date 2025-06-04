
import React from "react";
import { Button } from "@/components/ui/button";
import { FileImage, Vote } from "lucide-react";

interface PostActionButtonsProps {
  postType: 'text' | 'image' | 'poll';
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTogglePoll: () => void;
  onSubmit: () => void;
  isDisabled: boolean;
}

export const PostActionButtons: React.FC<PostActionButtonsProps> = ({
  postType,
  onImageUpload,
  onTogglePoll,
  onSubmit,
  isDisabled
}) => {
  return (
    <div className="flex items-center justify-between pt-3 border-t">
      <div className="flex items-center gap-3 sm:gap-6">
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group">
            <FileImage className="h-4 w-4 text-purple-600 group-hover:text-purple-700" />
            <span className="text-xs text-muted-foreground hidden sm:block">Photo</span>
          </div>
        </label>
        
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group">
          <img 
            src="/lovable-uploads/e185559d-e241-40b2-8d0b-d25079f6212e.png" 
            alt="GIF" 
            className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5)' }}
          />
          <span className="text-xs text-muted-foreground hidden sm:block">GIF</span>
        </div>
        
        <div 
          className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group"
          onClick={onTogglePoll}
        >
          <Vote className="h-4 w-4 text-purple-600 group-hover:text-purple-700" />
          <span className="text-xs text-muted-foreground hidden sm:block">Poll</span>
        </div>
      </div>
      
      <Button 
        onClick={onSubmit}
        disabled={isDisabled}
        className="bg-purple-600 hover:bg-purple-700 rounded-full px-4 sm:px-6 text-sm sm:text-base"
      >
        Post
      </Button>
    </div>
  );
};
