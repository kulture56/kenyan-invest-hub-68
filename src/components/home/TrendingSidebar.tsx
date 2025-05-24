
import React from "react";

interface TrendingTopic {
  name: string;
  posts: number;
}

interface TrendingSidebarProps {
  trendingTopics: TrendingTopic[];
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = () => {
  // This component now serves as a placeholder for future sidebar content
  // The Financial Tips feature has been removed as requested
  return null;
};

export default TrendingSidebar;
