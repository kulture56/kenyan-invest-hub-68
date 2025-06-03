
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Save, Shield, Smartphone, Monitor, Key, QrCode, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { LogoutDialog } from "@/components/auth/LogoutDialog";

export const SecuritySettingsTab = () => {
  const { toast } = useToast();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showSetupInstructions, setShowSetupInstructions] = useState(false);

  const handleTwoFactorToggle = (checked: boolean) => {
    setTwoFactorEnabled(checked);
    setShowSetupInstructions(checked);
    if (checked) {
      toast({
        title: "Two-Factor Authentication",
        description: "Please follow the setup instructions below to enable 2FA."
      });
    } else {
      toast({
        title: "2FA Disabled",
        description: "Two-factor authentication has been disabled for your account."
      });
    }
  };

  const connectedDevices = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      type: "mobile",
      location: "Nairobi, Kenya",
      lastActive: "Current session",
      isCurrent: true,
      browser: "Safari"
    },
    {
      id: 2,
      name: "MacBook Pro",
      type: "desktop",
      location: "Nairobi, Kenya",
      lastActive: "2 hours ago",
      isCurrent: false,
      browser: "Chrome"
    },
    {
      id: 3,
      name: "Samsung Galaxy S21",
      type: "mobile",
      location: "Lagos, Nigeria",
      lastActive: "1 day ago",
      isCurrent: false,
      browser: "Chrome Mobile"
    }
  ];

  const logoutDevice = (deviceId: number, deviceName: string) => {
    toast({
      title: "Device Logged Out",
      description: `${deviceName} has been successfully logged out.`
    });
  };

  const logoutAllDevices = () => {
    toast({
      title: "All Devices Logged Out",
      description: "You have been logged out of all devices except the current one."
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
            Add an extra layer of security to protect your account from unauthorized access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1 flex-1">
              <Label className="font-medium flex items-center gap-2">
                <Key className="h-4 w-4" />
                Enable Two-Factor Authentication
              </Label>
              <p className="text-sm text-muted-foreground">
                Use an authenticator app to generate secure codes for login
              </p>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={handleTwoFactorToggle}
            />
          </div>

          {showSetupInstructions && (
            <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <QrCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-3">Setup Instructions</h4>
                  <ol className="text-sm space-y-2 list-decimal list-inside">
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Download an authenticator app:</span>
                      <span className="text-muted-foreground">Google Authenticator, Authy, or Microsoft Authenticator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Scan the QR code:</span>
                      <span className="text-muted-foreground">Use your authenticator app to scan the code below</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Enter verification code:</span>
                      <span className="text-muted-foreground">Type the 6-digit code from your app to verify setup</span>
                    </li>
                  </ol>
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border">
                    <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <QrCode className="h-16 w-16 text-gray-400" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">QR Code will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {twoFactorEnabled && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  Two-Factor Authentication is active
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Connected Devices
          </CardTitle>
          <CardDescription>
            Monitor and manage devices that have access to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <p className="font-medium">Active Sessions</p>
                <p className="text-sm text-muted-foreground">
                  {connectedDevices.length} device(s) connected
                </p>
              </div>
              <LogoutDialog>
                <Button variant="outline" size="sm" className="gap-2">
                  <img src="/lovable-uploads/97ca5c92-1503-4118-b777-81719c28be6f.png" className="h-4 w-4" />
                  Log Out All
                </Button>
              </LogoutDialog>
            </div>

            {connectedDevices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    {device.type === "mobile" ? (
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Monitor className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{device.name}</span>
                      {device.isCurrent && (
                        <Badge variant="secondary" className="text-xs">Current</Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{device.browser} • {device.location}</p>
                      <p>Last active: {device.lastActive}</p>
                    </div>
                  </div>
                </div>
                {!device.isCurrent && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => logoutDevice(device.id, device.name)}
                    className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <img src="/lovable-uploads/97ca5c92-1503-4118-b777-81719c28be6f.png" className="h-4 w-4" />
                    Log Out
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <p className="font-medium text-amber-800 dark:text-amber-200">Security Tip</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  If you see any devices you don't recognize, log them out immediately and consider changing your password.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
