
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Save, Palette, Type } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const AppearanceSettingsTab = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    theme: "system",
    fontSize: [16]
  });

  const handleThemeChange = (value: string) => {
    setSettings(prev => ({ ...prev, theme: value }));
  };

  const handleFontSizeChange = (value: number[]) => {
    setSettings(prev => ({ ...prev, fontSize: value }));
  };

  const handleSave = () => {
    toast({
      title: "Appearance Settings Updated",
      description: "Your appearance preferences have been saved successfully."
    });
  };

  const getFontSizeLabel = (size: number) => {
    if (size <= 14) return "Small";
    if (size <= 18) return "Medium";
    return "Large";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Theme
          </CardTitle>
          <CardDescription>
            Choose your preferred color theme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Color Theme</Label>
            <Select value={settings.theme} onValueChange={handleThemeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              System default follows your device's theme setting
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Typography
          </CardTitle>
          <CardDescription>
            Adjust text size for better readability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Font Size</Label>
              <span className="text-sm text-muted-foreground">
                {getFontSizeLabel(settings.fontSize[0])}
              </span>
            </div>
            <Slider
              value={settings.fontSize}
              onValueChange={handleFontSizeChange}
              max={20}
              min={12}
              step={2}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};
