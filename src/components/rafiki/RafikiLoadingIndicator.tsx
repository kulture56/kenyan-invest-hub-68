
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const RafikiLoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="flex gap-3 max-w-[80%]">
        <Avatar className="h-8 w-8 bg-accent">
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <div className="rounded-lg px-4 py-2 bg-muted">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse delay-150"></div>
            <div className="h-2 w-2 bg-gelt-green rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RafikiLoadingIndicator;
