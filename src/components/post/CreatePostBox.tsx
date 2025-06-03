
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Image, BarChart3, Vote, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CreatePostBoxProps {
  onPost?: (content: string, title: string, topic: string, type: 'text' | 'image' | 'poll' | 'chart') => void;
}

const CreatePostBox: React.FC<CreatePostBoxProps> = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<'text' | 'image' | 'poll' | 'chart'>('text');
  const [pollOptions, setPollOptions] = useState<string[]>(['', '']);
  const { toast } = useToast();

  const topics = [
    "Investments", "Financial Education", "Market News", 
    "Technology", "Trading", "Career Development", 
    "Personal Finance", "Cryptocurrency", "Real Estate"
  ];

  const handleSubmit = () => {
    if (!title.trim()) {
      toast({
        title: "Title Required",
        description: "Please add a title for your post",
        variant: "destructive"
      });
      return;
    }

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

    if (onPost) {
      onPost(content, title, selectedTopic, postType);
    }
    setTitle("");
    setContent("");
    setSelectedTopic("");
    setPostType('text');
    setPollOptions(['', '']);
    
    toast({
      title: "Post Created",
      description: "Your post has been shared successfully!"
    });
  };

  const addPollOption = () => {
    if (pollOptions.length < 4) {
      setPollOptions([...pollOptions, '']);
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
    <Card className="mb-2">
      <CardHeader className="pb-2">
        <Input
          placeholder="What's the title of your post?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-sm font-semibold border-0 px-0 focus-visible:ring-0 placeholder:text-muted-foreground"
          style={{ fontSize: '14px' }}
        />
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        <Select value={selectedTopic} onValueChange={setSelectedTopic}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem key={topic} value={topic} className="text-sm">
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-20 resize-none text-sm"
        />

        {postType === 'poll' && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Poll Options:</p>
            {pollOptions.map((option, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => updatePollOption(index, e.target.value)}
                  className="text-sm"
                />
                {pollOptions.length > 2 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removePollOption(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {pollOptions.length < 4 && (
              <Button variant="outline" size="sm" onClick={addPollOption}>
                Add Option
              </Button>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-2">
            <Button
              variant={postType === 'text' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPostType('text')}
              className="text-sm"
            >
              Text
            </Button>
            <Button
              variant={postType === 'image' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPostType('image')}
              className="text-sm"
            >
              <Image className="h-4 w-4 mr-1" />
              Image
            </Button>
            <Button
              variant={postType === 'poll' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPostType('poll')}
              className="text-sm"
            >
              <Vote className="h-4 w-4 mr-1" />
              Poll
            </Button>
            <Button
              variant={postType === 'chart' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPostType('chart')}
              className="text-sm"
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              Chart
            </Button>
          </div>

          <Button onClick={handleSubmit} className="text-sm">
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostBox;
