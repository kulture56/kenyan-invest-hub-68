
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, HelpCircle, LogOut, UserRound } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes
  
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
          </div>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full mb-6 bg-secondary/70">
            <TabsTrigger value="profile" className="flex items-center gap-2 flex-1">
              <UserRound className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2 flex-1">
              <Settings className="h-4 w-4" /> Settings
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center gap-2 flex-1">
              <HelpCircle className="h-4 w-4" /> Help
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
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive email notifications about new posts</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">Disabled</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Privacy</h3>
                    <p className="text-sm text-muted-foreground">Control who can see your profile and activity</p>
                  </div>
                  <Button variant="outline" size="sm">Public</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                  </div>
                  <Button variant="outline" size="sm">English</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="ml-auto" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Button>
              </CardFooter>
            </Card>
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
