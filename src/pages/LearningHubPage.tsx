
import React, { useState } from "react";
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
  ChevronRight
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

// Mock quiz data
const sampleQuiz = {
  title: "Investment Basics Quiz",
  description: "Test your knowledge on investment fundamentals",
  questions: [
    {
      question: "Which of the following is generally considered the least risky investment?",
      options: ["Stocks", "Treasury Bills", "Real Estate", "Cryptocurrency"],
      correctAnswer: 1
    },
    {
      question: "What does NSE stand for?",
      options: ["National Stock Exchange", "Nairobi Securities Exchange", "New Stock Equity", "National Securities Equity"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a common investment goal?",
      options: ["Retirement", "Capital appreciation", "Tax maximization", "Income generation"],
      correctAnswer: 2
    }
  ]
};

const LearningHubPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  
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
      <div className="max-w-6xl mx-auto px-4">
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
        
        <Tabs defaultValue="learn" className="space-y-4">
          <TabsList>
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Learning Paths</span>
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Glossary</span>
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Quizzes</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="learn" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    
                    <div className="flex gap-2 mt-3">
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
                <div className="flex items-center gap-4">
                  <Input
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="max-w-sm"
                    prefix={<Search className="h-4 w-4 text-muted-foreground" />}
                  />
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
          
          <TabsContent value="quizzes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Basics Quiz</CardTitle>
                  <CardDescription>Test your knowledge on investment fundamentals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4" />
                    <span>10 questions</span>
                    <Separator orientation="vertical" className="h-4 mx-2" />
                    <span>Beginner level</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Quiz</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>NSE Investing Quiz</CardTitle>
                  <CardDescription>Test your stock market knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4" />
                    <span>12 questions</span>
                    <Separator orientation="vertical" className="h-4 mx-2" />
                    <span>Intermediate level</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Quiz</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-muted/40">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Advanced Market Analysis</CardTitle>
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>Complete beginner quizzes to unlock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4" />
                    <span>15 questions</span>
                    <Separator orientation="vertical" className="h-4 mx-2" />
                    <span>Advanced level</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled>Locked</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recommended for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
