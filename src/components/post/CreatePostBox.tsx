
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Image, BarChart3, Vote, X, Link, FileImage } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CreatePostBoxProps {
  onPost?: (content: string, title: string, topic: string, type: 'text' | 'image' | 'poll' | 'chart', imageUrl?: string, pollOptions?: string[], mediaUrl?: string, mediaType?: 'youtube' | 'tiktok' | 'gif') => void;
}

const CreatePostBox: React.FC<CreatePostBoxProps> = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<'text' | 'image' | 'poll' | 'chart'>('text');
  const [pollOptions, setPollOptions] = useState<string[]>(['', '', '']);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState<'youtube' | 'tiktok' | 'gif' | null>(null);
  const { toast } = useToast();

  const topics = ["Investments", "Financial Education", "Market News", "Technology", "Trading", "Career Development", "Personal Finance", "Cryptocurrency", "Real Estate"];

  const handleSubmit = () => {
    if (!selectedTopic) {
      toast({
        title: "Topic Required",
        description: "Please select a topic for your post",
        variant: "destructive"
      });
      return;
    }

    if (!content.trim()) {
      toast({
        title: "Content Required",
        description: "Please add some content to your post",
        variant: "destructive"
      });
      return;
    }

    if (postType === 'poll') {
      const validOptions = pollOptions.filter(option => option.trim() !== '');
      if (validOptions.length < 2) {
        toast({
          title: "Poll Options Required",
          description: "Please add at least 2 poll options",
          variant: "destructive"
        });
        return;
      }
    }

    if (onPost) {
      const imageUrl = imagePreview || undefined;
      const validPollOptions = postType === 'poll' ? pollOptions.filter(option => option.trim() !== '') : undefined;
      onPost(content, title, selectedTopic, postType, imageUrl, validPollOptions, mediaUrl || undefined, mediaType || undefined);
    }

    // Reset form
    setTitle("");
    setContent("");
    setSelectedTopic("");
    setPostType('text');
    setPollOptions(['', '', '']);
    setSelectedImage(null);
    setImagePreview(null);
    setMediaUrl("");
    setMediaType(null);
    
    toast({
      title: "Posted successfully",
      description: "Your post has been shared successfully!",
      duration: 3000
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setPostType('image');
    }
  };

  const handleMediaUrl = (url: string) => {
    setMediaUrl(url);
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      setMediaType('youtube');
    } else if (url.includes('tiktok.com')) {
      setMediaType('tiktok');
    } else if (url.includes('.gif')) {
      setMediaType('gif');
    } else {
      setMediaType(null);
    }
  };

  const removePollOption = (index: number) => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.filter((_, i) => i !== index));
    }
  };

  const updatePollOption = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const addPollOption = () => {
    if (pollOptions.length < 5) {
      setPollOptions([...pollOptions, '']);
    }
  };

  return (
    <Card className="mb-4 border border-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind about investments?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[80px] border-none resize-none focus:ring-0 text-base"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Topic Selection */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Topic:</span>
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedTopic && (
            <Badge className="font-bold text-base bg-primary/10 text-primary border-primary/20">
              {selectedTopic}
            </Badge>
          )}
        </div>

        {/* Media URL Input */}
        <div className="space-y-2">
          <Input
            placeholder="Add YouTube, TikTok, or GIF link..."
            value={mediaUrl}
            onChange={(e) => handleMediaUrl(e.target.value)}
            className="w-full"
          />
          {mediaUrl && mediaType && (
            <div className="p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 capitalize">{mediaType} link added</span>
                <Button variant="ghost" size="sm" onClick={() => { setMediaUrl(""); setMediaType(null); }}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="relative">
            <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
            <Button 
              variant="secondary" 
              size="sm" 
              className="absolute top-2 right-2"
              onClick={() => { setImagePreview(null); setSelectedImage(null); setPostType('text'); }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Poll Options */}
        {postType === 'poll' && (
          <div className="space-y-2">
            <h4 className="font-medium">Poll Options:</h4>
            {pollOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => updatePollOption(index, e.target.value)}
                  className="flex-1"
                />
                {pollOptions.length > 2 && (
                  <Button variant="ghost" size="sm" onClick={() => removePollOption(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {pollOptions.length < 5 && (
              <Button variant="outline" size="sm" onClick={addPollOption}>
                Add Option
              </Button>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <span>
                  <FileImage className="h-4 w-4 text-primary" />
                  Photo
                </span>
              </Button>
            </label>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={() => setPostType(postType === 'poll' ? 'text' : 'poll')}
            >
              <Vote className="h-4 w-4 text-primary" />
              Poll
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Chart
            </Button>
          </div>
          
          <Button 
            onClick={handleSubmit}
            disabled={!content.trim() || !selectedTopic}
            className="bg-primary hover:bg-primary/90"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostBox;
