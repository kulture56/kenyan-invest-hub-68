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

  const availableTopics = ["investments", "institutions", "trading", "news", "technology", "businesses", "real estate", "financial education", "following"];

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
    <Card className="mb-2 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      <CardContent className="p-3">
        <div className="flex gap-2">
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={placeholder}
              className="border-0 p-0 resize-none focus-visible:ring-0 bg-transparent text-sm"
              rows={3}
            />

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative">
                <img src={imagePreview} alt="Preview" className="max-h-40 rounded-md" />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={removeImage}
                  className="absolute top-1 right-1 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* Mentioned Users */}
            {mentionedUsers.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {mentionedUsers.map(user => (
                  <Badge key={user} variant="secondary" className="text-xs">
                    @{user}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMention(user)}
                      className="ml-1 h-3 w-3 p-0 hover:bg-destructive/20"
                    >
                      <X className="h-2 w-2" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Poll Section */}
            {isAddingPoll && (
              <div className="space-y-2 p-2 bg-muted/50 rounded-md">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Poll Options</Label>
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
                  <div key={index} className="flex gap-1">
                    <Input
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                      className="text-xs h-7"
                    />
                    {pollOptions.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemovePollOption(index)}
                        className="h-7 w-7 p-0"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddPollOption}
                  className="h-6 text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Option
                </Button>
              </div>
            )}

            {/* Chart Section */}
            {isAddingChart && (
              <div className="space-y-2 p-2 bg-muted/50 rounded-md">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Chart Details</Label>
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
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  placeholder="Chart title"
                  className="text-xs h-7"
                />
                <Select value={chartType} onValueChange={setChartType}>
                  <SelectTrigger className="h-7 text-xs">
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

      <CardFooter className="p-3 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            {/* Image Upload */}
            <label htmlFor="image-upload">
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0" asChild>
                <span className="cursor-pointer">
                  <Image className="h-3 w-3" />
                </span>
              </Button>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {/* Mention Users */}
            <Popover open={showMentionPopover} onOpenChange={setShowMentionPopover}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <Users className="h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-2">
                <div className="space-y-2">
                  <Label className="text-xs">Mention User</Label>
                  <div className="flex gap-1">
                    <Input
                      value={currentMention}
                      onChange={(e) => setCurrentMention(e.target.value)}
                      placeholder="Username"
                      className="text-xs h-7"
                    />
                    <Button onClick={handleAddMention} size="sm" className="h-7 text-xs">
                      Add
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Add Poll */}
            <Button
              variant={isAddingPoll ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setIsAddingPoll(!isAddingPoll)}
              className="h-7 w-7 p-0"
            >
              <BarChart3 className="h-3 w-3" />
            </Button>

            {/* Add Chart */}
            <Button
              variant={isAddingChart ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setIsAddingChart(!isAddingChart)}
              className="h-7 w-7 p-0"
            >
              <LineChart className="h-3 w-3" />
            </Button>

            {/* Topic Selection */}
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger className="h-7 w-20 text-xs">
                <Tag className="h-3 w-3" />
              </SelectTrigger>
              <SelectContent>
                {availableTopics.map(t => (
                  <SelectItem key={t} value={t} className="text-xs">
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!content.trim() || isSubmitting}
            size="sm"
            className="h-7 text-xs"
          >
            {isSubmitting ? "Posting..." : "Post"}
            <Send className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
