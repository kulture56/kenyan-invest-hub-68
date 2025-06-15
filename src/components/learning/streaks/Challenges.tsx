
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  deadline: string;
}
interface ChallengesProps {
  challenges: Challenge[];
}
const Challenges: React.FC<ChallengesProps> = ({
  challenges
}) => {
  return <></>;
};
export default Challenges;
