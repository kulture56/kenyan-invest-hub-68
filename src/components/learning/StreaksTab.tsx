
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Zap, Target, Award, Calendar, Lock } from "lucide-react";

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

const StreaksTab: React.FC<StreaksTabProps> = ({ streaksData, weekDays }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              Your Streaks
            </CardTitle>
            <CardDescription>Keep learning daily to build streaks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center gap-4 mt-2">
              <div className="text-center">
                <div className="text-3xl font-bold">{streaksData.currentStreak}</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-3xl font-bold">{streaksData.longestStreak}</div>
                <div className="text-sm text-muted-foreground">Longest Streak</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-3xl font-bold">{streaksData.thisWeek}</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Today's Goal</span>
                <Badge variant="outline">{streaksData.dailyGoal} points</Badge>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">This Week</h4>
              <div className="flex justify-between">
                {weekDays.map((day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div className="text-xs text-muted-foreground">{day}</div>
                    <div 
                      className={`w-6 mt-1 rounded-sm ${
                        streaksData.weeklyPoints[index] > 0 ? 'bg-primary' : 'bg-muted'
                      }`}
                      style={{ height: `${Math.max(streaksData.weeklyPoints[index] / 5, 4)}px` }}
                    ></div>
                    <div className="text-xs mt-1">{streaksData.weeklyPoints[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Challenges
            </CardTitle>
            <CardDescription>Complete challenges to earn points and badges</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              {streaksData.upcomingChallenges.map((challenge) => (
                <div key={challenge.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Badge variant="secondary">{challenge.deadline}</Badge>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{challenge.progress}/{challenge.total} completed</span>
                      <span className="text-primary">{challenge.reward}</span>
                    </div>
                    <Progress value={challenge.progress / challenge.total * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="outline" className="w-full mt-2">View All Challenges</Button>
          </CardFooter>
        </Card>
        
        <Card className="mt-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Achievement Badges</CardTitle>
            <CardDescription>Badges you've earned through learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm mt-2">First Quiz</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm mt-2">7-Day Streak</span>
              </div>
              <div className="flex flex-col items-center opacity-40">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Lock className="h-8 w-8" />
                </div>
                <span className="text-sm mt-2">Locked</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StreaksTab;
