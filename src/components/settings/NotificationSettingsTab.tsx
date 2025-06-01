
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Bell, Mail, Smartphone, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const NotificationSettingsTab = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState({
    transactions: true,
    updates: false,
    promotions: false,
    security: true
  });
  const [pushNotifications, setPushNotifications] = useState({
    alerts: true,
    messages: true,
    updates: false,
    marketing: false
  });

  const handleEmailToggle = (field: string, value: boolean) => {
    setEmailNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handlePushToggle = (field: string, value: boolean) => {
    setPushNotifications(prev => ({ ...prev, [field]: value }));
  };

  const requestPushPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        toast({
          title: "Push Notifications Enabled",
          description: "You'll now receive push notifications from GELT Platform."
        });
      } else {
        toast({
          title: "Permission Denied",
          description: "Push notifications require browser permission to work.",
          variant: "destructive"
        });
      }
    }
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
            Choose which emails you'd like to receive from GELT Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                Transaction Alerts
              </Label>
              <p className="text-sm text-muted-foreground">
                Important notifications about account transactions and security events
              </p>
            </div>
            <Switch
              checked={emailNotifications.transactions}
              onCheckedChange={(checked) => handleEmailToggle("transactions", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Security Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Critical security notifications and account protection updates
              </p>
            </div>
            <Switch
              checked={emailNotifications.security}
              onCheckedChange={(checked) => handleEmailToggle("security", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">App Updates</Label>
              <p className="text-sm text-muted-foreground">
                Notifications about new features, improvements, and platform updates
              </p>
            </div>
            <Switch
              checked={emailNotifications.updates}
              onCheckedChange={(checked) => handleEmailToggle("updates", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Promotions & Tips</Label>
              <p className="text-sm text-muted-foreground">
                Educational content, financial tips, and special offers
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
            <Smartphone className="h-5 w-5" />
            Push Notifications
          </CardTitle>
          <CardDescription>
            Control mobile and browser notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium">Enable Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Grant browser permission to receive push notifications
                </p>
              </div>
              <Button onClick={requestPushPermission} variant="outline" size="sm">
                Enable
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Critical Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Important alerts and security notifications
              </p>
            </div>
            <Switch
              checked={pushNotifications.alerts}
              onCheckedChange={(checked) => handlePushToggle("alerts", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Messages & Mentions</Label>
              <p className="text-sm text-muted-foreground">
                New messages, replies, and when someone mentions you
              </p>
            </div>
            <Switch
              checked={pushNotifications.messages}
              onCheckedChange={(checked) => handlePushToggle("messages", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Product Updates</Label>
              <p className="text-sm text-muted-foreground">
                New features and platform improvements
              </p>
            </div>
            <Switch
              checked={pushNotifications.updates}
              onCheckedChange={(checked) => handlePushToggle("updates", checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium">Marketing</Label>
              <p className="text-sm text-muted-foreground">
                Promotional content and special offers
              </p>
            </div>
            <Switch
              checked={pushNotifications.marketing}
              onCheckedChange={(checked) => handlePushToggle("marketing", checked)}
            />
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
