
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
      {challenges.map((challenge) => (
        <Card key={challenge.id}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
            </div>
            <CardDescription>{challenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">
                  Progress: {challenge.progress}/{challenge.total}
                </span>
              </div>
              <Badge variant="secondary">{challenge.reward}</Badge>
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
