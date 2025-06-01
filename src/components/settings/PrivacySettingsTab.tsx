
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Shield, Eye, Database } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const PrivacySettingsTab = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    dataSharing: true,
    profileVisibility: "public",
    analyticsConsent: true
  });

  const handleToggle = (field: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSelect = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved successfully."
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data & Analytics
          </CardTitle>
          <CardDescription>
            Control how your data is collected and used to improve the platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label htmlFor="analytics-consent" className="font-medium">Analytics Consent</Label>
              <p className="text-sm text-muted-foreground">
                Allow GELT to collect anonymized analytics data to improve platform features and user experience
              </p>
            </div>
            <Switch
              id="analytics-consent"
              checked={settings.analyticsConsent}
              onCheckedChange={(checked) => handleToggle("analyticsConsent", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label htmlFor="data-sharing" className="font-medium">Data Sharing</Label>
              <p className="text-sm text-muted-foreground">
                Share anonymous usage data with third-party analytics services to help improve the platform
              </p>
            </div>
            <Switch
              id="data-sharing"
              checked={settings.dataSharing}
              onCheckedChange={(checked) => handleToggle("dataSharing", checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Profile Visibility
          </CardTitle>
          <CardDescription>
            Control who can see your profile information and activity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Profile Visibility</Label>
            <Select
              value={settings.profileVisibility}
              onValueChange={(value) => handleSelect("profileVisibility", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Public</span>
                    <span className="text-xs text-muted-foreground">Anyone can see your profile</span>
                  </div>
                </SelectItem>
                <SelectItem value="private">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Private</span>
                    <span className="text-xs text-muted-foreground">Only you can see your profile</span>
                  </div>
                </SelectItem>
                <SelectItem value="friends">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Friends Only</span>
                    <span className="text-xs text-muted-foreground">Only your connections can see your profile</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              This setting controls the default visibility of your profile information across the platform
            </p>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
