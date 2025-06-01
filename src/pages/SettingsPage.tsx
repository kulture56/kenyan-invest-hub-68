
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
      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and privacy settings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="account" className="text-xs md:text-sm">Account</TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs md:text-sm">Privacy</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs md:text-sm">Notifications</TabsTrigger>
            <TabsTrigger value="appearance" className="text-xs md:text-sm">Appearance</TabsTrigger>
            <TabsTrigger value="security" className="text-xs md:text-sm">Security</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-12">
              <TabsContent value="account" className="mt-0">
                <AccountSettingsTab />
              </TabsContent>

              <TabsContent value="privacy" className="mt-0">
                <PrivacySettingsTab />
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <NotificationSettingsTab />
              </TabsContent>

              <TabsContent value="appearance" className="mt-0">
                <AppearanceSettingsTab />
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <SecuritySettingsTab />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
