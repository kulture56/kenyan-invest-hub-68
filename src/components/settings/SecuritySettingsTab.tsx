
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Save, Shield, Smartphone, Monitor, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const SecuritySettingsTab = () => {
  const { toast } = useToast();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleTwoFactorToggle = (checked: boolean) => {
    setTwoFactorEnabled(checked);
    if (checked) {
      toast({
        title: "Two-Factor Authentication",
        description: "Please follow the setup instructions to enable 2FA."
      });
    }
  };

  const connectedDevices = [
    {
      id: 1,
      name: "iPhone 13",
      type: "mobile",
      location: "Nairobi, Kenya",
      lastActive: "Current session",
      isCurrent: true
    },
    {
      id: 2,
      name: "MacBook Pro",
      type: "desktop",
      location: "Nairobi, Kenya",
      lastActive: "2 hours ago",
      isCurrent: false
    }
  ];

  const logoutDevice = (deviceId: number) => {
    toast({
      title: "Device Logged Out",
      description: "The device has been successfully logged out."
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Two-Factor Authentication
          </CardTitle>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Enable Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Use an authenticator app to secure your account
              </p>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={handleTwoFactorToggle}
            />
          </div>

          {twoFactorEnabled && (
            <div className="p-4 border rounded-lg bg-blue-50/50">
              <h4 className="font-medium text-sm mb-2">Setup Instructions</h4>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Download an authenticator app (Google Authenticator, Authy, etc.)</li>
                <li>Scan the QR code with your authenticator app</li>
                <li>Enter the 6-digit code to verify setup</li>
              </ol>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connected Devices</CardTitle>
          <CardDescription>
            Manage devices that have access to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {connectedDevices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  {device.type === "mobile" ? (
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Monitor className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{device.name}</span>
                      {device.isCurrent && (
                        <Badge variant="secondary" className="text-xs">Current</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {device.location} • {device.lastActive}
                    </p>
                  </div>
                </div>
                {!device.isCurrent && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => logoutDevice(device.id)}
                    className="gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Log Out
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
