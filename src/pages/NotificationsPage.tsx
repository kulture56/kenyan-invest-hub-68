import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Heart, MessageSquare, UserPlus, TrendingUp, Check, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock notifications data
const mockNotifications = [{
  id: "1",
  type: "like",
  user: {
    name: "Alex Johnson",
    avatar: "/placeholder.svg"
  },
  content: "liked your post about investment strategies",
  timestamp: "2 minutes ago",
  read: false,
  postId: "post-1"
}, {
  id: "2",
  type: "comment",
  user: {
    name: "Morgan Smith",
    avatar: "/placeholder.svg"
  },
  content: "commented on your investment analysis",
  timestamp: "1 hour ago",
  read: false,
  postId: "post-2"
}, {
  id: "3",
  type: "follow",
  user: {
    name: "Jordan Taylor",
    avatar: "/placeholder.svg"
  },
  content: "started following you",
  timestamp: "3 hours ago",
  read: true,
  postId: null
}, {
  id: "4",
  type: "mention",
  user: {
    name: "Casey Brown",
    avatar: "/placeholder.svg"
  },
  content: "mentioned you in a post about market trends",
  timestamp: "1 day ago",
  read: true,
  postId: "post-3"
}, {
  id: "5",
  type: "system",
  user: null,
  content: "Your weekly investment summary is ready",
  timestamp: "2 days ago",
  read: true,
  postId: null
}];
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeTab, setActiveTab] = useState("all");
  const {
    toast
  } = useToast();
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />;
      case "comment":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "follow":
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case "mention":
        return <MessageSquare className="h-4 w-4 text-purple-500" />;
      case "system":
        return <img src="/lovable-uploads/6f9d8153-9570-4af8-a17d-ab29bb8d60e2.png" alt="System" className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };
  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notif => notif.id === id ? {
      ...notif,
      read: true
    } : notif));
    toast({
      title: "Marked as read",
      description: "Notification has been marked as read"
    });
  };
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    toast({
      title: "Notification deleted",
      description: "The notification has been removed"
    });
  };
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({
      ...notif,
      read: true
    })));
    toast({
      title: "All notifications marked as read",
      description: "All your notifications have been marked as read"
    });
  };
  const filteredNotifications = notifications.filter(notif => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notif.read;
    return notif.type === activeTab;
  });
  const unreadCount = notifications.filter(notif => !notif.read).length;
  return <AppLayout>
      <div className="container mx-auto py-6 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-purple-800">
              Notifications
            </h1>
            {unreadCount > 0 && <Badge variant="destructive" className="rounded-full">
                {unreadCount}
              </Badge>}
          </div>
          <Button onClick={markAllAsRead} disabled={unreadCount === 0}>
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        </div>

        <Card className="shadow-md border-border/50">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(80vh-200px)]">
              {filteredNotifications.length > 0 ? <div className="divide-y divide-border/50">
                  {filteredNotifications.map(notification => <div key={notification.id} className={`p-4 hover:bg-muted/50 transition-colors ${!notification.read ? "bg-primary/5" : ""}`}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {notification.user ? <Avatar className="h-10 w-10">
                              <AvatarImage src={notification.user.avatar} />
                              <AvatarFallback>
                                {notification.user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar> : <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              {getNotificationIcon(notification.type)}
                            </div>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm">
                                {notification.user && <span className="font-medium">
                                    {notification.user.name}{" "}
                                  </span>}
                                {notification.content}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {notification.timestamp}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                              {getNotificationIcon(notification.type)}
                              {!notification.read && <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)} className="h-6 w-6 p-0">
                                  <Check className="h-3 w-3" />
                                </Button>}
                              <Button size="sm" variant="ghost" onClick={() => deleteNotification(notification.id)} className="h-6 w-6 p-0 text-red-500 hover:text-red-700">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div> : <div className="flex flex-col items-center justify-center h-64 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No notifications</h3>
                  <p className="text-muted-foreground">
                    {activeTab === "unread" ? "You're all caught up! No unread notifications." : "You don't have any notifications yet."}
                  </p>
                </div>}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </AppLayout>;
};
export default NotificationsPage;