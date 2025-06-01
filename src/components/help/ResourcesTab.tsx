
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Download, ExternalLink, Users, TrendingUp } from "lucide-react";

export const ResourcesTab = () => {
  const resources = [
    {
      title: "Financial Education Library",
      description: "Comprehensive guides on investing, budgeting, and financial planning",
      icon: BookOpen,
      action: "Browse Library",
      href: "/learn"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for using the GELT Platform",
      icon: Video,
      action: "Watch Videos",
      href: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share financial insights",
      icon: Users,
      action: "Join Discussion",
      href: "/community"
    },
    {
      title: "Market Analysis",
      description: "Latest market trends and investment opportunities",
      icon: TrendingUp,
      action: "View Analysis",
      href: "/market"
    }
  ];

  const downloads = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up your GELT Platform account",
      size: "2.3 MB"
    },
    {
      title: "Investment Basics Handbook",
      description: "Essential investment principles for beginners",
      size: "5.1 MB"
    },
    {
      title: "Platform User Manual",
      description: "Detailed instructions for all platform features",
      size: "8.7 MB"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
          <CardDescription>
            Explore our educational content and community resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start gap-3">
                  <resource.icon className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-3 w-3" />
                      {resource.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Downloads
          </CardTitle>
          <CardDescription>
            Useful documents and guides you can download
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {downloads.map((download, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{download.title}</h4>
                  <p className="text-sm text-muted-foreground">{download.description}</p>
                  <span className="text-xs text-muted-foreground">{download.size}</span>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-3 w-3" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
          <CardDescription>
            Frequently accessed platform features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto p-3 flex flex-col gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">Glossary</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs">Streaks</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col gap-2">
              <Users className="h-4 w-4" />
              <span className="text-xs">Community</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col gap-2">
              <Video className="h-4 w-4" />
              <span className="text-xs">Tutorials</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
