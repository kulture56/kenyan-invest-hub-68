
import { useState } from "react";

// Define types for our data
export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  topic: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface TrendingTopic {
  name: string;
  posts: number;
}

export interface TopInsight {
  id: string;
  title: string;
  source: string;
  topic: string;
  date: string;
}

export const useHomeData = () => {
  // Mock data for initial rendering
  const mockPosts = [
    {
      id: "1",
      author: {
        id: "user1",
        name: "James Mwangi",
        username: "jamesmwangi",
        avatar: "/placeholder.svg",
      },
      content: "The Nairobi Stock Exchange is showing promising signs of recovery after last week's dip. What investments are you all looking at right now? I'm considering adding more banking stocks to my portfolio. #NSE",
      topic: "STOCKS",
      createdAt: new Date(Date.now() - 2000000),
      likes: 24,
      comments: 8,
      shares: 3,
    },
    {
      id: "2",
      author: {
        id: "user2",
        name: "Sarah Kamau",
        username: "sarahk",
        avatar: "/placeholder.svg",
      },
      content: "Just got approved for Stawi loan with a 9% interest rate. Any tips on how to maximize this capital for my small business?",
      topic: "BANKS",
      createdAt: new Date(Date.now() - 5000000),
      likes: 17,
      comments: 12,
      shares: 2,
    },
    {
      id: "3",
      author: {
        id: "user3",
        name: "Michael Odhiambo",
        username: "mikeodhi",
        avatar: "/placeholder.svg",
      },
      content: "Today's T-Bill rates have been announced. The 91-day T-Bill is at 9.2%, the 182-day at 10.1%, and the 364-day at 10.8%. This continues to be an attractive risk-free investment for those looking to park funds short term.",
      image: "https://source.unsplash.com/random/800x500/?chart",
      topic: "TBILLS",
      createdAt: new Date(Date.now() - 20000000),
      likes: 42,
      comments: 15,
      shares: 8,
    },
  ];

  const topicsList = [
    { name: "STOCKS", slug: "stocks" },
    { name: "SACCOS", slug: "saccos" },
    { name: "CRYPTOCURRENCIES", slug: "crypto" },
    { name: "BANKS", slug: "banks" },
    { name: "TBILLS", slug: "bills-bonds" },
    { name: "MMFS", slug: "mmfs" },
    { name: "FUNDS", slug: "funds" },
    { name: "FOREX", slug: "forex" },
    { name: "INDICES", slug: "indices" },
    { name: "VENTURE CAPITAL", slug: "vc" },
    { name: "INSURANCE", slug: "insurance" }
  ];

  const trendingTopics = [
    { name: "STOCKS", posts: 120 },
    { name: "SACCOS", posts: 85 },
    { name: "CRYPTOCURRENCIES", posts: 67 },
    { name: "FOREX", posts: 53 },
    { name: "BANKS", posts: 45 },
    { name: "TBILLS", posts: 32 },
  ];

  const suggestedQuestions = [
    "What are the best investment options for beginners in Kenya?",
    "How do I start investing in the Nairobi Stock Exchange?",
    "What are the current Treasury bill rates?",
    "Which SACCOs offer the best returns right now?",
  ];

  const topInsights = [
    {
      id: "1",
      title: "Banking sector shows 12% growth in Q1",
      source: "Financial Analysis",
      topic: "BANKS",
      date: "2 hours ago",
    },
    {
      id: "2",
      title: "T-Bills yield rises to 10.8% - highest in 6 months",
      source: "Market Trends",
      topic: "TBILLS",
      date: "Yesterday",
    },
    {
      id: "3",
      title: "Safaricom shares expected to rise 15% following expansion",
      source: "Market Forecast",
      topic: "STOCKS",
      date: "3 days ago",
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check if user is new (would be connected to auth in a real app)
  const checkIfNewUser = () => {
    const isNewUser = localStorage.getItem("onboardingComplete") !== "true";
    if (isNewUser) {
      setShowOnboarding(true);
    }
  };

  const completeOnboarding = () => {
    localStorage.setItem("onboardingComplete", "true");
    setShowOnboarding(false);
  };

  return {
    posts: mockPosts,
    topics: topicsList,
    trendingTopics,
    suggestedQuestions,
    topInsights,
    selectedTopic,
    setSelectedTopic,
    showOnboarding,
    setShowOnboarding,
    checkIfNewUser,
    completeOnboarding,
  };
};
