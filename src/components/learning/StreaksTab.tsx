
import React from "react";
import StreaksOverview from "./streaks/StreaksOverview";
import GroupStreaks from "./streaks/GroupStreaks";
import Leaderboards from "./streaks/Leaderboards";
import Challenges from "./streaks/Challenges";
import ShareableBadge from "./streaks/ShareableBadge";

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

// Mock data for leaderboards
const individualLeaderboard = [
  {
    id: 1,
    position: 1,
    username: "JaneInvestor",
    avatar: "/placeholder.svg",
    points: 892
  },
  {
    id: 2,
    position: 2,
    username: "InvestKing",
    avatar: "/placeholder.svg",
    points: 756
  },
  {
    id: 3,
    position: 3,
    username: "MoneyMaker",
    avatar: "/placeholder.svg",
    points: 701
  },
  {
    id: 4,
    position: 4,
    username: "FinanceGuru",
    avatar: "/placeholder.svg",
    points: 645
  },
  {
    id: 5,
    position: 5,
    username: "StockWhiz",
    avatar: "/placeholder.svg",
    points: 590
  }
];

const institutionLeaderboard = [
  {
    id: 1,
    position: 1,
    name: "Equity Bank",
    avatar: "/placeholder.svg",
    points: 1245
  },
  {
    id: 2,
    position: 2,
    name: "KCB Group",
    avatar: "/placeholder.svg",
    points: 1120
  },
  {
    id: 3,
    position: 3,
    name: "CIC Insurance",
    avatar: "/placeholder.svg",
    points: 986
  },
  {
    id: 4,
    position: 4,
    name: "Safaricom",
    avatar: "/placeholder.svg",
    points: 845
  },
  {
    id: 5,
    position: 5,
    name: "Co-op Bank",
    avatar: "/placeholder.svg",
    points: 790
  }
];

// Mock group streaks
const groupStreaks = [
  {
    id: 1,
    name: "Investment Club",
    members: 8,
    streak: 14
  },
  {
    id: 2,
    name: "Finance Buddies",
    members: 5,
    streak: 7
  }
];

const StreaksTab: React.FC<StreaksTabProps> = ({
  streaksData,
  weekDays
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="lg:col-span-1 space-y-3">
        <StreaksOverview streaksData={streaksData} weekDays={weekDays} />
        <GroupStreaks groupStreaks={groupStreaks} />
        <ShareableBadge streaksData={streaksData} />
      </div>
      
      <div className="lg:col-span-2 space-y-3">
        <Leaderboards 
          individualLeaderboard={individualLeaderboard}
          institutionLeaderboard={institutionLeaderboard}
        />
        
        <Challenges challenges={streaksData.upcomingChallenges} />
      </div>
    </div>
  );
};

export default StreaksTab;
