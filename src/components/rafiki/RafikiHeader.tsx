
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const RafikiHeader = () => {
  return (
    <div className="mb-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent overflow-hidden flex items-center justify-center shrink-0">
            <img 
              src="/lovable-uploads/26c24d08-87aa-43d2-8154-2b3715c6cfa4.png" 
              alt="Rafiki" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Rafiki</h1>
            <p className="text-muted-foreground">Your AI investment assistant</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2 hidden md:flex">
          <MessageSquare className="h-4 w-4" />
          <span>Ask Rafiki</span>
        </Button>
      </div>
    </div>
  );
};

export default RafikiHeader;
