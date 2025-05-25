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
  return <Card className="mb-6 bg-card shadow-sm hover:shadow-md transition-all border border-primary/10">
      

      
    </Card>;
};