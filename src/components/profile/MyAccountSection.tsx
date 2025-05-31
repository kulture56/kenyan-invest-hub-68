
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Settings, HelpCircle, LogOut, UserRound } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { handleLogout as authLogout } from "@/utils/auth";

interface MyAccountSectionProps {
  onLogout: () => void;
}

export const MyAccountSection: React.FC<MyAccountSectionProps> = ({ onLogout }) => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    authLogout();
    onLogout();
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserRound className="h-5 w-5" />
          My Account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors">
          <div className="flex items-center gap-3">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Account Settings</h3>
              <p className="text-sm text-muted-foreground">Manage your account preferences</p>
            </div>
          </div>
          <Button variant="outline" size="sm">Manage</Button>
        </div>

        <div className="flex items-center justify-between p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Help & Support</h3>
              <p className="text-sm text-muted-foreground">Get help and contact support</p>
            </div>
          </div>
          <Button variant="outline" size="sm">Get Help</Button>
        </div>

        <div className="flex items-center justify-between p-3 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors">
          <div className="flex items-center gap-3">
            <LogOut className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Logout</h3>
              <p className="text-sm text-muted-foreground">Sign out of your account</p>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">Logout</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be signed out of your account and redirected to the login page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No, stay logged in</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>Yes, logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
};
