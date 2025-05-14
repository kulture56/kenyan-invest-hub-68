
// Mock data for learning paths
export const learningPaths = [
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
export const glossaryTerms = [
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
export const streaksData = {
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
export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
