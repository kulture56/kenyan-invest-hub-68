import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BookOpen, 
  Search, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  FileText, 
  Play, 
  CheckCircle2, 
  Lock,
  ChevronRight,
  Zap,
  Calendar,
  Target
} from "lucide-react";
import StockTicker from "@/components/stocks/StockTicker";

// Mock data for learning paths
const learningPaths = [
  {
    id: "beginner",
    title: "Beginner Investor",
    description: "Learn the basics of investing in Kenya",
    progress: 45,
    modules: 8,
    completed: 3,
    image: "/placeholder.svg",
    tags: ["Basics", "Recommended"],
    featured: true
  },
  {
    id: "stocks",
    title: "Stock Market Fundamentals",
    description: "Master the Nairobi Securities Exchange",
    progress: 20,
    modules: 12,
    completed: 2,
    image: "/placeholder.svg",
    tags: ["Stocks", "NSE"]
  },
  {
    id: "mmf",
    title: "Money Market Funds",
    description: "Low-risk investment strategies",
    progress: 0,
    modules: 6,
    completed: 0,
    image: "/placeholder.svg",
    tags: ["MMF", "Low Risk"]
  },
];

// Mock data for glossary terms
const glossaryTerms = [
  {
    term: "Asset Allocation",
    definition: "The process of dividing your investment portfolio among different asset categories like stocks, bonds, and cash.",
    category: "Investing Basics"
  },
  {
    term: "Dividend",
    definition: "A portion of a company's earnings distributed to its shareholders.",
    category: "Stocks"
  },
  {
    term: "Market Capitalization",
    definition: "The total market value of a company's outstanding shares of stock.",
    category: "Stocks"
  },
  {
    term: "SACCO",
    definition: "Savings and Credit Cooperative Organization - member-owned financial cooperatives that provide savings and credit services to members.",
    category: "Local Investments"
  },
  {
    term: "Money Market Fund",
    definition: "An investment fund that invests in short-term debt securities with high credit ratings.",
    category: "Fixed Income"
  },
  {
    term: "Yield",
    definition: "The income return on an investment, such as interest or dividends received from holding a particular security.",
    category: "General"
  },
  {
    term: "T-Bill",
    definition: "Treasury Bill - a short-term government debt security with a maturity of less than one year.",
    category: "Fixed Income"
  },
  {
    term: "NSE",
    definition: "Nairobi Securities Exchange - the principal stock exchange of Kenya.",
    category: "Stocks"
  }
];

// Mock data for streaks
const streaksData = {
  currentStreak: 8,
  longestStreak: 14,
  thisWeek: 5,
  completedChallenges: 12,
  dailyGoal: 75,
  weeklyPoints: [120, 80, 150, 90, 110, 70, 0],
  upcomingChallenges: [
    {
      id: "challenge1",
      title: "Quiz Master",
      description: "Complete 3 investment quizzes",
      progress: 2,
      total: 3,
      reward: "50 points",
      deadline: "Today"
    },
    {
      id: "challenge2",
      title: "Market Analyst",
      description: "Track 5 stocks for a week",
      progress: 3,
      total: 5,
      reward: "100 points",
      deadline: "3 days left"
    },
    {
      id: "challenge3",
      title: "Knowledge Builder",
      description: "Read 4 articles from the learning hub",
      progress: 1,
      total: 4,
      reward: "75 points",
      deadline: "5 days left"
    }
  ]
};

// Weekly labels for the streak chart
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface LearningHubPageProps {
  initialTab?: string;
}

const LearningHubPage: React.FC<LearningHubPageProps> = ({ initialTab }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  const [activeTab, setActiveTab] = useState(initialTab || "learn");
  const location = useLocation();
  
  // Set activeTab based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/glossary") {
      setActiveTab("glossary");
    } else if (path === "/streaks") {
      setActiveTab("streaks");
    }
  }, [location]);
  
  // Filter glossary terms based on search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setFilteredTerms(glossaryTerms);
    } else {
      const filtered = glossaryTerms.filter(item => 
        item.term.toLowerCase().includes(term.toLowerCase()) || 
        item.definition.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTerms(filtered);
    }
  };
  
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="mb-6">
          <StockTicker compact={true} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Learning Hub</h1>
                <p className="text-muted-foreground">Learn, earn badges, and become a smarter investor</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Completion</span>
                  <Badge variant="outline">5/26 Modules</Badge>
                </div>
                <Progress value={19} className="h-2" />
                
                <div className="mt-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">4 Quizzes Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">2 Badges Earned</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="overflow-x-auto flex w-full no-scrollbar p-1">
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Learning Paths</span>
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Glossary</span>
            </TabsTrigger>
            <TabsTrigger value="streaks" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Streaks</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPaths.map(path => (
                <Card key={path.id} className={`overflow-hidden ${path.featured ? 'border-primary/50' : ''}`}>
                  <div className="h-32 bg-muted flex items-center justify-center">
                    <img src={path.image} alt={path.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    {path.featured && (
                      <div className="flex mb-2">
                        <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>
                      </div>
                    )}
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-2">
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span>Progress</span>
                      <span>{path.completed}/{path.modules} modules</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                    
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {path.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className="w-full">
                      {path.progress > 0 ? "Continue Learning" : "Start Learning"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="glossary">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search terms..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="max-w-sm pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-6">
                    {filteredTerms.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{item.term}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{item.definition}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                        </div>
                        {index < filteredTerms.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                    
                    {filteredTerms.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No matching terms found.</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="streaks">
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
                              className={`w-6 h-${Math.max(streaksData.weeklyPoints[index] / 20, 1)} mt-1 rounded-sm ${
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
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recommended for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="h-24 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Understanding the NSE</CardTitle>
                <CardDescription className="text-xs">5 min video</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full flex justify-between">
                  <span>Watch Now</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">MMF Glossary Terms</CardTitle>
                <CardDescription className="text-xs">Key terms for money market funds</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-sm">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Yield</li>
                    <li>Liquidity</li>
                    <li>Interest Rate Risk</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full flex justify-between">
                  <span>View Terms</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Risk Assessment Quiz</CardTitle>
                <CardDescription className="text-xs">Find your risk tolerance</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <Badge variant="outline">5 minutes</Badge>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full flex justify-between">
                  <span>Take Quiz</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default LearningHubPage;
