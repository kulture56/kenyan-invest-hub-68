
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailDisplayProps {
  userEmail: string;
}

export const EmailDisplay: React.FC<EmailDisplayProps> = ({ userEmail }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        value={userEmail}
        disabled
        className="bg-gray-50"
      />
      <p className="text-sm text-muted-foreground">
        Email is linked to your account and cannot be changed here
      </p>
    </div>
  );
};
