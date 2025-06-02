
import React, { useState, useEffect } from "react";
import StreaksOverview from "./streaks/StreaksOverview";
import GroupStreaks from "./streaks/GroupStreaks";
import Leaderboards from "./streaks/Leaderboards";
import Challenges from "./streaks/Challenges";
import ShareableBadge from "./streaks/ShareableBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  deadline: string;
}

interface StreaksData {
  currentStreak: number;
  longestStreak: number;
  thisWeek: number;
  completedChallenges: number;
  dailyGoal: number;
  weeklyPoints: number[];
  upcomingChallenges: Challenge[];
}

interface StreaksTabProps {
  streaksData: StreaksData;
  weekDays: string[];
}

interface ThemedStreak {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

// Mock data for leaderboards
const individualLeaderboard = [{
  id: 1,
  position: 1,
  username: "JaneInvestor",
  avatar: "/placeholder.svg",
  points: 892
}, {
  id: 2,
  position: 2,
  username: "InvestKing",
  avatar: "/placeholder.svg",
  points: 756
}, {
  id: 3,
  position: 3,
  username: "MoneyMaker",
  avatar: "/placeholder.svg",
  points: 701
}, {
  id: 4,
  position: 4,
  username: "FinanceGuru",
  avatar: "/placeholder.svg",
  points: 645
}, {
  id: 5,
  position: 5,
  username: "StockWhiz",
  avatar: "/placeholder.svg",
  points: 590
}];

const institutionLeaderboard = [{
  id: 1,
  position: 1,
  name: "Equity Bank",
  avatar: "/placeholder.svg",
  points: 1245
}, {
  id: 2,
  position: 2,
  name: "KCB Group",
  avatar: "/placeholder.svg",
  points: 1120
}, {
  id: 3,
  position: 3,
  name: "CIC Insurance",
  avatar: "/placeholder.svg",
  points: 986
}, {
  id: 4,
  position: 4,
  name: "Safaricom",
  avatar: "/placeholder.svg",
  points: 845
}, {
  id: 5,
  position: 5,
  name: "Co-op Bank",
  avatar: "/placeholder.svg",
  points: 790
}];

// Mock group streaks
const groupStreaks = [{
  id: 1,
  name: "Investment Club",
  members: 8,
  streak: 14
}, {
  id: 2,
  name: "Finance Buddies",
  members: 5,
  streak: 7
}];

const DailyQuestionsCard: React.FC = () => {
  const [questionsCompleted, setQuestionsCompleted] = useState(2);
  const maxQuestions = 3;
  const pointsPerQuestion = 1;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Daily Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Progress</span>
            <Badge variant={questionsCompleted >= maxQuestions ? "default" : "secondary"}>
              {questionsCompleted}/{maxQuestions}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            Earn {pointsPerQuestion} point per question
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ThemedStreaksCard: React.FC = () => {
  const [themedStreaks, setThemedStreaks] = useState<ThemedStreak[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchThemedStreaks();
  }, []);

  const fetchThemedStreaks = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('streak_themes').select('*').eq('is_active', true).order('start_date', {
        ascending: true
      });
      if (error) throw error;
      setThemedStreaks(data || []);
    } catch (error) {
      console.error('Error fetching themed streaks:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Themed Streaks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading themed streaks...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Themed Streaks
        </CardTitle>
      </CardHeader>
      <CardContent>
        {themedStreaks.length > 0 ? (
          <div className="space-y-2">
            {themedStreaks.map((streak) => (
              <div key={streak.id} className="border rounded p-2">
                <h4 className="font-medium text-sm">{streak.title}</h4>
                <p className="text-xs text-muted-foreground">{streak.description}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  {formatDate(streak.start_date)} - {formatDate(streak.end_date)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No active themed streaks</p>
        )}
      </CardContent>
    </Card>
  );
};

const StreaksTab: React.FC<StreaksTabProps> = ({
  streaksData,
  weekDays
}) => {
  // Update streaksData to ensure max 3 points per day
  const updatedStreaksData = {
    ...streaksData,
    dailyGoal: 3,
    // Maximum 3 points per day
    weeklyPoints: streaksData.weeklyPoints.map(points => Math.min(points, 3)) // Cap at 3 points
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="lg:col-span-1 space-y-3">
        <StreaksOverview streaksData={updatedStreaksData} weekDays={weekDays} />
        <DailyQuestionsCard />
        <ThemedStreaksCard />
        <GroupStreaks groupStreaks={groupStreaks} />
        <ShareableBadge streaksData={updatedStreaksData} />
      </div>
      
      <div className="lg:col-span-2 space-y-3">
        <Leaderboards individualLeaderboard={individualLeaderboard} institutionLeaderboard={institutionLeaderboard} />
        
        <Challenges challenges={updatedStreaksData.upcomingChallenges} />
      </div>
    </div>
  );
};

export default StreaksTab;
