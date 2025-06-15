import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageSquare } from "lucide-react";

interface TrendingSidebarProps {
  suggestedQuestions: string[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = () => {
  return (
    <aside className="space-y-6 px-2 py-4"></aside>
  );
};
export default TrendingSidebar;
