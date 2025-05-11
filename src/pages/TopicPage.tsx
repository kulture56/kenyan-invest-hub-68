
import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { CreatePostBox } from "@/components/post/CreatePostBox";
import { PostCard } from "@/components/post/PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Users, Coins, ChartBar, Currency, Heart, HandCoins, FileText, Info } from "lucide-react";

// A simple map of topic slugs to display names and icons
const topicInfo = {
  jobs: { name: "Jobs", icon: <Briefcase className="h-5 w-5" /> },
  saccos: { name: "SACCOs", icon: <Users className="h-5 w-5" /> },
  mmfs: { name: "Money Market Funds", icon: <Coins className="h-5 w-5" /> },
  stocks: { name: "Stocks", icon: <ChartBar className="h-5 w-5" /> },
  funds: { name: "Funds", icon: <Currency className="h-5 w-5" /> },
  banks: { name: "Banks", icon: <Heart className="h-5 w-5" /> },
  indices: { name: "Indices", icon: <HandCoins className="h-5 w-5" /> },
  "bills-bonds": { name: "T-Bills & Bonds", icon: <FileText className="h-5 w-5" /> },
  vc: { name: "Venture Capital", icon: <Briefcase className="h-5 w-5" /> },
  insurance: { name: "Insurance", icon: <Currency className="h-5 w-5" /> },
  crypto: { name: "Cryptocurrencies", icon: <Coins className="h-5 w-5" /> },
};

// Mock data for different topics
const mockPostsByTopic = {
  stocks: [
    {
      id: "s1",
      author: {
        id: "user1",
        name: "James Mwangi",
        username: "jamesmwangi",
        avatar: "/placeholder.svg",
      },
      content: "Safaricom shares are up 2.3% today following the announcement of their new mobile banking initiative. This could be a game changer for their fintech division.",
      topic: "STOCKS",
      createdAt: new Date(Date.now() - 1000000),
      likes: 34,
      comments: 12,
      shares: 5,
    },
    {
      id: "s2",
      author: {
        id: "user4",
        name: "Peter Njoroge",
        username: "pnjoroge",
        avatar: "/placeholder.svg",
      },
      content: "What are your thoughts on KCB's new rights issue? I'm considering participating but want to hear from others who follow banking stocks closely.",
      topic: "STOCKS",
      createdAt: new Date(Date.now() - 8000000),
      likes: 21,
      comments: 18,
      shares: 2,
    },
  ],
  banks: [
    {
      id: "b1",
      author: {
        id: "user2",
        name: "Sarah Kamau",
        username: "sarahk",
        avatar: "/placeholder.svg",
      },
      content: "Equity Bank has just announced a new SME loan package with reduced interest rates. This could be great for small business owners looking to scale.",
      topic: "BANKS",
      createdAt: new Date(Date.now() - 3000000),
      likes: 27,
      comments: 9,
      shares: 6,
    }
  ],
  crypto: [
    {
      id: "c1",
      author: {
        id: "user5",
        name: "David Mutua",
        username: "davemutua",
        avatar: "/placeholder.svg",
      },
      content: "With the new Central Bank directive on cryptocurrency, what's everyone's take on the future of Bitcoin and other cryptocurrencies in Kenya?",
      topic: "CRYPTOCURRENCIES",
      createdAt: new Date(Date.now() - 4000000),
      likes: 45,
      comments: 32,
      shares: 7,
    }
  ],
  default: []
};

const TopicPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const topic = topicInfo[topicSlug as keyof typeof topicInfo] || { 
    name: topicSlug?.charAt(0).toUpperCase() + topicSlug?.slice(1), 
    icon: <Info className="h-5 w-5" /> 
  };
  
  const posts = mockPostsByTopic[topicSlug as keyof typeof mockPostsByTopic] || mockPostsByTopic.default;

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {topic.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{topic.name}</h1>
            <p className="text-muted-foreground">Insights and discussions</p>
          </div>
        </div>

        <Tabs defaultValue="latest" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="latest" className="mt-4">
            <CreatePostBox defaultTopic={topic.name.toUpperCase()} />
            
            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Be the first to start a discussion about {topic.name}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="popular">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <h3 className="text-lg font-medium mb-2">Popular posts</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  The most engaging posts about {topic.name} will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <h3 className="text-lg font-medium mb-2">Resources</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Helpful resources about {topic.name} will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="fixed right-6 top-24 w-64 hidden lg:block">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">About {topic.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {getTopicDescription(topicSlug)}
            </p>
            <Button variant="outline" className="w-full">
              Follow Topic
            </Button>
          </CardContent>
        </Card>
        
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xs font-bold">R</span>
              </div>
              <h3 className="font-medium">Rafiki's Insights</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {getRafikiInsight(topicSlug)}
            </p>
            <Button variant="link" className="px-0 mt-2 text-sm">
              Get more insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

function getTopicDescription(topicSlug?: string): string {
  switch (topicSlug) {
    case 'stocks':
      return 'Discuss Kenyan stock market trends, share analysis, and track performance of listed companies on the NSE.';
    case 'banks':
      return 'News and discussions about commercial and investment banking in Kenya, rates, services, and financial products.';
    case 'crypto':
      return 'Explore cryptocurrency trends, blockchain technology, and digital asset investments in the Kenyan context.';
    case 'jobs':
      return 'Discover career opportunities in Kenya\'s finance sector, share job postings, and network with professionals.';
    case 'saccos':
      return 'Information about Savings and Credit Cooperative Organizations in Kenya, comparison of rates and services.';
    default:
      return 'Join discussions, share insights, and discover investment opportunities in this topic.';
  }
}

function getRafikiInsight(topicSlug?: string): string {
  switch (topicSlug) {
    case 'stocks':
      return 'The NSE-20 index has shown a 3.2% increase over the past month, with technology and banking sectors showing strongest performance.';
    case 'banks':
      return 'Kenya\'s banking sector profitability increased by 16.7% in Q2 2023, driven by increased digital banking adoption and higher interest income.';
    case 'crypto':
      return 'Bitcoin has seen a 12% increase this week, while regulatory developments in Kenya could impact cryptocurrency adoption.';
    case 'jobs':
      return 'Finance sector hiring in Kenya has increased by 8% in the last quarter, with fintech companies leading recruitment.';
    case 'saccos':
      return 'SACCO dividend rates are trending between 8-14% this year, with the top performers focusing on digital transformation.';
    default:
      return 'Market trends show positive movement in this sector. Ask me for more specific insights!';
  }
}

export default TopicPage;
