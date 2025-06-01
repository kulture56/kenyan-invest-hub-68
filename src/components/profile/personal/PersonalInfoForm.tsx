
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PersonalInfoFormProps {
  fullName: string;
  bio: string;
  privacyFullName: string;
  privacyBio: string;
  onInputChange: (field: string, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  fullName,
  bio,
  privacyFullName,
  privacyBio,
  onInputChange
}) => {
  return (
    <>
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name *</Label>
        <Input
          id="full_name"
          value={fullName}
          onChange={(e) => onInputChange("full_name", e.target.value)}
          placeholder="Enter your full name"
          required
        />
        <div className="flex items-center gap-2">
          <Label className="text-sm">Privacy:</Label>
          <Select
            value={privacyFullName}
            onValueChange={(value) => onInputChange("privacy_full_name", value)}
          >
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => onInputChange("bio", e.target.value)}
          placeholder="Tell us about yourself (max 200 characters)"
          maxLength={200}
          rows={3}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label className="text-sm">Privacy:</Label>
            <Select
              value={privacyBio}
              onValueChange={(value) => onInputChange("privacy_bio", value)}
            >
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-sm text-muted-foreground">
            {bio.length}/200
          </span>
        </div>
      </div>
    </>
  );
};
