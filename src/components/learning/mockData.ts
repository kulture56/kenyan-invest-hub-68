
// Mock data for learning paths with alphabetically ordered videos
export const learningPaths = [
  {
    id: "1",
    title: "Introduction to Investing",
    description: "Learn the basics of investing in the Kenyan market",
    progress: 60,
    totalLessons: 12,
    estimatedTime: "2 hours",
    category: "Beginner",
    videos: [
      { id: "v1", title: "Asset Allocation Strategies", duration: "8:30", completed: true },
      { id: "v2", title: "Basic Investment Principles", duration: "12:15", completed: true },
      { id: "v3", title: "Diversification Fundamentals", duration: "10:45", completed: true },
      { id: "v4", title: "Emergency Fund Planning", duration: "7:20", completed: false },
      { id: "v5", title: "Financial Goal Setting", duration: "9:15", completed: false },
      { id: "v6", title: "Getting Started with NSE", duration: "15:30", completed: false },
      { id: "v7", title: "Introduction to Bonds", duration: "11:40", completed: false },
      { id: "v8", title: "Market Analysis Basics", duration: "13:25", completed: false },
      { id: "v9", title: "Portfolio Building 101", duration: "14:10", completed: false },
      { id: "v10", title: "Risk Assessment Methods", duration: "10:30", completed: false },
      { id: "v11", title: "Stock Market Fundamentals", duration: "16:45", completed: false },
      { id: "v12", title: "Understanding Market Volatility", duration: "12:00", completed: false }
    ]
  },
  {
    id: "2", 
    title: "SACCO Fundamentals",
    description: "Understanding Savings and Credit Cooperative Organizations",
    progress: 40,
    totalLessons: 10,
    estimatedTime: "1.5 hours",
    category: "Beginner",
    videos: [
      { id: "s1", title: "Benefits of SACCO Membership", duration: "9:45", completed: true },
      { id: "s2", title: "Choosing the Right SACCO", duration: "11:30", completed: true },
      { id: "s3", title: "Digital SACCO Services", duration: "8:15", completed: false },
      { id: "s4", title: "Dividend Calculations", duration: "12:20", completed: false },
      { id: "s5", title: "How SACCOs Work", duration: "14:10", completed: false },
      { id: "s6", title: "Loan Application Process", duration: "10:45", completed: false },
      { id: "s7", title: "SACCO Governance Structure", duration: "13:30", completed: false },
      { id: "s8", title: "SACCO vs Bank Comparison", duration: "9:20", completed: false },
      { id: "s9", title: "Savings Products Available", duration: "7:55", completed: false },
      { id: "s10", title: "Understanding SACCO Shares", duration: "15:40", completed: false }
    ]
  },
  {
    id: "3",
    title: "NSE Trading Mastery", 
    description: "Master trading on the Nairobi Securities Exchange",
    progress: 25,
    totalLessons: 15,
    estimatedTime: "3 hours",
    category: "Advanced",
    videos: [
      { id: "n1", title: "Advanced Trading Strategies", duration: "18:30", completed: true },
      { id: "n2", title: "Blue Chip Stocks Analysis", duration: "16:45", completed: false },
      { id: "n3", title: "Capital Gains Tax Planning", duration: "12:20", completed: false },
      { id: "n4", title: "Dividend Yield Calculations", duration: "10:15", completed: false },
      { id: "n5", title: "Economic Indicators Impact", duration: "14:40", completed: false },
      { id: "n6", title: "Foreign Investment Rules", duration: "11:30", completed: false },
      { id: "n7", title: "Market Making Concepts", duration: "13:25", completed: false },
      { id: "n8", title: "NSE Trading Hours and Rules", duration: "9:50", completed: false },
      { id: "n9", title: "Order Types and Execution", duration: "15:20", completed: false },
      { id: "n10", title: "Portfolio Performance Metrics", duration: "12:35", completed: false },
      { id: "n11", title: "Risk Management Techniques", duration: "17:10", completed: false },
      { id: "n12", title: "Sector Analysis Methods", duration: "14:55", completed: false },
      { id: "n13", title: "Technical Analysis Tools", duration: "19:20", completed: false },
      { id: "n14", title: "Understanding Market Cycles", duration: "16:30", completed: false },
      { id: "n15", title: "Value vs Growth Investing", duration: "13:45", completed: false }
    ]
  }
];

// Mock data for daily questions with exactly 3 questions per day, 1 point each
export const dailyQuestions = [
  {
    id: "q1",
    question: "What is the minimum share capital required to start a SACCO in Kenya?",
    options: [
      "KES 100,000",
      "KES 500,000", 
      "KES 1,000,000",
      "KES 2,000,000"
    ],
    correctAnswer: 1,
    points: 1,
    category: "SACCO"
  },
  {
    id: "q2", 
    question: "Which of the following is NOT a blue-chip stock on the NSE?",
    options: [
      "Safaricom PLC",
      "Equity Group Holdings",
      "Kenya Commercial Bank",
      "Generic Bank Ltd"
    ],
    correctAnswer: 3,
    points: 1,
    category: "NSE"
  },
  {
    id: "q3",
    question: "What is the current Central Bank Rate (CBR) range in Kenya?",
    options: [
      "5-7%",
      "8-10%",
      "12-15%", 
      "18-20%"
    ],
    correctAnswer: 2,
    points: 1,
    category: "Banking"
  }
];

// Weekly streak data with exactly 3 points max per day
export const weeklyStreakData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Points Earned',
      data: [3, 2, 3, 1, 0, 3, 2], // Max 3 points per day
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
    },
  ],
};
