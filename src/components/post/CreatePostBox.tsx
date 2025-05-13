
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Users, Tag, BarChart3, ChartBar, LineChart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  
  const handleAddMention = () => {
    if (!currentMention.trim()) return;
    if (!mentionedUsers.includes(currentMention)) {
      setMentionedUsers([...mentionedUsers, currentMention]);
      setContent(content + ` @${currentMention}`);
    }
    setCurrentMention("");
  };

  return (
    <Card className="mb-6 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      <CardContent className="pt-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder={placeholder}
              className="min-h-[80px] resize-none border-none focus-visible:ring-0 p-0 text-base bg-transparent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            
            {/* Show tags/mentions */}
            {(topic || mentionedUsers.length > 0) && (
              <div className="flex flex-wrap gap-2 mt-2">
                {topic && (
                  <Badge variant="outline" className="bg-primary/5 text-primary text-xs py-0">
                    #{topic}
                  </Badge>
                )}
                
                {mentionedUsers.map((user, index) => (
                  <Badge key={index} variant="outline" className="bg-accent/10 text-accent text-xs py-0">
                    @{user}
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Poll Creator */}
            {isAddingPoll && (
              <div className="mt-4 border rounded-md p-3 bg-background/50">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <LineChart className="h-4 w-4" /> Create Poll
                </h4>
                <div className="space-y-2">
                  {pollOptions.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input 
                        value={option}
                        placeholder={`Option ${index + 1}`}
                        onChange={(e) => handlePollOptionChange(index, e.target.value)}
                        className="text-sm"
                      />
                      {index >= 2 && (
                        <Button
                          type="button" 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0"
                          onClick={() => handleRemovePollOption(index)}
                        >
                          &times;
                        </Button>
                      )}
                    </div>
                  ))}
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full mt-1 text-xs"
                    onClick={handleAddPollOption}
                  >
                    Add Option
                  </Button>
                </div>
              </div>
            )}
            
            {/* Chart Creator */}
            {isAddingChart && (
              <div className="mt-4 border rounded-md p-3 bg-background/50">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <ChartBar className="h-4 w-4" /> Add Chart
                </h4>
                <Input 
                  value={chartTitle}
                  placeholder="Chart title (e.g., 'Investment Growth Comparison')"
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="text-sm"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-y-3 gap-x-2 pt-0 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          <Button 
            type="button" 
            size="sm" 
            variant="ghost" 
            className="hover:bg-primary/10 hover:text-primary"
          >
            <Image className="h-4 w-4 mr-2" />
            <span>Media</span>
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                type="button" 
                size="sm" 
                variant="ghost" 
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Tag className="h-4 w-4 mr-2" />
                <span>Topic</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Select Topic</h4>
                <div className="grid grid-cols-2 gap-1">
                  {["STOCKS", "BANKS", "CRYPTO", "MMFS", "SACCOS", "VC", "INSURANCE"].map((t) => (
                    <Button
                      key={t}
                      variant="outline"
                      size="sm"
                      className={`text-xs ${topic === t ? "bg-primary/10 border-primary/30 text-primary" : ""}`}
                      onClick={() => setTopic(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                type="button" 
                size="sm" 
                variant="ghost" 
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Users className="h-4 w-4 mr-2" />
                <span>Mention</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Mention User</h4>
                <div className="flex gap-1">
                  <Input 
                    value={currentMention} 
                    onChange={(e) => setCurrentMention(e.target.value)}
                    placeholder="Username"
                    className="text-xs"
                  />
                  <Button size="sm" onClick={handleAddMention}>Add</Button>
                </div>
                <div className="text-xs text-muted-foreground">
                  Popular: @jamesmwangi, @sarahk, @financeguru
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button 
            type="button" 
            size="sm" 
            variant={isAddingPoll ? "secondary" : "ghost"} 
            className={isAddingPoll ? "" : "hover:bg-primary/10 hover:text-primary"}
            onClick={() => {
              setIsAddingPoll(!isAddingPoll);
              if (!isAddingPoll) setIsAddingChart(false);
            }}
          >
            <LineChart className="h-4 w-4 mr-2" />
            <span>Poll</span>
          </Button>
          
          <Button 
            type="button" 
            size="sm" 
            variant={isAddingChart ? "secondary" : "ghost"} 
            className={isAddingChart ? "" : "hover:bg-primary/10 hover:text-primary"}
            onClick={() => {
              setIsAddingChart(!isAddingChart);
              if (!isAddingChart) setIsAddingPoll(false);
            }}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            <span>Chart</span>
          </Button>
        </div>
        
        <Button 
          onClick={handleSubmit} 
          disabled={!content.trim() || isSubmitting}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </CardFooter>
    </Card>
  );
};
