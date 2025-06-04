
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, FileImage, Vote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CreatePostBoxProps {
  onPost?: (content: string, title: string, topic: string, type: 'text' | 'image' | 'poll', imageUrl?: string, pollOptions?: string[]) => void;
}

const CreatePostBox: React.FC<CreatePostBoxProps> = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<'text' | 'image' | 'poll'>('text');
  const [pollOptions, setPollOptions] = useState<string[]>(['', '', '']);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
      onPost(content, title, selectedTopic, postType, imageUrl, validPollOptions);
    }

    // Reset form
    setTitle("");
    setContent("");
    setSelectedTopic("");
    setPostType('text');
    setPollOptions(['', '', '']);
    setSelectedImage(null);
    setImagePreview(null);
    
    toast({
      title: "Posted successfully",
      description: (
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          Your post has been shared successfully!
        </div>
      ),
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

  return (
    <Card className="mb-4 border border-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            {/* Topic Selection at the top */}
            <div className="flex items-center gap-3 flex-wrap">
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-full sm:w-48 text-muted-foreground">
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
                <Badge className="font-bold text-base bg-primary/10 text-primary border-primary/20" style={{ fontSize: '16px' }}>
                  {selectedTopic}
                </Badge>
              )}
            </div>
            
            {/* Title Input with automatic 16px font size */}
            <Input
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-none text-base font-medium placeholder:text-muted-foreground focus:ring-0"
              style={{ fontSize: '16px' }}
            />
            
            {/* Content Textarea */}
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-none resize-none focus:ring-0 text-base placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
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

        {/* Poll Options - Limited to 3 */}
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
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-3 sm:gap-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group">
                <FileImage className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
                <span className="text-xs text-muted-foreground hidden sm:block">Photo</span>
              </div>
            </label>
            
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group">
              <img 
                src="/lovable-uploads/e185559d-e241-40b2-8d0b-d25079f6212e.png" 
                alt="GIF" 
                className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity" 
                style={{ filter: 'hue-rotate(260deg) saturate(1.5)' }}
              />
              <span className="text-xs text-muted-foreground hidden sm:block">GIF</span>
            </div>
            
            <div 
              className="flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors group"
              onClick={() => setPostType(postType === 'poll' ? 'text' : 'poll')}
            >
              <Vote className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
              <span className="text-xs text-muted-foreground hidden sm:block">Poll</span>
            </div>
          </div>
          
          <Button 
            onClick={handleSubmit}
            disabled={!content.trim() || !selectedTopic}
            className="bg-purple-600 hover:bg-purple-700 rounded-full px-4 sm:px-6 text-sm sm:text-base"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostBox;
