
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

interface GlossaryTabProps {
  glossaryTerms: GlossaryTerm[];
}

const GlossaryTab: React.FC<GlossaryTabProps> = ({ glossaryTerms }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Define the financial glossary content organized by letters
  const financialGlossary = [
    // A Terms
    { term: "Absolute advantage", definition: "When a country is more efficient in producing a good or a service than other countries—that is, it needs less resources to produce the good or service.", category: "A" },
    { term: "Absolute returns", definition: "The returns achieved over a certain time period. Absolute returns do not consider the risk of the investment or the returns achieved by similar investments.", category: "A" },
    { term: "Accounting profit", definition: "Difference between the revenue generated from selling products and services and the explicit costs of producing them.", category: "A" },
    { term: "Accounts payable", definition: "Money owed by a company to suppliers that have extended the company credit.", category: "A" },
    { term: "Accounts receivable", definition: "Money owed to a company by customers who purchase on credit.", category: "A" },
    { term: "Accrual accounting", definition: "A method of financial accounting where revenue or expenses are recorded when a transaction occurs versus when payment is received or made.", category: "A" },
    { term: "Accrued liabilities", definition: "Liabilities related to expenses that have been incurred but not yet paid as of the end of an accounting period.", category: "A" },
    { term: "Active investment managers", definition: "Investment managers who try to predict which securities and assets will outperform or underperform comparable securities and assets and who act on their opinions by buying the securities and assets that they expect to outperform and selling (or simply not buying) the securities and assets that they expect to underperform.", category: "A" },
    { term: "Adverse selection", definition: "Tendency of people who are most at risk to buy insurance, causing insured losses to be greater than average losses.", category: "A" },
    { term: "Alpha", definition: "Outperformance relative to a relevant market benchmark.", category: "A" },
    { term: "Alternative investments", definition: "A diverse asset class that typically includes private equity, real estate, and commodities. It provides an alternative to traditional investments, such as debt and equity securities.", category: "A" },
    { term: "Amortisation", definition: "The process of expensing the costs of intangible assets over their useful lives.", category: "A" },
    { term: "Annual percentage rate", definition: "The cost of borrowing expressed as a yearly rate without compounding.", category: "A" },
    { term: "Annuity", definition: "The exchange of an initial amount for a fixed number of future payments of a certain amount.", category: "A" },
    { term: "Appraisal", definition: "Assessment or estimation of the value of an asset, such as real estate, that is subject to certain assumptions, which may not always be realistic.", category: "A" },
    { term: "Appreciation", definition: "A situation in which a currency is getting stronger relative to other currencies.", category: "A" },
    { term: "Arithmetic mean", definition: "The sum of the items in a data set divided by the number of items.", category: "A" },
    { term: "Ask price", definition: "Prices at which a dealer is willing to sell an asset or a security, typically qualified by a maximum quantity (ask size). Also called offer price.", category: "A" },
    { term: "Asset allocation", definition: "The process to determine the proportion of a portfolio to hold in various asset classes or the proportion of a portfolio held in various asset classes.", category: "A" },
    { term: "Asset class", definition: "A broad grouping of similar types of investments, such as shares, bonds, real estate, and commodities.", category: "A" },
    { term: "Asset-backed securities", definition: "Financial securities created by securitisation whose associated payments and value are backed by a pool of underlying assets, such as car loans, credit card receivables, bank loans, or airplane leases.", category: "A" },
    { term: "Assets", definition: "Items that have value and include real assets and financial assets.", category: "A" },
    { term: "Assets under management (AUM)", definition: "The market value of an investment portfolio that is managed by an investment manager.", category: "A" },
    { term: "Automated market marker (AMM)", definition: "A program that allows for trading in decentralized exchanges, pricing assets using algorithms.", category: "A" },
    
    // B Terms
    { term: "Back office", definition: "Administrative and support functions necessary to run the firm, including accounting, human resources, payroll, and operations.", category: "B" },
    { term: "Back-end sales loads", definition: "Fees associated with open-end mutual funds that are paid at the time of the sale of mutual fund interests.", category: "B" },
    { term: "Balance of payments", definition: "Record that tracks transactions between residents of one country and residents of the rest of the world over a period of time, usually a year.", category: "B" },
    { term: "Balance sheet", definition: "A statement of the company's financial position at a specified point in time; essentially, it shows the company's assets, liabilities or debt, and owner-supplied capital or equity.", category: "B" },
    { term: "Banks", definition: "Financial institutions that collect deposits from savers and transform them into loans to borrowers.", category: "B" },
    { term: "Barriers to entry", definition: "Obstacles, such as licences, brand loyalty, or control of natural resources, that prevent competitors from entering the market.", category: "B" },
    { term: "Basic earning power", definition: "A measure that compares the profit generated from operations with the assets used to generate that income.", category: "B" },
    { term: "Basis point", definition: "A measure equal to 0.01% or 0.0001.", category: "B" },
    { term: "Benchmark", definition: "A comparison portfolio (e.g., the S&P 500 Index).", category: "B" },
    { term: "Best efforts offering", definition: "Type of public offering in which the investment bank acts only as a broker and does not take the risk of having to buy securities.", category: "B" },
    { term: "Beta", definition: "A generic term for market risk, systematic risk, or non-diversifiable risk.", category: "B" },
    { term: "Bid exchange rate", definition: "The exchange rate at which a bank or currency dealer will buy foreign currency.", category: "B" },
    { term: "Bid price", definition: "Price at which a dealer is willing to buy an asset or a security, typically qualified by a maximum quantity (bid size).", category: "B" },
    { term: "Block brokers", definition: "Brokers who help investors who want to trade large blocks of securities.", category: "B" },
    { term: "Blockchain", definition: "A system of record-keeping that is maintained by independent computers in a peer-to-peer (decentralised) network.", category: "B" },
    { term: "Board of directors", definition: "A group of people whose job is to monitor the company's business activities on behalf of its shareholders.", category: "B" },
    { term: "Bond", definition: "A formal contract that represents a loan from an investor (bondholder) to an issuer. The contract describes the key terms of the debt obligation, such as the interest rate and the maturity.", category: "B" },
    { term: "Book values", definition: "Balance sheet values of a company's assets, liabilities, and equity.", category: "B" },
    { term: "Bought deal", definition: "An underwriting arrangement whereby the underwriter buys the securities issue from the issuer and then sells the securities to investors. See also firm commitment agreement.", category: "B" },
    { term: "Breakeven point", definition: "The number of units produced and sold at which the company's profit is zero—that is, revenues exactly cover total costs. If the company sells less units than the breakeven point, it will suffer a loss. In contrast, if it sells more units than the breakeven point, it will make a profit.", category: "B" },
    { term: "Brokerage services", definition: "Trading services provided to clients who want to buy and sell securities; they include not only execution services (that is, processing orders on behalf of clients) but also investment advice and research.", category: "B" },
    { term: "Brokered markets", definition: "Markets in which brokers arrange trades among their clients, particularly for such assets as large blocks of securities or real estate that are unique and thus of interest as potential investments to only a limited number of investors.", category: "B" },
    { term: "Brokers", definition: "Trading services providers who act as agents and, in exchange for a commission, arrange trades by finding sellers for their clients who want to buy and buyers for their clients who want to sell.", category: "B" },
    { term: "Business cycles", definition: "Economy-wide fluctuations in economic activity.", category: "B" },
    { term: "Buy-side analysts", definition: "Analysts who work for organisations, typically a type of institutional investor, that buy securities. They analyse data about companies and the markets in which they operate and review potential investments.", category: "B" },
    { term: "Buy-side firms", definition: "Institutional investors and investment managers who purchase investment products and services from sell-side firms.", category: "B" },
    { term: "Buying on margin", definition: "When an investor uses a margin loan to purchase securities, this action is referred to as 'buying on margin'. See also margin loan.", category: "B" },
    { term: "Buyouts", definition: "Private equity investment strategy that consists of financing established companies that require capital to restructure and facilitating a change of ownership.", category: "B" },
    
    // C Terms
    { term: "Call market", definition: "Market in which trades can be arranged only when the market is called, which is usually once a day.", category: "C" },
    { term: "Call option", definition: "The right (but not the obligation) to buy an underlying at the exercise price until the option expires.", category: "C" },
    { term: "Call risk", definition: "The risk that the issuer will buy back the bond issue prior to maturity through the exercise of a call provision.", category: "C" },
    { term: "Callable bond", definition: "A bond that provides the issuer with the right to buy back (call) the bond from bondholders prior to the maturity date at a pre-specified price.", category: "C" },
    { term: "Capital account", definition: "A component of the balance of payments that reports capital transfers between domestic entities and foreign entities, such as debt forgiveness or the transfer of assets by migrants entering or leaving the country.", category: "C" },
    { term: "Capitalised", definition: "Classifying a cost as generating long-term economic benefits and reporting it as an asset rather than charging it as an expense to current operations.", category: "C" },
    { term: "Capitalism", definition: "An economic system that promotes private ownership as the means of production and markets as the means of allocating scarce resources.", category: "C" },
    { term: "Capitalisation-weighted indices", definition: "Indices for which the weight assigned to each security depends on the security's market capitalisation—that is, the market price of the security multiplied by the number of units outstanding of the security. See also cap-weighted, market weighted, or value-weighted indices.", category: "C" },
    { term: "Carried interest", definition: "A form of incentive fee that general partners deduct before distributing the profit made on investments to the limited partners. It is designed to ensure that general partners' interests are aligned with the limited partners' interests.", category: "C" },
    { term: "Cash flow rights", definition: "The rights of shareholders to distributions, such as dividends, made by the company.", category: "C" },
    { term: "Churning", definition: "Excessive trading to increase commissions.", category: "C" },
    { term: "Clearing", definition: "All activities that occur from the arrangement of the trade to its settlement.", category: "C" },
    { term: "Clearing houses", definition: "Trading services providers that arrange for final settlement of trades.", category: "C" },
    { term: "Closed-end funds", definition: "Pooled investment vehicles that have a fixed number of shares and thus do not issue or redeem shares on demand. Investors who want to buy or sell closed-end funds must trade with investors willing to sell or buy these funds.", category: "C" },
    { term: "Coincident indicators", definition: "Measures of economic activity that are intended to measure the current state of the economy rather than the past or to predict the future. Coincident indicators have a tendency to change at the same time as the economy measured as a whole.", category: "C" },
    { term: "Collateral", definition: "Specific assets (generally a tangible asset) that a borrower pledges to a lender to secure a loan.", category: "C" },
    { term: "Commercial real estate", definition: "Income-generating real estate that includes, for example, offices, multifamily residential dwellings, retail and industrial properties, and hotels.", category: "C" },
    { term: "Commingled account", definition: "Pooling together the capital of two or more investors, which is then jointly managed.", category: "C" },
    { term: "Commodities", definition: "Physical products, such as precious and base metals (e.g., gold, copper), energy products (e.g., oil), and agricultural products that are typically consumed (e.g., corn, cattle, wheat) or used in the manufacture of goods (e.g., lumber, cotton, sugar).", category: "C" },
    { term: "Common stock", definition: "Also known as common shares, ordinary shares, or voting shares, it is the main type of equity security issued by a company. It represents an ownership stake in the company.", category: "C" },
    { term: "Comparative advantage", definition: "A country's ability to produce a good or service relatively more efficiently (that is, at a lower relative cost) than other countries.", category: "C" },
    { term: "Complementary products", definition: "Products that are frequently consumed together, such as printers and ink cartridges.", category: "C" },
    { term: "Compliance risk", definition: "The risk that an organisation fails to comply with all applicable rules, laws, and regulations and faces sanctions and damage of its reputation as a result of non-compliance.", category: "C" },
    { term: "Compound interest", definition: "Interest that is calculated on principal and interest; it assumes reinvestment of interest received. Compound interest is often referred to as interest on interest.", category: "C" },
    { term: "Confirmation", definition: "Clearing activity that takes place before settlement in which the buyer and seller must confirm that they traded and the exact terms of their trade.", category: "C" },
    { term: "Consumer price index (CPI)", definition: "Constructed by determining the weight (or relative importance) of each product and service in a typical household's spending in a particular base year and then measuring the overall price of that basket of goods from year to year.", category: "C" },
    { term: "Continuous trading market", definition: "Market in which trades can be arranged and executed any time the market is open.", category: "C" },
    { term: "Convertible bond", definition: "A bond that offers the bondholder the right to convert the bond into a pre specified number of shares of common stock of the issuing company.", category: "C" },
    { term: "Correlation", definition: "A measure of the strength of a relationship between two variables; essentially, two variables are correlated when a change in one variable is always accompanied by a change in another variable. Variables can be positively or negatively correlated.", category: "C" },
    { term: "Correlation coefficient", definition: "A number between –1 and +1 that measures the consistency or tendency for two variables to move in tandem with each other.", category: "C" },
    { term: "Corruption", definition: "The abuse of power for private gain.", category: "C" },
    { term: "Counterparty risk", definition: "Risk that one of the parties to a contract will fail to honour the terms of the contract.", category: "C" },
    { term: "Coupon rate", definition: "The interest rate for a bond. The bond's coupon rate multiplied by its par value equals the annual interest owed to the bondholders.", category: "C" },
    { term: "Covenants", definition: "Actions that the issuer must perform (positive covenants) or is prohibited from performing (negative covenants).", category: "C" },
    { term: "Credit default swap (CDS or CDX)", definition: "A contract that protects the buyer against a loss of value in a debt security or index of debt securities. The contract will specify under what conditions the other party has to make payment to the buyer of the CDS.", category: "C" },
    { term: "Credit rating", definition: "Assessment of the credit quality of a bond based on the creditworthiness of the issuer.", category: "C" },
    { term: "Credit rating agencies", definition: "Investment research service providers that specialise in providing opinions about the credit quality of bonds and of their issuers.", category: "C" },
    { term: "Credit risk", definition: "For a lender, the risk of loss caused by a borrower's failure to honour the contract and make a promised payment in a timely manner.", category: "C" },
    { term: "Credit spread", definition: "The difference between a risky bond's yield and the yield on a government bond with the same maturity.", category: "C" },
    { term: "Cross-price elasticity of demand", definition: "The percentage change in quantity demanded of a product or service in response to a percentage change in the price of another product.", category: "C" },
    { term: "Crossing network", definition: "Type of alternative trading venue in which an electronic trading system matches buyers and sellers who are willing to trade at prices obtained from exchanges or other alternative trading venues but who are concerned about moving the price of the securities by submitting an order to an exchange.", category: "C" },
    { term: "Crypto wallet", definition: "Digital account that enables the user to access cryptocurrency and transact on a blockchain.", category: "C" },
    { term: "Cryptocurrency", definition: "A digital currency composed of encrypted data that acts as a medium of exchange.", category: "C" },
    { term: "Currency risk", definition: "The risk associated with the fluctuation of exchange rates; also called foreign exchange risk.", category: "C" },
    { term: "Currency swap", definition: "The exchange of debt service obligations denominated in different currencies.", category: "C" },
    { term: "Current account", definition: "A component of the balance of payments that indicates how much a country consumes and invests (outflows) with how much it receives (inflows). It includes three components, the goods and services account, the income account, and the current transfers account.", category: "C" },
    { term: "Current account balance", definition: "The sum of the goods and services, income, and current transfers accounts.", category: "C" },
    { term: "Current account deficit", definition: "A negative current account balance.", category: "C" },
    { term: "Current account surplus", definition: "A positive current account balance.", category: "C" },
    { term: "Current assets", definition: "Short-term assets that are expected to be converted into cash, used up, or sold within the current operating period (usually one year), such as cash, inventories, and accounts receivable.", category: "C" },
    { term: "Current liabilities", definition: "Short-term liabilities that must be repaid within the next year.", category: "C" },
    { term: "Current ratio", definition: "A liquidity ratio calculated as current assets divided by current liabilities.", category: "C" },
    { term: "Current yield", definition: "The annual coupon payment divided by the current market price.", category: "C" },
    { term: "Custodians", definition: "Typically, banks and brokerage firms that hold money and securities for safekeeping on behalf of their clients.", category: "C" },
    
    // D Terms
    { term: "Dark pools", definition: "Type of alternative trading venue that does not display orders from clients to other market participants.", category: "D" },
    { term: "Data vendors", definition: "Investment research service providers of historical and real-time data about companies and market conditions.", category: "D" },
    { term: "Day orders", definition: "Order execution instructions in which the order can only be executed on the day submitted, with cancelling at the end of the day.", category: "D" },
    { term: "Dealer markets", definition: "See quote-driven markets.", category: "D" },
    { term: "Dealers", definition: "Trading services providers who participate in their clients' trades and stand ready to buy or sell when their clients want to sell or buy, providing liquidity and profiting when they can buy securities for less than they sell them. Also called market makers.", category: "D" },
    { term: "Debt-to-equity ratio", definition: "A measure of financial leverage that indicates the extent to which debt is used in the financing of the company.", category: "D" },
    { term: "Default", definition: "A situation in which the bond issuer fails to make the promised payments.", category: "D" },
    { term: "Defined benefit pension plans", definition: "Pension plans that promise a certain amount to their beneficiaries during their retirement.", category: "D" },
    { term: "Defined contribution pension plans", definition: "Pension plans in which participants contribute to their own retirement plan accounts, usually through employee payroll deductions. In some cases, the pension sponsor also contributes an agreed-on amount to the participants' accounts.", category: "D" },
    { term: "Deflation", definition: "A persistent and pronounced decrease in prices across most products and services in an economy.", category: "D" },
    { term: "Demand", definition: "The quantity of a product or service buyers are willing and able to buy at a given price.", category: "D" },
    { term: "Demand curve", definition: "The curve that shows the quantity of a product or service demanded at different prices.", category: "D" },
    { term: "Deposit-taking institutions", definition: "Financial institutions that take deposits, such as banks; also called depository institutions.", category: "D" },
    { term: "Depositary receipt", definition: "A security issued by a financial institution that represents an economic interest in a foreign company. The financial institution holds the foreign company's shares in custody and issues depositary receipts against the shares held. These depositary receipts trade like common stock on the local stock exchange.", category: "D" },
    { term: "Depositories", definition: "Typically, banks and brokerage firms that are regulated and act not only as custodians but also as monitors, playing an important role in preventing investment fraud.", category: "D" },
    { term: "Depreciation", definition: "The process of allocating the cost of an asset over the asset's estimated useful life; a situation in which a currency is getting weaker relative to other currencies.", category: "D" },
    { term: "Depreciation expense", definition: "The amount of depreciation allocated each year and reported on the income statement as an expense.", category: "D" },
    { term: "Derivatives", definition: "Contracts (agreements to do something in the future) that derive their value from the performance of an underlying asset, event, or outcome.", category: "D" },
    { term: "Devaluation", definition: "The decision made by a country's central bank to decrease the value of the domestic currency relative to other currencies.", category: "D" },
    { term: "Direct finance", definition: "When providers and users of capital interact, the providers usually have a direct claim on the users (e.g., right to certain assets and earnings generated by the user). See also direct investments.", category: "D" },
    { term: "Direct investments", definition: "Purchase of securities issued by companies, governments, and individuals and of real assets, such as real estate, art, or timber.", category: "D" },
    { term: "Direct Listing", definition: "Permits raising capital outside of the traditional IPO process.", category: "D" },
    { term: "Discount rate", definition: "The rate used to calculate the present value of some future amount.", category: "D" },
    { term: "Distributed ledger", definition: "A database that is shared among many parties and is not controlled by a single entity, but rather involves many independent computers recording and confirming the transactions.", category: "D" },
    { term: "Distribution", definition: "The set of values that a variable can take, showing their observed or theoretical frequency of occurrence.", category: "D" },
    { term: "Distressed", definition: "Private equity investment strategy that focuses on purchasing the debt of troubled companies that may have defaulted or are on the brink of defaulting.", category: "D" },
    { term: "Diversification", definition: "The practice of combining assets and types of assets with different characteristics in a portfolio for the purpose of reducing risk.", category: "D" },
    { term: "Dividend per share", definition: "The amount of cash dividends the company pays for each share outstanding.", category: "D" },
    { term: "Dividend yield", definition: "A preferred or common stock's dividend yield is the expected annual dividend to be paid over the next year, divided by the price.", category: "D" },
    { term: "Downside deviation", definition: "A measure of return dispersion similar to standard deviation but that focuses only on negative deviations.", category: "D" },
    
    // E Terms
    { term: "Earnings per share (EPS)", definition: "The amount of income earned during a period per share of common stock; net income divided by the number of shares outstanding.", category: "E" },
    { term: "Economic growth", definition: "The percentage change in real output (real GDP) for an economy.", category: "E" },
    { term: "Economic indicators", definition: "A measure that offers insight regarding economic activity.", category: "E" },
    { term: "Economic profit", definition: "Equal to accounting profit minus the implicit opportunity costs not included in total accounting costs; the difference between total revenue and total cost.", category: "E" },
    { term: "Economic sanctions", definition: "Commercial and financial penalties that are designed to reduce international trade with another country.", category: "E" },
    { term: "Economics", definition: "The study of production, distribution, and consumption or the study of choices in the presence of scarce resources.", category: "E" },
    { term: "Economies of scale", definition: "Cost savings arising from a significant increase in output without a simultaneous increase in fixed costs.", category: "E" },
    { term: "Effective annual rate (EAR)", definition: "The amount by which a unit of currency will grow in a year, with interest on interest included.", category: "E" },
    { term: "Elasticity", definition: "In economics, how the quantity demanded or supplied changes in response to small changes in a related factor, such as price, income, and the price of a substitute or complementary product.", category: "E" },
    { term: "Embargoes", definition: "Measures that prohibit trade with a country", category: "E" },
    { term: "Endowment funds", definition: "Long-term funds owned by non-profit institutions.", category: "E" },
    { term: "Enterprise risk management (ERM)", definition: "A framework that helps organisations manage all their risks together in an integrated fashion.", category: "E" },
    { term: "Equal-weighted indices", definition: "Indices for which an equal weight is assigned to each security included in the index.", category: "E" },
    { term: "Equilibrium price", definition: "Price at which the quantity of a product or service demanded equals the quantity supplied. Point at which the demand and supply curves intersect.", category: "E" },
    { term: "Equity (market) risk premium (ERP)", definition: "The extra annual return that an equity investor expects to earn above a risk-free asset on an average-risk equity security.", category: "E" },
    { term: "Equity multiplier ratio", definition: "A measure of financial leverage that indicates the amount of total assets supported by one monetary unit of equity.", category: "E" },
    { term: "Ethical dilemmas", definition: "Situations in which values, interests, and/or rules potentially conflict.", category: "E" },
    { term: "Ethical standards", definition: "Principles that support and promote desired values or behaviours.", category: "E" },
    { term: "Ethics", definition: "A set of moral principles, or the principles of conduct governing an individual or a group.", category: "E" },
    { term: "Exchange rate", definition: "The rate at which one currency can be exchanged for another.", category: "E" },
    { term: "Exchange-traded funds (ETFs)", definition: "Pooled investment vehicles that are typically passively managed to track a particular index or sector and that trade continuously as common stocks on exchanges or through dealers.", category: "E" },
    { term: "Exercise price", definition: "Specified in an options contract, the price to trade the underlying in the future. Also called the strike price.", category: "E" },
    { term: "Experienced investor", definition: "An investor, whether an individual or a business, that has sufficient net worth and investing experience defined by regulator. Also known as an accredited investor.", category: "E" },
    { term: "Expenses", definition: "The cost of using up company resources to earn revenues. Typical expenses include operating expenses (such as cost of sales; selling, general, and administrative expenses; and depreciation expenses); interest expenses; and income taxes.", category: "E" },
    { term: "Exports", definition: "Products and services that are produced within a country's borders and then transported to another country.", category: "E" },
    
    // F Terms
    { term: "Fair value", definition: "Value that reflects the amount for which an asset could be sold in an arm's length transaction between willing and unrelated parties.", category: "F" },
    { term: "Family office", definition: "Private company that manages the financial affairs of one or more members of a family or of multiple families.", category: "F" },
    { term: "Financial assets", definition: "Claims on other assets; for example, a share of stock represents ownership in a company or a claim to some of the company's assets and earnings.", category: "F" },
    { term: "Financial capital", definition: "Money provided to individuals, companies, and governments to finance their needs.", category: "F" },
    { term: "Financial institutions", definition: "Financial intermediaries, such as banks and insurance companies, whose role is to collect money from savers and to invest it in financial assets.", category: "F" },
    { term: "Financial intermediaries", definition: "Organisations that act as middlemen between those who have money and those who need money.", category: "F" },
    { term: "Financial markets", definition: "Places where buyers and sellers can trade securities; also called securities markets or capital markets.", category: "F" },
    { term: "Financial planners", definition: "Investment professionals who help their clients set their financial goals and determine how much money they should save for future expenses and/or how much money they can spend on current expenses while still preserving their capital.", category: "F" },
    { term: "Financial services industry", definition: "Industry that offers a range of products and services to those who have money to invest and those who need money and help channel funds between them.", category: "F" },
    { term: "Fintech", definition: "Refers to technology-driven innovation in the financial services industry, and can also refer to companies — often new, start-up companies — involved in developing these technologies and to the wider sector they are a part of.", category: "F" },
    { term: "Firm commitment agreement", definition: "See bought deal.", category: "F" },
    { term: "Fiscal policy", definition: "The use of taxes and government spending to affect the level of aggregate expenditures.", category: "F" },
    { term: "Fixed costs", definition: "Costs that do not fluctuate with the level of output of the company.", category: "F" },
    { term: "Fixed exchange rate system", definition: "An exchange rate system that does not allow for fluctuations of currencies. The value of a country's currency is tied to the value of another country's currency or a commodity, such as gold.", category: "F" },
    { term: "Fixed-rate bonds", definition: "A bond with a finite life that offers a coupon rate that does not change over the life of the bond. Also known as straight bonds.", category: "F" },
    { term: "Floating exchange rate system", definition: "An exchange rate system driven by supply and demand for each currency, allowing exchange rates to adjust to correct imbalances, such as current account deficits.", category: "F" },
    { term: "Floating-rate bonds", definition: "A bond with a finite life that offers a coupon rate that changes over time. Also known as variable-rate bonds.", category: "F" },
    { term: "Foreign direct investments (FDIs)", definition: "Direct investments made by foreign investors and companies.", category: "F" },
    { term: "Foreign exchange market", definition: "A highly integrated decentralised network in which currencies are traded.", category: "F" },
    { term: "Forward contract", definition: "An agreement between two parties in which one party agrees to buy from the seller an underlying at a later date for a price established at the start of the contract.", category: "F" },
    { term: "Forward market", definition: "Foreign exchange market in which currencies are traded now but delivered at some future date.", category: "F" },
    { term: "Forward rate", definition: "The exchange rate for forward market transactions.", category: "F" },
    { term: "Foundations", definition: "Grant-making institutions funded by gifts and by the investment income that they produce.", category: "F" },
    { term: "Fraud", definition: "Intentional deception, such as deliberately causing or falsely reporting losses to collect insurance settlements.", category: "F" },
    { term: "Front office", definition: "Client-facing activities that provide direct revenue generation, such as sales, marketing, and customer service activities.", category: "F" },
    { term: "Front-end sales loads", definition: "Fees associated with open-end mutual funds that are paid at the time of purchase of mutual fund interests.", category: "F" },
    { term: "Front-running", definition: "The act of placing an order ahead of a customer's order to take advantage of the price impact that the customer's order will have.", category: "F" },
    { term: "Full replication", definition: "The management strategy for an index fund in which the fund invests in every security in the benchmark index.", category: "F" },
    { term: "Funds of funds (FOF)", definition: "Investment vehicles that invest in other funds.", category: "F" },
    { term: "Future value", definition: "The amount to which a payment or series of payments will grow by a stated future date.", category: "F" },
    { term: "Futures contract", definition: "An agreement that obligates the seller, at a specified future date, to deliver to the buyer a specified underlying in exchange for the specified futures price.", category: "F" },
    
    // G Terms
    { term: "Gas", definition: "In the context of Ethereum, a transactions fee.", category: "G" },
    { term: "GDP per capita", definition: "Gross domestic product divided by the population; a measure of average output or income per person.", category: "G" },
    { term: "General partner (GP)", definition: "In a partnership, the partner that sets the partnership, raises capital, finds suitable investments, and make decisions. Unlike limited partners, the general partner has unlimited personal liability for all the debts of the partnership.", category: "G" },
    { term: "Geometric average", definition: "The average compounded return for each period; the average return for each period assuming that returns are compounding.", category: "G" },
    { term: "Good-until-cancelled orders", definition: "Order execution instructions what can be executed until they are cancelled.", category: "G" },
    { term: "Goodwill", definition: "An intangible asset that arises when a company purchases another company and pays more than the fair value of the net assets (assets minus liabilities) of the purchased company.", category: "G" },
    { term: "Gross domestic product (GDP)", definition: "The total value of all final products and services produced within an economy in a given period of time (output definition), or equivalently, the aggregate income earned by all households, all companies, and the government within an economy in a given period of time (income definition). Nominal GDP uses current market values. Real GDP adjusts for changes in price levels.", category: "G" },
    { term: "Gross profit", definition: "Sales minus the cost of sales.", category: "G" },
    { term: "Growth equity", definition: "Private equity investment strategy that usually focuses on financing companies with proven business models, good customer bases, and positive cash flows and profits but that need additional capital to support their growth plans.", category: "G" },
    
    // H Terms
    { term: "Hash", definition: "A set of code that converts data into encrypted output in a blockchain.", category: "H" },
    { term: "Hedge", definition: "To reduce or eliminate risk caused by fluctuations in the prices of commodities, securities, or currencies.", category: "H" },
    { term: "Hedge funds", definition: "Private investment pools that investment managers organise and manage. They are characterised by their availability to only a limited number of investors, agreements that lock up the investors' capital for fixed periods, and performance-based managerial compensation.", category: "H" },
    { term: "Hidden orders", definition: "Orders that are only seen by the brokers or trading venues that receive them and cannot be seen by other traders until the orders can be filled.", category: "H" },
    { term: "High-net-worth investors", definition: "Individual investors with a higher amount of investable assets relative to retail investors.", category: "H" },
    { term: "High-water mark", definition: "Highest value, net of fees, that a fund has reached in the past. The investment manager usually earns the performance fee only if the fund is above its high-water mark.", category: "H" },
    { term: "Histogram", definition: "A diagram with bars that are proportional to the frequency of occurrence in each group of observations.", category: "H" },
    { term: "Historical cost", definition: "The actual cost of acquiring an asset.", category: "H" },
    { term: "Holding-period return", definition: "The return generated for investors over a specific time frame, usually annually; a synonym for total return.", category: "H" },
    { term: "Hurdle rate", definition: "Minimum annual rate of return that the fund must generate before the investment manager can receive a performance fee.", category: "H" },
    { term: "Hyperinflation", definition: "Price increases so large and rapid that people find it difficult to purchase products and services.", category: "H" },
    
    // I Terms
    { term: "Immediate or cancel (IOC) orders", definition: "Order execution instructions that are only executed upon immediate received by the broker or trading venue.", category: "I" },
    { term: "Imports", definition: "Products and services that are produced outside a country's borders and then brought into the country.", category: "I" },
    { term: "Income effect", definition: "A change in demand for a product or service as a result of a change in purchasing power.", category: "I" },
    { term: "Income elasticity of demand", definition: "The percentage change in the quantity demanded of a product or service divided by the corresponding percentage change in income.", category: "I" },
    { term: "Income statement", definition: "A financial statement that identifies the profit or loss of a company during a given time period, such as one year.", category: "I" },
    { term: "Index fund", definition: "A portfolio of securities structured to track the returns of a specific index called the benchmark index.", category: "I" },
    { term: "Index rebalancing", definition: "The process of adjusting the weights of the securities in an index. That is, the weights given to securities whose prices have risen must be decreased and the weights given to securities whose prices have fallen must be increased.", category: "I" },
    { term: "Index reconstitution", definition: "The process of adding or removing securities included in the index.", category: "I" },
    { term: "Indirect finance", definition: "The use of financial intermediaries to find and channel funds between providers and users of capital. Because financial intermediaries sit between providers and users, the former do not have direct claims on the latter. See also indirect investments.", category: "I" },
    { term: "Indirect investments", definition: "Purchase of securities of companies, trusts, and partnerships that make direct investments, such as shares in mutual funds and exchange-traded funds, limited partnership interests in hedge funds, asset-backed securities, and interests in pension funds, foundation funds, and endowment funds.", category: "I" },
    { term: "Inferior goods", definition: "Products whose consumption decreases as income increases.", category: "I" },
    { term: "Inflation", definition: "The percentage increase in the general price level from one period to the next; a sustained rise in the overall level of prices for products and services.", category: "I" },
    { term: "Inflation risk", definition: "The risk associated with inflation.", category: "I" },
    { term: "Inflation-linked bonds", definition: "Bonds that contain a provision that adjusts the bond's par value for inflation and thus mitigates inflation risk.", category: "I" },
    { term: "Information ratio", definition: "A reward-to-risk ratio defined as the portfolio's mean active return (the difference in average return between the portfolio and its benchmark) over its active risk (tracking error).", category: "I" },
    { term: "Initial margin", definition: "The amount that must be deposited on the day the transaction is opened.", category: "I" },
    { term: "Initial public offering (IPO)", definition: "The first issuance of common shares to the public by a formerly private corporation.", category: "I" },
    { term: "Insider trading", definition: "Trading while in possession of material non-public information.", category: "I" },
    { term: "Insurance companies", definition: "Financial institutions that help individuals and companies offset the risks they face; also among the largest investors.", category: "I" },
    { term: "Intangible assets", definition: "Assets lacking physical substance, such as patents and trademarks.", category: "I" },
    { term: "Interest", definition: "Payment for the use of borrowed money.", category: "I" },
    { term: "Interest rate risk", definition: "The risk associated with decreases in bond prices resulting from increases in interest rates.", category: "I" },
    { term: "Interest rate swap", definition: "An agreement between two parties to exchange interest rate obligations for the benefit of both parties; usually exchanges a fixed-rate payment for a floating-rate payment.", category: "I" },
    { term: "Internal audit", definition: "A function independent from other business functions that delves into the details of business processes and ensures that IT and accounting systems accurately reflect transactions.", category: "I" },
    { term: "Internal risk limits", definition: "Limits that incorporate an organisation's overall risk tolerance and risk management strategy—for example, the maximum amount of a risky security that can be held or the maximum aggregate exposure to one asset type or to one counterparty.", category: "I" },
    { term: "International trade", definition: "The exchange of goods, services, and capital between countries.", category: "I" },
    { term: "Inventories", definition: "The unsold units of production on hand.", category: "I" },
    { term: "Investment banks", definition: "Financial intermediaries that assist companies and governments raise capital and can provide other services, such as strategic advisory services, brokerage and dealing services, and research services; also known as merchant banks.", category: "I" },
    { term: "Investment companies", definition: "Companies that exist solely to hold investments on behalf of their shareholders, partners, or unitholders, including mutual funds, hedge funds, venture capital funds, and investment trusts.", category: "I" },
    { term: "Investment industry", definition: "Subset of the financial services industry that comprises all the participants that are instrumental in helping savers invest their money and spenders raise capital in financial markets.", category: "I" },
    { term: "Investment managers", definition: "Investment professionals who receive authority from their clients to trade securities and assets on their behalf. Also called asset managers.", category: "I" },
    { term: "Investment policy statement (IPS)", definition: "A written planning document describing a client's investment objectives—return requirements and risk tolerance—over a relevant time horizon, along with constraints that apply to the client's portfolio. The IPS serves as a guide to what is required and acceptable in the investment portfolio.", category: "I" },
    { term: "Investment risk", definition: "The risk associated with investing that arises from the fluctuation in the value of investments.", category: "I" },
    { term: "Investment vehicles", definition: "Any investment that can be made with the expectation that by putting their money to use, the investor will enjoy some combination of an increase in the value of their money and a stream of cash flows.", category: "I" },
    { term: "Investment-grade bonds", definition: "Bonds rated BBB– or higher by Standard & Poor's and Fitch or Baa3 or higher by Moody's.", category: "I" },
    { term: "Issuers", definition: "Typically companies and governments that sell securities to investors in exchange for cash to raise money.", category: "I" },
    
    // J Terms
    { term: "J curve", definition: "The graphical representation of net cash flow (that is, the cash distributions net of carried interest minus the sum of the capital calls and management fees) for limited partners. It shows that net cash flows are negative in the early years of a fund, but turn positive toward the end of a fund's life.", category: "J" },
    
    // K Terms
    { term: "Keepers", definition: "Parties that monitor collateralised positions in smart contracts and take actions if a position becomes undercollateralised.", category: "K" },
    { term: "Key risk measures", definition: "Measures that provide a warning when risk levels are rising.", category: "K" },
    
    // L Terms
    { term: "Lagging indicators", definition: "Turning points that signal a change in economic activity after output has already changed.", category: "L" },
    { term: "Law of demand", definition: "The economic principle that as the price of a product increases, buyers will buy less of it, and as its price decreases, they will buy more of it.", category: "L" },
    { term: "Law of diminishing returns", definition: "The economic principle that the gain in output from adding variable inputs of one factor, such as labour, will increase at a decreasing rate even if the fixed inputs of production remain unchanged.", category: "L" },
    { term: "Law of supply", definition: "The economic principle that when the price of a product increases, the quantity supplied increases too.", category: "L" },
    { term: "Leading indicators", definition: "Turning points that signal changes in the economy in the future, and thus are considered useful for economic prediction and policy formulation.", category: "L" },
    { term: "Legal risk", definition: "The risk that an external party could sue an organisation for breach of contract or other violations.", category: "L" },
    { term: "Leverage Ratio", definition: "The ratio of a position's value to the value of the equity in it.", category: "L" },
    { term: "Leveraged buyouts", definition: "Buyouts for which the financing of the transaction involves high financial leverage—that is, a high proportion of debt relative to equity.", category: "L" },
    { term: "Limit order", definition: "Instruction to obtain the best price immediately available when filling an order, but a trade cannot be arranged at a price higher than the specified limit price when buying or a price lower than the specified limit price when selling.", category: "L" },
    { term: "Limit price", definition: "Ceiling price for a buy order and floor price for a sell order. A trade cannot be arranged at a price higher than the specified limit price when buying or a price lower than the specified limit price when selling.", category: "L" },
    { term: "Limited liability", definition: "Liability that does not exceed an investor's initial contribution of capital. For example, shareholders are protected by limited liability, which means that higher claimants—particularly debt investors—cannot recover money from the personal assets of the shareholders if the company's assets are insufficient to fully cover their claims.", category: "L" },
    { term: "Limited partners (LPs)", definition: "In a partnership, partners who contribute capital to the partnership. Limited partners are typically investors who are not involved in the selection and management of investments. Unlike general partners, limited partners have limited personal liability.", category: "L" },
    { term: "Liquidity risk", definition: "The risk that an asset or security cannot be bought or sold quickly without a significant concession in price.", category: "L" },
    { term: "Long positions", definition: "Positions for which investors own assets or securities. These positions increase in value when prices rise.", category: "L" },
    { term: "Long-term debt", definition: "Money borrowed from banks or other lenders that is to be repaid during periods of greater than one year.", category: "L" },
    { term: "Luxury product", definition: "A product that has positive own price elasticity of demand—that is, a product for which demand increases as price increases.", category: "L" },
    
    // M Terms
    { term: "Macroeconomics", definition: "The branch of economics that studies the economy as a whole.", category: "M" },
    { term: "Maintenance margin", definition: "The minimum amount of equity an investor must hold in a margin account after a purchase has been made. When an investor buys on margin, there is the potential for a margin call, which occurs when the percentage of equity an investor has in the security falls below the maintenance margin. In these cases, investors must either put up more collateral or sell the security to pay off the margin loan.", category: "M" },
    { term: "Managed account", definition: "An investment service that assembles and manages an investment portfolio for an investor.", category: "M" },
    { term: "Managed floating exchange rate system", definition: "A floating exchange rate system in which the central bank intervenes to stabilise its country's currency, usually to maintain the value of the country's currency within a certain range.", category: "M" },
    { term: "Management fees", definition: "Fees that limited partners must pay general partners to compensate them for managing investments. Management fees are typically set as a percentage of the amount the limited partners have committed rather than the amount that has been invested.", category: "M" },
    { term: "Margin", definition: "Cash or securities that are pledged as collateral.", category: "M" },
    { term: "Margin loan", definition: "Money that investors typically borrow from their brokers to purchase securities. The maximum amount an investor can borrow is often set by the government, the trading venue, or another trading services provider, such as a clearing house. Brokers may lend an investor less than the maximum amount, particularly if the broker wants to limit its exposure to that investor. The load does not have a repayment schedule and must be repaid on demand, including any interest on the borrowed money.", category: "M" },
    { term: "Marginal cost", definition: "The cost of producing an additional unit of a product or service.", category: "M" },
    { term: "Marginal revenue", definition: "The amount of money from selling an additional unit of a product or service.", category: "M" },
    { term: "Market bid–ask spread", definition: "Difference between the best bid price and the best offer price.", category: "M" },
    { term: "Market equilibrium", definition: "The price where quantity demanded equals quantity supplied. At the equilibrium price, demand and supply in the market are balanced, and neither buyers nor sellers have an incentive to try to change the price, all other factors remaining unchanged.", category: "M" },
    { term: "Market manipulation", definition: "Abusive trading practice that involves taking actions intended to move the price of a stock to make a short-term profit.", category: "M" },
    { term: "Market order", definition: "Instructions to obtain the best price immediately available when filling the order.", category: "M" },
    { term: "Market risk", definition: "The risk caused by changes in market conditions affecting prices.", category: "M" },
    { term: "Marking to market", definition: "The settlement of profits or losses based on current spot (market) prices.", category: "M" },
    { term: "Maturity date", definition: "Date when the borrower must repay the amount borrowed.", category: "M" },
    { term: "Median", definition: "The value of the middle term in a data set that has been sorted into ascending or descending order; the value for which as many outcomes are above it as there are below it.", category: "M" },
    { term: "Microeconomics", definition: "The branch of economics that studies how individuals and companies make decisions to allocate scarce resources.", category: "M" },
    { term: "Middle office", definition: "Core activities of a firm, such as risk management, information technology, corporate finance, portfolio management, and research.", category: "M" },
    { term: "Mode", definition: "The most frequently occurring value in a data set.", category: "M" },
    { term: "Model risk", definition: "The risk arising from the use of models and associated with inappropriate underlying assumptions, the unavailability or inaccuracy of historical data, data errors, and misapplication of models.", category: "M" },
    { term: "Monetary policy", definition: "Actions taken by a nation's central bank to affect aggregate output and prices through the money supply or credit.", category: "M" },
    { term: "Money laundering", definition: "A process in which criminals use financial services to transfer money from illegal operations to other legal activities; the money becomes \"clean\" in the process.", category: "M" },
    { term: "Money market funds", definition: "Special class of open-end mutual funds that investors view as uninsured interest-paying bank accounts. Unlike other open-end mutual funds, regulators permit money market funds to accept deposits and satisfy redemptions at a constant price per share if they meet certain conditions.", category: "M" },
    { term: "Monopolistic competition", definition: "A market in which there are many buyers and sellers who are able to differentiate their products to buyers and in which each company may have a limited monopoly because of the differentiation of their products.", category: "M" },
    { term: "Moral hazard", definition: "Tendency of people to be less careful about avoiding losses once they have purchased insurance, potentially leading to losses occurring more often when they are insured than when they are not.", category: "M" },
    { term: "Multiplier effect", definition: "An initial increase (decrease) in spending produces an increase (decrease) in GDP and consumption greater than the initial change in spending.", category: "M" },
    
    // N Terms
    { term: "Net asset value (NAV)", definition: "Total net value of a fund (the value of all assets minus the value of all liabilities) divided by the fund's current total number of shares outstanding.", category: "N" },
    { term: "Net book value", definition: "Calculated as the gross value of an asset minus accumulated depreciation, where accumulated depreciation is the sum of all reported depreciation expenses for the particular asset.", category: "N" },
    { term: "Net exports", definition: "The difference between exports and imports of goods and services; also called balance of trade or trade balance.", category: "N" },
    { term: "Net income", definition: "The difference between revenue and expenses; income available to distribute to shareholders.", category: "N" },
    { term: "Net present value (NPV)", definition: "The present value of future cash flows minus the cost of the investment, or the present value of cash inflows minus the present value of cash outflows.", category: "N" },
    { term: "Net profit margin", definition: "A profitability ratio that indicates how much (percentage) of each monetary unit of revenue is left after all costs and expenses are covered.", category: "N" },
    { term: "No-load funds", definition: "Open end mutual funds that do not charge deposit or redemption fees.", category: "N" },
    { term: "Nominal GDP", definition: "A measure of GDP that uses the current market value of products and services.", category: "N" },
    { term: "Non-current assets", definition: "Assets used over a number of years to generate income for the company; examples include machinery, equipment, buildings, land, and intangible assets.", category: "N" },
    { term: "Non-investment-grade bonds", definition: "Bonds rated BB+ or lower by Standard & Poor's and Fitch and Ba1 or lower by Moody's. Also called high-yield bonds or junk bonds.", category: "N" },
    { term: "Non-tariff barriers", definition: "A range of measures, such as certification, licensing, sanctions, or embargoes, that make it more difficult and expensive for foreign producers to compete with domestic producers.", category: "N" },
    { term: "Normal distribution", definition: "A symmetrical distribution in which the mean, median, and mode are the same value. The distribution is completely described by its mean and variance (or standard deviation).", category: "N" },
    { term: "Normal goods", definition: "Products whose consumption increases as income increases.", category: "N" },
    
    // O Terms
    { term: "Offer exchange rate", definition: "The exchange rate at which the bank or dealer will sell the foreign currency; also called the ask exchange rate.", category: "O" },
    { term: "Offer price", definition: "See ask prices.", category: "O" },
    { term: "Oligopoly", definition: "A market dominated by a small number of large companies because the barriers to entry are high.", category: "O" },
    { term: "Open market operations", definition: "Activities that involve the purchase and sale of government bonds by a central bank.", category: "O" },
    { term: "Open-end mutual funds", definition: "Pooled investment vehicles that have the ability to issue or redeem (repurchase) shares on demand. When investors want to invest in a mutual fund, the fund issues new shares in exchange for cash that the investors deposit. When existing investors want to withdraw money, the fund redeems the investors' shares and pays them cash.", category: "O" },
    { term: "Operating income", definition: "Income generated by the company from its usual business activities before taking into account financing costs and taxes. It is often referred to as earnings before interest and taxes (EBIT).", category: "O" },
    { term: "Operating profit margin", definition: "A profitability ratio calculated as operating income divided by revenue.", category: "O" },
    { term: "Operational risk", definition: "The risk of losses from inadequate or failed people, systems, and internal policies and procedures, as well as from external events that are beyond the control of the organisation but that affect its operations.", category: "O" },
    { term: "Opportunity cost", definition: "The cost of any activity measured in terms of the value of the best alternative that is not chosen; the value that investors forgo by choosing a particular course of action. For example, the cost of not having money to invest, spend, or hold; the cost of giving up opportunities to use money.", category: "O" },
    { term: "Option contract", definition: "An agreement in which the buyer of the option has the right, but not the obligation, to trade the underlying.", category: "O" },
    { term: "Option premium", definition: "The amount paid by the option buyer to the option seller, at the initiation of the option contract, to compensate option sellers for their risk.", category: "O" },
    { term: "Oracle", definition: "Data external to the blockchain that is used in smart contracts.", category: "O" },
    { term: "Order execution instructions", definition: "Instructions on how an order is to be filled, whether filled, for example, as a market order for immediate execution.", category: "O" },
    { term: "Order-driven markets", definition: "Markets that arrange trades using rules to match buy orders with sell orders.", category: "O" },
    { term: "Orders", definition: "Instructions that people who want to trade give brokers or trading venues and that specify what security to trade, whether to buy or sell, and how much should be bought or sold. They also have other instructions attached to them, such as order execution, exposure, and time-in-force instructions.", category: "O" },
    { term: "Outliers", definition: "Values that are unusual compared with the rest of the data set by being especially small or large in numerical value.", category: "O" },
    { term: "Over-the-counter (OTC) markets", definition: "Another name for quote-driven markets dating from when securities were literally traded over a counter in the dealer's office.", category: "O" },
    { term: "Own price elasticity of demand", definition: "The percentage change in the quantity demanded of a product or service as a result of the percentage price change in that product or service.", category: "O" },
    
    // P Terms
    { term: "Par value", definition: "The stated value or face value of a security; the amount the investor would be entitled to receive in a liquidation scenario, which also serves as the principal value on which coupon payments are calculated.", category: "P" },
    { term: "Passive investment managers", definition: "Managers who follow a buy-and-hold approach and seek to match the return and risk of a benchmark.", category: "P" },
    { term: "Payout policies", definition: "Guiding principles that specify how much money an institution, such as a foundation or an endowment fund, can take from long-term funds to use for current spending.", category: "P" },
    { term: "Payments in lieu of dividends", definition: "Payments made to security lenders for dividends paid on stock borrowed in a short sale.", category: "P" },
    { term: "Payments in lieu of interest", definition: "Payments made to security lenders for interest paid on debt security borrowed in a short sale.", category: "P" },
    { term: "Pension plans", definition: "Institutional investors who hold investment portfolios for the benefit of future and current retirees.", category: "P" },
    { term: "Perfectly competitive market", definition: "A market that consists of buyers and sellers trading a uniform commodity and in which there is a high degree of competition.", category: "P" },
    { term: "Performance attribution", definition: "The process of identifying the source of a fund manager's return. Potential sources include asset allocation, sector selection, stock selection, and currency exposure.", category: "P" },
    { term: "Performance bond", definition: "A guarantee, usually provided by a third party, such as an insurance company, to ensure payment in case a party fails to fulfil its contractual obligations.", category: "P" },
    { term: "Performance measurement", definition: "The process of measuring the performance of investments, including the calculation of reward-to-risk ratios.", category: "P" },
    { term: "Physical capital", definition: "The means of production; tangible goods such as equipment, tools, and buildings.", category: "P" },
    { term: "Political risk", definition: "The risk of a change in the ruling political party of a country leads to changes in policies that can affect everything from monetary and fiscal policies to investment incentives, public investments, and procurement.", category: "P" },
    { term: "Pooled investment vehicles", definition: "Investment companies that pool funds from many investors for common management.", category: "P" },
    { term: "Pooled investments", definition: "Investment vehicles in which investors pool their funds to invest, such as a mutual fund. See also collective investment schemes.", category: "P" },
    { term: "Portfolio", definition: "The group of assets in which savings are invested.", category: "P" },
    { term: "Position", definition: "Quantity of an asset or security that a person or institution owns or owes.", category: "P" },
    { term: "Preferred stock", definition: "Also known as preference shares; a type of equity security that ranks between debt securities and common stock. It typically does not carry voting rights but has priority over common stock in the receipt of dividends.", category: "P" },
    { term: "Present value", definition: "The present discounted value of future cash flows.", category: "P" },
    { term: "Price-driven markets", definition: "See quote-driven markets.", category: "P" },
    { term: "Price-to-book ratio (P/B)", definition: "The ratio of a company's share price to its book value per share.", category: "P" },
    { term: "Price-to-earnings ratio (P/E)", definition: "The ratio of a company's share (market) price to its earnings per share.", category: "P" },
    { term: "Price-weighted index", definition: "Indices for which the weight assigned to each security is determined by dividing the price of the security by the sum of all the prices of the securities.", category: "P" },
    { term: "Primary dealers", definition: "Dealers with which central banks trade when conducting monetary policy.", category: "P" },
    { term: "Primary markets", definition: "Markets in which issuers, such as companies and governments, sell their securities to investors.", category: "P" },
    { term: "Prime brokerage", definition: "Bundle of services that brokers provide some of their clients, including typical brokerage services and financing of their clients' positions.", category: "P" },
    { term: "Principal", definition: "The money initially lent on which interest is paid.", category: "P" },
    { term: "Private equity", definition: "A type of alternative investment that consists of investing in private companies—that is, companies that are not listed on a stock exchange.", category: "P" },
    { term: "Private equity partnership", definition: "Partnership that specialises in private equity investments. It usually includes two types of partners: the general partner, which is typically a private equity firm, and limited partners, who are investors contributing capital to the partnership.", category: "P" },
    { term: "Private key", definition: "A type of password used in accessing a crypto wallet.", category: "P" },
    { term: "Private placement", definition: "Type of primary market transaction in which companies sell securities directly to a small group of qualified investors, usually with the assistance of an investment bank.", category: "P" },
    { term: "Producer price index (PPI)", definition: "Reflects the price changes experienced by domestic producers in a country.", category: "P" },
    { term: "Productivity gains", definition: "Increases in the ratio of gross domestic product (GDP) to units of labour expended to produce that GDP; increases in output per unit of labour.", category: "P" },
    { term: "Professional standards", definition: "Guidelines set by professional associations based on fundamental ethical principles to guide the behaviour of individuals within the profession.", category: "P" },
    { term: "Proof of stake", definition: "The validation of the next block in a blockchain, with other validators providing consensus that the next block can be created.", category: "P" },
    { term: "Proof of work (POW)", definition: "The confirmation of a transactions being added to a blockchain.", category: "P" },
    { term: "Proprietary traders", definition: "Traders who trade directly with their clients rather than by arranging trades with others on behalf of their clients.", category: "P" },
    { term: "Prospectus", definition: "Document that discloses the investment policies, deposit and redemption procedures, fees and expenses, and past performance statistics associated with an investment vehicle.", category: "P" },
    { term: "Purchase fees", definition: "Fees paid by an investor in open-end mutual funds instead of front-end and back-end sales loads. See also redemption fees.", category: "P" },
    { term: "Purchasing power parity", definition: "Economic theory based on the principle that a basket of goods in two different countries should cost the same after taking into account the exchange rate between the two countries' currencies.", category: "P" },
    { term: "Pure monopoly", definition: "A market in which there is no competition.", category: "P" },
    { term: "Put option", definition: "The right (but not the obligation) to sell the underlying at the exercise price until expiration.", category: "P" },
    { term: "Putable bond", definition: "A bond that provides bondholders with the right to sell (or put back) their bonds to the issuer prior to the maturity date at a pre-specified price.", category: "P" },
    
    // Q Terms
    { term: "Quick ratio", definition: "A liquidity ratio that indicates a company's ability to satisfy current liabilities with its most liquid assets.", category: "Q" },
    { term: "Quotas", definition: "Limits on the quantity of goods that can be imported.", category: "Q" },
    { term: "Quote-driven markets", definition: "Markets in which investors trade with dealers at the prices quoted by these dealers. See also dealer markets, price-driven markets, or over-the-counter markets.", category: "Q" },
    
    // R Terms
    { term: "Range", definition: "The difference between the highest and lowest values in a data set.", category: "R" },
    { term: "Real assets", definition: "Physical assets, such as land, buildings, machinery, cattle, and gold.", category: "R" },
    { term: "Real estate", definition: "Land and buildings. Also a type of alternative investment that consists of direct and indirect investments in land and buildings.", category: "R" },
    { term: "Real estate equity funds", definition: "Often open-end funds that hold investments in hundreds of commercial properties.", category: "R" },
    { term: "Real estate investment trusts (REITs)", definition: "Public companies that mainly own, and in most cases operate, income-producing real estate.", category: "R" },
    { term: "Real estate limited partnerships", definition: "Partnerships that specialise in real estate investments.", category: "R" },
    { term: "Real GDP", definition: "The value of products and services produced, measured at base-year prices; nominal GDP adjusted for changes in price levels.", category: "R" },
    { term: "Rebalancing", definition: "The process of adjusting the weights of the constituent securities in an index or the weights of assets in a portfolio.", category: "R" },
    { term: "Recession", definition: "A period during which real GDP decreases (i.e., negative growth) for at least two successive quarters, or a period of significant decline in total output, income, employment, and sales lasting more than a few months.", category: "R" },
    { term: "Reference rate", definition: "An interest rate that serves as the benchmark to set the coupon rate of a floating-rate bond.", category: "R" },
    { term: "Regulations", definition: "Rules that set standards for conduct and carry the force of law. They are set and enforced by legislative bodies and by other entities authorised by legislative bodies.", category: "R" },
    { term: "Reinvestment risk", definition: "Risk that in a period of falling interest rates, the periodic coupon payments received during the life of a bond and/or the principal payment received from a bond that is called early must be reinvested at a lower interest rate than the bond's original coupon rate.", category: "R" },
    { term: "Relative returns", definition: "The difference between holding-period returns (absolute returns) and returns on a benchmark over the same holding period.", category: "R" },
    { term: "Reserve currency", definition: "A currency held in significant quantities by many governments and institutions as part of their foreign exchange reserves.", category: "R" },
    { term: "Reserve requirement", definition: "The requirement for banks to hold reserves in proportion to the size of deposits.", category: "R" },
    { term: "Residual claimants", definition: "Investors whose claims rank last. Common shareholders are residual claimants. In the event of a company's liquidation, common shareholders share proportionately in the remaining company assets after all other claimants have been satisfied.", category: "R" },
    { term: "Retail investors", definition: "Individual investors with the least amount of investable assets.", category: "R" },
    { term: "Retained earnings", definition: "The accumulated net income that is retained by the company rather than distributed to its owners (shareholders) as dividends.", category: "R" },
    { term: "Return on assets (ROA)", definition: "A profitability ratio that indicates a company's net income generated per monetary unit invested in total assets.", category: "R" },
    { term: "Return on equity (ROE)", definition: "A profitability ratio calculated as net income divided by average shareholders' equity.", category: "R" },
    { term: "Revenues", definition: "The amount charged (and expected to be received) for the delivery of products or services in the ordinary activities of a business.", category: "R" },
    { term: "Reward-to-risk ratio", definition: "Metric that divides a measure of portfolio holding-period return by a measure of portfolio risk. The higher the value of this metric, the more return an investment portfolio has generated per unit of risk.", category: "R" },
    { term: "Rights offering", definition: "Companies can also raise capital and issue new shares with a rights offering, whereby a company allows shareholders to buy more shares at a fixed price, the exercise price, in proportion to their existing holdings. Shareholders given this option are said to hold pre-emptive rights because they have the right of first refusal on new equity offerings. Without such rights, upon the issuance of new shares, the company could dilute the ownership of existing investors.", category: "R" },
    { term: "Risk", definition: "The effect of uncertain future events on an organisation or on the outcomes the organisation achieves.", category: "R" },
    { term: "Risk appetite", definition: "An organisation's willingness to take on risk, which depends on its attitude toward risk and on its risk culture.", category: "R" },
    { term: "Risk budgeting", definition: "An approach to determining how risk should be allocated among different business units, portfolios, or individuals.", category: "R" },
    { term: "Risk management", definition: "An iterative process used by organisations to support the identification and management of risk (or uncertainty) and reduce the chances and/or effects of adverse events while enhancing the realisation of opportunities and the ability to achieve company objectives.", category: "R" },
    { term: "Risk tolerance", definition: "The level of risk an organisation is able and willing to take on.", category: "R" },
    { term: "Rogue trading", definition: "An example of operational risk wherein traders bypass management controls and place unauthorised trades, at times causing large losses for the firms they work for.", category: "R" },
    
    // S Terms
    { term: "Sampling replication", definition: "The management strategy for an index fund in which the fund invests in only a representative sample of the benchmark index's securities.", category: "S" },
    { term: "Seasoned equity offering", definition: "The issuance by a publicly traded company of additional common shares subsequent to the initial public offering.", category: "S" },
    { term: "Secondaries", definition: "Private equity investment strategy that involves buying or selling existing private equity investments.", category: "S" },
    { term: "Secondary markets", definition: "Market in which investors trade securities and contracts with each other but not with the original security issuer.", category: "S" },
    { term: "Securities", definition: "Financial assets that can be traded, such as shares and bonds.", category: "S" },
    { term: "Security lenders", definition: "Investors who have long positions and lend their securities to short sellers.", category: "S" },
    { term: "Security lending agreements", definition: "Agreements between the security lender and short sellers such that the short sellers will pay to the lenders all dividends or interest that the lender would have received on the security.", category: "S" },
    { term: "Security market index", definition: "A group of securities representing a given security market, market segment, or asset class.", category: "S" },
    { term: "Securitisation", definition: "Creation of new financial products by buying and repackaging securities or other assets; the creation and issuance of new debt securities that are backed by a pool of other debt securities.", category: "S" },
    { term: "Sell-side analysts", definition: "Analysts who work for the organisations, typically an investment bank, that sell securities. They collect and analyse information about a company and its competitors and then prepare a report that is shared with potential investors.", category: "S" },
    { term: "Sell-side firms", definition: "Typically, investment banks, brokers, and dealers that provide investment products and services.", category: "S" },
    { term: "Seniority ranking", definition: "A priority of claims among a company's providers of capital, which affects the amounts investors will receive upon the company's liquidation and, in the case of equity capital, the order in which dividends are paid.", category: "S" },
    { term: "Settlement", definition: "Activity that consists of the final exchange of cash for securities following a trade.", category: "S" },
    { term: "Settlement risk", definition: "The risk that when settling a transaction, a firm performs one side of the deal but the counterparty does not complete its side of the deal as agreed, often because it has declared bankruptcy.", category: "S" },
    { term: "Share repurchase", definition: "A transaction in which a company uses its cash to buy back its own shares from existing shareholders. This transaction reduces the number of shares outstanding.", category: "S" },
    { term: "Shareholders", definition: "The owners of shares (stock) of a corporation.", category: "S" },
    { term: "Sharpe ratio", definition: "A reward-to-risk ratio defined as the excess portfolio return (portfolio return minus risk-free return) over the standard deviation of portfolio returns.", category: "S" },
    { term: "Shelf registration", definition: "Sale of new issues of seasoned securities directly to the public little by little over a long period of time rather than in a single transaction.", category: "S" },
    { term: "Short positions", definition: "Positions for which investors sell assets or securities that they do not own, a process that involves borrowing the assets or securities, selling them, and repurchasing them later to return them to their owner. These positions increase in value when prices fall.", category: "S" },
    { term: "Simple interest rate", definition: "The cost to the borrower or the rate of return to the lender, per period, on the original principal borrowed.", category: "S" },
    { term: "Skewed", definition: "A distribution is skewed when the bulk (majority) of the values (possibly including the median) lie either to the right or to the left of the mean; the distribution is not symmetrical.", category: "S" },
    { term: "Smart contract", definition: "A transaction protocol that automatically records, executes, and controls processes or transactions for the parties to an agreement using a blockchain network.", category: "S" },
    { term: "Sovereign risk", definition: "The risk that a foreign government will not repay its debt because it does not have either the ability or the willingness to do so.", category: "S" },
    { term: "Sovereign wealth funds", definition: "Funds created by governments to invest surpluses for the benefit of current and future generations of their citizens.", category: "S" },
    { term: "Specific risk", definition: "Risk that is specific to a certain company (e.g., risk of poor performance due to a number of factors including, but not limited to, increased competition, operational challenges, and increased regulatory oversight) or security. Also called idiosyncratic, non-systemic, or unsystematic risk.", category: "S" },
    { term: "Spinoff", definition: "A form of restructuring in which a company creates a new entity and distributes the shares of this new entity to existing shareholders in the form of a non-cash dividend. Shareholders end up owning stock in two different companies.", category: "S" },
    { term: "Sponsor", definition: "An organizer of a pooled investment vehicle, which may be organize the vehicle in the form of a trust, a limited partnership, or a limited liability company.", category: "S" },
    { term: "Spot market", definition: "Foreign exchange market in which currencies are traded now and delivered immediately.", category: "S" },
    { term: "Spot rate", definition: "The exchange rate for spot market transactions.", category: "S" },
    { term: "Stablecoin", definition: "Cryptocurrency that is pegged to another asset or a basket of assets.", category: "S" },
    { term: "Stagflation", definition: "When a high inflation rate is combined with a high level of unemployment and a slowdown of the economy.", category: "S" },
    { term: "Standard deviation", definition: "A measure, in the same units as the original data, of the variability, volatility, or dispersion of a data set around the average value of that data set (i.e., the arithmetic mean). It is the positive square root of the variance.", category: "S" },
    { term: "Statement of cash flows", definition: "A financial statement that identifies the sources and uses of cash over a time period and explains the change in the company's reported cash balance during the period.", category: "S" },
    { term: "Sterling Overnight Index Average (SONIA)", definition: "The effective overnight interest rate paid by banks for unsecured transaction in the British sterling market; used as a reference, or benchmark, interest rate for short-term financial transactions.", category: "S" },
    { term: "Stock dividend", definition: "A transaction in which a company distributes additional shares of its common stock to shareholders instead of cash. This transaction increases the number of shares outstanding but does not affect the company's value because the stock price decreases accordingly.", category: "S" },
    { term: "Stock split", definition: "A transaction in which a company increases the number of shares outstanding. For example, in a two-for-one stock split, the company doubles the number of shares outstanding and the stock price is halved, but the company's value is unaffected.", category: "S" },
    { term: "Stop order", definition: "Order for which a trader has specified a stop price, a price that triggers the conversion of a stop order into a market order. The stop order may not be filled until a trade occurs at or above the stop price for a buy order and at or below the stop price for a sell order.", category: "S" },
    { term: "Stop price", definition: "Price that triggers the conversion of a stop order into a market order.", category: "S" },
    { term: "Strategic asset allocation", definition: "The long-term mix of assets that is expected to achieve the client's long-term objectives, given the client's investment constraints.", category: "S" },
    { term: "Substitute product", definition: "A product that could generally take the place of (substitute for) another product.", category: "S" },
    { term: "Supply", definition: "The quantity of a product or service sellers are willing and able to sell at a given price.", category: "S" },
    { term: "Supply curve", definition: "The curve that shows the quantity of a product or service supplied at different prices.", category: "S" },
    { term: "Swaps", definition: "Derivatives in which two parties swap cash flows or other financial instruments over multiple periods (months or years) for mutual benefit, usually to manage risk.", category: "S" },
    { term: "Systematic risk", definition: "The risk created by general economic conditions that affect all risky investments. Systematic risk factors include changes in macroeconomic conditions, interest rate risk, and political risk, among others. Also called market risk.", category: "S" },
    { term: "Systemic failure", definition: "Failure of the financial system as a whole, including loss of access to credit and collapse of capital markets.", category: "S" },
    
    // T Terms
    { term: "Tactical asset allocation", definition: "The decision to deliberately deviate from the strategic asset allocation in an attempt to add value based on forecasts of the short-term relative performance of asset classes.", category: "T" },
    { term: "Tariffs", definition: "Taxes (duties) levied on imported goods and services, which allow governments not only to establish trade barriers but also to raise revenue.", category: "T" },
    { term: "Tax haven", definition: "A country with low or no tax on income, with financial centers that facilitate banking such that businesses and individuals avoid taxes in their home country.", category: "T" },
    { term: "Tax-advantaged accounts", definition: "Accounts that allow investors to avoid paying taxes on investment income and capital gains as they earn them. In exchange for these privileges, investors must accept stringent restrictions on when the money can be withdrawn from the account and sometimes on how the money can be used.", category: "T" },
    { term: "Term structure of interest rates", definition: "The relationship between the yields to maturity offered by government bonds and the maturities of these government bonds.", category: "T" },
    { term: "Time-in-force instructions", definition: "Order execution instructions that indicate when an order can be filled.", category: "T" },
    { term: "Time-weighted rate of return", definition: "A measure of investment performance in which the overall measurement period is divided into sub-periods. The timing of each individual cash flow is identified and then defines the beginning of the sub-period in which it occurs.", category: "T" },
    { term: "Total asset turnover", definition: "A measure that indicates the volume of revenues being generated by the assets used in the business, or how effectively the company uses its assets to generate revenue.", category: "T" },
    { term: "Total return", definition: "The return generated for investors over a specific time frame, usually annually; also called holding-period return. Total return includes income and dividends received on investments and capital gains and losses.", category: "T" },
    { term: "Total return swap", definition: "The total return from an asset — a stock or an index — exchanged for a fixed rate, allowing an investor paying the fixed rate obligation to receive the capital appreciation or depreciation, and dividend payments, of a stock or an index.", category: "T" },
    { term: "Trade barriers", definition: "Restrictions, typically imposed by governments, on the free exchange of goods and services.", category: "T" },
    { term: "Trade deficits", definition: "When the value of exports is lower than the value of imports.", category: "T" },
    { term: "Trade execution", definition: "An agreement in which the seller and buyer have agreed upon a price of a security.", category: "T" },
    { term: "Trade surplus", definition: "When the value of exports is higher than the value of imports.", category: "T" },
    { term: "Tracking error", definition: "The standard deviation of the differences between the deviation over time of the returns on a portfolio and the returns on its benchmark; a synonym of active risk.", category: "T" },
    { term: "Transaction costs", definition: "Costs associated with trading, which include explicit costs (mainly brokerage commissions) and implicit costs (bid–ask spreads, price impact, and opportunity costs).", category: "T" },
    { term: "Transfer agent", definition: "Typically a bank or trust company that maintains a registry of who owns companies' securities.", category: "T" },
    { term: "Treynor ratio", definition: "A reward-to-risk ratio defined as the excess portfolio return (portfolio return minus risk-free return) over the beta of portfolio returns.", category: "T" },
    
    // U Terms
    { term: "Underlying", definition: "The asset, event, or outcome on which the value of a derivative is dependant.", category: "U" },
    { term: "Underwritten offerings", definition: "Type of public offering in which the (lead) investment bank guarantees the sale of the securities at an offering price that is negotiated with the issuer.", category: "U" },
    
    // V Terms
    { term: "Value at risk (VaR)", definition: "An estimate of the minimum loss of value that can be expected for a given period within a given level of probability.", category: "V" },
    { term: "Variable costs", definition: "Costs that fluctuate with the level of output of the company.", category: "V" },
    { term: "Variance", definition: "A measure of dispersion that is equal to the standard deviation squared (i.e., the standard deviation multiplied by itself).", category: "V" },
    { term: "Venture capital", definition: "Private equity investment strategy that consists of financing \"start-up\" companies that exist merely as an idea or a business plan.", category: "V" },
    { term: "Voting rights", definition: "The rights of shareholders to vote—for example, to elect the members of the board of directors.", category: "V" },
    
    // W Terms
    { term: "Warrant", definition: "An equity-like security that entitles the holder to buy a pre-specified amount of common stock of the issuing company at a pre-specified stock price prior to a pre-specified expiration date.", category: "W" },
    { term: "Wrap account", definition: "Accounts that give retail investors access to services of fee-based investment professionals and wrap charges for investment services, such as brokerage, investment advice, financial planning, and investment accounting, into a single flat fee.", category: "W" },
    
    // Y Terms
    { term: "Yield curve", definition: "Term structure of interest rates presented in graphical form.", category: "Y" },
    { term: "Yield to maturity (YTM)", definition: "The discount rate that equates the present value of a bond's promised cash flows to its market price.", category: "Y" },
    
    // Z Terms
    { term: "Zero-coupon bonds", definition: "Bonds that do not offer periodic interest payments during the life of the bond. The only cash flow offered by a zero-coupon bond is a single payment equal to the bond's par value to be paid on the bond's maturity date.", category: "Z" }
  ];

  const filteredTerms = financialGlossary.filter(item => 
    searchTerm.trim() === "" || 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Group terms by category
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {} as Record<string, typeof financialGlossary>);

  const sortedCategories = Object.keys(groupedTerms).sort();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search terms..." 
              value={searchTerm} 
              onChange={handleSearch} 
              className="max-w-sm pl-10" 
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4" style={{ scrollbarWidth: 'auto' }}>
          <div className="space-y-6">
            {sortedCategories.map((category) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-lg font-bold px-3 py-1">
                    {category}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {groupedTerms[category].map((item, index) => (
                    <div key={index} className="border-b border-border/40 pb-3 last:border-b-0">
                      <h3 className="font-semibold text-foreground mb-1">{item.term}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {filteredTerms.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No matching terms found.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default GlossaryTab;
