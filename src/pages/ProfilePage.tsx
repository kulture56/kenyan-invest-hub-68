
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PersonalDetailsTab } from "@/components/profile/PersonalDetailsTab";
import { AnalyticsPreferencesTab } from "@/components/profile/AnalyticsPreferencesTab";
import { AccountOverviewTab } from "@/components/profile/AccountOverviewTab";
import { LoginForm } from "@/components/profile/LoginForm";

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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "personal");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email || "");
        await fetchProfile(user.id);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
      } else {
        // Create profile if it doesn't exist
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([{
            user_id: userId,
            full_name: userEmail.split('@')[0],
            last_login: new Date().toISOString()
          }])
          .select()
          .single();

        if (createError) throw createError;
        setProfile(newProfile);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive"
      });
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      toast({
        title: "Logged in successfully",
        description: "Welcome back to GELT!"
      });
      
      await checkUser();
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account."
      });
      
      setIsLoggedIn(false);
      setProfile(null);
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!profile) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', profile.user_id)
        .select()
        .single();

      if (error) throw error;

      setProfile(data);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated."
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </AppLayout>
    );
  }

  if (!isLoggedIn) {
    return (
      <AppLayout>
        <LoginForm onLogin={handleLogin} />
      </AppLayout>
    );
  }

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
              onLogout={handleLogout}
            />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
