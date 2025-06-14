import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostTopicSelector } from "./create/PostTopicSelector";
import { PostInputFields } from "./create/PostInputFields";
import { PollOptions } from "./create/PollOptions";
import { PostMediaPreview } from "./create/PostMediaPreview";
import { PostActionButtons } from "./create/PostActionButtons";
interface CreatePostBoxProps {
  onPost?: (content: string, title: string, topic: string, type: 'text' | 'image' | 'poll', imageUrl?: string, pollOptions?: string[]) => void;
}
const CreatePostBox: React.FC<CreatePostBoxProps> = ({
  onPost
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<'text' | 'image' | 'poll'>('text');
  const [pollOptions, setPollOptions] = useState<string[]>(['', '', '']);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    toast
  } = useToast();
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
      description: <div className="flex items-center gap-2">
          <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
          Your post has been shared successfully!
        </div>,
      duration: 3000
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
  const handleRemoveImage = () => {
    setImagePreview(null);
    setSelectedImage(null);
    setPostType('text');
  };
  const handleTogglePoll = () => {
    setPostType(postType === 'poll' ? 'text' : 'poll');
  };
  return <Card className="mb-4">
      
      
    </Card>;
};
export default CreatePostBox;