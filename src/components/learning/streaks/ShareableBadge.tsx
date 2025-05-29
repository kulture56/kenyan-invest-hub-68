
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Copy, Trophy, Target, Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ShareableBadgeProps {
  streaksData: {
    currentStreak: number;
    longestStreak: number;
    completedChallenges: number;
  };
}

const ShareableBadge: React.FC<ShareableBadgeProps> = ({ streaksData }) => {
  const { toast } = useToast();
  const [selectedBadge, setSelectedBadge] = useState("streak");

  const badges = [
    {
      id: "streak",
      icon: Trophy,
      title: "Streak Champion",
      value: streaksData.currentStreak,
      subtitle: "Day Streak",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: "longest",
      icon: Target,
      title: "Longest Streak",
      value: streaksData.longestStreak,
      subtitle: "Days",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: "challenges",
      icon: Award,
      title: "Challenge Master",
      value: streaksData.completedChallenges,
      subtitle: "Challenges",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const selectedBadgeData = badges.find(b => b.id === selectedBadge) || badges[0];
  const IconComponent = selectedBadgeData.icon;

  const handleShare = async () => {
    const shareData = {
      title: `GELT Achievement: ${selectedBadgeData.title}`,
      text: `I just achieved ${selectedBadgeData.value} ${selectedBadgeData.subtitle.toLowerCase()} on GELT! 🎉`,
      url: window.location.origin
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Your achievement has been shared."
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        toast({
          title: "Copied to clipboard!",
          description: "Share text has been copied to your clipboard."
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleDownload = () => {
    // Create a canvas element to generate the badge image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 200;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 200);
    gradient.addColorStop(0, selectedBadgeData.id === 'streak' ? '#facc15' : 
                           selectedBadgeData.id === 'longest' ? '#3b82f6' : '#10b981');
    gradient.addColorStop(1, selectedBadgeData.id === 'streak' ? '#f97316' : 
                           selectedBadgeData.id === 'longest' ? '#8b5cf6' : '#059669');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 200);

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(selectedBadgeData.title, 200, 60);
    
    ctx.font = 'bold 48px Arial';
    ctx.fillText(selectedBadgeData.value.toString(), 200, 120);
    
    ctx.font = '20px Arial';
    ctx.fillText(selectedBadgeData.subtitle, 200, 150);
    
    ctx.font = '16px Arial';
    ctx.fillText('GELT Platform', 200, 180);

    // Download the image
    const link = document.createElement('a');
    link.download = `gelt-badge-${selectedBadge}.png`;
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "Badge downloaded!",
      description: "Your achievement badge has been saved to your device."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          Share Your Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Badge Selection */}
        <div className="flex gap-2 flex-wrap">
          {badges.map((badge) => (
            <Button
              key={badge.id}
              variant={selectedBadge === badge.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedBadge(badge.id)}
              className="flex items-center gap-2"
            >
              <badge.icon className="h-4 w-4" />
              {badge.title}
            </Button>
          ))}
        </div>

        {/* Badge Preview */}
        <div className="flex justify-center">
          <div className={`bg-gradient-to-br ${selectedBadgeData.color} p-6 rounded-lg text-white text-center min-w-[200px] shadow-lg`}>
            <IconComponent className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-bold text-lg">{selectedBadgeData.title}</h3>
            <div className="text-3xl font-bold my-2">{selectedBadgeData.value}</div>
            <p className="text-sm opacity-90">{selectedBadgeData.subtitle}</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              GELT Platform
            </Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-center">
          <Button onClick={handleShare} className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShareableBadge;
