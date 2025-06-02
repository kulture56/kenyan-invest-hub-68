import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Calendar, Clock, Mail, LogOut, ExternalLink } from "lucide-react";
import { format } from "date-fns";
interface UserProfile {
  created_at: string;
  last_login: string | null;
}
interface AccountOverviewTabProps {
  profile: UserProfile | null;
  userEmail: string;
  onLogout: () => void;
}
export const AccountOverviewTab: React.FC<AccountOverviewTabProps> = ({
  profile,
  userEmail,
  onLogout
}) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    try {
      return format(new Date(dateString), "PPP 'at' p");
    } catch {
      return "Invalid date";
    }
  };
  return <div className="space-y-6">
      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Account Information
          </CardTitle>
          <CardDescription>
            Read-only account details and activity information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                Email Address
              </div>
              <p className="font-medium">{userEmail}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Account Created
              </div>
              <p className="font-medium">
                {profile?.created_at ? formatDate(profile.created_at) : "Unknown"}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Last Login
              </div>
              <p className="font-medium">
                {formatDate(profile?.last_login)}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
                Linked Accounts
              </div>
              <p className="font-medium text-muted-foreground">
                No linked accounts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>
            Manage your account security and session
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Change Password
            </Button>
            
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Link Social Account
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sign Out</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to sign out? You'll need to log in again to access your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onLogout}>
                    Sign Out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* Account Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
          <CardDescription>
            Your activity on the GELT Platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Posts Created</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Comments</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};