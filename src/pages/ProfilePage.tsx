
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Settings, HelpCircle, LogOut, UserRound, Download, Shield, Share2, Trophy, Target } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState("english");
  const [notificationFrequency, setNotificationFrequency] = useState("daily");

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    setIsLoggedIn(false);
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
      description: "Your data will be emailed to you within 24 hours."
    });
  };

  const handleShareBadge = (type: string) => {
    navigator.clipboard.writeText(`Check out my ${type} achievement on GELT! 🎉`);
    toast({
      title: "Badge link copied",
      description: "Share your achievement with friends!"
    });
  };

  if (!isLoggedIn) {
    return (
      <AppLayout>
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
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <Avatar className="h-24 w-24 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="/placeholder.svg" alt="User Profile" />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl">JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Financial Enthusiast | Nairobi, Kenya</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Button variant="outline" size="sm" className="gap-1">
                <span className="font-medium text-primary">120</span> Following
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <span className="font-medium text-primary">350</span> Followers
              </Button>
            </div>
            
            {/* Achievement Badges */}
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="secondary" className="gap-1 cursor-pointer" onClick={() => handleShareBadge("7-day streak")}>
                <Target className="h-3 w-3" />
                7-Day Streak
                <Share2 className="h-3 w-3" />
              </Badge>
              <Badge variant="secondary" className="gap-1 cursor-pointer" onClick={() => handleShareBadge("learning champion")}>
                <Trophy className="h-3 w-3" />
                Learning Champion
                <Share2 className="h-3 w-3" />
              </Badge>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="gap-2">
              <UserRound className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="help" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              Help
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
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

          <TabsContent value="settings">
            <div className="space-y-6">
              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your app experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Language</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                    </div>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="swahili">Swahili</SelectItem>
                        <SelectItem value="kikuyu">Kikuyu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notification Frequency</h3>
                      <p className="text-sm text-muted-foreground">How often you receive notifications</p>
                    </div>
                    <Select value={notificationFrequency} onValueChange={setNotificationFrequency}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Dark Mode</h3>
                      <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                    </div>
                    <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive email notifications about new posts</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Data Export</h3>
                      <p className="text-sm text-muted-foreground">Download a copy of your data</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleDataExport}>
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Connected Accounts */}
              <Card>
                <CardHeader>
                  <CardTitle>Connected Accounts</CardTitle>
                  <CardDescription>Manage your linked social accounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                      <div>
                        <h3 className="font-medium">Google</h3>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-sm font-bold">🍎</div>
                      <div>
                        <h3 className="font-medium">Apple</h3>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">f</div>
                      <div>
                        <h3 className="font-medium">Facebook</h3>
                        <p className="text-sm text-green-600">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Logout */}
              <Card>
                <CardFooter className="pt-6">
                  <Button variant="destructive" className="ml-auto" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="help">
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
    </AppLayout>
  );
};

export default ProfilePage;
