
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { MyAccountSection } from "@/components/profile/MyAccountSection";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { LoginForm } from "@/components/profile/LoginForm";

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <AppLayout>
        <LoginForm onLogin={handleLogin} />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container max-w-4xl mx-auto px-4 py-4">
        <ProfileHeader />
        <MyAccountSection onLogout={handleLogout} />
        <ProfileTabs />
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
