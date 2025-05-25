
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Image, 
  BarChart3, 
  MessageCircle, 
  Vote,
  Plus,
  X,
  Camera,
  FileText
} from "lucide-react";

interface EnhancedCreatePostBoxProps {
  onSubmit?: (content: string, type: string, extras?: any) => void;
  placeholder?: string;
  defaultTopic?: string;
}

export const EnhancedCreatePostBox: React.FC<EnhancedCreatePostBoxProps> = ({
  onSubmit,
  placeholder = "What's happening in the financial world?",
  defaultTopic
}) => {
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("post");
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [chartTitle, setChartTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postTypes = [
    { id: "post", label: "Post", icon: FileText },
    { id: "poll", label: "Poll", icon: Vote },
    { id: "chart", label: "Chart", icon: BarChart3 },
    { id: "media", label: "Media", icon: Camera },
    { id: "question", label: "Question", icon: MessageCircle }
  ];

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    let extras = {};
    if (postType === "poll") {
      extras = { pollOptions: pollOptions.filter(o => o.trim()) };
    } else if (postType === "chart") {
      extras = { chartTitle };
    }

    setTimeout(() => {
      if (onSubmit) onSubmit(content, postType, extras);
      
      // Reset state
      setContent("");
      setPostType("post");
      setPollOptions(["", ""]);
      setChartTitle("");
      setIsSubmitting(false);
    }, 500);
  };

  const handleAddPollOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const handlePollOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleRemovePollOption = (index: number) => {
    if (pollOptions.length <= 2) return;
    const newOptions = pollOptions.filter((_, i) => i !== index);
    setPollOptions(newOptions);
  };

  return (
    <Card className="mb-4 bg-card shadow-sm border border-primary/10">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            {/* Post Type Selection */}
            <div className="flex gap-1 overflow-x-auto no-scrollbar">
              {postTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={postType === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPostType(type.id)}
                  className="whitespace-nowrap flex items-center gap-1 text-xs"
                >
                  <type.icon className="h-3 w-3" />
                  {type.label}
                </Button>
              ))}
            </div>
            
            {/* Main Content Input */}
            <Textarea
              placeholder={placeholder}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-none shadow-none resize-none focus-visible:ring-0 text-lg placeholder:text-muted-foreground"
            />
            
            {/* Poll Options */}
            {postType === "poll" && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Poll Options:</p>
                {pollOptions.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                      className="text-sm"
                    />
                    {pollOptions.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemovePollOption(index)}
                        className="text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddPollOption}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Option
                </Button>
              </div>
            )}
            
            {/* Chart Title */}
            {postType === "chart" && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Chart Title:</p>
                <Input
                  placeholder="Enter chart title..."
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="text-sm"
                />
              </div>
            )}
            
            <Separator />
            
            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-primary">
                  <Image className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary">
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                {defaultTopic && (
                  <Badge variant="secondary" className="text-xs">
                    {defaultTopic}
                  </Badge>
                )}
                <Button
                  onClick={handleSubmit}
                  disabled={!content.trim() || isSubmitting}
                  className="bg-primary hover:bg-primary/90 font-medium px-6"
                >
                  {isSubmitting ? "Posting..." : "Post"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
