
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Users, Tag, BarChart3, ChartBar, LineChart, X, Plus, Trash2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreatePostBoxProps {
  onSubmit?: (content: string, topic?: string) => void;
  placeholder?: string;
  defaultTopic?: string;
}

export const CreatePostBox: React.FC<CreatePostBoxProps> = ({
  onSubmit,
  placeholder = "Share your investment insights or ask a question...",
  defaultTopic
}) => {
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState(defaultTopic || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [isAddingPoll, setIsAddingPoll] = useState(false);
  const [isAddingChart, setIsAddingChart] = useState(false);
  const [chartTitle, setChartTitle] = useState("");
  const [chartType, setChartType] = useState("line");
  const [mentionedUsers, setMentionedUsers] = useState<string[]>([]);
  const [currentMention, setCurrentMention] = useState("");
  const [showMentionPopover, setShowMentionPopover] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const availableTopics = [
    "investments", "institutions", "trading", "news", "technology", 
    "businesses", "real estate", "financial education", "following"
  ];

  const handleSubmit = () => {
    if (!content.trim()) return;
    setIsSubmitting(true);
    let finalContent = content;

    // Add poll if enabled
    if (isAddingPoll && pollOptions.filter(o => o.trim()).length >= 2) {
      finalContent += "\n\n[POLL]\n" + pollOptions.filter(o => o.trim()).join("\n");
    }

    // Add chart if enabled
    if (isAddingChart && chartTitle.trim()) {
      finalContent += `\n\n[CHART: ${chartType.toUpperCase()} - ${chartTitle}]`;
    }

    // Simulate API call delay
    setTimeout(() => {
      if (onSubmit) onSubmit(finalContent, topic);

      // Reset state
      setContent("");
      setTopic(defaultTopic || "");
      setIsAddingPoll(false);
      setIsAddingChart(false);
      setPollOptions(["", ""]);
      setChartTitle("");
      setChartType("line");
      setMentionedUsers([]);
      setSelectedImage(null);
      setImagePreview(null);
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

  const handleAddMention = () => {
    if (!currentMention.trim()) return;
    if (!mentionedUsers.includes(currentMention)) {
      setMentionedUsers([...mentionedUsers, currentMention]);
      setContent(content + ` @${currentMention}`);
    }
    setCurrentMention("");
    setShowMentionPopover(false);
  };

  const handleRemoveMention = (userToRemove: string) => {
    setMentionedUsers(mentionedUsers.filter(user => user !== userToRemove));
    setContent(content.replace(` @${userToRemove}`, ""));
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
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <Card className="mb-6 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src="/placeholder.svg" alt="Your profile" />
            <AvatarFallback className="bg-primary/10 text-primary">Y</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            {/* Topic Selection */}
            <div className="flex items-center gap-2">
              <Label htmlFor="topic" className="text-sm font-medium">Topic:</Label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="w-48 h-8">
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  {availableTopics.map((topicOption) => (
                    <SelectItem key={topicOption} value={topicOption}>
                      #{topicOption}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Main Content Area */}
            <Textarea
              placeholder={placeholder}
              className="min-h-[100px] resize-none border-0 p-0 text-lg focus-visible:ring-0 shadow-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Mentioned Users Display */}
            {mentionedUsers.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Label className="text-sm text-muted-foreground">Mentioned:</Label>
                {mentionedUsers.map((user) => (
                  <Badge key={user} variant="secondary" className="flex items-center gap-1">
                    @{user}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => handleRemoveMention(user)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative inline-block">
                <img 
                  src={imagePreview} 
                  alt="Upload preview" 
                  className="max-w-full h-32 object-cover rounded-md border"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0"
                  onClick={removeImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* Poll Section */}
            {isAddingPoll && (
              <div className="space-y-2 p-3 border rounded-md bg-secondary/20">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Poll Options</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAddingPoll(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                {pollOptions.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                      className="h-8"
                    />
                    {pollOptions.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemovePollOption(index)}
                        className="h-8 w-8 p-0"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAddPollOption}
                  className="h-8 text-primary"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Option
                </Button>
              </div>
            )}

            {/* Chart Section */}
            {isAddingChart && (
              <div className="space-y-2 p-3 border rounded-md bg-secondary/20">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Chart Details</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAddingChart(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <Input
                  placeholder="Chart title"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="h-8"
                />
                <Select value={chartType} onValueChange={setChartType}>
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                    <SelectItem value="pie">Pie Chart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 flex items-center justify-between border-t border-border/30">
        <div className="flex items-center gap-1">
          {/* Media Upload */}
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
              <span>
                <Image className="h-4 w-4 text-primary" />
              </span>
            </Button>
          </label>

          {/* Mention Users */}
          <Popover open={showMentionPopover} onOpenChange={setShowMentionPopover}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Users className="h-4 w-4 text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Mention User</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter username"
                    value={currentMention}
                    onChange={(e) => setCurrentMention(e.target.value)}
                    className="h-8"
                  />
                  <Button size="sm" onClick={handleAddMention} className="h-8">
                    Add
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Poll */}
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 w-8 p-0 ${isAddingPoll ? 'bg-primary/10' : ''}`}
            onClick={() => setIsAddingPoll(!isAddingPoll)}
          >
            <BarChart3 className="h-4 w-4 text-primary" />
          </Button>

          {/* Chart */}
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-8 w-8 p-0 ${isAddingChart ? 'bg-primary/10' : ''}`}
            onClick={() => setIsAddingChart(!isAddingChart)}
          >
            <LineChart className="h-4 w-4 text-primary" />
          </Button>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!content.trim() || isSubmitting}
          size="sm"
          className="h-8 px-4"
        >
          {isSubmitting ? (
            "Posting..."
          ) : (
            <>
              <Send className="h-3 w-3 mr-1" />
              Post
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
