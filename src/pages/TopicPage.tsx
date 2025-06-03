
import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import CreatePostBox from "@/components/post/CreatePostBox";
import { PostCard } from "@/components/post/PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Users, Coins, ChartBar, Currency, Heart, HandCoins, FileText, Info } from "lucide-react";
import StockTicker from "@/components/stocks/StockTicker";
import JobsFilter from "@/components/jobs/JobsFilter";

// A simple map of topic slugs to display names and icons
const topicInfo = {
  jobs: {
    name: "Jobs",
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  saccos: {
    name: "SACCOs",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  mmfs: {
    name: "Money Market Funds",
    icon: <Coins className="h-5 w-5 text-primary" />
  },
  stocks: {
    name: "Stocks",
    icon: <ChartBar className="h-5 w-5 text-primary" />
  },
  funds: {
    name: "Funds",
    icon: <Currency className="h-5 w-5 text-primary" />
  },
  banks: {
    name: "Banks",
    icon: <Heart className="h-5 w-5 text-primary" />
  },
  indices: {
    name: "Indices",
    icon: <HandCoins className="h-5 w-5 text-primary" />
  },
  "bills-bonds": {
    name: "T-Bills & Bonds",
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  vc: {
    name: "Venture Capital",
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  insurance: {
    name: "Insurance",
    icon: <Currency className="h-5 w-5 text-primary" />
  },
  crypto: {
    name: "Cryptocurrencies",
    icon: <Coins className="h-5 w-5 text-primary" />
  }
};

// Mock data for different topics with verification examples
const mockPostsByTopic = {
  stocks: [{
    id: "s1",
    author: {
      id: "user1",
      name: "James Mwangi",
      username: "jamesmwangi",
      avatar: "/placeholder.svg"
    },
    content: "Safaricom shares are up 2.3% today following the announcement of their new mobile banking initiative. This could be a game changer for their fintech division.",
    topic: "Investments",
    createdAt: new Date(Date.now() - 1000000),
    likes: 34,
    comments: 12,
    shares: 5,
    isVerified: true
  }, {
    id: "s2",
    author: {
      id: "user4",
      name: "Peter Njoroge",
      username: "pnjoroge",
      avatar: "/placeholder.svg"
    },
    content: "What are your thoughts on KCB's new rights issue? I'm considering participating but want to hear from others who follow banking stocks closely.",
    topic: "Market News",
    createdAt: new Date(Date.now() - 8000000),
    likes: 21,
    comments: 18,
    shares: 2,
    isVerified: false
  }],
  banks: [{
    id: "b1",
    author: {
      id: "user2",
      name: "Sarah Kamau",
      username: "sarahk",
      avatar: "/placeholder.svg"
    },
    content: "Equity Bank has just announced a new SME loan package with reduced interest rates. This could be great for small business owners looking to scale.",
    topic: "Financial Education",
    createdAt: new Date(Date.now() - 3000000),
    likes: 27,
    comments: 9,
    shares: 6,
    isVerified: true
  }],
  crypto: [{
    id: "c1",
    author: {
      id: "user5",
      name: "David Mutua",
      username: "davemutua",
      avatar: "/placeholder.svg"
    },
    content: "With the new Central Bank directive on cryptocurrency, what's everyone's take on the future of Bitcoin and other cryptocurrencies in Kenya?",
    topic: "Cryptocurrency",
    createdAt: new Date(Date.now() - 4000000),
    likes: 45,
    comments: 32,
    shares: 7,
    isVerified: false
  }],
  default: []
};

const TopicPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const topic = topicInfo[topicSlug as keyof typeof topicInfo] || {
    name: topicSlug?.charAt(0).toUpperCase() + topicSlug?.slice(1),
    icon: <Info className="h-5 w-5 text-primary" />
  };
  const posts = mockPostsByTopic[topicSlug as keyof typeof mockPostsByTopic] || mockPostsByTopic.default;

  // Show stock ticker prominently for stock-related topics
  const shouldShowProminentTicker = topicSlug === 'stocks';

  // Check if this is the jobs topic
  const isJobsTopic = topicSlug === 'jobs';

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-4">
        {shouldShowProminentTicker && (
          <div className="w-full">
            <StockTicker />
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {topic.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{topic.name}</h1>
          </div>
        </div>

        {!shouldShowProminentTicker && (
          <div className="w-full">
            <StockTicker compact={true} />
          </div>
        )}

        {isJobsTopic && (
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-3">Filter Jobs</h3>
              <JobsFilter />
            </CardContent>
          </Card>
        )}

        <CreatePostBox />

        <Tabs defaultValue="latest">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
          <TabsContent value="latest" className="space-y-4 mt-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    {getTopicDescription(topicSlug)}
                  </p>
                  <Button className="mt-4">Create First Post</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="popular" className="space-y-4 mt-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <h3 className="text-lg font-medium mb-2">Popular Posts</h3>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  Popular posts will appear here based on engagement metrics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

export default TopicPage;
