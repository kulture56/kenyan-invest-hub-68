
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { AvatarSection } from "./personal/AvatarSection";
import { PersonalInfoForm } from "./personal/PersonalInfoForm";
import { EmailDisplay } from "./personal/EmailDisplay";

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
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || "",
    bio: profile?.bio || "",
    privacy_full_name: profile?.privacy_full_name || "private",
    privacy_bio: profile?.privacy_bio || "private",
    privacy_avatar: profile?.privacy_avatar || "public"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpdate = async (avatarUrl: string) => {
    await onUpdateProfile({ avatar_url: avatarUrl });
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
        <AvatarSection
          avatarUrl={profile?.avatar_url || null}
          fullName={formData.full_name}
          userEmail={userEmail}
          userId={profile?.user_id || "demo-user-id"}
          privacyAvatar={formData.privacy_avatar}
          onAvatarUpdate={handleAvatarUpdate}
          onPrivacyChange={handleInputChange}
        />

        {/* Personal Info Form */}
        <PersonalInfoForm
          fullName={formData.full_name}
          bio={formData.bio}
          privacyFullName={formData.privacy_full_name}
          privacyBio={formData.privacy_bio}
          onInputChange={handleInputChange}
        />

        {/* Email Display */}
        <EmailDisplay userEmail={userEmail} />

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
