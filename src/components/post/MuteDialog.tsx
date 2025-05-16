
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface MuteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  author: {
    id: string;
    name: string;
    username: string;
  };
}

const MuteDialog: React.FC<MuteDialogProps> = ({ open, onOpenChange, author }) => {
  const handleMute = (duration: string) => {
    // In a real app, this would call an API to mute the user
    let message = "";
    
    switch (duration) {
      case "1d":
        message = `Muted ${author.name} for 1 day`;
        break;
      case "1w":
        message = `Muted ${author.name} for 1 week`;
        break;
      case "forever":
        message = `Muted ${author.name} permanently`;
        break;
    }
    
    toast({
      description: message,
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mute @{author.username}</DialogTitle>
          <DialogDescription>
            Choose how long you want to mute posts from {author.name}. You can unmute them at any time from your settings.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-3 py-4">
          <Button variant="outline" onClick={() => handleMute("1d")}>
            1 Day
          </Button>
          <Button variant="outline" onClick={() => handleMute("1w")}>
            1 Week
          </Button>
          <Button variant="outline" onClick={() => handleMute("forever")}>
            Forever
          </Button>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MuteDialog;
