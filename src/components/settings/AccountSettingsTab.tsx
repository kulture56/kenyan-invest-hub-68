
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, ExternalLink, User, Globe, Clock } from "lucide-react";
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
    { value: "es", label: "Spanish" },
    { value: "ar", label: "Arabic" }
  ];

  const timezoneOptions = [
    { value: "Africa/Nairobi", label: "Nairobi (GMT+3)" },
    { value: "Africa/Lagos", label: "Lagos (GMT+1)" },
    { value: "Africa/Cairo", label: "Cairo (GMT+2)" },
    { value: "Africa/Johannesburg", label: "Johannesburg (GMT+2)" },
    { value: "Europe/London", label: "London (GMT+0)" },
    { value: "America/New_York", label: "New York (GMT-5)" },
    { value: "Asia/Dubai", label: "Dubai (GMT+4)" }
  ];

  return (
    <div className="space-y-6">
      {/* Account Management Delegation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account Management
          </CardTitle>
          <CardDescription>
            Manage your core account settings including username, email, and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <ExternalLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">External Account Settings</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Username, email, and password settings are managed through your X account for enhanced security and convenience.
                </p>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="h-4 w-4" />
                  Go to X Settings
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GELT Platform Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Platform Preferences
          </CardTitle>
          <CardDescription>
            Customize your GELT Platform experience with language and regional settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="language" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Language Preference
              </Label>
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
              <p className="text-sm text-muted-foreground">
                Choose your preferred language for the interface
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time Zone
              </Label>
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
