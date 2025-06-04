
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PostMediaPreviewProps {
  imagePreview: string | null;
  onRemoveImage: () => void;
}

export const PostMediaPreview: React.FC<PostMediaPreviewProps> = ({
  imagePreview,
  onRemoveImage
}) => {
  if (!imagePreview) return null;

  return (
    <div className="relative">
      <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
      <Button 
        variant="secondary" 
        size="sm" 
        className="absolute top-2 right-2"
        onClick={onRemoveImage}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
