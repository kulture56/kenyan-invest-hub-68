
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus } from "lucide-react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    try {
      await onLogin(email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to GELT</CardTitle>
          <CardDescription>
            Sign in to access your profile and preferences
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button 
              type="submit" 
              className="w-full gap-2" 
              disabled={loading || !email || !password}
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <Button variant="outline" type="button" className="w-full gap-2">
              <UserPlus className="h-4 w-4" />
              Create Account
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Don't have an account? Contact support to get started.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
