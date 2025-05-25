
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Users, Tag, BarChart3, Vote, Smile, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

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
  const [mentionedUsers, setMentionedUsers] = useState<string[]>([]);
  const [currentMention, setCurrentMention] = useState("");
  const [showMentionPopover, setShowMentionPopover] = useState(false);

  const topics = [
    "for-you", "following", "institutions", "trading", "news", 
    "technology", "businesses", "real-estate", "financial-education", "investments"
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
      finalContent += `\n\n[CHART: ${chartTitle}]`;
    }

    // Simulate API call delay
    setTimeout(() => {
      if (onSubmit) onSubmit(finalContent, topic);

      // Reset state
      setContent("");
      setTopic("");
      setIsAddingPoll(false);
      setIsAddingChart(false);
      setPollOptions(["", ""]);
      setChartTitle("");
      setMentionedUsers([]);
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

  const handleAddMention = (username: string) => {
    if (!mentionedUsers.includes(username)) {
      setMentionedUsers([...mentionedUsers, username]);
      setContent(content + ` @${username}`);
    }
    setCurrentMention("");
    setShowMentionPopover(false);
  };

  const mockUsers = ["johntrader", "sarahbiz", "moneymentorke", "investanalyst", "equitybank"];

  return (
    <Card className="mb-6 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      <CardContent className="pt-4 pb-2">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="You" />
            <AvatarFallback className="bg-primary/10 text-primary">Y</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder={placeholder}
              className="min-h-[100px] resize-none border-none focus:ring-0 text-lg p-0 bg-transparent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Topic Selection */}
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <select 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
                className="text-sm bg-transparent border border-border rounded-md px-2 py-1"
              >
                <option value="">Select topic...</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Poll Creation */}
            {isAddingPoll && (
              <div className="space-y-2 p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Create Poll</span>
                  <Button variant="ghost" size="sm" onClick={() => setIsAddingPoll(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                {pollOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                      className="flex-1"
                    />
                    {pollOptions.length > 2 && (
                      <Button variant="ghost" size="sm" onClick={() => handleRemovePollOption(index)}>
                        <X className="h-4 w-4" />
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

            {/* Chart Creation */}
            {isAddingChart && (
              <div className="space-y-2 p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Add Chart</span>
                  <Button variant="ghost" size="sm" onClick={() => setIsAddingChart(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Input
                  placeholder="Chart title or data description"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                />
              </div>
            )}

            {/* Mentioned Users */}
            {mentionedUsers.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {mentionedUsers.map((user) => (
                  <Badge key={user} variant="secondary" className="text-xs">
                    @{user}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => setMentionedUsers(mentionedUsers.filter(u => u !== user))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="pt-3 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
            <Image className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
            <Smile className="h-4 w-4" />
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="text-purple-600 hover:bg-purple-50"
            onClick={() => setIsAddingPoll(!isAddingPoll)}
          >
            <Vote className="h-4 w-4" />
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="text-purple-600 hover:bg-purple-50"
            onClick={() => setIsAddingChart(!isAddingChart)}
          >
            <BarChart3 className="h-4 w-4" />
          </Button>

          <Popover open={showMentionPopover} onOpenChange={setShowMentionPopover}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                <Users className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2">
              <div className="space-y-1">
                <Input
                  placeholder="Search users..."
                  value={currentMention}
                  onChange={(e) => setCurrentMention(e.target.value)}
                  className="mb-2"
                />
                {mockUsers
                  .filter(user => user.toLowerCase().includes(currentMention.toLowerCase()))
                  .map((user) => (
                    <Button
                      key={user}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => handleAddMention(user)}
                    >
                      @{user}
                    </Button>
                  ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {280 - content.length}
          </span>
          <Button 
            onClick={handleSubmit}
            disabled={!content.trim() || isSubmitting}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isSubmitting ? "Posting..." : "Post"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
