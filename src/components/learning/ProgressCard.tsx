
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2, BookOpen, Trophy } from "lucide-react";
interface ProgressCardProps {
  completedModules: number;
  totalModules: number;
  quizzesCompleted: number;
  badgesEarned: number;
}
const ProgressCard: React.FC<ProgressCardProps> = ({
  completedModules,
  totalModules,
  quizzesCompleted,
  badgesEarned
}) => {
  return <></>;
};
export default ProgressCard;
