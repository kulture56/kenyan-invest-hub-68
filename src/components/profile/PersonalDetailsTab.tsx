
import React, { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  privacy_full_name: string;
  privacy_bio: string;
  privacy_avatar: string;
}

interface PersonalDetailsTabProps {
  profile: UserProfile | null;
  userEmail: string;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const PersonalDetailsTab: React.FC<PersonalDetailsTabProps> = ({
  profile,
  userEmail,
  onUpdateProfile
}) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || "",
    bio: profile?.bio || "",
    privacy_full_name: profile?.privacy_full_name || "private",
    privacy_bio: profile?.privacy_bio || "private",
    privacy_avatar: profile?.privacy_avatar || "public"
  });
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${profile?.user_id}/avatar.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      await onUpdateProfile({ avatar_url: data.publicUrl });
      
      toast({
        title: "Avatar Updated",
        description: "Your profile picture has been updated successfully."
      });
    } catch (error: any) {
      toast({
        title: "Upload Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = () => {
    const updates = {
      full_name: formData.full_name.trim() || null,
      bio: formData.bio.trim() || null,
      privacy_full_name: formData.privacy_full_name,
      privacy_bio: formData.privacy_bio,
      privacy_avatar: formData.privacy_avatar
    };
    
    onUpdateProfile(updates);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your personal details and privacy settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar Section */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile?.avatar_url || ""} alt="Profile" />
            <AvatarFallback className="text-lg">
              {formData.full_name?.charAt(0)?.toUpperCase() || userEmail?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="gap-2"
            >
              <Camera className="h-4 w-4" />
              {uploading ? "Uploading..." : "Change Avatar"}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
            <div>
              <Label className="text-sm">Avatar Privacy</Label>
              <Select
                value={formData.privacy_avatar}
                onValueChange={(value) => handleInputChange("privacy_avatar", value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            value={formData.full_name}
            onChange={(e) => handleInputChange("full_name", e.target.value)}
            placeholder="Enter your full name"
            required
          />
          <div className="flex items-center gap-2">
            <Label className="text-sm">Privacy:</Label>
            <Select
              value={formData.privacy_full_name}
              onValueChange={(value) => handleInputChange("privacy_full_name", value)}
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

        {/* Email (Read-only) */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={userEmail}
            disabled
            className="bg-gray-50"
          />
          <p className="text-sm text-muted-foreground">
            Email is linked to your account and cannot be changed here
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Tell us about yourself (max 200 characters)"
            maxLength={200}
            rows={3}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label className="text-sm">Privacy:</Label>
              <Select
                value={formData.privacy_bio}
                onValueChange={(value) => handleInputChange("privacy_bio", value)}
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
              {formData.bio.length}/200
            </span>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
