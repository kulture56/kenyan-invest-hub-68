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
  onPost?: (content: string, title: string, topic: string, type: 'text' | 'image' | 'poll' | 'chart', imageUrl?: string, pollOptions?: string[]) => void;
}
const CreatePostBox: React.FC<CreatePostBoxProps> = ({
  onPost
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<'text' | 'image' | 'poll' | 'chart'>('text');
  const [pollOptions, setPollOptions] = useState<string[]>(['', '', '']);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    toast
  } = useToast();
  const topics = ["Investments", "Financial Education", "Market News", "Technology", "Trading", "Career Development", "Personal Finance", "Cryptocurrency", "Real Estate"];
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
      title: "Post Created",
      description: "Your post has been shared successfully!"
    });
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
  return <Card className="mb-2">
      
      
    </Card>;
};
export default CreatePostBox;