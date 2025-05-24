import { learningPaths, streaksData, weekDays } from "@/components/learning/mockData";

export const glossaryTerms = [
  // Basic Finance & Economics Terms
  {
    letter: "A",
    term: "Absolute advantage",
    definition: "When a country is more efficient in producing a good or a service than other countries—that is, it needs less resources to produce the good or service."
  },
  {
    letter: "A",
    term: "Absolute returns",
    definition: "The returns achieved over a certain time period. Absolute returns do not consider the risk of the investment or the returns achieved by similar investments."
  },
  {
    letter: "A",
    term: "Accounting profit",
    definition: "Difference between the revenue generated from selling products and services and the explicit costs of producing them."
  },
  {
    letter: "A",
    term: "Accounts payable",
    definition: "Money owed by a company to suppliers that have extended the company credit."
  },
  {
    letter: "A",
    term: "Accounts receivable",
    definition: "Money owed to a company by customers who purchase on credit."
  },
  {
    letter: "A",
    term: "Accrual accounting",
    definition: "A method of financial accounting where revenue or expenses are recorded when a transaction occurs versus when payment is received or made."
  },
  {
    letter: "A",
    term: "Accrued liabilities",
    definition: "Liabilities related to expenses that have been incurred but not yet paid as of the end of an accounting period."
  },
  {
    letter: "A",
    term: "Alpha",
    definition: "Outperformance relative to a relevant market benchmark."
  },
  {
    letter: "A",
    term: "Amortisation",
    definition: "The process of expensing the costs of intangible assets over their useful lives."
  },
  {
    letter: "A",
    term: "Animal welfare",
    definition: "How an animal copes with the conditions in which it lives."
  },
  {
    letter: "A",
    term: "Annuity",
    definition: "The exchange of an initial amount for a fixed number of future payments of a certain amount."
  },
  {
    letter: "A",
    term: "Appreciation",
    definition: "A situation in which a currency is getting stronger relative to other currencies."
  },
  {
    letter: "A",
    term: "Asset class",
    definition: "A broad grouping of similar types of investments, such as shares, bonds, real estate, and commodities."
  },
  {
    letter: "B",
    term: "Balance of payments",
    definition: "Record that tracks transactions between residents of one country and residents of the rest of the world over a period of time, usually a year."
  },
  {
    letter: "B",
    term: "Balance sheet",
    definition: "A statement of the company's financial position at a specified point in time; essentially, it shows the company's assets, liabilities or debt, and owner-supplied capital or equity."
  },
  {
    letter: "B",
    term: "Barriers to entry",
    definition: "Obstacles, such as licences, brand loyalty, or control of natural resources, that prevent competitors from entering the market."
  },
  {
    letter: "B",
    term: "Basic earning power",
    definition: "A measure that compares the profit generated from operations with the assets used to generate that income."
  },
  {
    letter: "B",
    term: "Benchmark",
    definition: "A comparison portfolio (e.g., the S&P 500 Index)."
  },
  {
    letter: "B",
    term: "Best-in-class investment",
    definition: "Investment approach of selecting only the companies that overcome a defined ranking hurdle, established using ESG criteria within each sector or industry."
  },
  {
    letter: "B",
    term: "Bias",
    definition: "A set of assumptions and stereotypes that people have about those different from themselves. Biases may be conscious or unconscious — that is, intentional or unintentional."
  },
  {
    letter: "B",
    term: "Bid exchange rate",
    definition: "The exchange rate at which a bank or currency dealer will buy foreign currency."
  },
  {
    letter: "B",
    term: "Book values",
    definition: "Balance sheet values of a company's assets, liabilities, and equity."
  },
  {
    letter: "B",
    term: "Breakeven point",
    definition: "The number of units produced and sold at which the company's profit is zero—that is, revenues exactly cover total costs. If the company sells less units than the breakeven point, it will suffer a loss. In contrast, if it sells more units than the breakeven point, it will make a profit."
  },
  {
    letter: "B",
    term: "Business cycles",
    definition: "Economy-wide fluctuations in economic activity."
  },
  {
    letter: "C",
    term: "Capital account",
    definition: "A component of the balance of payments that reports capital transfers between domestic entities and foreign entities, such as debt forgiveness or the transfer of assets by migrants entering or leaving the country."
  },
  {
    letter: "C",
    term: "Capitalised",
    definition: "Classifying a cost as generating long-term economic benefits and reporting it as an asset rather than charging it as an expense to current operations."
  },
  {
    letter: "C",
    term: "Circular economy",
    definition: "An economic model based inter alia on sharing, leasing, reuse, repair, refurbishment, and recycling, in an (almost) closed loop, which aims to retain the highest utility and value of products, components and materials at all times."
  },
  {
    letter: "C",
    term: "Coincident indicators",
    definition: "Measures of economic activity that are intended to measure the current state of the economy rather than the past or to predict the future. Coincident indicators have a tendency to change at the same time as the economy measured as a whole."
  },
  {
    letter: "C",
    term: "Comparative advantage",
    definition: "A country's ability to produce a good or service relatively more efficiently (that is, at a lower relative cost) than other countries."
  },
  {
    letter: "C",
    term: "Complementary products",
    definition: "Products that are frequently consumed together, such as printers and ink cartridges."
  },
  {
    letter: "C",
    term: "Compliance risk",
    definition: "The risk that an organisation fails to comply with all applicable rules, laws, and regulations and faces sanctions and damage of its reputation as a result of non-compliance."
  },
  {
    letter: "C",
    term: "Conflict of interest",
    definition: "When either the employee's personal interests or the employer's interests conflict with the interests of the client. Conflicts of interest can also arise when employee's and employer's interests conflict."
  },
  {
    letter: "C",
    term: "Consumer price index (CPI)",
    definition: "Constructed by determining the weight (or relative importance) of each product and service in a typical household's spending in a particular base year and then measuring the overall price of that basket of goods from year to year."
  },
  {
    letter: "C",
    term: "Controversial sourcing",
    definition: "Ethically debatable cost-driven practices of companies in their value chain."
  },
  {
    letter: "C",
    term: "Corruption",
    definition: "The abuse of power for private gain."
  },
  {
    letter: "C",
    term: "Cross-price elasticity of demand",
    definition: "The percentage change in quantity demanded of a product or service in response to a percentage change in the price of another product."
  },
  {
    letter: "C",
    term: "Currency risk",
    definition: "The risk associated with the fluctuation of exchange rates; also called foreign exchange risk."
  },
  {
    letter: "C",
    term: "Current account",
    definition: "A component of the balance of payments that indicates how much a country consumes and invests (outflows) with how much it receives (inflows). It includes three components, the goods and services account, the income account, and the current transfers account."
  },
  {
    letter: "C",
    term: "Current account balance",
    definition: "The sum of the goods and services, income, and current transfers accounts."
  },
  {
    letter: "C",
    term: "Current account deficit",
    definition: "A negative current account balance."
  },
  {
    letter: "C",
    term: "Current account surplus",
    definition: "A positive current account balance."
  },
  {
    letter: "C",
    term: "Current assets",
    definition: "Short-term assets that are expected to be converted into cash, used up, or sold within the current operating period (usually one year), such as cash, inventories, and accounts receivable."
  },
  {
    letter: "C",
    term: "Current liabilities",
    definition: "Short-term liabilities that must be repaid within the next year."
  },
  {
    letter: "C",
    term: "Current ratio",
    definition: "A liquidity ratio calculated as current assets divided by current liabilities."
  },
  {
    letter: "D",
    term: "Debt-to-equity ratio",
    definition: "A measure of financial leverage that indicates the extent to which debt is used in the financing of the company."
  },
  {
    letter: "D",
    term: "Defined benefit pension plans",
    definition: "Pension plans that promise a certain amount to their beneficiaries during their retirement."
  },
  {
    letter: "D",
    term: "Defined contribution pension plans",
    definition: "Pension plans in which participants contribute to their own retirement plan accounts, usually through employee payroll deductions. In some cases, the pension sponsor also contributes an agreed-on amount to the participants' accounts."
  },
  {
    letter: "D",
    term: "Deflation",
    definition: "A persistent and pronounced decrease in prices across most products and services in an economy."
  },
  {
    letter: "D",
    term: "Demand",
    definition: "The quantity of a product or service buyers are willing and able to buy at a given price."
  },
  {
    letter: "D",
    term: "Demand curve",
    definition: "The curve that shows the quantity of a product or service demanded at different prices."
  },
  {
    letter: "D",
    term: "Depreciation",
    definition: "The process of allocating the cost of an asset over the asset's estimated useful life; a situation in which a currency is getting weaker relative to other currencies."
  },
  {
    letter: "D",
    term: "Depreciation expense",
    definition: "The amount of depreciation allocated each year and reported on the income statement as an expense."
  },
  {
    letter: "D",
    term: "Devaluation",
    definition: "The decision made by a country's central bank to decrease the value of the domestic currency relative to other currencies."
  },
  {
    letter: "D",
    term: "Direct discrimination",
    definition: "When an individual is discriminated against because of a personal characteristic they possess or are perceived to possess."
  },
  {
    letter: "D",
    term: "Diversity",
    definition: "Refers to the full spectrum of human attributes, perspectives, identities, and backgrounds."
  },
  {
    letter: "D",
    term: "Dividend per share",
    definition: "The amount of cash dividends the company pays for each share outstanding."
  },
  {
    letter: "D",
    term: "Downside deviation",
    definition: "A measure of return dispersion similar to standard deviation but that focuses only on negative deviations."
  },
  {
    letter: "E",
    term: "Earnings per share (EPS)",
    definition: "The amount of income earned during a period per share of common stock; net income divided by the number of shares outstanding."
  },
  {
    letter: "E",
    term: "Economic growth",
    definition: "The percentage change in real output (real GDP) for an economy."
  },
  {
    letter: "E",
    term: "Economic indicators",
    definition: "A measure that offers insight regarding economic activity."
  },
  {
    letter: "E",
    term: "Economic profit",
    definition: "Equal to accounting profit minus the implicit opportunity costs not included in total accounting costs; the difference between total revenue and total cost."
  },
  {
    letter: "E",
    term: "Economic sanctions",
    definition: "Commercial and financial penalties that are designed to reduce international trade with another country."
  },
  {
    letter: "E",
    term: "Economics",
    definition: "The study of production, distribution, and consumption or the study of choices in the presence of scarce resources."
  },
  {
    letter: "E",
    term: "Economies of scale",
    definition: "Cost savings arising from a significant increase in output without a simultaneous increase in fixed costs."
  },
  {
    letter: "E",
    term: "Elasticity",
    definition: "In economics, how the quantity demanded or supplied changes in response to small changes in a related factor, such as price, income, and the price of a substitute or complementary product."
  },
  {
    letter: "E",
    term: "Embargoes",
    definition: "Measures that prohibit trade with a country"
  },
  {
    letter: "E",
    term: "Emissions",
    definition: "Pollution discharged into the atmosphere from smokestacks, other vents, and surface areas of commercial or industrial facilities; residential chimneys; and motor vehicle, locomotive, or aircraft exhausts."
  },
  {
    letter: "E",
    term: "Enterprise risk management (ERM)",
    definition: "A framework that helps organisations manage all their risks together in an integrated fashion."
  },
  {
    letter: "E",
    term: "Environmental, social, and governance (ESG) factors",
    definition: "Environmental factors pertain to the natural world. Social factors affect the lives of humans. Governance factors involve issues tied to countries or jurisdictions or are common practice in an industry as well as the interests of broader stakeholder groups."
  },
  {
    letter: "E",
    term: "Equilibrium price",
    definition: "Price at which the quantity of a product or service demanded equals the quantity supplied. Point at which the demand and supply curves intersect."
  },
  {
    letter: "E",
    term: "Equity",
    definition: "Fairness of access, opportunity, and advancement for all within an organisation, which requires eliminating barriers and addressing root causes that have prevented underrepresented groups from fully participating in the workplace."
  },
  {
    letter: "E",
    term: "Equity multiplier ratio",
    definition: "A measure of financial leverage that indicates the amount of total assets supported by one monetary unit of equity."
  },
  {
    letter: "E",
    term: "ESG investing",
    definition: "An approach to managing assets in which investors explicitly acknowledge the relevance of environmental, social, and governance (ESG) factors in their investment decisions as well as their own role as owners and creditors, with the long-term return of an investment portfolio in mind. It aims to correctly price social, environmental, and economic risks and opportunities."
  },
  {
    letter: "E",
    term: "Ethical and faith-based investment",
    definition: "Ethical (also known as values-driven) and faith-based investment refers to investing in line with certain principles, usually using negative screening to avoid investing in companies whose products and services are deemed morally objectionable by the investor or certain religions, international declarations, conventions, or voluntary agreements."
  },
  {
    letter: "E",
    term: "Exchange rate",
    definition: "The rate at which one currency can be exchanged for another."
  },
  {
    letter: "E",
    term: "Expenses",
    definition: "The cost of using up company resources to earn revenues. Typical expenses include operating expenses (such as cost of sales; selling, general, and administrative expenses; and depreciation expenses); interest expenses; and income taxes."
  },
  {
    letter: "E",
    term: "Exports",
    definition: "Products and services that are produced within a country's borders and then transported to another country."
  },
  {
    letter: "F",
    term: "Fair value",
    definition: "Value that reflects the amount for which an asset could be sold in an arm's length transaction between willing and unrelated parties."
  },
  {
    letter: "F",
    term: "Family office",
    definition: "Private company that manages the financial affairs of one or more members of a family or of multiple families."
  },
  {
    letter: "F",
    term: "Fiscal policy",
    definition: "The use of taxes and government spending to affect the level of aggregate expenditures."
  },
  {
    letter: "F",
    term: "Fixed costs",
    definition: "Costs that do not fluctuate with the level of output of the company."
  },
  {
    letter: "F",
    term: "Fixed exchange rate system",
    definition: "An exchange rate system that does not allow for fluctuations of currencies. The value of a country's currency is tied to the value of another country's currency or a commodity, such as gold."
  },
  {
    letter: "F",
    term: "Floating exchange rate system",
    definition: "An exchange rate system driven by supply and demand for each currency, allowing exchange rates to adjust to correct imbalances, such as current account deficits."
  },
  {
    letter: "F",
    term: "Foreign direct investments (FDIs)",
    definition: "Direct investments made by foreign investors and companies."
  },
  {
    letter: "F",
    term: "Foreign exchange market",
    definition: "A highly integrated decentralised network in which currencies are traded."
  },
  {
    letter: "F",
    term: "Forward market",
    definition: "Foreign exchange market in which currencies are traded now but delivered at some future date."
  },
  {
    letter: "F",
    term: "Forward rate",
    definition: "The exchange rate for forward market transactions."
  },
  {
    letter: "G",
    term: "GDP per capita",
    definition: "Gross domestic product divided by the population; a measure of average output or income per person."
  },
  {
    letter: "G",
    term: "Goodwill",
    definition: "An intangible asset that arises when a company purchases another company and pays more than the fair value of the net assets (assets minus liabilities) of the purchased company."
  },
  {
    letter: "G",
    term: "Green bonds",
    definition: "Innovative financial instruments from which the proceeds are invested exclusively (either by specifying the use of the proceeds, direct project exposure, or securitisation) in green projects that generate climate or other environmental benefits."
  },
  {
    letter: "G",
    term: "Green investment",
    definition: "Allocating capital to assets that mitigate the following climate change, biodiversity loss, resource inefficiency, and other environmental challenges (e.g., low carbon power generation and vehicles, smart grids, energy efficiency, pollution control, recycling, and waste management)."
  },
  {
    letter: "G",
    term: "Greenhouse gas (GHG)",
    definition: "Gases (including carbon dioxide (CO2), water vapour, methane, and nitrous oxide) that interact with infrared radiation and, when present in the atmosphere, have the effect of warming the global climate. Without naturally occurring GHGs, the earth's temperature would be several tens of degrees Celsius colder than it is now (and life would not have evolved in its current form)."
  },
  {
    letter: "G",
    term: "Gross domestic product (GDP)",
    definition: "The total value of all final products and services produced within an economy in a given period of time (output definition), or equivalently, the aggregate income earned by all households, all companies, and the government within an economy in a given period of time (income definition). Nominal GDP uses current market values. Real GDP adjusts for changes in price levels."
  },
  {
    letter: "G",
    term: "Gross profit",
    definition: "Sales minus the cost of sales."
  },
  {
    letter: "H",
    term: "Harassment",
    definition: "Unwanted conduct, verbal and/or physical, that has the effect of making a person uncomfortable, embarrassed, intimidated, or distressed. Sexual harassment is one of the most common types of harassment."
  },
  {
    letter: "H",
    term: "Historical cost",
    definition: "The actual cost of acquiring an asset."
  },
  {
    letter: "H",
    term: "Holding-period return",
    definition: "The return generated for investors over a specific time frame, usually annually; a synonym for total return."
  },
  {
    letter: "H",
    term: "Human rights",
    definition: "Rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status. Human rights include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education, and many more. Everyone is entitled to these rights without discrimination."
  },
  {
    letter: "H",
    term: "Hyperinflation",
    definition: "Price increases so large and rapid that people find it difficult to purchase products and services."
  },
  {
    letter: "I",
    term: "Impact investing",
    definition: "Impact investing refers to investments made with the specific intent of generating positive, measurable social and environmental impact alongside a financial return (which differentiates it from philanthropy)."
  },
  {
    letter: "I",
    term: "Imports",
    definition: "Products and services that are produced outside a country's borders and then brought into the country."
  },
  {
    letter: "I",
    term: "Inclusion",
    definition: "A dynamic state of operating in which any employee can be and feel respected, valued, safe, and fully engaged."
  },
  {
    letter: "I",
    term: "Income effect",
    definition: "A change in demand for a product or service as a result of a change in purchasing power."
  },
  {
    letter: "I",
    term: "Income elasticity of demand",
    definition: "The percentage change in the quantity demanded of a product or service divided by the corresponding percentage change in income."
  },
  {
    letter: "I",
    term: "Income statement",
    definition: "A financial statement that identifies the profit or loss of a company during a given time period, such as one year."
  },
  {
    letter: "I",
    term: "Indirect discrimination",
    definition: "A situation in which a condition, that has no objective justification, applies equally to everyone but puts individuals that share a personal characteristic at a disadvantage."
  },
  {
    letter: "I",
    term: "Inferior goods",
    definition: "Products whose consumption decreases as income increases."
  },
  {
    letter: "I",
    term: "Inflation",
    definition: "The percentage increase in the general price level from one period to the next; a sustained rise in the overall level of prices for products and services."
  },
  {
    letter: "I",
    term: "Information ratio",
    definition: "A reward-to-risk ratio defined as the portfolio's mean active return (the difference in average return between the portfolio and its benchmark) over its active risk (tracking error)."
  },
  {
    letter: "I",
    term: "Intangible assets",
    definition: "Assets lacking physical substance, such as patents and trademarks."
  },
  {
    letter: "I",
    term: "Internal audit",
    definition: "A function independent from other business functions that delves into the details of business processes and ensures that IT and accounting systems accurately reflect transactions."
  },
  {
    letter: "I",
    term: "Internal risk limits",
    definition: "Limits that incorporate an organisation's overall risk tolerance and risk management strategy—for example, the maximum amount of a risky security that can be held or the maximum aggregate exposure to one asset type or to one counterparty."
  },
  {
    letter: "I",
    term: "International trade",
    definition: "The exchange of goods, services, and capital between countries."
  },
  {
    letter: "I",
    term: "Inventories",
    definition: "The unsold units of production on hand."
  },
  {
    letter: "I",
    term: "Investment companies",
    definition: "Companies that exist solely to hold investments on behalf of their shareholders, partners, or unitholders, including mutual funds, hedge funds, venture capital funds, and investment trusts."
  },
  {
    letter: "I",
    term: "Investment policy statement (IPS)",
    definition: "A written planning document describing a client's investment objectives—return requirements and risk tolerance—over a relevant time horizon, along with constraints that apply to the client's portfolio. The IPS serves as a guide to what is required and acceptable in the investment portfolio."
  },
  {
    letter: "I",
    term: "Investment risk",
    definition: "The risk associated with investing that arises from the fluctuation in the value of investments."
  },
  {
    letter: "K",
    term: "Key risk measures",
    definition: "Measures that provide a warning when risk levels are rising."
  },
  {
    letter: "L",
    term: "Lagging indicators",
    definition: "Turning points that signal a change in economic activity after output has already changed."
  },
  {
    letter: "L",
    term: "Law of demand",
    definition: "The economic principle that as the price of a product increases, buyers will buy less of it, and as its price decreases, they will buy more of it."
  },
  {
    letter: "L",
    term: "Law of diminishing returns",
    definition: "The economic principle that the gain in output from adding variable inputs of one factor, such as labour, will increase at a decreasing rate even if the fixed inputs of production remain unchanged."
  },
  {
    letter: "L",
    term: "Law of supply",
    definition: "The economic principle that when the price of a product increases, the quantity supplied increases too."
  },
  {
    letter: "L",
    term: "Leading indicators",
    definition: "Turning points that signal changes in the economy in the future, and thus are considered useful for economic prediction and policy formulation."
  },
  {
    letter: "L",
    term: "Legal risk",
    definition: "The risk that an external party could sue an organisation for breach of contract or other violations."
  },
  {
    letter: "L",
    term: "Long-term debt",
    definition: "Money borrowed from banks or other lenders that is to be repaid during periods of greater than one year."
  },
  {
    letter: "L",
    term: "Loyalty",
    definition: "An expectation that employees will place the employer's interests above their own and will not misappropriate a company's property."
  },
  {
    letter: "L",
    term: "Luxury product",
    definition: "A product that has positive own price elasticity of demand—that is, a product for which demand increases as price increases."
  },
  {
    letter: "M",
    term: "Macroeconomics",
    definition: "The branch of economics that studies the economy as a whole."
  },
  {
    letter: "M",
    term: "Managed floating exchange rate system",
    definition: "A floating exchange rate system in which the central bank intervenes to stabilise its country's currency, usually to maintain the value of the country's currency within a certain range."
  },
  {
    letter: "M",
    term: "Marginal cost",
    definition: "The cost of producing an additional unit of a product or service."
  },
  {
    letter: "M",
    term: "Marginal revenue",
    definition: "The amount of money from selling an additional unit of a product or service."
  },
  {
    letter: "M",
    term: "Market equilibrium",
    definition: "The price where quantity demanded equals quantity supplied. At the equilibrium price, demand and supply in the market are balanced, and neither buyers nor sellers have an incentive to try to change the price, all other factors remaining unchanged."
  },
  {
    letter: "M",
    term: "Microeconomics",
    definition: "The branch of economics that studies how individuals and companies make decisions to allocate scarce resources."
  },
  {
    letter: "M",
    term: "Model risk",
    definition: "The risk arising from the use of models and associated with inappropriate underlying assumptions, the unavailability or inaccuracy of historical data, data errors, and misapplication of models."
  },
  {
    letter: "M",
    term: "Monetary policy",
    definition: "Actions taken by a nation's central bank to affect aggregate output and prices through the money supply or credit."
  },
  {
    letter: "M",
    term: "Monopolistic competition",
    definition: "A market in which there are many buyers and sellers who are able to differentiate their products to buyers and in which each company may have a limited monopoly because of the differentiation of their products."
  },
  {
    letter: "M",
    term: "Multiplier effect",
    definition: "An initial increase (decrease) in spending produces an increase (decrease) in GDP and consumption greater than the initial change in spending."
  },
  {
    letter: "N",
    term: "Net book value",
    definition: "Calculated as the gross value of an asset minus accumulated depreciation, where accumulated depreciation is the sum of all reported depreciation expenses for the particular asset."
  },
  {
    letter: "N",
    term: "Net exports",
    definition: "The difference between exports and imports of goods and services; also called balance of trade or trade balance."
  },
  {
    letter: "N",
    term: "Net income",
    definition: "The difference between revenue and expenses; income available to distribute to shareholders."
  },
  {
    letter: "N",
    term: "Net profit margin",
    definition: "A profitability ratio that indicates how much (percentage) of each monetary unit of revenue is left after all costs and expenses are covered."
  },
  {
    letter: "N",
    term: "Nominal GDP",
    definition: "A measure of GDP that uses the current market value of products and services."
  },
  {
    letter: "N",
    term: "Non-current assets",
    definition: "Assets used over a number of years to generate income for the company; examples include machinery, equipment, buildings, land, and intangible assets."
  },
  {
    letter: "N",
    term: "Non-tariff barriers",
    definition: "A range of measures, such as certification, licensing, sanctions, or embargoes, that make it more difficult and expensive for foreign producers to compete with domestic producers."
  },
  {
    letter: "N",
    term: "Normal goods",
    definition: "Products whose consumption increases as income increases."
  },
  {
    letter: "O",
    term: "Offer exchange rate",
    definition: "The exchange rate at which the bank or dealer will sell the foreign currency; also called the ask exchange rate."
  },
  {
    letter: "O",
    term: "Oligopoly",
    definition: "A market dominated by a small number of large companies because the barriers to entry are high."
  },
  {
    letter: "O",
    term: "Open market operations",
    definition: "Activities that involve the purchase and sale of government bonds by a central bank."
  },
  {
    letter: "O",
    term: "Operating income",
    definition: "Income generated by the company from its usual business activities before taking into account financing costs and taxes. It is often referred to as earnings before interest and taxes (EBIT)."
  },
  {
    letter: "O",
    term: "Operating profit margin",
    definition: "A profitability ratio calculated as operating income divided by revenue."
  },
  {
    letter: "O",
    term: "Operational risk",
    definition: "The risk of losses from inadequate or failed people, systems, and internal policies and procedures, as well as from external events that are beyond the control of the organisation but that affect its operations."
  },
  {
    letter: "O",
    term: "Own price elasticity of demand",
    definition: "The percentage change in the quantity demanded of a product or service as a result of the percentage price change in that product or service."
  },
  {
    letter: "P",
    term: "Perfectly competitive market",
    definition: "A market that consists of buyers and sellers trading a uniform commodity and in which there is a high degree of competition."
  },
  {
    letter: "P",
    term: "Performance attribution",
    definition: "The process of identifying the source of a fund manager's return. Potential sources include asset allocation, sector selection, stock selection, and currency exposure."
  },
  {
    letter: "P",
    term: "Performance measurement",
    definition: "The process of measuring the performance of investments, including the calculation of reward-to-risk ratios."
  },
  {
    letter: "P",
    term: "Physical climate-related risks",
    definition: "Risks resulting from extreme weather events, either acute or chronic risks from longer-term shifts in climate patterns — for example, higher temperatures."
  },
  {
    letter: "P",
    term: "Political risk",
    definition: "The risk of a change in the ruling political party of a country leads to changes in policies that can affect everything from monetary and fiscal policies to investment incentives, public investments, and procurement."
  },
  {
    letter: "P",
    term: "Pooled investment vehicles",
    definition: "Investment companies that pool funds from many investors for common management."
  },
  {
    letter: "P",
    term: "Price-to-book ratio (P/B)",
    definition: "The ratio of a company's share price to its book value per share."
  },
  {
    letter: "P",
    term: "Producer price index (PPI)",
    definition: "Reflects the price changes experienced by domestic producers in a country."
  },
  {
    letter: "P",
    term: "Product liability",
    definition: "The legal responsibility imposed on a business for the manufacturing or selling of defective goods."
  },
  {
    letter: "P",
    term: "Productivity gains",
    definition: "Increases in the ratio of gross domestic product (GDP) to units of labour expended to produce that GDP; increases in output per unit of labour."
  },
  {
    letter: "P",
    term: "Purchasing power parity",
    definition: "Economic theory based on the principle that a basket of goods in two different countries should cost the same after taking into account the exchange rate between the two countries' currencies."
  },
  {
    letter: "P",
    term: "Pure monopoly",
    definition: "A market in which there is no competition."
  },
  {
    letter: "Q",
    term: "Quick ratio",
    definition: "A liquidity ratio that indicates a company's ability to satisfy current liabilities with its most liquid assets."
  },
  {
    letter: "Q",
    term: "Quotas",
    definition: "Limits on the quantity of goods that can be imported."
  },
  {
    letter: "R",
    term: "Real GDP",
    definition: "The value of products and services produced, measured at base-year prices; nominal GDP adjusted for changes in price levels."
  },
  {
    letter: "R",
    term: "Rebalancing",
    definition: "The process of adjusting the weights of the constituent securities in an index or the weights of assets in a portfolio."
  },
  {
    letter: "R",
    term: "Recession",
    definition: "A period during which real GDP decreases (i.e., negative growth) for at least two successive quarters, or a period of significant decline in total output, income, employment, and sales lasting more than a few months."
  },
  {
    letter: "R",
    term: "Relative returns",
    definition: "The difference between holding-period returns (absolute returns) and returns on a benchmark over the same holding period."
  },
  {
    letter: "R",
    term: "Reserve currency",
    definition: "A currency held in significant quantities by many governments and institutions as part of their foreign exchange reserves."
  },
  {
    letter: "R",
    term: "Reserve requirement",
    definition: "The requirement for banks to hold reserves in proportion to the size of deposits."
  },
  {
    letter: "R",
    term: "Responsible investment",
    definition: "A strategy and practice to incorporate ESG factors into investment decisions and active ownership. It considers both how ESG might influence the risk-adjusted return of an asset and the stability of an economy as well as how investment in and engagement with assets and investees can impact society and the environment."
  },
  {
    letter: "R",
    term: "Retained earnings",
    definition: "The accumulated net income that is retained by the company rather than distributed to its owners (shareholders) as dividends."
  },
  {
    letter: "R",
    term: "Return on assets (ROA)",
    definition: "A profitability ratio that indicates a company's net income generated per monetary unit invested in total assets."
  },
  {
    letter: "R",
    term: "Return on equity (ROE)",
    definition: "A profitability ratio calculated as net income divided by average shareholders' equity."
  },
  {
    letter: "R",
    term: "Revenues",
    definition: "The amount charged (and expected to be received) for the delivery of products or services in the ordinary activities of a business."
  },
  {
    letter: "R",
    term: "Reward-to-risk ratio",
    definition: "Metric that divides a measure of portfolio holding-period return by a measure of portfolio risk. The higher the value of this metric, the more return an investment portfolio has generated per unit of risk."
  },
  {
    letter: "R",
    term: "Risk",
    definition: "The effect of uncertain future events on an organisation or on the outcomes the organisation achieves."
  },
  {
    letter: "R",
    term: "Risk appetite",
    definition: "An organisation's willingness to take on risk, which depends on its attitude toward risk and on its risk culture."
  },
  {
    letter: "R",
    term: "Risk budgeting",
    definition: "An approach to determining how risk should be allocated among different business units, portfolios, or individuals."
  },
  {
    letter: "R",
    term: "Risk management",
    definition: "An iterative process used by organisations to support the identification and management of risk (or uncertainty) and reduce the chances and/or effects of adverse events while enhancing the realisation of opportunities and the ability to achieve company objectives."
  },
  {
    letter: "R",
    term: "Risk tolerance",
    definition: "The level of risk an organisation is able and willing to take on."
  },
  {
    letter: "R",
    term: "Rogue trading",
    definition: "An example of operational risk wherein traders bypass management controls and place unauthorised trades, at times causing large losses for the firms they work for."
  },
  {
    letter: "S",
    term: "Shareholders",
    definition: "The owners of shares (stock) of a corporation."
  },
  {
    letter: "S",
    term: "Shareholder engagement",
    definition: "The active process of dialogue with a company in which the investor is seeking specific change. This can often be a lengthy process and involve many iterations of contact with senior representatives of the company."
  },
  {
    letter: "S",
    term: "Sharpe ratio",
    definition: "A reward-to-risk ratio defined as the excess portfolio return (portfolio return minus risk-free return) over the standard deviation of portfolio returns."
  },
  {
    letter: "S",
    term: "Social investment",
    definition: "Allocating capital to assets that address social challenges."
  },
  {
    letter: "S",
    term: "Socially responsible investment (SRI)",
    definition: "SRI refers to approaches that apply social and environmental criteria to evaluate companies. Investors implementing SRI often score companies using a chosen set of criteria in conjunction with sector-specific weightings. A hurdle level is established for qualification within the investment universe based on using either the full universe or sector-by-sector analysis."
  },
  {
    letter: "S",
    term: "Sovereign risk",
    definition: "The risk that a foreign government will not repay its debt because it does not have either the ability or the willingness to do so."
  },
  {
    letter: "S",
    term: "Spot market",
    definition: "Foreign exchange market in which currencies are traded now and delivered immediately."
  },
  {
    letter: "S",
    term: "Spot rate",
    definition: "The exchange rate for spot market transactions."
  },
  {
    letter: "S",
    term: "Stagflation",
    definition: "When a high inflation rate is combined with a high level of unemployment and a slowdown of the economy."
  },
  {
    letter: "S",
    term: "Statement of cash flows",
    definition: "A financial statement that identifies the sources and uses of cash over a time period and explains the change in the company's reported cash balance during the period."
  },
  {
    letter: "S",
    term: "Stewardship",
    definition: "The broad term for an investor operating as a good long-term owner of assets, standing in the shoes of their underlying clients to ensure that value is added or preserved over time."
  },
  {
    letter: "S",
    term: "Strategic asset allocation",
    definition: "The long-term mix of assets that is expected to achieve the client's long-term objectives, given the client's investment constraints."
  },
  {
    letter: "S",
    term: "Substitute product",
    definition: "A product that could generally take the place of (substitute for) another product."
  },
  {
    letter: "S",
    term: "Supply",
    definition: "The quantity of a product or service sellers are willing and able to sell at a given price."
  },
  {
    letter: "S",
    term: "Supply curve",
    definition: "The curve that shows the quantity of a product or service supplied at different prices."
  },
  {
    letter: "S",
    term: "Sustainable investment",
    definition: "Sustainable investment refers to the selection of assets that contribute in some way to a sustainable economy; that is, an asset that minimises natural and social resource depletion. It is a broad term that may be used for the consideration of typical ESG issues and may include best-in-class. It can also include ESG integration, which considers how ESG issues impact a security's risk and return profile."
  },
  {
    letter: "S",
    term: "Sustainable Development Goals (SDGs)",
    definition: "A set of global goals set in 2015 by the UN General Assembly (UNGA), succeeding the Millennium Development goals. The SDGs seek to address the key global challenges, including those related to poverty, inequality, climate change, environmental degradation, peace, and justice. There are 17 interconnected goals."
  },
  {
    letter: "T",
    term: "Tactical asset allocation",
    definition: "The decision to deliberately deviate from the strategic asset allocation in an attempt to add value based on forecasts of the short-term relative performance of asset classes."
  },
  {
    letter: "T",
    term: "Tariffs",
    definition: "Taxes (duties) levied on imported goods and services, which allow governments not only to establish trade barriers but also to raise revenue."
  },
  {
    letter: "T",
    term: "Thematic investment",
    definition: "Selecting companies that fall under a sustainability-related theme, such as clean-tech, sustainable agriculture, healthcare, or climate change mitigation."
  },
  {
    letter: "T",
    term: "Time-weighted rate of return",
    definition: "A measure of investment performance in which the overall measurement period is divided into sub-periods. The timing of each individual cash flow is identified and then defines the beginning of the sub-period in which it occurs."
  },
  {
    letter: "T",
    term: "Total asset turnover",
    definition: "A measure that indicates the volume of revenues being generated by the assets used in the business, or how effectively the company uses its assets to generate revenue."
  },
  {
    letter: "T",
    term: "Total return",
    definition: "The return generated for investors over a specific time frame, usually annually; also called holding-period return. Total return includes income and dividends received on investments and capital gains and losses."
  },
  {
    letter: "T",
    term: "Tracking error",
    definition: "The standard deviation of the differences between the deviation over time of the returns on a portfolio and the returns on its benchmark; a synonym of active risk."
  },
  {
    letter: "T",
    term: "Trade barriers",
    definition: "Restrictions, typically imposed by governments, on the free exchange of goods and services."
  },
  {
    letter: "T",
    term: "Trade deficits",
    definition: "When the value of exports is lower than the value of imports."
  },
  {
    letter: "T",
    term: "Trade surplus",
    definition: "When the value of exports is higher than the value of imports."
  },
  {
    letter: "T",
    term: "Transition risk",
    definition: "Transition risk relates to risks that result from changes in climate and energy policies, a shift to low-carbon technologies and liability issues."
  },
  {
    letter: "T",
    term: "Treynor ratio",
    definition: "A reward-to-risk ratio defined as the excess portfolio return (portfolio return minus risk-free return) over the beta of portfolio returns."
  },
  {
    letter: "T",
    term: "Triple bottom line (TBL)",
    definition: "The triple bottom line (TBL or 3BL) is an accounting framework with three parts: social, environmental (or ecological), and financial (people, planet, and profit)."
  },
  {
    letter: "V",
    term: "Value at risk (VaR)",
    definition: "An estimate of the minimum loss of value that can be expected for a given period within a given level of probability."
  },
  {
    letter: "V",
    term: "Variable costs",
    definition: "Costs that fluctuate with the level of output of the company."
  }
];
