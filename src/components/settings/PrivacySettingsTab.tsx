
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const PrivacySettingsTab = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    dataSharing: true,
    profileVisibility: "public"
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Privacy Settings
        </CardTitle>
        <CardDescription>
          Control how your data is shared and who can see your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="data-sharing">Data Sharing</Label>
              <p className="text-sm text-muted-foreground">
                Allow anonymous analytics data to improve the platform
              </p>
            </div>
            <Switch
              id="data-sharing"
              checked={settings.dataSharing}
              onCheckedChange={(checked) => handleToggle("dataSharing", checked)}
            />
          </div>

          <div className="space-y-2">
            <Label>Profile Visibility</Label>
            <Select
              value={settings.profileVisibility}
              onValueChange={(value) => handleSelect("profileVisibility", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="friends">Friends Only</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Control who can see your profile information
            </p>
          </div>
        </div>

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
