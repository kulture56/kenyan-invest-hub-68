
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, User, Globe, Clock, Mail, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const AccountSettingsTab = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "john.doe@example.com",
    username: "john_doe",
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
      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account Information
          </CardTitle>
          <CardDescription>
            Manage your GELT Platform account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Your primary email for GELT Platform notifications
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Your unique username on GELT Platform
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="gap-2">
              <Lock className="h-4 w-4" />
              Change Password
            </Button>
            <p className="text-sm text-muted-foreground">
              Update your account password for enhanced security
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Platform Preferences */}
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
