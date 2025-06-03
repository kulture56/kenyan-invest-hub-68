
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Share, Copy, MessageSquare, Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

interface ShareDialogProps {
  children: React.ReactNode;
  postId: string;
  postContent: string;
  authorName: string;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  children,
  postId,
  postContent,
  authorName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const postUrl = `${window.location.origin}/post/${postId}`;
  const shareText = `Check out this post by ${authorName}: "${postContent.slice(0, 100)}${postContent.length > 100 ? '...' : ''}"`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    toast({
      description: "Post link copied to clipboard",
      duration: 2000
    });
  };

  const handleShareToMessages = () => {
    // In a real app, this would integrate with the messaging system
    toast({
      description: "Share via messages feature coming soon!",
      duration: 2000
    });
    setIsOpen(false);
  };

  const handleShareViaPlatform = (platform: string) => {
    let shareUrl = "";
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(`Interesting post by ${authorName}`)}&body=${encodeURIComponent(`${shareText}\n\n${postUrl}`)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    toast({
      description: `Shared via ${platform}`,
      duration: 2000
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share className="h-5 w-5" />
            Share Post
          </DialogTitle>
          <DialogDescription>
            Share this post with others via various platforms
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Copy Link */}
          <div className="flex items-center space-x-2">
            <Input value={postUrl} readOnly className="flex-1" />
            <Button variant="outline" size="icon" onClick={handleCopyLink}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <Separator />

          {/* Share via Messages */}
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleShareToMessages}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Share via Messages
          </Button>

          <Separator />

          {/* Social Media Platforms */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Share on social media:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareViaPlatform("twitter")}
                className="justify-start"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareViaPlatform("facebook")}
                className="justify-start"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareViaPlatform("linkedin")}
                className="justify-start"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareViaPlatform("email")}
                className="justify-start"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Custom Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Add a message (optional):</label>
            <Textarea
              placeholder="Add your thoughts about this post..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
