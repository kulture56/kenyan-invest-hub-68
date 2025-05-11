
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Bell, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border h-16 flex items-center px-4">
      <div className="flex items-center gap-2 md:gap-4 w-full">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="mr-auto flex items-center">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GELT</a>
          </Button>
        </div>

        <div className="hidden md:flex relative max-w-md w-full mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search topics, posts, or users..." 
            className="pl-10 bg-secondary/50 border-secondary focus:bg-background transition-colors" 
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary/50">
            <Bell className="h-5 w-5 text-foreground/80" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse-gentle"></span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
            <MessageSquare className="h-5 w-5 text-foreground/80" />
          </Button>
          <Avatar className="h-9 w-9 border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
