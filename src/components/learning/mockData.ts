
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
    letter: "B",
    term: "Business Daily Africa Index",
    definition: "A locally tracked financial index focused on blue-chip or high-performing Kenyan stocks.",
    category: "Markets"
  },
  {
    letter: "C",
    term: "Chama",
    definition: "Informal investment group or self-help group pooling resources for collective investment or welfare.",
    category: "Kenyan Finance"
  },
  {
    letter: "C",
    term: "County Bonds",
    definition: "Bonds issued by county governments to raise development funds, often offered locally to residents.",
    category: "Fixed Income"
  },
  {
    letter: "C",
    term: "Co-operative Shares",
    definition: "Ownership units in co-operative societies that entitle members to dividends and voting rights.",
    category: "Kenyan Finance"
  },
  {
    letter: "D",
    term: "Dividend",
    definition: "A payment made by a corporation to its shareholders, usually as a distribution of profits.",
    category: "Stocks"
  },
  {
    letter: "D",
    term: "Digital Lenders",
    definition: "Mobile-based platforms offering short-term loans with high interest, popular among MSMEs and individuals.",
    category: "Kenyan Finance"
  },
  {
    letter: "D",
    term: "Diaspora Remittances",
    definition: "Inflows of funds from Kenyans abroad, a major source of capital and investment in real estate and business.",
    category: "Kenyan Finance"
  },
  {
    letter: "H",
    term: "Harambee Contributions",
    definition: "Community fundraising efforts often used for social or investment purposes.",
    category: "Kenyan Finance"
  },
  {
    letter: "H",
    term: "Huduma Card",
    definition: "A government-issued smart card for accessing financial and public services, often used for G2P payments.",
    category: "Government Services"
  },
  {
    letter: "K",
    term: "KCB Simba Points",
    definition: "A bank loyalty program convertible into value for purchases, often used in savings incentives.",
    category: "Banking"
  },
  {
    letter: "L",
    term: "Lipa na M-Pesa",
    definition: "A mobile payment solution used by SMEs for digital transactions and cashless sales.",
    category: "Mobile Money"
  },
  {
    letter: "L",
    term: "Logbook Loan",
    definition: "A secured loan where a vehicle logbook is used as collateral, popular with informal sector.",
    category: "Lending"
  },
  {
    letter: "M",
    term: "M-Pesa Statement",
    definition: "A mobile money transaction record used in lieu of bank statements for personal finance tracking.",
    category: "Mobile Money"
  },
  {
    letter: "M",
    term: "M-Pesa Global",
    definition: "A service enabling international money transfers and cross-border remittances via mobile.",
    category: "Mobile Money"
  },
  {
    letter: "S",
    term: "SACCO Dividends",
    definition: "Profits shared among SACCO members based on their share capital and savings contributions.",
    category: "Kenyan Finance"
  },
  {
    letter: "S",
    term: "Safaricom M-Akiba",
    definition: "A mobile-based retail bond platform offering government bonds via USSD and M-Pesa.",
    category: "Investment Platforms"
  },
  {
    letter: "S",
    term: "Stawi Loan",
    definition: "A digital loan product for small traders offered by a consortium of Kenyan banks.",
    category: "Lending"
  },
  {
    letter: "T",
    term: "Treasury Mobile Direct (TMD)",
    definition: "A platform for retail investors to buy government securities (T-bills & bonds) via mobile phone.",
    category: "Government Securities"
  },
  {
    letter: "U",
    term: "Unit Trust Funds (UTFs)",
    definition: "Pooled investment vehicles offered by fund managers, regulated by CMA Kenya.",
    category: "Investment Funds"
  },
  {
    letter: "U",
    term: "Uwezo Fund",
    definition: "A government fund providing credit to youth, women, and persons with disabilities for business purposes.",
    category: "Government Programs"
  },
  {
    letter: "Y",
    term: "Youth Fund",
    definition: "Government initiative offering financial support to youth-owned enterprises via loans or grants.",
    category: "Government Programs"
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
