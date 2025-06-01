
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PersonalDetailsTab } from "@/components/profile/PersonalDetailsTab";
import { AnalyticsPreferencesTab } from "@/components/profile/AnalyticsPreferencesTab";
import { AccountOverviewTab } from "@/components/profile/AccountOverviewTab";

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  gender: string | null;
  age_group: string | null;
  location: string | null;
  privacy_full_name: string;
  privacy_bio: string;
  privacy_avatar: string;
  analytics_consent: boolean;
  created_at: string;
  updated_at: string;
  last_login: string | null;
}

const ProfilePage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "personal");
  const [profile, setProfile] = useState<UserProfile | null>({
    id: "demo-id",
    user_id: "demo-user-id",
    full_name: "John Doe",
    bio: "Financial enthusiast and GELT Platform user",
    avatar_url: null,
    gender: "Male",
    age_group: "25-34",
    location: "Nairobi, Kenya",
    privacy_full_name: "public",
    privacy_bio: "public",
    privacy_avatar: "public",
    analytics_consent: true,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    last_login: "2024-01-15T08:45:00Z"
  });
  const userEmail = "john.doe@example.com";

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!profile) return;

    // Simulate profile update
    setProfile(prev => prev ? { ...prev, ...updates } : null);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated."
    });
  };

  return (
    <AppLayout>
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Details</TabsTrigger>
            <TabsTrigger value="analytics">Analytics Preferences</TabsTrigger>
            <TabsTrigger value="account">Account Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="mt-6">
            <PersonalDetailsTab 
              profile={profile}
              userEmail={userEmail}
              onUpdateProfile={updateProfile}
            />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsPreferencesTab
              profile={profile}
              onUpdateProfile={updateProfile}
            />
          </TabsContent>

          <TabsContent value="account" className="mt-6">
            <AccountOverviewTab
              profile={profile}
              userEmail={userEmail}
              onLogout={() => {}}
            />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
