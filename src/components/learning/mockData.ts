
// Learning Paths Data
export const learningPaths = [
  {
    id: "1",
    title: "Investment Fundamentals",
    description: "Learn the basics of investing, from risk assessment to portfolio diversification.",
    progress: 65,
    modules: 8,
    completedModules: 5,
    estimatedTime: "4 weeks",
    difficulty: "Beginner",
    category: "Investing",
    completed: false,
    image: "/placeholder.svg",
    tags: ["basics", "portfolio", "risk"]
  },
  {
    id: "2",
    title: "Advanced Portfolio Management",
    description: "Deep dive into sophisticated portfolio management strategies and risk assessment.",
    progress: 30,
    modules: 12,
    completedModules: 4,
    estimatedTime: "8 weeks",
    difficulty: "Advanced",
    category: "Portfolio Management",
    completed: false,
    image: "/placeholder.svg",
    tags: ["advanced", "management", "strategy"]
  },
  {
    id: "3",
    title: "ESG Investing",
    description: "Understanding Environmental, Social, and Governance factors in investment decisions.",
    progress: 80,
    modules: 6,
    completedModules: 5,
    estimatedTime: "3 weeks",
    difficulty: "Intermediate",
    category: "Sustainable Investing",
    completed: false,
    image: "/placeholder.svg",
    tags: ["ESG", "sustainable", "governance"]
  }
];

// Streaks Data
export const streaksData = {
  currentStreak: 7,
  longestStreak: 15,
  weeklyGoal: 5,
  dailyProgress: [
    { day: "Mon", completed: true, activities: 3 },
    { day: "Tue", completed: true, activities: 2 },
    { day: "Wed", completed: true, activities: 4 },
    { day: "Thu", completed: true, activities: 1 },
    { day: "Fri", completed: true, activities: 3 },
    { day: "Sat", completed: true, activities: 2 },
    { day: "Sun", completed: true, activities: 1 }
  ],
  thisWeek: {
    activitiesCompleted: 16,
    goal: 15,
    streak: 7
  },
  completedChallenges: 12,
  dailyGoal: {
    target: 2,
    completed: 3,
    streak: 7
  },
  weeklyPoints: 145,
  upcomingChallenges: [
    { id: "1", title: "Portfolio Review", dueDate: "2024-01-15", points: 25 },
    { id: "2", title: "Risk Assessment", dueDate: "2024-01-16", points: 30 }
  ]
};

// Week Days Data
export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
