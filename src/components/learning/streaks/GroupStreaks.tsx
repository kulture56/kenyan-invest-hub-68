
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Plus, Copy, MessageSquare, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

interface GroupStreak {
  id: number;
  name: string;
  members: number;
  streak: number;
}

interface GroupStreaksProps {
  groupStreaks: GroupStreak[];
}

const GroupStreaks: React.FC<GroupStreaksProps> = ({ groupStreaks }) => {
  const [shareLink, setShareLink] = useState("https://gelt.app/join-streak/abc123");
  const [groupName, setGroupName] = useState("");

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast({
      title: "Link copied!",
      description: "Share link copied to clipboard"
    });
  };

  const handleCreateGroup = () => {
    if (groupName) {
      toast({
        title: "Group created!",
        description: `Your group "${groupName}" has been created and share link generated.`
      });
      setGroupName("");
    }
  };

  const handleShareInvite = (type: string) => {
    toast({
      title: `Shared to ${type}!`,
      description: `Group invite shared via ${type}`
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Group Streaks
        </CardTitle>
        <CardDescription>Create or join streak groups with friends</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {groupStreaks.map(group => (
          <div key={group.id} className="p-3 rounded-md border border-primary/10 bg-primary/5">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{group.name}</h4>
              <Badge className="bg-primary">{group.streak} day streak</Badge>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {group.members} members participating
            </div>
          </div>
        ))}
        
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full bg-primary text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" /> Create Group Streak
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Create a Group Streak</DrawerTitle>
              <DrawerDescription>
                Invite friends to join your streak challenge. Everyone in the group will get points for daily participation.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 py-2">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="group-name" className="text-sm font-medium">Group Name</label>
                  <Input id="group-name" placeholder="e.g. Investment Club" value={groupName} onChange={e => setGroupName(e.target.value)} />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Share Invite Link</label>
                  <div className="flex items-center gap-2">
                    <Input value={shareLink} readOnly className="bg-muted/20" />
                    <Button size="icon" variant="outline" onClick={handleCopyShareLink} className="shrink-0 text-primary">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Share via</label>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-primary" onClick={() => handleShareInvite("message")}>
                      <MessageSquare className="mr-1 h-4 w-4" /> Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-primary" onClick={() => handleShareInvite("post")}>
                      <Share2 className="mr-1 h-4 w-4" /> Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={handleCreateGroup} disabled={!groupName}>Create Group</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  );
};

export default GroupStreaks;
