
import React from "react";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileNavigation: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 px-2 py-2">
      <div className="flex justify-around">
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-14 w-16">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-14 w-16">
          <TrendingUp className="h-5 w-5" />
          <span className="text-xs">Trending</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-14 w-16">
          <Bell className="h-5 w-5" />
          <span className="text-xs">Alerts</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-14 w-16" onClick={() => navigate('/profile')}>
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;
