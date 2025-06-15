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
  return <></>;
};
export default CreatePostBox;
