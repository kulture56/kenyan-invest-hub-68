
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const AccountSettingsTab = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    language: "en",
    timezone: "Africa/Nairobi"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your account settings have been updated successfully."
    });
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "sw", label: "Swahili" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" }
  ];

  const timezoneOptions = [
    { value: "Africa/Nairobi", label: "Nairobi (GMT+3)" },
    { value: "Africa/Lagos", label: "Lagos (GMT+1)" },
    { value: "Africa/Cairo", label: "Cairo (GMT+2)" },
    { value: "Europe/London", label: "London (GMT+0)" },
    { value: "America/New_York", label: "New York (GMT-5)" }
  ];

  return (
    <div className="space-y-6">
      {/* X Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Account Management
          </CardTitle>
          <CardDescription>
            Manage your core account settings including username, email, and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border rounded-lg bg-blue-50/50">
            <p className="text-sm mb-3">
              Username, email, and password settings are managed through your X account.
            </p>
            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Go to X Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* GELT Platform Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Preferences</CardTitle>
          <CardDescription>
            Customize your GELT Platform experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language">Language Preference</Label>
            <Select
              value={formData.language}
              onValueChange={(value) => handleInputChange("language", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <Select
              value={formData.timezone}
              onValueChange={(value) => handleInputChange("timezone", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                {timezoneOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Auto-detected based on your device settings
            </p>
          </div>

          <div className="flex justify-end pt-4">
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
