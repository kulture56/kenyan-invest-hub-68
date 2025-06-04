
import React from "react";

interface PostContentProps {
  content: string;
  image?: string;
  mediaUrl?: string;
  mediaType?: 'youtube' | 'tiktok' | 'gif';
}

export const PostContent: React.FC<PostContentProps> = ({ 
  content, 
  image, 
  mediaUrl, 
  mediaType 
}) => {
  const renderMedia = () => {
    if (!mediaUrl || !mediaType) return null;

    switch (mediaType) {
      case 'youtube':
        const videoId = extractYouTubeId(mediaUrl);
        if (videoId) {
          return (
            <div className="mt-3 aspect-video rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          );
        }
        break;
      case 'tiktok':
        return (
          <div className="mt-3 p-4 bg-gray-50 rounded-lg">
            <a 
              href={mediaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🎵 View TikTok Video
            </a>
          </div>
        );
      case 'gif':
        return (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img 
              src={mediaUrl} 
              alt="GIF" 
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        );
    }
    return null;
  };

  const extractYouTubeId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="px-4 py-2">
      <p className="whitespace-pre-line text-base leading-relaxed">{content}</p>
      
      {image && (
        <div className="mt-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img 
            src={image} 
            alt="Post attachment" 
            className="w-full h-auto hover:scale-[1.01] transition-transform" 
          />
        </div>
      )}
      
      {renderMedia()}
    </div>
  );
};
