
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { clearAuthData } from "@/utils/auth";

interface LogoutDialogProps {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const LogoutDialog: React.FC<LogoutDialogProps> = ({ 
  children, 
  variant = "ghost", 
  size = "default",
  className = ""
}) => {
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      // Sign out from Supabase (this will update the timestamp)
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Logout error:', error);
        toast({
          title: "Logout Error",
          description: "There was an issue logging you out. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Clear local auth data
      clearAuthData();
      
      // Show success notification
      toast({
        title: "Logged Out Successfully",
        description: "You have been safely logged out of your account.",
      });
      
      // Redirect to login page
      window.location.href = 'https://preview--gelt.lovable.app/login';
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <LogOut className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <AlertDialogTitle className="text-xl font-semibold">
            Confirm Logout
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Are you sure you want to log out? You'll need to sign in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <AlertDialogCancel className="sm:w-24">
            No
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 sm:w-24"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
