
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Logged in successfully",
      description: "Welcome back to GELT!"
    });
    onLogin();
  };

  return (
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
  );
};
