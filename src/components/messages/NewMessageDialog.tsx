
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type User = {
  id: string;
  name: string;
  avatar: string;
  status: string;
};

interface NewMessageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  onSelectUser: (userId: string) => void;
}

const NewMessageDialog: React.FC<NewMessageDialogProps> = ({
  isOpen,
  onClose,
  users,
  onSelectUser,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Message</DialogTitle>
          <DialogDescription>
            Select a user to start a new conversation
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative mt-2 mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search users..." 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="max-h-[300px] overflow-y-auto">
          <ul className="divide-y divide-border/50">
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="p-3 hover:bg-secondary/50 cursor-pointer transition-colors flex items-center gap-3"
                onClick={() => onSelectUser(user.id)}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background ${
                      user.status === "online" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {user.status === "online" ? "Online" : "Offline"}
                  </p>
                </div>
              </li>
            ))}
            {filteredUsers.length === 0 && (
              <li className="p-4 text-center text-muted-foreground">
                No users found
              </li>
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewMessageDialog;
