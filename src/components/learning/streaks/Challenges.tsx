
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
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Target className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Weekly Challenges</h3>
      </div>
      
      {challenges.map((challenge) => (
        <Card key={challenge.id}>
          <CardHeader>
            <CardTitle className="text-base">{challenge.title}</CardTitle>
            <CardDescription>{challenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Progress: {challenge.progress}/{challenge.total}</span>
              <Badge variant="outline">
                {challenge.reward}
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Deadline: {challenge.deadline}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Challenges;
