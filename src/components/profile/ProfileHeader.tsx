
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <Avatar className="h-20 w-20 border-4 border-primary/20 shadow-lg">
        <AvatarImage src="/placeholder.svg" alt="User Profile" />
        <AvatarFallback className="bg-primary/10 text-primary text-xl">JD</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-xl font-bold">John Doe</h1>
        <p className="text-muted-foreground text-sm">Financial Enthusiast | Nairobi, Kenya</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Button variant="outline" size="sm" className="gap-1 text-xs">
            <span className="font-medium text-primary">120</span> Following
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-xs">
            <span className="font-medium text-primary">350</span> Followers
          </Button>
        </div>
      </div>
    </div>
  );
};
