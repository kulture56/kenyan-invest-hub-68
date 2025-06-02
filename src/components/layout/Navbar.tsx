
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavbarSearch } from "./NavbarSearch";
import { handleLogout } from "@/utils/auth";

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border h-14 flex items-center px-2 md:px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right side with search and user actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Search bar */}
          {!isMobile && <NavbarSearch />}

          <Button variant="ghost" size="icon" className="hover:bg-secondary/50 h-9 w-9" asChild>
            <Link to="/bookmarks">
              <img src="/lovable-uploads/bac16f6d-604a-453b-8cd0-834a2b12a3df.png" alt="Bookmarks" className="h-4 w-4 text-foreground/80" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary/50 h-9 w-9" asChild>
            <Link to="/notifications">
              <img src="/lovable-uploads/d28d989c-e282-47dd-8e05-6184295539da.png" alt="Notifications" className="h-4 w-4 text-foreground/80" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse-gentle"></span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-secondary/50 h-9 w-9" asChild>
            <Link to="/messages">
              <img src="/lovable-uploads/00a39066-81b7-4a6e-83d3-1822d5588aa0.png" alt="Messages" className="h-4 w-4 text-foreground/80" />
            </Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                <AvatarImage src="/lovable-uploads/92d3bdce-9360-486e-8617-373fba41fb1f.png" alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer flex items-center gap-2">
                  <img src="/lovable-uploads/82820a12-afcc-4c47-bce5-7898436e3135.png" className="h-4 w-4" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="cursor-pointer flex items-center gap-2">
                  <img src="/lovable-uploads/5e177755-4876-42aa-953a-36cee4079784.png" className="h-4 w-4" /> Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/help" className="cursor-pointer flex items-center gap-2">
                  <img src="/lovable-uploads/602cec52-f456-44c8-9fef-dc523c21efed.png" className="h-4 w-4" /> Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center gap-2 text-red-500">
                <img src="/lovable-uploads/97ca5c92-1503-4118-b777-81719c28be6f.png" className="h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
