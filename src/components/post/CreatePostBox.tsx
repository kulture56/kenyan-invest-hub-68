
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image, Users, Tag, BarChart3, ChartBar, LineChart, X, Plus, Trash2, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CreatePostBoxProps {
  onSubmit?: (content: string, title?: string, topic?: string) => void;
  placeholder?: string;
  defaultTopic?: string;
}

export const CreatePostBox: React.FC<CreatePostBoxProps> = ({
  onSubmit,
  placeholder = "Share your investment insights or ask a question...",
  defaultTopic
}) => {
  const [title, setTitle] = useState("");
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

  const availableTopics = ["investments", "institutions", "trading", "news", "technology", "businesses", "real estate", "financial education", "following"];

  const handleSubmit = () => {
    if (!content.trim()) {
      toast({
        description: "Please write something before posting",
        variant: "destructive"
      });
      return;
    }

    if (!topic) {
      toast({
        description: "Please select a topic before posting",
        variant: "destructive"
      });
      return;
    }

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
      if (onSubmit) onSubmit(finalContent, title, topic);

      // Reset state
      setTitle("");
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

      toast({
        description: "Post created successfully!"
      });
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
      reader.onload = e => {
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
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png" alt="Your avatar" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            {/* Topic Selection */}
            <div className="w-full">
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {availableTopics.map((availableTopic) => (
                    <SelectItem key={availableTopic} value={availableTopic}>
                      {availableTopic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Title Input */}
            <Input
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-none p-0 text-lg font-semibold placeholder:font-normal focus-visible:ring-0"
            />

            {/* Content Input */}
            <Textarea
              placeholder={placeholder}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-none p-0 resize-none focus-visible:ring-0"
            />

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="max-w-full h-48 object-cover rounded-lg" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Mentioned Users */}
            {mentionedUsers.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {mentionedUsers.map((user) => (
                  <Badge key={user} variant="secondary" className="gap-1">
                    @{user}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleRemoveMention(user)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Poll Options */}
            {isAddingPoll && (
              <div className="space-y-2 p-3 border rounded-md">
                <Label className="text-sm font-medium">Poll Options</Label>
                {pollOptions.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                    />
                    {pollOptions.length > 2 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleRemovePollOption(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={handleAddPollOption}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Option
                </Button>
              </div>
            )}

            {/* Chart Configuration */}
            {isAddingChart && (
              <div className="space-y-2 p-3 border rounded-md">
                <Label className="text-sm font-medium">Chart Configuration</Label>
                <Input
                  placeholder="Chart title"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                />
                <Select value={chartType} onValueChange={setChartType}>
                  <SelectTrigger>
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

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          {/* Action Buttons */}
          <div className="flex gap-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              <Image className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10"
              onClick={() => setIsAddingChart(!isAddingChart)}
            >
              <BarChart3 className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10"
              onClick={() => setIsAddingPoll(!isAddingPoll)}
            >
              <ChartBar className="h-5 w-5" />
            </Button>

            <Popover open={showMentionPopover} onOpenChange={setShowMentionPopover}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary/10"
                >
                  <Users className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <Label>Mention User</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Username"
                      value={currentMention}
                      onChange={(e) => setCurrentMention(e.target.value)}
                    />
                    <Button size="sm" onClick={handleAddMention}>
                      Add
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Post Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !content.trim() || !topic}
            className="bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? (
              "Posting..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-1" />
                Post
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
