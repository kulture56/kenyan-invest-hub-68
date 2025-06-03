
import { Briefcase, Users, Coins, ChartBar, Currency, Heart, HandCoins, FileText, Info } from "lucide-react";

export const topicInfo = {
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

export function getTopicDescription(topicSlug?: string): string {
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
