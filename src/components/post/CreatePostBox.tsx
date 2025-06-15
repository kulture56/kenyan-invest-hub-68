import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast, toast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostTopicSelector } from "./create/PostTopicSelector";
import { PostInputFields } from "./create/PostInputFields";
import { PollOptions } from "./create/PollOptions";
import { PostMediaPreview } from "./create/PostMediaPreview";
import { PostActionButtons } from "./create/PostActionButtons";

interface CreatePostBoxProps {
  onPost?: (
    content: string,
    title: string,
    topic: string,
    type: "text" | "image" | "poll",
    imageUrl?: string,
    pollOptions?: string[]
  ) => void;
}

const MAX_POLL_OPTIONS = 4;
const MIN_POLL_OPTIONS = 2;

const CreatePostBox: React.FC<CreatePostBoxProps> = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [postType, setPostType] = useState<"text" | "image" | "poll">("text");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [isPosting, setIsPosting] = useState(false);

  // Dummy current user for placeholder
  const currentUser = {
    avatar: "/placeholder.svg",
    name: "You",
    username: "currentuser",
  };

  // Handlers
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageFile(file);
      setPostType("image");
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setPostType("text");
  };

  const handleTogglePoll = () => {
    if (postType === "poll") {
      setPostType("text");
    } else {
      setPostType("poll");
    }
  };

  // ---- FIXED: change parameter order ----
  const handlePollOptionChange = (idx: number, value: string) => {
    const copy = [...pollOptions];
    copy[idx] = value;
    setPollOptions(copy);
  };

  const handleAddPollOption = () => {
    if (pollOptions.length < MAX_POLL_OPTIONS) {
      setPollOptions([...pollOptions, ""]);
    }
  };

  const handleRemovePollOption = (idx: number) => {
    if (pollOptions.length > MIN_POLL_OPTIONS) {
      setPollOptions(pollOptions.filter((_, i) => i !== idx));
    }
  };

  const handleClear = () => {
    setTitle("");
    setContent("");
    setSelectedTopic("");
    setPostType("text");
    setImageFile(null);
    setImagePreview(null);
    setPollOptions(["", ""]);
  };

  const isDisabled =
    isPosting ||
    !selectedTopic ||
    (postType === "poll"
      ? title.length === 0 ||
        content.length === 0 ||
        pollOptions.some((v) => !v.trim()) ||
        pollOptions.length < MIN_POLL_OPTIONS
      : title.length === 0 || content.length === 0);

  const handleSubmit = async () => {
    setIsPosting(true);

    // Simulate posting action (real logic should be passed as a prop)
    setTimeout(() => {
      handleClear();
      setIsPosting(false);
      toast({
        description: (
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/c83d693e-8083-4894-bfbe-b02fbd08bc43.png" alt="Check" className="h-4 w-4" />
            Your post was created!
          </div>
        ),
        duration: 1500,
      });

      // Mock callback for parent refresh if provided
      if (onPost) {
        onPost(
          content,
          title,
          selectedTopic,
          postType,
          imagePreview ?? undefined,
          postType === "poll" ? pollOptions : undefined
        );
      }
    }, 800);
  };

  return (
    <Card className="mb-4 border-primary/10">
      <CardContent className="flex flex-col gap-3 p-3 sm:p-5">
        <div className="flex items-center gap-3 mb-1">
          <Avatar>
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback>{currentUser.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-base">{currentUser.name}</div>
            <div className="text-xs text-muted-foreground">@{currentUser.username}</div>
          </div>
        </div>

        <PostTopicSelector selectedTopic={selectedTopic} onTopicChange={setSelectedTopic} />

        <PostInputFields
          title={title}
          content={content}
          onTitleChange={setTitle}
          onContentChange={setContent}
        />

        {postType === "image" && imagePreview && (
          <PostMediaPreview imagePreview={imagePreview} onRemoveImage={handleRemoveImage} />
        )}

        {postType === "poll" && (
          <PollOptions
            pollOptions={pollOptions}
            onUpdateOption={handlePollOptionChange}
            onRemoveOption={handleRemovePollOption}
          />
        )}

        <PostActionButtons
          postType={postType}
          onImageUpload={handleImageUpload}
          onTogglePoll={handleTogglePoll}
          onSubmit={handleSubmit}
          isDisabled={isDisabled}
        />
      </CardContent>
    </Card>
  );
};

export default CreatePostBox;
