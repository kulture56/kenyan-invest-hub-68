
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Bell, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const NotificationSettingsTab = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState({
    transactions: true,
    updates: false,
    promotions: false
  });
  const [pushNotifications, setPushNotifications] = useState({
    alerts: true,
    messages: true,
    updates: false
  });

  const handleEmailToggle = (field: string, value: boolean) => {
    setEmailNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handlePushToggle = (field: string, value: boolean) => {
    setPushNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved successfully."
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Notifications
          </CardTitle>
          <CardDescription>
            Choose which emails you'd like to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Transaction Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about important account transactions
              </p>
            </div>
            <Switch
              checked={emailNotifications.transactions}
              onCheckedChange={(checked) => handleEmailToggle("transactions", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>App Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about new features and updates
              </p>
            </div>
            <Switch
              checked={emailNotifications.updates}
              onCheckedChange={(checked) => handleEmailToggle("updates", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Promotions</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about special offers and promotions
              </p>
            </div>
            <Switch
              checked={emailNotifications.promotions}
              onCheckedChange={(checked) => handleEmailToggle("promotions", checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Push Notifications
          </CardTitle>
          <CardDescription>
            Control mobile and browser notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Mobile Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Important alerts and reminders
              </p>
            </div>
            <Switch
              checked={pushNotifications.alerts}
              onCheckedChange={(checked) => handlePushToggle("alerts", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Messages</Label>
              <p className="text-sm text-muted-foreground">
                New messages and mentions
              </p>
            </div>
            <Switch
              checked={pushNotifications.messages}
              onCheckedChange={(checked) => handlePushToggle("messages", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Updates</Label>
              <p className="text-sm text-muted-foreground">
                App updates and new features
              </p>
            </div>
            <Switch
              checked={pushNotifications.updates}
              onCheckedChange={(checked) => handlePushToggle("updates", checked)}
            />
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
