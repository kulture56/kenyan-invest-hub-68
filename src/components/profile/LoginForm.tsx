
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    try {
      // Check if user exists in database first
      const { data: existingUser, error: userError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (userError) {
        if (userError.message.includes("Invalid login credentials")) {
          toast({
            title: "Login Failed",
            description: "This email address is not registered or the password is incorrect.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Login Failed", 
            description: userError.message,
            variant: "destructive"
          });
        }
        return;
      }

      if (existingUser?.user) {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        await onLogin(email, password);
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address first.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      
      toast({
        title: "Password Reset Sent",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Reset Failed",
        description: "Failed to send password reset email.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-background">
      <Card className="w-full max-w-md border-primary/20 shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto mb-4">
            <img 
              src="/placeholder.svg" 
              alt="GELT Logo" 
              className="h-12 w-auto mx-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Welcome to GELT</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to access your profile and preferences
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="bg-background border-input text-foreground"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-background border-input text-foreground pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="text-right">
              <Button
                type="button"
                variant="link"
                className="text-purple-600 hover:text-purple-700 p-0 h-auto font-normal"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button 
              type="submit" 
              className="w-full gap-2 bg-black hover:bg-gray-800 text-white" 
              disabled={loading || !email || !password}
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              className="w-full gap-2 border-input text-foreground hover:bg-accent"
            >
              <UserPlus className="h-4 w-4" />
              Create Account
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Don't have an account yet?{" "}
              <span className="text-purple-600 hover:text-purple-700 cursor-pointer font-medium">
                Sign up
              </span>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
