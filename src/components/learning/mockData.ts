// Mock data for learning paths with alphabetically ordered videos
export const learningPaths = [
  {
    id: "1",
    title: "Introduction to Investing",
    description: "Learn the basics of investing in the Kenyan market",
    progress: 60,
    modules: 12,
    completed: 7,
    image: "/placeholder.svg",
    tags: ["Beginner", "Investing", "Kenya"],
    featured: true,
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
    modules: 10,
    completed: 4,
    image: "/placeholder.svg",
    tags: ["Beginner", "SACCO", "Savings"],
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
    modules: 15,
    completed: 4,
    image: "/placeholder.svg",
    tags: ["Advanced", "NSE", "Trading"],
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

// Mock data for glossary terms - comprehensive financial dictionary
export const glossaryTerms = [
  {
    letter: "A",
    term: "Absolute Advantage",
    definition: "A country's ability to produce a good or service more efficient than others, using fewer resources."
  },
  {
    letter: "A",
    term: "Absolute Returns",
    definition: "Returns achieved over a period, not considering risk or comparable investments."
  },
  {
    letter: "A",
    term: "Accounting Profit",
    definition: "Revenue from sales minus explicit production costs."
  },
  {
    letter: "A",
    term: "Accounts Payable",
    definition: "Money a company owes suppliers for goods or services bought on credit."
  },
  {
    letter: "A",
    term: "Accounts Receivable",
    definition: "Money owed to a company by customers for goods or services sold on credit."
  },
  {
    letter: "A",
    term: "Accrual Accounting",
    definition: "Recording revenue and expenses when transactions occur, not when payments are made."
  },
  {
    letter: "A",
    term: "Accrued Liabilities",
    definition: "Expenses incurred but not yet paid by the end of an accounting period."
  },
  {
    letter: "A",
    term: "Active Investment Managers",
    definition: "Managers who aim to outperform by selecting securities expected to perform better than others."
  },
  {
    letter: "A",
    term: "Adverse Selection",
    definition: "Tendency for higher-risk individuals to seek insurance, increasing insured losses."
  },
  {
    letter: "A",
    term: "Alpha",
    definition: "Outperformance compared to a market benchmark."
  },
  {
    letter: "A",
    term: "Amortisation",
    definition: "Spreading the cost of intangible assets over their useful life."
  },
  {
    letter: "A",
    term: "Animal Welfare",
    definition: "The ability of an animal to cope with its living conditions."
  },
  {
    letter: "A",
    term: "Annual Percentage Rate (APR)",
    definition: "Yearly borrowing cost without compounding."
  },
  {
    letter: "A",
    term: "Annuity",
    definition: "An initial payment exchanged for fixed future payments."
  },
  {
    letter: "A",
    term: "Appraisal",
    definition: "Estimating an asset's value, such as real estate, based on assumptions."
  },
  {
    letter: "A",
    term: "Appreciation",
    definition: "A currency strengthening relative to others."
  },
  {
    letter: "A",
    term: "Ask Price",
    definition: "Price at which a dealer offers to sell an asset, often with a quantity limit. Also called offer price."
  },
  {
    letter: "A",
    term: "Asset",
    definition: "A resource with economic value expected to provide future benefits."
  },
  {
    letter: "A",
    term: "Asset Allocation",
    definition: "Determining the proportion of a portfolio held in different asset classes."
  },
  {
    letter: "A",
    term: "Asset-Backed Securities",
    definition: "Securities backed by a pool of assets like loans or receivables."
  },
  {
    letter: "A",
    term: "Assets Under Management (AUM)",
    definition: "Market value of a portfolio managed by an investment manager."
  },
  {
    letter: "A",
    term: "Automated Market Maker (AMM)",
    definition: "A program pricing assets for trading in decentralized exchanges."
  },
  {
    letter: "B",
    term: "Back Office",
    definition: "Administrative functions like accounting, HR, and operations supporting a firm."
  },
  {
    letter: "B",
    term: "Back-End Sales Loads",
    definition: "Fees paid when selling open-end mutual fund shares."
  },
  {
    letter: "B",
    term: "Balance of Payments",
    definition: "Record of transactions between a country's residents and the rest of the world."
  },
  {
    letter: "B",
    term: "Balance Sheet",
    definition: "A snapshot of a company's assets, liabilities, and equity at a specific time."
  },
  {
    letter: "B",
    term: "Banks",
    definition: "Institutions collecting deposits from savers and lending to borrowers."
  },
  {
    letter: "B",
    term: "Barriers to Entry",
    definition: "Obstacles like licenses or brand loyalty preventing market entry."
  },
  {
    letter: "B",
    term: "Basic Earning Power",
    definition: "Profit from operations compared to assets used to generate income."
  },
  {
    letter: "B",
    term: "Basis Point",
    definition: "A measure equal to 0.01% or 0.0001."
  },
  {
    letter: "B",
    term: "Benchmark",
    definition: "A comparison portfolio, e.g., S&P 500 Index."
  },
  {
    letter: "B",
    term: "Best Efforts Offering",
    definition: "A public offering where the investment bank acts as a broker without buying securities."
  },
  {
    letter: "B",
    term: "Best-in-Class Investment",
    definition: "Selecting companies meeting ESG criteria within their sector."
  },
  {
    letter: "B",
    term: "Beta",
    definition: "A measure of market or systematic risk."
  },
  {
    letter: "B",
    term: "Bias",
    definition: "Assumptions or stereotypes about others, which may be conscious or unconscious."
  },
  {
    letter: "B",
    term: "Bid Exchange Rate",
    definition: "Rate at which a bank buys foreign currency."
  },
  {
    letter: "B",
    term: "Bid Price",
    definition: "Price at which a dealer buys an asset, often with a quantity limit."
  },
  {
    letter: "B",
    term: "Block Brokers",
    definition: "Brokers assisting with trading large blocks of securities."
  },
  {
    letter: "B",
    term: "Blockchain",
    definition: "A decentralized record-keeping system maintained by independent computers."
  },
  {
    letter: "B",
    term: "Board of Directors",
    definition: "Group monitoring a company's activities on behalf of shareholders."
  },
  {
    letter: "B",
    term: "Bond",
    definition: "A loan from an investor to a borrower, typically with fixed interest payments."
  },
  {
    letter: "B",
    term: "Book Values",
    definition: "Balance sheet values of a company's assets, liabilities, and equity."
  },
  {
    letter: "B",
    term: "Bought Deal",
    definition: "Underwriter buys securities from the issuer to sell to investors."
  },
  {
    letter: "B",
    term: "Breakeven Point",
    definition: "Sales volume where revenue equals total costs, resulting in zero profit."
  },
  {
    letter: "B",
    term: "Brokerage Services",
    definition: "Trading services including order execution, investment advice, and research."
  },
  {
    letter: "B",
    term: "Brokered Markets",
    definition: "Markets where brokers arrange trades for unique assets like securities or real estate."
  },
  {
    letter: "B",
    term: "Brokers",
    definition: "Agents arranging trades for clients in exchange for a commission."
  },
  {
    letter: "B",
    term: "Business Cycles",
    definition: "Fluctuations in economy-wide activity."
  },
  {
    letter: "B",
    term: "Business Daily Africa Index",
    definition: "A Kenyan financial index tracking high-performing stocks."
  },
  {
    letter: "B",
    term: "Buy-Side Analysts",
    definition: "Analysts at institutional investors evaluating potential investments."
  },
  {
    letter: "B",
    term: "Buy-Side Firms",
    definition: "Institutional investors purchasing investment products from sell-side firms."
  },
  {
    letter: "B",
    term: "Buying on Margin",
    definition: "Using a margin loan to purchase securities."
  },
  {
    letter: "B",
    term: "Buyouts",
    definition: "Private equity strategy financing established companies for restructuring or ownership changes."
  },
  {
    letter: "C",
    term: "Call Market",
    definition: "Market where trades occur at specific times, usually once daily."
  },
  {
    letter: "C",
    term: "Call Option",
    definition: "Right, but not obligation, to buy an asset at a set price until expiration."
  },
  {
    letter: "C",
    term: "Call Risk",
    definition: "Risk that a bond issuer redeems a bond before maturity."
  },
  {
    letter: "C",
    term: "Callable Bond",
    definition: "A bond the issuer can redeem before maturity at a specified price."
  },
  {
    letter: "C",
    term: "Capital Account",
    definition: "Balance of payments component tracking capital transfers between domestic and foreign entities."
  },
  {
    letter: "C",
    term: "Capitalisation",
    definition: "Recording a cost as an asset due to its long-term economic benefits."
  },
  {
    letter: "C",
    term: "Capitalisation-Weighted Indices",
    definition: "Indices weighted by securities' market capitalization."
  },
  {
    letter: "C",
    term: "Capitalism",
    definition: "Economic system promoting private ownership and market allocation of resources."
  },
  {
    letter: "C",
    term: "Carried Interest",
    definition: "Incentive fee deducted by general partners before distributing profits."
  },
  {
    letter: "C",
    term: "Cash Flow Rights",
    definition: "Shareholders' rights to company distributions like dividends."
  },
  {
    letter: "C",
    term: "Chama",
    definition: "Kenyan informal group pooling resources for investment or welfare."
  },
  {
    letter: "C",
    term: "Churning",
    definition: "Excessive trading to generate commissions."
  },
  {
    letter: "C",
    term: "Circular Economy",
    definition: "Economic model focusing on reuse, recycling, and resource efficiency."
  },
  {
    letter: "C",
    term: "Clearing",
    definition: "Activities from trade arrangement to settlement."
  },
  {
    letter: "C",
    term: "Clearing Houses",
    definition: "Providers arranging final trade settlement."
  },
  {
    letter: "C",
    term: "Closed-End Funds",
    definition: "Investment vehicles with a fixed number of shares traded between investors."
  },
  {
    letter: "C",
    term: "Collateral",
    definition: "Assets pledged to secure a loan."
  },
  {
    letter: "C",
    term: "Commercial Real Estate",
    definition: "Income-generating properties like offices, retail, or hotels."
  },
  {
    letter: "C",
    term: "Commingled Account",
    definition: "Pooled capital from multiple investors managed jointly."
  },
  {
    letter: "C",
    term: "Commodities",
    definition: "Physical products like metals, energy, or agricultural goods."
  },
  {
    letter: "C",
    term: "Common Stock",
    definition: "Equity representing ownership in a company with voting rights."
  },
  {
    letter: "C",
    term: "Comparative Advantage",
    definition: "Producing a good or service more efficiently relative to others."
  },
  {
    letter: "C",
    term: "Complementary Products",
    definition: "Goods consumed together, e.g., printers and ink."
  },
  {
    letter: "C",
    term: "Compound Interest",
    definition: "Interest calculated on principal and accumulated interest."
  },
  {
    letter: "C",
    term: "Confirmation",
    definition: "Clearing activity verifying trade terms before settlement."
  },
  {
    letter: "C",
    term: "Conflict of Interest",
    definition: "When personal or employer interests conflict with client interests."
  },
  {
    letter: "C",
    term: "Consumer Price Index (CPI)",
    definition: "Measures price changes in a typical household's basket of goods."
  },
  {
    letter: "C",
    term: "Continuous Trading Market",
    definition: "Market where trades can occur anytime it's open."
  },
  {
    letter: "C",
    term: "Convertible Bond",
    definition: "A bond convertible into a set number of company shares."
  },
  {
    letter: "C",
    term: "Correlation",
    definition: "Measure of the relationship strength between two variables."
  },
  {
    letter: "C",
    term: "Correlation Coefficient",
    definition: "A number (-1 to +1) showing how two variables move together."
  },
  {
    letter: "C",
    term: "Corruption",
    definition: "Abuse of power for private gain."
  },
  {
    letter: "C",
    term: "Counterparty Risk",
    definition: "Risk that a contract party fails to meet obligations."
  },
  {
    letter: "C",
    term: "County Bonds",
    definition: "Bonds issued by Kenyan county governments for development."
  },
  {
    letter: "C",
    term: "Coupon Rate",
    definition: "Interest rate of a bond, multiplied by par value for annual interest."
  },
  {
    letter: "C",
    term: "Covenants",
    definition: "Issuer actions required or prohibited in a bond agreement."
  },
  {
    letter: "C",
    term: "Credit Default Swap (CDS)",
    definition: "Contract protecting against loss in debt security value."
  },
  {
    letter: "C",
    term: "Credit Rating",
    definition: "Assessment of a bond's credit quality based on issuer creditworthiness."
  },
  {
    letter: "C",
    term: "Credit Rating Agencies",
    definition: "Providers of opinions on bond and issuer credit quality."
  },
  {
    letter: "C",
    term: "Credit Risk",
    definition: "Risk of loss from a borrower's failure to make payments."
  },
  {
    letter: "C",
    term: "Credit Spread",
    definition: "Difference between a risky bond's yield and a government bond's yield."
  },
  {
    letter: "C",
    term: "Cross-Price Elasticity of Demand",
    definition: "Change in demand for one product due to another's price change."
  },
  {
    letter: "C",
    term: "Crossing Network",
    definition: "Electronic system matching buyers and sellers at exchange prices."
  },
  {
    letter: "C",
    term: "Crypto Wallet",
    definition: "Digital account for accessing and transacting cryptocurrency."
  },
  {
    letter: "C",
    term: "Cryptocurrency",
    definition: "Encrypted digital currency used as a medium of exchange."
  },
  {
    letter: "C",
    term: "Currency Risk",
    definition: "Risk from fluctuating exchange rates."
  },
  {
    letter: "C",
    term: "Currency Swap",
    definition: "Exchanging debt obligations in different currencies."
  },
  {
    letter: "C",
    term: "Current Account",
    definition: "Balance of payments component tracking consumption and investment flows."
  },
  {
    letter: "C",
    term: "Current Account Balance",
    definition: "Sum of goods, services, income, and transfer accounts."
  },
  {
    letter: "C",
    term: "Current Account Deficit",
    definition: "Negative current account balance."
  },
  {
    letter: "C",
    term: "Current Account Surplus",
    definition: "Positive current account balance."
  },
  {
    letter: "C",
    term: "Current Assets",
    definition: "Short-term assets convertible to cash within a year."
  },
  {
    letter: "C",
    term: "Current Liabilities",
    definition: "Debts repayable within a year."
  },
  {
    letter: "C",
    term: "Current Ratio",
    definition: "Current assets divided by current liabilities."
  },
  {
    letter: "C",
    term: "Current Yield",
    definition: "Annual coupon payment divided by bond's market price."
  },
  {
    letter: "C",
    term: "Custodians",
    definition: "Banks or firms holding assets for safekeeping."
  },
  {
    letter: "D",
    term: "Dark Pools",
    definition: "Trading venues not displaying client orders to others."
  },
  {
    letter: "D",
    term: "Data Vendors",
    definition: "Providers of historical and real-time market and company data."
  },
  {
    letter: "D",
    term: "Day Orders",
    definition: "Orders executable only on the submission day."
  },
  {
    letter: "D",
    term: "Dealers",
    definition: "Providers buying or selling securities to clients, providing liquidity."
  },
  {
    letter: "D",
    term: "Debt-to-Equity Ratio",
    definition: "Measure of financial leverage showing debt relative to equity."
  },
  {
    letter: "D",
    term: "Default",
    definition: "Failure of a bond issuer to make promised payments."
  },
  {
    letter: "D",
    term: "Deflation",
    definition: "Persistent decrease in prices across most goods and services."
  },
  {
    letter: "D",
    term: "Demand",
    definition: "Quantity of a product buyers are willing to purchase at a price."
  },
  {
    letter: "D",
    term: "Demand Curve",
    definition: "Shows quantity demanded at different prices."
  },
  {
    letter: "D",
    term: "Deposit-Taking Institutions",
    definition: "Institutions like banks accepting deposits."
  },
  {
    letter: "D",
    term: "Depositary Receipt",
    definition: "Security representing economic interest in a foreign company."
  },
  {
    letter: "D",
    term: "Depositories",
    definition: "Regulated firms holding and monitoring assets to prevent fraud."
  },
  {
    letter: "D",
    term: "Depreciation",
    definition: "Allocating an asset's cost over its useful life; currency weakening."
  },
  {
    letter: "D",
    term: "Depreciation Expense",
    definition: "Annual depreciation reported as an expense."
  },
  {
    letter: "D",
    term: "Derivatives",
    definition: "Contracts deriving value from an underlying asset or outcome."
  },
  {
    letter: "D",
    term: "Devaluation",
    definition: "Central bank's decision to reduce domestic currency value."
  },
  {
    letter: "D",
    term: "Direct Discrimination",
    definition: "Discrimination based on a personal characteristic."
  },
  {
    letter: "D",
    term: "Direct Finance",
    definition: "Providers directly claim assets or earnings from capital users."
  },
  {
    letter: "D",
    term: "Direct Investments",
    definition: "Purchasing securities or real assets like real estate or art."
  },
  {
    letter: "D",
    term: "Direct Listing",
    definition: "Raising capital outside the traditional IPO process."
  },
  {
    letter: "D",
    term: "Discount Rate",
    definition: "Rate used to calculate the present value of future cash flows."
  },
  {
    letter: "D",
    term: "Distressed",
    definition: "Private equity strategy buying debt of troubled companies."
  },
  {
    letter: "D",
    term: "Distribution",
    definition: "Set of values showing their frequency of occurrence."
  },
  {
    letter: "D",
    term: "Diversification",
    definition: "Combining assets to reduce portfolio risk."
  },
  {
    letter: "D",
    term: "Diversity",
    definition: "Range of human attributes, identities, and perspectives."
  },
  {
    letter: "D",
    term: "Dividend",
    definition: "Payment of corporate profits to shareholders."
  },
  {
    letter: "D",
    term: "Dividend Per Share",
    definition: "Cash dividend paid per share outstanding."
  },
  {
    letter: "D",
    term: "Dividend Yield",
    definition: "Expected annual dividend divided by stock price."
  },
  {
    letter: "D",
    term: "Downside Deviation",
    definition: "Measure of negative return dispersion."
  },
  {
    letter: "E",
    term: "Earnings Per Share (EPS)",
    definition: "Net income divided by shares outstanding."
  },
  {
    letter: "E",
    term: "Economic Growth",
    definition: "Percentage change in real GDP."
  },
  {
    letter: "E",
    term: "Economic Indicators",
    definition: "Measures providing insight into economic activity."
  },
  {
    letter: "E",
    term: "Economic Profit",
    definition: "Accounting profit minus implicit opportunity costs."
  },
  {
    letter: "E",
    term: "Economic Sanctions",
    definition: "Penalties reducing trade with a country."
  },
  {
    letter: "E",
    term: "Economics",
    definition: "Study of production, distribution, and consumption with scarce resources."
  },
  {
    letter: "E",
    term: "Economies of Scale",
    definition: "Cost savings from increased output without higher fixed costs."
  },
  {
    letter: "E",
    term: "Effective Annual Rate (EAR)",
    definition: "Annual growth rate including interest on interest."
  },
  {
    letter: "E",
    term: "Elasticity",
    definition: "How demand or supply changes with price, income, or other factors."
  },
  {
    letter: "E",
    term: "Emissions",
    definition: "Pollution discharged into the atmosphere."
  },
  {
    letter: "E",
    term: "Embargoes",
    definition: "Measures prohibiting trade with a country."
  },
  {
    letter: "E",
    term: "Endowment Funds",
    definition: "Long-term funds owned by non-profits."
  },
  {
    letter: "E",
    term: "Enterprise Risk Management (ERM)",
    definition: "Framework for integrated risk management."
  },
  {
    letter: "E",
    term: "Environmental, Social, and Governance (ESG) Factors",
    definition: "Factors considering environmental, social, and governance impacts."
  },
  {
    letter: "E",
    term: "ESG Investing",
    definition: "Incorporating ESG factors into investment decisions for long-term returns."
  },
  {
    letter: "E",
    term: "Equal-Weighted Indices",
    definition: "Indices assigning equal weight to each security."
  },
  {
    letter: "E",
    term: "Equilibrium Price",
    definition: "Price where quantity demanded equals quantity supplied."
  },
  {
    letter: "E",
    term: "Equity",
    definition: "Fairness in access and opportunity within an organization."
  },
  {
    letter: "E",
    term: "Equity (Market) Risk Premium (ERP)",
    definition: "Extra return expected from equities over risk-free assets."
  },
  {
    letter: "E",
    term: "Equity Multiplier Ratio",
    definition: "Total assets supported by one unit of equity."
  },
  {
    letter: "E",
    term: "Ethical and Faith-Based Investment",
    definition: "Investing based on moral or religious principles."
  },
  {
    letter: "E",
    term: "Ethical Dilemmas",
    definition: "Situations where values or rules conflict."
  },
  {
    letter: "E",
    term: "Ethical Standards",
    definition: "Principles guiding desired behaviors."
  },
  {
    letter: "E",
    term: "Ethics",
    definition: "Moral principles governing conduct."
  },
  {
    letter: "E",
    term: "Exchange Rate",
    definition: "Rate at which one currency exchanges for another."
  },
  {
    letter: "E",
    term: "Exchange-Traded Funds (ETFs)",
    definition: "Pooled investments tracking an index, traded like stocks."
  },
  {
    letter: "E",
    term: "Exercise Price",
    definition: "Price to trade an underlying in an options contract."
  },
  {
    letter: "E",
    term: "Experienced Investor",
    definition: "Investor with sufficient net worth and experience, per regulations."
  },
  {
    letter: "E",
    term: "Exports",
    definition: "Goods and services produced domestically and sold abroad."
  },
  {
    letter: "E",
    term: "Expenses",
    definition: "Costs incurred to earn revenues."
  },
  {
    letter: "F",
    term: "Fair Value",
    definition: "Amount an asset could be sold for in an arm's length transaction."
  },
  {
    letter: "F",
    term: "Family Office",
    definition: "Company managing financial affairs for families."
  },
  {
    letter: "F",
    term: "Financial Assets",
    definition: "Claims on other assets, like stocks or bonds."
  },
  {
    letter: "F",
    term: "Financial Capital",
    definition: "Money provided to finance needs."
  },
  {
    letter: "F",
    term: "Financial Institutions",
    definition: "Intermediaries collecting and investing money."
  },
  {
    letter: "F",
    term: "Financial Intermediaries",
    definition: "Entities channeling funds between savers and users."
  },
  {
    letter: "F",
    term: "Financial Markets",
    definition: "Places where securities are traded."
  },
  {
    letter: "F",
    term: "Financial Planners",
    definition: "Professionals helping clients set and achieve financial goals."
  },
  {
    letter: "F",
    term: "Financial Services Industry",
    definition: "Industry offering investment and financing services."
  },
  {
    letter: "F",
    term: "Fintech",
    definition: "Technology-driven innovation in financial services."
  },
  {
    letter: "F",
    term: "Fiscal Policy",
    definition: "Using taxes and spending to influence economic activity."
  },
  {
    letter: "F",
    term: "Fixed Costs",
    definition: "Costs not varying with output levels."
  },
  {
    letter: "F",
    term: "Fixed Exchange Rate System",
    definition: "Currency value tied to another currency or commodity."
  },
  {
    letter: "F",
    term: "Fixed-Rate Bonds",
    definition: "Bonds with a constant coupon rate."
  },
  {
    letter: "F",
    term: "Floating Exchange Rate System",
    definition: "Currency rates driven by supply and demand."
  },
  {
    letter: "F",
    term: "Floating-Rate Bonds",
    definition: "Bonds with coupon rates that change over time."
  },
  {
    letter: "F",
    term: "Foreign Direct Investments (FDIs)",
    definition: "Investments by foreign entities in domestic assets."
  },
  {
    letter: "F",
    term: "Foreign Exchange Market",
    definition: "Decentralized network for currency trading."
  },
  {
    letter: "F",
    term: "Forward Contract",
    definition: "Agreement to buy/sell an asset at a future date for a set price."
  },
  {
    letter: "F",
    term: "Forward Market",
    definition: "Market for trading currencies for future delivery."
  },
  {
    letter: "F",
    term: "Forward Rate",
    definition: "Exchange rate for forward market transactions."
  },
  {
    letter: "F",
    term: "Foundations",
    definition: "Grant-making entities funded by gifts and investment income."
  },
  {
    letter: "F",
    term: "Fraud",
    definition: "Intentional deception for financial gain."
  },
  {
    letter: "F",
    term: "Front Office",
    definition: "Client-facing activities generating revenue."
  },
  {
    letter: "F",
    term: "Front-End Sales Loads",
    definition: "Fees paid when purchasing mutual fund shares."
  },
  {
    letter: "F",
    term: "Front-Running",
    definition: "Trading ahead of a customer's order to benefit from price impact."
  },
  {
    letter: "F",
    term: "Full Replication",
    definition: "Index fund strategy investing in all benchmark securities."
  },
  {
    letter: "F",
    term: "Funds of Funds (FOF)",
    definition: "Investment vehicles investing in other funds."
  },
  {
    letter: "F",
    term: "Futures Contract",
    definition: "Agreement to deliver an asset at a future date for a set price."
  },
  {
    letter: "G",
    term: "Gas",
    definition: "Transaction fee in Ethereum blockchain."
  },
  {
    letter: "G",
    term: "GDP Per Capita",
    definition: "Gross domestic product divided by population."
  },
  {
    letter: "G",
    term: "General Partner (GP)",
    definition: "Partner managing investments with unlimited liability."
  },
  {
    letter: "G",
    term: "Geometric Average",
    definition: "Average compounded return per period."
  },
  {
    letter: "G",
    term: "Good-Until-Cancelled Orders",
    definition: "Orders executable until canceled."
  },
  {
    letter: "G",
    term: "Goodwill",
    definition: "Intangible asset from paying above fair value in acquisitions."
  },
  {
    letter: "G",
    term: "Green Bonds",
    definition: "Bonds funding environmentally beneficial projects."
  },
  {
    letter: "G",
    term: "Green Investment",
    definition: "Capital allocated to assets mitigating environmental challenges."
  },
  {
    letter: "G",
    term: "Greenhouse Gas (GHG)",
    definition: "Gases like CO2 warming the global climate."
  },
  {
    letter: "G",
    term: "Gross Domestic Product (GDP)",
    definition: "Total value of goods and services produced in an economy."
  },
  {
    letter: "G",
    term: "Gross Profit",
    definition: "Sales minus cost of sales."
  },
  {
    letter: "G",
    term: "Growth Equity",
    definition: "Private equity financing for companies needing growth capital."
  },
  {
    letter: "H",
    term: "Harassment",
    definition: "Unwanted conduct causing discomfort or distress."
  },
  {
    letter: "H",
    term: "Hash",
    definition: "Encrypted code used in blockchain transactions."
  },
  {
    letter: "H",
    term: "Hedge",
    definition: "Reducing risk from price fluctuations."
  },
  {
    letter: "H",
    term: "Hedge Funds",
    definition: "Private investment pools for select investors with lock-up periods."
  },
  {
    letter: "H",
    term: "Hidden Orders",
    definition: "Orders visible only to brokers until filled."
  },
  {
    letter: "H",
    term: "High-Net-Worth Investors",
    definition: "Individuals with significant investable assets."
  },
  {
    letter: "H",
    term: "High-Water Mark",
    definition: "Highest fund value, net of fees, for performance fee eligibility."
  },
  {
    letter: "H",
    term: "Histogram",
    definition: "Diagram showing frequency of data occurrences."
  },
  {
    letter: "H",
    term: "Historical Cost",
    definition: "Original cost of acquiring an asset."
  },
  {
    letter: "H",
    term: "Holding-Period Return",
    definition: "Return over a specific time, including income and capital gains."
  },
  {
    letter: "H",
    term: "Huduma Card",
    definition: "Kenyan smart card for accessing financial and public services."
  },
  {
    letter: "H",
    term: "Human Rights",
    definition: "Inherent rights like life, liberty, and freedom from discrimination."
  },
  {
    letter: "H",
    term: "Hurdle Rate",
    definition: "Minimum return required for a performance fee."
  },
  {
    letter: "H",
    term: "Hyperinflation",
    definition: "Rapid, extreme price increases disrupting purchasing."
  },
  {
    letter: "I",
    term: "Impact Investing",
    definition: "Investments aiming for social/environmental impact and financial return."
  },
  {
    letter: "I",
    term: "Imports",
    definition: "Goods and services brought into a country."
  },
  {
    letter: "I",
    term: "Income Effect",
    definition: "Demand change due to purchasing power shifts."
  },
  {
    letter: "I",
    term: "Income Elasticity of Demand",
    definition: "Demand change relative to income change."
  },
  {
    letter: "I",
    term: "Income Statement",
    definition: "Financial statement showing profit or loss over a period."
  },
  {
    letter: "I",
    term: "Index Fund",
    definition: "Portfolio tracking a specific benchmark index."
  },
  {
    letter: "I",
    term: "Index Rebalancing",
    definition: "Adjusting weights of securities in an index."
  },
  {
    letter: "I",
    term: "Index Reconstitution",
    definition: "Adding or removing securities from an index."
  },
  {
    letter: "I",
    term: "Indirect Discrimination",
    definition: "Conditions disadvantaging groups despite equal application."
  },
  {
    letter: "I",
    term: "Indirect Finance",
    definition: "Using intermediaries to channel funds without direct claims."
  },
  {
    letter: "I",
    term: "Indirect Investments",
    definition: "Investing in entities like mutual funds or ETFs."
  },
  {
    letter: "I",
    term: "Inferior Goods",
    definition: "Goods with decreased demand as income rises."
  },
  {
    letter: "I",
    term: "Inflation",
    definition: "Sustained rise in general price levels."
  },
  {
    letter: "I",
    term: "Inflation Risk",
    definition: "Risk from rising inflation reducing purchasing power."
  },
  {
    letter: "I",
    term: "Inflation-Linked Bonds",
    definition: "Bonds adjusting par value for inflation."
  },
  {
    letter: "I",
    term: "Information Ratio",
    definition: "Portfolio's mean active return divided by tracking error."
  },
  {
    letter: "I",
    term: "Initial Margin",
    definition: "Amount deposited when opening a margin transaction."
  },
  {
    letter: "I",
    term: "Initial Public Offering (IPO)",
    definition: "First public sale of a company's shares."
  },
  {
    letter: "I",
    term: "Insider Trading",
    definition: "Trading with material non-public information."
  },
  {
    letter: "I",
    term: "Insurance Companies",
    definition: "Institutions offsetting risks and investing premiums."
  },
  {
    letter: "I",
    term: "Intangible Assets",
    definition: "Non-physical assets like patents or trademarks."
  },
  {
    letter: "I",
    term: "Interest",
    definition: "Payment for borrowing money."
  },
  {
    letter: "I",
    term: "Interest Rate Risk",
    definition: "Risk of bond price decreases from rising interest rates."
  },
  {
    letter: "I",
    term: "Interest Rate Swap",
    definition: "Exchanging fixed-rate for floating-rate payments."
  },
  {
    letter: "I",
    term: "Internal Audit",
    definition: "Independent review of business processes and systems."
  },
  {
    letter: "I",
    term: "Internal Risk Limits",
    definition: "Limits reflecting an organization's risk tolerance."
  },
  {
    letter: "I",
    term: "International Trade",
    definition: "Exchange of goods, services, and capital across countries."
  },
  {
    letter: "I",
    term: "Inventories",
    definition: "Unsold production units held by a company."
  },
  {
    letter: "I",
    term: "Investment Banks",
    definition: "Intermediaries assisting with capital raising and advisory services."
  },
  {
    letter: "I",
    term: "Investment Companies",
    definition: "Entities holding investments for shareholders or partners."
  },
  {
    letter: "I",
    term: "Investment Industry",
    definition: "Sector aiding savers and spenders in financial markets."
  },
  {
    letter: "I",
    term: "Investment Managers",
    definition: "Professionals managing client securities and assets."
  },
  {
    letter: "I",
    term: "Investment Policy Statement (IPS)",
    definition: "Document outlining client investment goals and constraints."
  },
  {
    letter: "I",
    term: "Investment Risk",
    definition: "Risk from fluctuating investment values."
  },
  {
    letter: "I",
    term: "Investment Vehicles",
    definition: "Assets expected to generate returns or cash flows."
  },
  {
    letter: "I",
    term: "Investment-Grade Bonds",
    definition: "Bonds rated BBB– or higher by rating agencies."
  },
  {
    letter: "I",
    term: "Issuers",
    definition: "Entities like companies or governments selling securities."
  },
  {
    letter: "J",
    term: "J Curve",
    definition: "Graph showing negative early cash flows turning positive later."
  },
  {
    letter: "K",
    term: "KCB Simba Points",
    definition: "Kenyan bank loyalty program convertible to value."
  },
  {
    letter: "K",
    term: "Keepers",
    definition: "Parties monitoring collateralized smart contract positions."
  },
  {
    letter: "K",
    term: "Key Risk Measures",
    definition: "Indicators warning of rising risk levels."
  },
  {
    letter: "L",
    term: "Lagging Indicators",
    definition: "Signals of economic change after output shifts."
  },
  {
    letter: "L",
    term: "Law of Demand",
    definition: "As price rises, quantity demanded decreases."
  },
  {
    letter: "L",
    term: "Law of Diminishing Returns",
    definition: "Output gains decrease with additional variable inputs."
  },
  {
    letter: "L",
    term: "Law of Supply",
    definition: "As price rises, quantity supplied increases."
  },
  {
    letter: "L",
    term: "Leading Indicators",
    definition: "Signals predicting future economic changes."
  },
  {
    letter: "L",
    term: "Legal Risk",
    definition: "Risk of lawsuits for contract breaches or violations."
  },
  {
    letter: "L",
    term: "Leverage Ratio",
    definition: "Ratio of a position's value to its equity."
  },
  {
    letter: "L",
    term: "Leveraged Buyouts",
    definition: "Buyouts using high debt relative to equity."
  },
  {
    letter: "L",
    term: "Lima na M-Pesa",
    definition: "Kenyan mobile payment solution for digital transactions."
  },
  {
    letter: "L",
    term: "Limited Liability",
    definition: "Liability capped at an investor's initial contribution."
  },
  {
    letter: "L",
    term: "Limited Partners (LPs)",
    definition: "Investors contributing capital with limited liability."
  },
  {
    letter: "L",
    term: "Liquidity Risk",
    definition: "Risk of inability to trade an asset without price concessions."
  },
  {
    letter: "L",
    term: "Logbook Loan",
    definition: "Loan secured by a vehicle's logbook in Kenya."
  },
  {
    letter: "L",
    term: "Long Positions",
    definition: "Owning assets that gain value when prices rise."
  },
  {
    letter: "L",
    term: "Long-Term Debt",
    definition: "Loans repayable over more than one year."
  },
  {
    letter: "L",
    term: "Loyalty",
    definition: "Expectation that employees prioritize employer interests."
  },
  {
    letter: "L",
    term: "Luxury Product",
    definition: "Product with demand increasing as price rises."
  },
  {
    letter: "M",
    term: "Macroeconomics",
    definition: "Study of the economy as a whole."
  },
  {
    letter: "M",
    term: "Maintenance Margin",
    definition: "Minimum equity required in a margin account."
  },
  {
    letter: "M",
    term: "Managed Account",
    definition: "Portfolio managed for an investor by a professional."
  },
  {
    letter: "M",
    term: "Managed Floating Exchange Rate System",
    definition: "Floating rates with central bank stabilization."
  },
  {
    letter: "M",
    term: "Management Fees",
    definition: "Fees paid to general partners for managing investments."
  },
  {
    letter: "M",
    term: "Marginal Cost",
    definition: "Cost of producing one additional unit."
  },
  {
    letter: "M",
    term: "Marginal Revenue",
    definition: "Revenue from selling one additional unit."
  },
  {
    letter: "M",
    term: "Market Bid–Ask Spread",
    definition: "Difference between best bid and offer prices."
  },
  {
    letter: "M",
    term: "Market Equilibrium",
    definition: "Price where quantity demanded equals supplied."
  },
  {
    letter: "M",
    term: "Market Manipulation",
    definition: "Actions to move stock prices for short-term profit."
  },
  {
    letter: "M",
    term: "Market Order",
    definition: "Instruction to trade at the best available price."
  },
  {
    letter: "M",
    term: "Market Risk",
    definition: "Risk from market condition changes affecting prices."
  },
  {
    letter: "M",
    term: "Marking to Market",
    definition: "Settling profits/losses based on current market prices."
  },
  {
    letter: "M",
    term: "Maturity Date",
    definition: "Date when a borrower repays the borrowed amount."
  },
  {
    letter: "M",
    term: "Median",
    definition: "Middle value in a sorted data set."
  },
  {
    letter: "M",
    term: "Microeconomics",
    definition: "Study of individual and company resource allocation."
  },
  {
    letter: "M",
    term: "Mode",
    definition: "Most frequent value in a data set."
  },
  {
    letter: "M",
    term: "Model Risk",
    definition: "Risk from inappropriate model assumptions or data errors."
  },
  {
    letter: "M",
    term: "Monetary Policy",
    definition: "Central bank actions affecting money supply or credit."
  },
  {
    letter: "M",
    term: "Money Laundering",
    definition: "Transferring illegal funds through financial services to appear legal."
  },
  {
    letter: "M",
    term: "Money Market Funds",
    definition: "Mutual funds viewed as interest-paying accounts."
  },
  {
    letter: "M",
    term: "Monopolistic Competition",
    definition: "Market with many sellers offering differentiated products."
  },
  {
    letter: "M",
    term: "Moral Hazard",
    definition: "Increased risk-taking after purchasing insurance."
  },
  {
    letter: "M",
    term: "Multiplier Effect",
    definition: "Spending changes causing larger GDP shifts."
  },
  {
    letter: "M",
    term: "M-Pesa Global",
    definition: "Kenyan service for international money transfers."
  },
  {
    letter: "M",
    term: "M-Pesa Statement",
    definition: "Record of mobile money transactions for tracking."
  },
  {
    letter: "N",
    term: "Net Asset Value (NAV)",
    definition: "Fund's total value minus liabilities, divided by shares."
  },
  {
    letter: "N",
    term: "Net Book Value",
    definition: "Asset's gross value minus accumulated depreciation."
  },
  {
    letter: "N",
    term: "Net Exports",
    definition: "Exports minus imports, also called trade balance."
  },
  {
    letter: "N",
    term: "Net Income",
    definition: "Revenue minus expenses, available for shareholders."
  },
  {
    letter: "N",
    term: "Net Present Value (NPV)",
    definition: "Present value of cash flows minus investment cost."
  },
  {
    letter: "N",
    term: "Net Profit Margin",
    definition: "Percentage of revenue remaining after costs."
  },
  {
    letter: "N",
    term: "No-Load Funds",
    definition: "Mutual funds without deposit or redemption fees."
  },
  {
    letter: "N",
    term: "Nominal GDP",
    definition: "GDP using current market values."
  },
  {
    letter: "N",
    term: "Non-Current Assets",
    definition: "Assets used over years to generate income."
  },
  {
    letter: "N",
    term: "Non-Investment-Grade Bonds",
    definition: "Bonds rated BB+ or lower, also called junk bonds."
  },
  {
    letter: "N",
    term: "Non-Tariff Barriers",
    definition: "Measures like licensing making foreign competition harder."
  },
  {
    letter: "N",
    term: "Normal Distribution",
    definition: "Symmetrical distribution with equal mean, median, and mode."
  },
  {
    letter: "N",
    term: "Normal Goods",
    definition: "Goods with demand increasing as income rises."
  },
  {
    letter: "O",
    term: "Offer Exchange Rate",
    definition: "Rate at which a bank sells foreign currency."
  },
  {
    letter: "O",
    term: "Oligopoly",
    definition: "Market dominated by a few large companies."
  },
  {
    letter: "O",
    term: "Open Market Operations",
    definition: "Central bank buying/selling government bonds."
  },
  {
    letter: "O",
    term: "Open-End Mutual Funds",
    definition: "Funds issuing/redeeming shares on demand."
  },
  {
    letter: "O",
    term: "Operating Income",
    definition: "Income from business activities before financing and taxes."
  },
  {
    letter: "O",
    term: "Operating Profit Margin",
    definition: "Operating income divided by revenue."
  },
  {
    letter: "O",
    term: "Operational Risk",
    definition: "Risk from inadequate systems, policies, or external events."
  },
  {
    letter: "O",
    term: "Opportunity Cost",
    definition: "Value of the best alternative forgone."
  },
  {
    letter: "O",
    term: "Option Contract",
    definition: "Agreement giving the right to trade an underlying."
  },
  {
    letter: "O",
    term: "Option Premium",
    definition: "Amount paid by option buyer to seller for risk."
  },
  {
    letter: "O",
    term: "Oracle",
    definition: "External data used in blockchain smart contracts."
  },
  {
    letter: "O",
    term: "Order-Driven Markets",
    definition: "Markets matching buy and sell orders using rules."
  },
  {
    letter: "O",
    term: "Orders",
    definition: "Instructions specifying what and how to trade."
  },
  {
    letter: "O",
    term: "Outliers",
    definition: "Unusually high or low values in a data set."
  },
  {
    letter: "O",
    term: "Over-the-Counter (OTC) Markets",
    definition: "Markets where investors trade with dealers."
  },
  {
    letter: "O",
    term: "Own Price Elasticity of Demand",
    definition: "Demand change due to a product's price change."
  },
  {
    letter: "P",
    term: "Par Value",
    definition: "Face value of a security, used for coupon calculations."
  },
  {
    letter: "P",
    term: "Passive Investment Managers",
    definition: "Managers aiming to match benchmark returns."
  },
  {
    letter: "P",
    term: "Payments in Lieu of Dividends",
    definition: "Payments to security lenders for dividends on borrowed stock."
  },
  {
    letter: "P",
    term: "Payments in Lieu of Interest",
    definition: "Payments to lenders for interest on borrowed debt."
  },
  {
    letter: "P",
    term: "Payout Policies",
    definition: "Rules on using long-term funds for current spending."
  },
  {
    letter: "P",
    term: "Pension Plans",
    definition: "Portfolios for retirees' benefit."
  },
  {
    letter: "P",
    term: "Perfectly Competitive Market",
    definition: "Market with high competition and uniform goods."
  },
  {
    letter: "P",
    term: "Performance Attribution",
    definition: "Identifying sources of a fund manager's returns."
  },
  {
    letter: "P",
    term: "Performance Bond",
    definition: "Guarantee ensuring contract obligation fulfillment."
  },
  {
    letter: "P",
    term: "Performance Measurement",
    definition: "Calculating investment performance and reward-to-risk ratios."
  },
  {
    letter: "P",
    term: "Physical Capital",
    definition: "Tangible production assets like equipment or buildings."
  },
  {
    letter: "P",
    term: "Physical Climate-Related Risks",
    definition: "Risks from extreme weather or climate shifts."
  },
  {
    letter: "P",
    term: "Political Risk",
    definition: "Risk from policy changes due to political shifts."
  },
  {
    letter: "P",
    term: "Pooled Investment Vehicles",
    definition: "Funds pooling investor money for management."
  },
  {
    letter: "P",
    term: "Pooled Investments",
    definition: "Vehicles where investors combine funds, like mutual funds."
  },
  {
    letter: "P",
    term: "Portfolio",
    definition: "Group of assets in which savings are invested."
  },
  {
    letter: "P",
    term: "Position",
    definition: "Quantity of an asset or security owned or owed."
  },
  {
    letter: "P",
    term: "Preferred Stock",
    definition: "Equity with priority over common stock for dividends."
  },
  {
    letter: "P",
    term: "Price-to-Book Ratio (P/B)",
    definition: "Share price divided by book value per share."
  },
  {
    letter: "P",
    term: "Price-to-Earnings Ratio (P/E)",
    definition: "Share price divided by earnings per share."
  },
  {
    letter: "P",
    term: "Price-Weighted Index",
    definition: "Index weighted by security prices."
  },
  {
    letter: "P",
    term: "Primary Dealers",
    definition: "Dealers trading with central banks for monetary policy."
  },
  {
    letter: "P",
    term: "Primary Markets",
    definition: "Markets where issuers sell securities to investors."
  },
  {
    letter: "P",
    term: "Prime Brokerage",
    definition: "Services including brokerage and financing for clients."
  },
  {
    letter: "P",
    term: "Private Equity",
    definition: "Investing in non-publicly listed companies."
  },
  {
    letter: "P",
    term: "Private Equity Partnership",
    definition: "Partnerships with general and limited partners for private equity."
  },
  {
    letter: "P",
    term: "Private Key",
    definition: "Password for accessing a crypto wallet."
  },
  {
    letter: "P",
    term: "Private Placement",
    definition: "Selling securities to a small group of qualified investors."
  },
  {
    letter: "P",
    term: "Producer Price Index (PPI)",
    definition: "Measures price changes for domestic producers."
  },
  {
    letter: "P",
    term: "Product Liability",
    definition: "Legal responsibility for defective goods."
  },
  {
    letter: "P",
    term: "Productivity Gains",
    definition: "Increases in GDP per unit of labor."
  },
  {
    letter: "P",
    term: "Professional Standards",
    definition: "Guidelines for ethical professional behavior."
  },
  {
    letter: "P",
    term: "Proof of Stake",
    definition: "Blockchain validation with consensus from validators."
  },
  {
    letter: "P",
    term: "Proof of Work (POW)",
    definition: "Confirmation of blockchain transactions."
  },
  {
    letter: "P",
    term: "Prospectus",
    definition: "Document detailing an investment vehicle's policies and performance."
  },
  {
    letter: "P",
    term: "Purchase Fees",
    definition: "Fees for buying mutual fund shares, replacing sales loads."
  },
  {
    letter: "P",
    term: "Purchasing Power Parity",
    definition: "Theory that goods cost the same across countries after exchange rates."
  },
  {
    letter: "P",
    term: "Pure Monopoly",
    definition: "Market with no competition."
  },
  {
    letter: "P",
    term: "Put Option",
    definition: "Right to sell an underlying at a set price until expiration."
  },
  {
    letter: "P",
    term: "Putable Bond",
    definition: "Bond allowing holders to sell back to the issuer before maturity."
  },
  {
    letter: "Q",
    term: "Quick Ratio",
    definition: "Ability to meet liabilities with liquid assets."
  },
  {
    letter: "Q",
    term: "Quotas",
    definition: "Limits on the quantity of imported goods."
  },
  {
    letter: "R",
    term: "Range",
    definition: "Difference between highest and lowest data values."
  },
  {
    letter: "R",
    term: "Real Assets",
    definition: "Physical assets like land, buildings, or commodities."
  },
  {
    letter: "R",
    term: "Real Estate",
    definition: "Land and buildings as an investment."
  },
  {
    letter: "R",
    term: "Real Estate Equity Funds",
    definition: "Funds holding commercial property investments."
  },
  {
    letter: "R",
    term: "Real Estate Investment Trusts (REITs)",
    definition: "Public companies owning income-producing real estate."
  },
  {
    letter: "R",
    term: "Real Estate Limited Partnerships",
    definition: "Partnerships specializing in real estate investments."
  },
  {
    letter: "R",
    term: "Real GDP",
    definition: "GDP adjusted for price changes."
  },
  {
    letter: "R",
    term: "Rebalancing",
    definition: "Adjusting portfolio or index asset weights."
  },
  {
    letter: "R",
    term: "Recession",
    definition: "Period of negative GDP growth or significant economic decline."
  },
  {
    letter: "R",
    term: "Reference Rate",
    definition: "Benchmark rate for setting floating-rate bond coupons."
  },
  {
    letter: "R",
    term: "Reinvestment Risk",
    definition: "Risk of reinvesting bond payments at lower rates."
  },
  {
    letter: "R",
    term: "Relative Returns",
    definition: "Portfolio returns compared to a benchmark."
  },
  {
    letter: "R",
    term: "Reserve Currency",
    definition: "Currency held in large amounts by governments for reserves."
  },
  {
    letter: "R",
    term: "Reserve Requirement",
    definition: "Bank reserves proportional to deposits."
  },
  {
    letter: "R",
    term: "Residual Claimants",
    definition: "Shareholders with last claim in liquidation."
  },
  {
    letter: "R",
    term: "Responsible Investment",
    definition: "Incorporating ESG factors into investment and ownership."
  },
  {
    letter: "R",
    term: "Retained Earnings",
    definition: "Net income kept by a company, not distributed as dividends."
  },
  {
    letter: "R",
    term: "Return on Assets (ROA)",
    definition: "Net income per unit of total assets."
  },
  {
    letter: "R",
    term: "Return on Equity (ROE)",
    definition: "Net income divided by average shareholders' equity."
  },
  {
    letter: "R",
    term: "Revenues",
    definition: "Amount expected from delivering goods or services."
  },
  {
    letter: "R",
    term: "Reward-to-Risk Ratio",
    definition: "Portfolio return divided by a risk measure."
  },
  {
    letter: "R",
    term: "Rights Offering",
    definition: "Allowing shareholders to buy new shares at a fixed price."
  },
  {
    letter: "R",
    term: "Risk",
    definition: "Uncertainty affecting outcomes."
  },
  {
    letter: "R",
    term: "Risk Appetite",
    definition: "Willingness to take on risk."
  },
  {
    letter: "R",
    term: "Risk Budgeting",
    definition: "Allocating risk across business units or portfolios."
  },
  {
    letter: "R",
    term: "Risk Management",
    definition: "Identifying and managing risks to reduce adverse events."
  },
  {
    letter: "R",
    term: "Risk Tolerance",
    definition: "Level of risk an organization can accept."
  },
  {
    letter: "R",
    term: "Rogue Trading",
    definition: "Unauthorized trades bypassing controls, risking losses."
  },
  {
    letter: "S",
    term: "SACCO Dividends",
    definition: "Profits shared among Kenyan SACCO members."
  },
  {
    letter: "S",
    term: "Safaricom M-Akiba",
    definition: "Kenyan mobile platform for retail government bonds."
  },
  {
    letter: "S",
    term: "Sampling Replication",
    definition: "Index fund strategy investing in a sample of benchmark securities."
  },
  {
    letter: "S",
    term: "Seasoned Equity Offering",
    definition: "Issuing additional shares after an IPO."
  },
  {
    letter: "S",
    term: "Secondaries",
    definition: "Buying/selling existing private equity investments."
  },
  {
    letter: "S",
    term: "Securities",
    definition: "Tradable financial assets like stocks or bonds."
  },
  {
    letter: "S",
    term: "Securitisation",
    definition: "Creating securities backed by a pool of assets."
  },
  {
    letter: "S",
    term: "Security Lenders",
    definition: "Investors lending securities to short sellers."
  },
  {
    letter: "S",
    term: "Security Lending Agreements",
    definition: "Agreements for paying dividends/interest to security lenders."
  },
  {
    letter: "S",
    term: "Security Market Index",
    definition: "Group of securities representing a market or segment."
  },
  {
    letter: "S",
    term: "Sell-Side Analysts",
    definition: "Analysts at investment banks preparing reports for investors."
  },
  {
    letter: "S",
    term: "Sell-Side Firms",
    definition: "Investment banks or brokers providing investment products."
  },
  {
    letter: "S",
    term: "Seniority Ranking",
    definition: "Priority of claims in liquidation or dividend payments."
  },
  {
    letter: "S",
    term: "Settlement",
    definition: "Final exchange of cash for securities after a trade."
  },
  {
    letter: "S",
    term: "Settlement Risk",
    definition: "Risk that one party fails to complete a trade."
  },
  {
    letter: "S",
    term: "Share Repurchase",
    definition: "Company buying back its own shares, reducing shares outstanding."
  },
  {
    letter: "S",
    term: "Shareholder Engagement",
    definition: "Dialogue with companies to seek specific changes."
  },
  {
    letter: "S",
    term: "Shareholders",
    definition: "Owners of a company's shares."
  },
  {
    letter: "S",
    term: "Sharpe Ratio",
    definition: "Excess portfolio return divided by standard deviation."
  },
  {
    letter: "S",
    term: "Shelf Registration",
    definition: "Selling securities gradually over time."
  },
  {
    letter: "S",
    term: "Short Positions",
    definition: "Selling borrowed assets, profiting when prices fall."
  },
  {
    letter: "S",
    term: "Simple Interest Rate",
    definition: "Cost or return per period on original principal."
  },
  {
    letter: "S",
    term: "Skewed",
    definition: "Distribution with values leaning to one side of the mean."
  },
  {
    letter: "S",
    term: "Smart Contract",
    definition: "Automated blockchain protocol for transactions."
  },
  {
    letter: "S",
    term: "Social Investment",
    definition: "Capital allocated to address social challenges."
  },
  {
    letter: "S",
    term: "Socially Responsible Investment (SRI)",
    definition: "Investing based on social and environmental criteria."
  },
  {
    letter: "S",
    term: "Sovereign Risk",
    definition: "Risk of a government defaulting on debt."
  },
  {
    letter: "S",
    term: "Sovereign Wealth Funds",
    definition: "Government funds investing surpluses for future generations."
  },
  {
    letter: "S",
    term: "Specific Risk",
    definition: "Risk unique to a company or security."
  },
  {
    letter: "S",
    term: "Spinoff",
    definition: "Creating a new entity with shares distributed to shareholders."
  },
  {
    letter: "S",
    term: "Sponsor",
    definition: "Organizer of a pooled investment vehicle."
  },
  {
    letter: "S",
    term: "Spot Market",
    definition: "Market for immediate currency trading."
  },
  {
    letter: "S",
    term: "Spot Rate",
    definition: "Exchange rate for spot market transactions."
  },
  {
    letter: "S",
    term: "Stablecoin",
    definition: "Cryptocurrency pegged to another asset."
  },
  {
    letter: "S",
    term: "Stagflation",
    definition: "High inflation with high unemployment and slow growth."
  },
  {
    letter: "S",
    term: "Standard Deviation",
    definition: "Measure of data variability around the mean."
  },
  {
    letter: "S",
    term: "Statement of Cash Flows",
    definition: "Shows sources and uses of cash over a period."
  },
  {
    letter: "S",
    term: "Stawi Loan",
    definition: "Kenyan digital loan for small traders."
  },
  {
    letter: "S",
    term: "Stewardship",
    definition: "Acting as a responsible long-term asset owner."
  },
  {
    letter: "S",
    term: "Stock Dividend",
    definition: "Additional shares distributed instead of cash."
  },
  {
    letter: "S",
    term: "Stock Split",
    definition: "Increasing shares outstanding, reducing share price."
  },
  {
    letter: "S",
    term: "Stop Order",
    definition: "Order converting to market order at a specified price."
  },
  {
    letter: "S",
    term: "Stop Price",
    definition: "Price triggering a stop order's conversion to a market order."
  },
  {
    letter: "S",
    term: "Strategic Asset Allocation",
    definition: "Long-term asset mix to meet objectives."
  },
  {
    letter: "S",
    term: "Substitute Product",
    definition: "Product that can replace another."
  },
  {
    letter: "S",
    term: "Supply",
    definition: "Quantity sellers are willing to offer at a price."
  },
  {
    letter: "S",
    term: "Supply Curve",
    definition: "Shows quantity supplied at different prices."
  },
  {
    letter: "S",
    term: "Sustainable Development Goals (SDGs)",
    definition: "UN goals addressing global challenges like poverty and climate change."
  },
  {
    letter: "S",
    term: "Sustainable Investment",
    definition: "Selecting assets minimizing resource depletion."
  },
  {
    letter: "S",
    term: "Swaps",
    definition: "Exchanging cash flows or instruments for mutual benefit."
  },
  {
    letter: "S",
    term: "Systemic Failure",
    definition: "Collapse of the financial system, including credit and markets."
  },
  {
    letter: "S",
    term: "Systematic Risk",
    definition: "Risk from economic conditions affecting all investments."
  },
  {
    letter: "T",
    term: "Tactical Asset Allocation",
    definition: "Deviating from strategic allocation for short-term gains."
  },
  {
    letter: "T",
    term: "Tariffs",
    definition: "Taxes on imported goods to raise revenue or create barriers."
  },
  {
    letter: "T",
    term: "Tax Haven",
    definition: "Country with low or no taxes facilitating tax avoidance."
  },
  {
    letter: "T",
    term: "Tax-Advantaged Accounts",
    definition: "Accounts avoiding taxes on investment gains with restrictions."
  },
  {
    letter: "T",
    term: "Thematic Investment",
    definition: "Investing in sustainability themes like clean-tech."
  },
  {
    letter: "T",
    term: "Time-Weighted Rate of Return",
    definition: "Performance measure accounting for cash flow timing."
  },
  {
    letter: "T",
    term: "Total Asset Turnover",
    definition: "Revenues generated per unit of assets."
  },
  {
    letter: "T",
    term: "Total Return",
    definition: "Return including income, dividends, and capital gains/losses."
  },
  {
    letter: "T",
    term: "Total Return Swap",
    definition: "Exchanging an asset's return for a fixed rate."
  },
  {
    letter: "T",
    term: "Trade Barriers",
    definition: "Government restrictions on free trade."
  },
  {
    letter: "T",
    term: "Trade Deficits",
    definition: "When imports exceed exports."
  },
  {
    letter: "T",
    term: "Trade Surplus",
    definition: "When exports exceed imports."
  },
  {
    letter: "T",
    term: "Tracking Error",
    definition: "Standard deviation of portfolio returns versus benchmark."
  },
  {
    letter: "T",
    term: "Transaction Costs",
    definition: "Costs of trading, including commissions and bid-ask spreads."
  },
  {
    letter: "T",
    term: "Transfer Agent",
    definition: "Entity maintaining a registry of security ownership."
  },
  {
    letter: "T",
    term: "Transition Risk",
    definition: "Risks from shifts in climate or energy policies."
  },
  {
    letter: "T",
    term: "Treasury Mobile Direct (TMD)",
    definition: "Kenyan platform for retail government securities."
  },
  {
    letter: "T",
    term: "Treynor Ratio",
    definition: "Excess portfolio return divided by beta."
  },
  {
    letter: "T",
    term: "Triple Bottom Line (TBL)",
    definition: "Framework considering social, environmental, and financial impacts."
  },
  {
    letter: "U",
    term: "Underlying",
    definition: "Asset or outcome determining a derivative's value."
  },
  {
    letter: "U",
    term: "Unit Trust Funds (UTFs)",
    definition: "Pooled investment vehicles regulated in Kenya."
  },
  {
    letter: "U",
    term: "Uwezo Fund",
    definition: "Kenyan fund providing credit to youth, women, and disabled persons."
  },
  {
    letter: "V",
    term: "Value at Risk (VaR)",
    definition: "Estimated minimum loss for a period at a probability level."
  },
  {
    letter: "V",
    term: "Variable Costs",
    definition: "Costs varying with output levels."
  },
  {
    letter: "V",
    term: "Variance",
    definition: "Measure of data dispersion, standard deviation squared."
  },
  {
    letter: "V",
    term: "Venture Capital",
    definition: "Financing startups or business ideas."
  },
  {
    letter: "V",
    term: "Voting Rights",
    definition: "Shareholders' rights to vote on company matters."
  },
  {
    letter: "W",
    term: "Warrant",
    definition: "Security allowing purchase of shares at a set price."
  },
  {
    letter: "W",
    term: "Wrap Account",
    definition: "Account bundling investment services into a flat fee."
  },
  {
    letter: "Y",
    term: "Yield Curve",
    definition: "Graphical term structure of interest rates."
  },
  {
    letter: "Y",
    term: "Yield to Maturity (YTM)",
    definition: "Rate equating a bond's cash flows to its market price."
  },
  {
    letter: "Y",
    term: "Youth Fund",
    definition: "Kenyan initiative supporting youth enterprises."
  },
  {
    letter: "Z",
    term: "Zero-Coupon Bonds",
    definition: "Bonds paying only par value at maturity, no periodic interest."
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

// Streaks data
export const streaksData = {
  currentStreak: 7,
  longestStreak: 21,
  thisWeek: 18,
  completedChallenges: 3,
  dailyGoal: 3,
  weeklyPoints: [3, 2, 3, 1, 0, 3, 2],
  upcomingChallenges: [
    {
      id: "1",
      title: "SACCO Week Champion",
      description: "Complete 3 daily questions for 7 consecutive days focusing on SACCO topics",
      progress: 4,
      total: 7,
      reward: "SACCO Expert Badge",
      deadline: "2025-06-08"
    },
    {
      id: "2",
      title: "NSE Trading Master",
      description: "Answer 20 NSE-related questions correctly this month",
      progress: 12,
      total: 20,
      reward: "Trading Pro Badge",
      deadline: "2025-06-30"
    }
  ]
};

// Week days for the chart
export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
