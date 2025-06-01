
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Save, Palette, Type, Monitor, Sun, Moon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/contexts/ThemeContext";

export const AppearanceSettingsTab = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    fontSize: [16],
    compactMode: false
  });

  const handleThemeChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
  };

  const handleFontSizeChange = (value: number[]) => {
    setSettings(prev => ({ ...prev, fontSize: value }));
    // Apply font size immediately
    document.documentElement.style.fontSize = `${value[0]}px`;
  };

  const handleSave = () => {
    // Save to localStorage for persistence
    localStorage.setItem('gelt-font-size', settings.fontSize[0].toString());
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

  const getThemeIcon = (currentTheme: string) => {
    switch (currentTheme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  // Load saved font size on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem('gelt-font-size');
    if (savedFontSize) {
      const fontSize = parseInt(savedFontSize);
      setSettings(prev => ({ ...prev, fontSize: [fontSize] }));
      document.documentElement.style.fontSize = `${fontSize}px`;
    }
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Theme & Display
          </CardTitle>
          <CardDescription>
            Customize the visual appearance of your GELT Platform experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              {getThemeIcon(theme)}
              Color Theme
            </Label>
            <Select value={theme} onValueChange={handleThemeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </div>
                </SelectItem>
                <SelectItem value="dark">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </div>
                </SelectItem>
                <SelectItem value="system">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    <span>System Default</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              System default automatically switches between light and dark based on your device settings
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Typography & Accessibility
          </CardTitle>
          <CardDescription>
            Adjust text size and display density for better readability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Font Size
              </Label>
              <span className="text-sm font-medium px-2 py-1 bg-secondary rounded">
                {getFontSizeLabel(settings.fontSize[0])}
              </span>
            </div>
            <div className="px-2">
              <Slider
                value={settings.fontSize}
                onValueChange={handleFontSizeChange}
                max={22}
                min={12}
                step={2}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>12px</span>
                <span>16px</span>
                <span>22px</span>
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm">
                Preview: This is how text will appear with your selected font size setting. 
                Adjust the slider above to find the most comfortable reading size for you.
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
