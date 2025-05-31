import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Settings, HelpCircle, LogOut, UserRound } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { handleLogout as authLogout } from "@/utils/auth";
export const MyAccountSection = () => {
  const {
    toast
  } = useToast();
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    authLogout();
  };
  return;
};