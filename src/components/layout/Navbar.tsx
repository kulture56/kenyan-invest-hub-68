import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Bell, MessageSquare, UserRound, Settings, HelpCircle, LogOut, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
interface NavbarProps {
  toggleSidebar: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  toggleSidebar
}) => {
  const isMobile = useIsMobile();
  return <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border h-16 flex items-center px-4">
      <div className="flex items-center gap-2 md:gap-4 w-full max-w-full">
        {isMobile && <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>}
        <div className="mr-auto flex items-center">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GELT</Link>
          </Button>
        </div>

        <div className="hidden md:flex relative max-w-md w-full mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search topics, posts, or users..." className="pl-10 bg-secondary/50 border-secondary focus:bg-background transition-colors" />
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
            <Bookmark className="h-5 w-5 text-foreground/80" />
          </Button>
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary/50">
            <Bell className="h-5 w-5 text-foreground/80" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse-gentle"></span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50">
            <MessageSquare className="h-5 w-5 text-foreground/80" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer flex items-center gap-2">
                  <UserRound className="h-4 w-4" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile?tab=settings" className="cursor-pointer flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile?tab=help" className="cursor-pointer flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" /> Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2 text-red-500">
                <LogOut className="h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>;
};