
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

// Glossary Data
export const glossaryTerms = [
  {
    letter: "A",
    term: "Animal welfare",
    definition: "How an animal copes with the conditions in which it lives.",
    category: "ESG"
  },
  {
    letter: "B",
    term: "Best-in-class investment",
    definition: "Investment approach of selecting only the companies that overcome a defined ranking hurdle, established using ESG criteria within each sector or industry.",
    category: "Investment Strategy"
  },
  {
    letter: "B",
    term: "Bias",
    definition: "A set of assumptions and stereotypes that people have about those different from themselves. Biases may be conscious or unconscious — that is, intentional or unintentional.",
    category: "Social"
  },
  {
    letter: "C",
    term: "Circular economy",
    definition: "An economic model based inter alia on sharing, leasing, reuse, repair, refurbishment, and recycling, in an (almost) closed loop, which aims to retain the highest utility and value of products, components and materials at all times.",
    category: "Environmental"
  },
  {
    letter: "C",
    term: "Conflict of interest",
    definition: "When either the employee's personal interests or the employer's interests conflict with the interests of the client. Conflicts of interest can also arise when employee's and employer's interests conflict.",
    category: "Governance"
  },
  {
    letter: "C",
    term: "Controversial sourcing",
    definition: "Ethically debatable cost-driven practices of companies in their value chain.",
    category: "ESG"
  },
  {
    letter: "D",
    term: "Direct discrimination",
    definition: "When an individual is discriminated against because of a personal characteristic they possess or are perceived to possess.",
    category: "Social"
  },
  {
    letter: "D",
    term: "Diversity",
    definition: "Refers to the full spectrum of human attributes, perspectives, identities, and backgrounds.",
    category: "Social"
  },
  {
    letter: "E",
    term: "Emissions",
    definition: "Pollution discharged into the atmosphere from smokestacks, other vents, and surface areas of commercial or industrial facilities; residential chimneys; and motor vehicle, locomotive, or aircraft exhausts.",
    category: "Environmental"
  },
  {
    letter: "E",
    term: "Environmental, social, and governance (ESG) factors",
    definition: "Environmental factors pertain to the natural world. Social factors affect the lives of humans. Governance factors involve issues tied to countries or jurisdictions or are common practice in an industry as well as the interests of broader stakeholder groups.",
    category: "ESG"
  },
  {
    letter: "E",
    term: "ESG investing",
    definition: "An approach to managing assets in which investors explicitly acknowledge the relevance of environmental, social, and governance (ESG) factors in their investment decisions as well as their own role as owners and creditors, with the long-term return of an investment portfolio in mind. It aims to correctly price social, environmental, and economic risks and opportunities.",
    category: "Investment Strategy"
  },
  {
    letter: "E",
    term: "Ethical and faith-based investment",
    definition: "Ethical (also known as values-driven) and faith-based investment refers to investing in line with certain principles, usually using negative screening to avoid investing in companies whose products and services are deemed morally objectionable by the investor or certain religions, international declarations, conventions, or voluntary agreements.",
    category: "Investment Strategy"
  },
  {
    letter: "E",
    term: "Equity",
    definition: "Fairness of access, opportunity, and advancement for all within an organisation, which requires eliminating barriers and addressing root causes that have prevented underrepresented groups from fully participating in the workplace.",
    category: "Social"
  },
  {
    letter: "G",
    term: "Green bonds",
    definition: "Innovative financial instruments from which the proceeds are invested exclusively (either by specifying the use of the proceeds, direct project exposure, or securitisation) in green projects that generate climate or other environmental benefits.",
    category: "Investment Strategy"
  },
  {
    letter: "G",
    term: "Green investment",
    definition: "Allocating capital to assets that mitigate the following climate change, biodiversity loss, resource inefficiency, and other environmental challenges (e.g., low carbon power generation and vehicles, smart grids, energy efficiency, pollution control, recycling, and waste management).",
    category: "Investment Strategy"
  },
  {
    letter: "G",
    term: "Greenhouse gas (GHG)",
    definition: "Gases (including carbon dioxide (CO2), water vapour, methane, and nitrous oxide) that interact with infrared radiation and, when present in the atmosphere, have the effect of warming the global climate. Without naturally occurring GHGs, the earth's temperature would be several tens of degrees Celsius colder than it is now (and life would not have evolved in its current form).",
    category: "Environmental"
  },
  {
    letter: "H",
    term: "Harassment",
    definition: "Unwanted conduct, verbal and/or physical, that has the effect of making a person uncomfortable, embarrassed, intimidated, or distressed. Sexual harassment is one of the most common types of harassment.",
    category: "Social"
  },
  {
    letter: "H",
    term: "Human rights",
    definition: "Rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status. Human rights include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education, and many more. Everyone is entitled to these rights without discrimination.",
    category: "Social"
  },
  {
    letter: "I",
    term: "Impact investing",
    definition: "Impact investing refers to investments made with the specific intent of generating positive, measurable social and environmental impact alongside a financial return (which differentiates it from philanthropy).",
    category: "Investment Strategy"
  },
  {
    letter: "I",
    term: "Inclusion",
    definition: "A dynamic state of operating in which any employee can be and feel respected, valued, safe, and fully engaged.",
    category: "Social"
  },
  {
    letter: "I",
    term: "Indirect discrimination",
    definition: "A situation in which a condition, that has no objective justification, applies equally to everyone but puts individuals that share a personal characteristic at a disadvantage.",
    category: "Social"
  },
  {
    letter: "L",
    term: "Loyalty",
    definition: "An expectation that employees will place the employer's interests above their own and will not misappropriate a company's property.",
    category: "Governance"
  },
  {
    letter: "P",
    term: "Physical climate-related risks",
    definition: "Risks resulting from extreme weather events, either acute or chronic risks from longer-term shifts in climate patterns — for example, higher temperatures.",
    category: "Environmental"
  },
  {
    letter: "P",
    term: "Product liability",
    definition: "The legal responsibility imposed on a business for the manufacturing or selling of defective goods.",
    category: "Governance"
  },
  {
    letter: "R",
    term: "Responsible investment",
    definition: "A strategy and practice to incorporate ESG factors into investment decisions and active ownership. It considers both how ESG might influence the risk-adjusted return of an asset and the stability of an economy as well as how investment in and engagement with assets and investees can impact society and the environment.",
    category: "Investment Strategy"
  },
  {
    letter: "S",
    term: "Shareholder engagement",
    definition: "The active process of dialogue with a company in which the investor is seeking specific change. This can often be a lengthy process and involve many iterations of contact with senior representatives of the company.",
    category: "Governance"
  },
  {
    letter: "S",
    term: "Social investment",
    definition: "Allocating capital to assets that address social challenges.",
    category: "Investment Strategy"
  },
  {
    letter: "S",
    term: "Socially responsible investment (SRI)",
    definition: "SRI refers to approaches that apply social and environmental criteria to evaluate companies. Investors implementing SRI often score companies using a chosen set of criteria in conjunction with sector-specific weightings. A hurdle level is established for qualification within the investment universe based on using either the full universe or sector-by-sector analysis.",
    category: "Investment Strategy"
  },
  {
    letter: "S",
    term: "Stewardship",
    definition: "The broad term for an investor operating as a good long-term owner of assets, standing in the shoes of their underlying clients to ensure that value is added or preserved over time.",
    category: "Governance"
  },
  {
    letter: "S",
    term: "Sustainable investment",
    definition: "Sustainable investment refers to the selection of assets that contribute in some way to a sustainable economy; that is, an asset that minimises natural and social resource depletion. It is a broad term that may be used for the consideration of typical ESG issues and may include best-in-class. It can also include ESG integration, which considers how ESG issues impact a security's risk and return profile.",
    category: "Investment Strategy"
  },
  {
    letter: "S",
    term: "Sustainable Development Goals (SDGs)",
    definition: "A set of global goals set in 2015 by the UN General Assembly (UNGA), succeeding the Millennium Development goals. The SDGs seek to address the key global challenges, including those related to poverty, inequality, climate change, environmental degradation, peace, and justice. There are 17 interconnected goals.",
    category: "ESG"
  },
  {
    letter: "T",
    term: "Thematic investment",
    definition: "Selecting companies that fall under a sustainability-related theme, such as clean-tech, sustainable agriculture, healthcare, or climate change mitigation.",
    category: "Investment Strategy"
  },
  {
    letter: "T",
    term: "Transition risk",
    definition: "Transition risk relates to risks that result from changes in climate and energy policies, a shift to low-carbon technologies and liability issues.",
    category: "Environmental"
  },
  {
    letter: "T",
    term: "Triple bottom line (TBL)",
    definition: "The triple bottom line (TBL or 3BL) is an accounting framework with three parts: social, environmental (or ecological), and financial (people, planet, and profit).",
    category: "Investment Strategy"
  }
];
