
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountSettingsTab } from "@/components/settings/AccountSettingsTab";
import { PrivacySettingsTab } from "@/components/settings/PrivacySettingsTab";
import { NotificationSettingsTab } from "@/components/settings/NotificationSettingsTab";
import { AppearanceSettingsTab } from "@/components/settings/AppearanceSettingsTab";
import { SecuritySettingsTab } from "@/components/settings/SecuritySettingsTab";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <AppLayout>
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and privacy settings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-6">
            <AccountSettingsTab />
          </TabsContent>

          <TabsContent value="privacy" className="mt-6">
            <PrivacySettingsTab />
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <NotificationSettingsTab />
          </TabsContent>

          <TabsContent value="appearance" className="mt-6">
            <AppearanceSettingsTab />
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <SecuritySettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
