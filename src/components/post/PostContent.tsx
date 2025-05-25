
import React from "react";

interface PostContentProps {
  content: string;
  image?: string;
}

export const PostContent: React.FC<PostContentProps> = ({ content, image }) => {
  return (
    <div className="px-4 py-2">
      <p className="whitespace-pre-line">{content}</p>
      {image && (
        <div className="mt-3 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img src={image} alt="Post attachment" className="w-full h-auto hover:scale-[1.01] transition-transform" />
        </div>
      )}
    </div>
  );
};
