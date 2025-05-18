import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Award, Calendar, Lock, Copy, Share2, MessageSquare, TrendingUp, Users, User, Building, Plus, Link as LinkIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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

// Mock data for monthly progress
const monthlyProgress = [{
  month: "Jan",
  points: 420,
  totalDays: 31,
  streakDays: 28
}, {
  month: "Feb",
  points: 380,
  totalDays: 29,
  streakDays: 25
}, {
  month: "Mar",
  points: 520,
  totalDays: 31,
  streakDays: 30
}, {
  month: "Apr",
  points: 490,
  totalDays: 30,
  streakDays: 22
}, {
  month: "May",
  points: 310,
  totalDays: 31,
  streakDays: 18
}, {
  month: "Jun",
  points: 210,
  totalDays: 30,
  streakDays: 12
}];
const currentMonth = "Jun";

// Mock daily streak questions
const dailyQuestions = [{
  id: 1,
  text: "What is the current Treasury Bill rate in Kenya?",
  completed: true
}, {
  id: 2,
  text: "Which stock had the highest gain on NSE yesterday?",
  completed: true
}, {
  id: 3,
  text: "What's the recommended minimum emergency fund size?",
  completed: false
}, {
  id: 4,
  text: "What is the current inflation rate in Kenya?",
  completed: false
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
const StreaksTab: React.FC<StreaksTabProps> = ({
  streaksData,
  weekDays
}) => {
  const [leaderboardTab, setLeaderboardTab] = useState("individuals");
  const [shareLink, setShareLink] = useState("https://gelt.app/join-streak/abc123");
  const [groupName, setGroupName] = useState("");

  // Calculate this month's progress
  const thisMonthProgress = monthlyProgress.find(m => m.month === currentMonth);
  const totalPoints = monthlyProgress.reduce((sum, month) => sum + month.points, 0);
  
  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast({
      title: "Link copied!",
      description: "Share link copied to clipboard"
    });
  };
  
  const handleCreateGroup = () => {
    if (groupName) {
      toast({
        title: "Group created!",
        description: `Your group "${groupName}" has been created and share link generated.`
      });
      setGroupName("");
    }
  };
  
  const handleShareInvite = (type: string) => {
    toast({
      title: `Shared to ${type}!`,
      description: `Group invite shared via ${type}`
    });
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="h-5 w-5 text-amber-500">
                <img src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" alt="Streaks" className="h-full w-full object-contain" />
              </div>
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
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Today's Goal</span>
                <Badge variant="outline">{streaksData.dailyGoal} points</Badge>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-3">This Week</h4>
              <div className="flex justify-between">
                {weekDays.map((day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div className="text-xs text-muted-foreground">{day}</div>
                    <div 
                      className={`w-6 mt-1 rounded-sm ${streaksData.weeklyPoints[index] > 0 ? 'bg-primary' : 'bg-muted'}`} 
                      style={{height: `${Math.max(streaksData.weeklyPoints[index] / 5, 4)}px`}}
                    ></div>
                    <div className="text-xs mt-1">{streaksData.weeklyPoints[index]}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Daily Streak Questions (1 point each)</h4>
              <div className="space-y-2">
                {dailyQuestions.map(question => (
                  <div 
                    key={question.id} 
                    className={`p-2 rounded-md text-xs ${question.completed ? 'bg-green-500/10 text-green-700 border border-green-200' : 'bg-muted/50 text-muted-foreground border border-muted'}`}
                  >
                    <div className="flex items-start gap-2">
                      {question.completed ? 
                        <Badge className="bg-green-500 mt-0.5">Complete</Badge> : 
                        <Badge variant="outline" className="mt-0.5">Pending</Badge>
                      }
                      <span>{question.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Group Streaks
            </CardTitle>
            <CardDescription>Create or join streak groups with friends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {groupStreaks.map(group => (
              <div key={group.id} className="p-3 rounded-md border border-primary/10 bg-primary/5">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{group.name}</h4>
                  <Badge className="bg-primary">{group.streak} day streak</Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {group.members} members participating
                </div>
              </div>
            ))}
            
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="w-full bg-primary text-primary-foreground">
                  <Plus className="mr-2 h-4 w-4" /> Create Group Streak
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Create a Group Streak</DrawerTitle>
                  <DrawerDescription>
                    Invite friends to join your streak challenge. Everyone in the group will get points for daily participation.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-2">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <label htmlFor="group-name" className="text-sm font-medium">Group Name</label>
                      <Input id="group-name" placeholder="e.g. Investment Club" value={groupName} onChange={e => setGroupName(e.target.value)} />
                    </div>
                    
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Share Invite Link</label>
                      <div className="flex items-center gap-2">
                        <Input value={shareLink} readOnly className="bg-muted/20" />
                        <Button size="icon" variant="outline" onClick={handleCopyShareLink} className="shrink-0 text-primary">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Share via</label>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-primary" onClick={() => handleShareInvite("message")}>
                          <MessageSquare className="mr-1 h-4 w-4" /> Message
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-primary" onClick={() => handleShareInvite("post")}>
                          <Share2 className="mr-1 h-4 w-4" /> Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button onClick={handleCreateGroup} disabled={!groupName}>Create Group</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>

        {/* This is where we add the Trending Categories */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <img 
                src="/lovable-uploads/a3315bc4-c6c6-43b0-9efa-afe9b490e170.png" 
                alt="Trending" 
                className="h-5 w-5"
              />
              Trending Categories
            </CardTitle>
            <CardDescription>Popular topics in the GELT community</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { name: "Investments", posts: 254 },
                { name: "Financial Education", posts: 187 },
                { name: "Market News", posts: 143 },
                { name: "Technology", posts: 98 },
              ].map(topic => (
                <li key={topic.name} className="hover-scale">
                  <a 
                    href={`/topics/${topic.name.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-foreground font-medium">{topic.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{topic.posts}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="ghost" className="px-0 mt-3 text-sm text-primary hover:text-accent transition-colors w-full flex justify-between items-center">
              <span>View all categories</span>
              <span className="h-3 w-3">→</span>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Leaderboards
            </CardTitle>
            <CardDescription>Top performers in the GELT community</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="individuals" onValueChange={setLeaderboardTab}>
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="individuals">
                  <User className="h-4 w-4 mr-2" /> Individuals
                </TabsTrigger>
                <TabsTrigger value="institutions">
                  <Building className="h-4 w-4 mr-2" /> Institutions
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="individuals" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Position</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {individualLeaderboard.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.position === 1 ? (
                            <span className="text-amber-500 font-bold flex items-center gap-1">
                              1 <Trophy className="h-4 w-4" />
                            </span>
                          ) : user.position}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <span>{user.username}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium text-primary">
                          {user.points}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/30 border-t-2">
                      <TableCell className="font-medium">24</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>Y</AvatarFallback>
                          </Avatar>
                          <span>You</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium text-primary">
                        312
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="institutions" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Position</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {institutionLeaderboard.map(inst => (
                      <TableRow key={inst.id}>
                        <TableCell className="font-medium">
                          {inst.position === 1 ? (
                            <span className="text-amber-500 font-bold flex items-center gap-1">
                              1 <Trophy className="h-4 w-4" />
                            </span>
                          ) : inst.position}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={inst.avatar} />
                              <AvatarFallback>{inst.name[0]}</AvatarFallback>
                            </Avatar>
                            <span>{inst.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium text-primary">
                          {inst.points}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Monthly Progress
            </CardTitle>
            <CardDescription>Track your learning progress throughout the year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{currentMonth}'s Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    {thisMonthProgress?.streakDays || 0}/{thisMonthProgress?.totalDays || 0} days streaked
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-primary/5 text-primary">
                    {thisMonthProgress?.points || 0} points
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-31 gap-0.5">
                {Array.from({length: thisMonthProgress?.totalDays || 30}).map((_, i) => {
                  // Mock data: days 1-12 and 15-18 completed, day 13-14 missed
                  let status = "empty";
                  if (i < 12) status = "completed";
                  else if (i < 14) status = "missed";
                  else if (i < 18) status = "completed";
                  
                  // Return a React node for each day
                  return (
                    <div 
                      key={i}
                      className={`h-2 rounded-sm ${
                        status === 'completed' ? 'bg-primary' : 
                        status === 'missed' ? 'bg-destructive/30' : 
                        'bg-muted'
                      }`}
                    />
                  );
                })}
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Points by Month</h3>
                <div className="grid grid-cols-6 gap-2">
                  {monthlyProgress.map(month => (
                    <div 
                      key={month.month} 
                      className={`p-2 rounded-md border text-center ${month.month === currentMonth ? 'border-primary bg-primary/5' : 'border-muted'}`}
                    >
                      <div className="text-sm font-medium">{month.month}</div>
                      <div className={`text-base ${month.month === currentMonth ? 'text-primary font-medium' : ''}`}>
                        {month.points}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-right text-sm">
                  Total Points: <span className="font-bold text-primary">{totalPoints}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Challenges
            </CardTitle>
            <CardDescription>Complete challenges to earn points and badges</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              {streaksData.upcomingChallenges.map(challenge => (
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
      </div>
    </div>
  );
};

// Trophy icon component (same as before)
const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export default StreaksTab;
