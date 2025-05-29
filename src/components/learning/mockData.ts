
export const learningPaths = [
  {
    id: "1",
    title: "Stock Market Fundamentals",
    description: "Learn the basics of stock market investing, from understanding market mechanics to analyzing companies.",
    progress: 60,
    modules: 8,
    completedModules: 5,
    estimatedTime: "4 weeks",
    difficulty: "Beginner",
    category: "Stocks",
    completed: 5,
    image: "/placeholder.svg",
    tags: ["stocks", "investing", "fundamentals"]
  },
  {
    id: "2", 
    title: "SACCO Investment Guide",
    description: "Master the art of SACCO investments and understand how to maximize returns through cooperative societies.",
    progress: 30,
    modules: 6,
    completedModules: 2,
    estimatedTime: "3 weeks",
    difficulty: "Intermediate",
    category: "SACCOs",
    completed: 2,
    image: "/placeholder.svg",
    tags: ["sacco", "cooperative", "savings"]
  },
  {
    id: "3",
    title: "Cryptocurrency Basics",
    description: "Understand blockchain technology and cryptocurrency investing in the Kenyan context.",
    progress: 0,
    modules: 10,
    completedModules: 0,
    estimatedTime: "6 weeks", 
    difficulty: "Advanced",
    category: "Crypto",
    completed: 0,
    image: "/placeholder.svg",
    tags: ["crypto", "blockchain", "digital currency"]
  }
];

export const glossaryTerms = [
  {
    letter: "A",
    term: "Asset",
    definition: "A resource with economic value that an individual or entity owns or controls with the expectation that it will provide future benefit.",
    category: "General"
  },
  {
    letter: "B", 
    term: "Bond",
    definition: "A fixed income instrument that represents a loan made by an investor to a borrower.",
    category: "Fixed Income"
  },
  {
    letter: "D",
    term: "Dividend",
    definition: "A payment made by a corporation to its shareholders, usually as a distribution of profits.",
    category: "Stocks"
  }
];

export const streaksData = {
  currentStreak: 7,
  longestStreak: 21,
  weeklyGoal: 5,
  dailyProgress: [
    { day: "Mon", completed: true, activities: 3 },
    { day: "Tue", completed: true, activities: 2 },
    { day: "Wed", completed: false, activities: 0 },
    { day: "Thu", completed: true, activities: 4 },
    { day: "Fri", completed: true, activities: 1 },
    { day: "Sat", completed: false, activities: 0 },
    { day: "Sun", completed: true, activities: 2 }
  ],
  thisWeek: 5,
  completedChallenges: 12,
  dailyGoal: 3,
  weeklyPoints: [4, 3, 0, 5, 2, 0, 3],
  upcomingChallenges: [
    {
      id: "1",
      title: "Complete 3 Stock Analysis",
      description: "Analyze 3 different stocks using fundamental analysis",
      progress: 1,
      total: 3,
      reward: "50 points",
      deadline: "2024-01-15"
    }
  ]
};

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
