import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Settings, HelpCircle, LogOut, UserRound, Moon, Sun, Globe, Bell, Download, Shield, Link } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { handleLogout as authLogout } from "@/utils/auth";
const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    theme,
    setTheme
  } = useTheme();
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState("english");
  const [notificationFrequency, setNotificationFrequency] = useState("daily");
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    authLogout();
  };
  const handleLogin = () => {
    toast({
      title: "Logged in successfully",
      description: "Welcome back to GELT!"
    });
    setIsLoggedIn(true);
  };
  const handleDataExport = () => {
    toast({
      title: "Data export initiated",
      description: "Your data export will be ready for download within 24 hours."
    });
  };
  const handleToggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast({
      title: twoFactorEnabled ? "2FA Disabled" : "2FA Enabled",
      description: twoFactorEnabled ? "Two-factor authentication has been disabled." : "Two-factor authentication has been enabled for better security."
    });
  };
  if (!isLoggedIn) {
    return <AppLayout>
        <div className="max-w-md mx-auto mt-10">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Login to GELT</CardTitle>
              <CardDescription className="text-center">Access your investment community profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between flex-col gap-2">
              <Button onClick={handleLogin} className="w-full">Login</Button>
              <Button variant="outline" className="w-full">Create Account</Button>
            </CardFooter>
          </Card>
        </div>
      </AppLayout>;
  }
  return <AppLayout>
      <div className="container max-w-4xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-4 mb-6">
          <Avatar className="h-20 w-20 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="/placeholder.svg" alt="User Profile" />
            <AvatarFallback className="bg-primary/10 text-primary text-xl">JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-muted-foreground text-sm">Financial Enthusiast | Nairobi, Kenya</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Button variant="outline" size="sm" className="gap-1 text-xs">
                <span className="font-medium text-primary">120</span> Following
              </Button>
              <Button variant="outline" size="sm" className="gap-1 text-xs">
                <span className="font-medium text-primary">350</span> Followers
              </Button>
            </div>
          </div>
        </div>

        {/* My Account Section */}
        

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          
          
          <TabsContent value="profile" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>View and update your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Financial Enthusiast | Nairobi, Kenya" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interests">Investment Interests</Label>
                  <Input id="interests" defaultValue="Stocks, Real Estate, Cryptocurrency" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            {/* Preferences Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Preferences
                </CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Language</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                    </div>
                  </div>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="swahili">Kiswahili</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Notification Frequency</h3>
                      <p className="text-sm text-muted-foreground">How often you receive notifications</p>
                    </div>
                  </div>
                  <Select value={notificationFrequency} onValueChange={setNotificationFrequency}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === 'dark' ? <Moon className="h-5 w-5 text-muted-foreground" /> : <Sun className="h-5 w-5 text-muted-foreground" />}
                    <div>
                      <h3 className="font-medium">Theme</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                    </div>
                  </div>
                  <Select value={theme} onValueChange={(value: 'light' | 'dark' | 'system') => setTheme(value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive email notifications about new posts</p>
                    </div>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
              </CardContent>
            </Card>

            {/* Security Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security & Privacy
                </CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch checked={twoFactorEnabled} onCheckedChange={handleToggle2FA} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Export</h3>
                    <p className="text-sm text-muted-foreground">Download a copy of your data</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleDataExport} className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Connected Accounts Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Connected Accounts
                </CardTitle>
                <CardDescription>Manage your social media connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="/lovable-uploads/09a16bf2-0f50-413e-896a-cd8da19124a9.png" alt="Google" className="h-8 w-8" />
                    <div>
                      <h3 className="font-medium">Google</h3>
                      <p className="text-sm text-muted-foreground">Connect your Google account</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="/lovable-uploads/de5c5024-d2c5-453b-805a-28e479a06fd5.png" alt="Apple" className="h-8 w-8" />
                    <div>
                      <h3 className="font-medium">Apple</h3>
                      <p className="text-sm text-muted-foreground">Connect your Apple ID</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Help Center</CardTitle>
                <CardDescription>Find answers and get support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                  <h3 className="font-medium">Getting Started Guide</h3>
                  <p className="text-sm text-muted-foreground">Learn the basics of using GELT platform</p>
                </div>
                <div className="p-4 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                  <h3 className="font-medium">Investment Terms Glossary</h3>
                  <p className="text-sm text-muted-foreground">Understand common investment terms</p>
                </div>
                <div className="p-4 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                  <h3 className="font-medium">Community Guidelines</h3>
                  <p className="text-sm text-muted-foreground">Read our community rules and policies</p>
                </div>
                <div className="p-4 border rounded-md hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer">
                  <h3 className="font-medium">Contact Support</h3>
                  <p className="text-sm text-muted-foreground">Reach out to our support team</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="w-full">
                  Visit Help Center
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>;
};
export default ProfilePage;