
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
    { term: "Active investment managers", definition: "Investment managers who try to predict which securities and assets will outperform or underperform comparable securities and assets and who act on their opinions by buying the securities and assets that they expect to outperform and selling (or simply not buying) the securities and assets that they expect to underperform.", category: "A" },
    { term: "Adverse selection", definition: "Tendency of people who are most at risk to buy insurance, causing insured losses to be greater than average losses.", category: "A" },
    { term: "Ask price", definition: "Prices at which a dealer is willing to sell an asset or a security, typically qualified by a maximum quantity (ask size). Also called offer price.", category: "A" },
    { term: "Asset allocation", definition: "The process to determine the proportion of a portfolio to hold in various asset classes or the proportion of a portfolio held in various asset classes.", category: "A" },
    { term: "Assets", definition: "Items that have value and include real assets and financial assets.", category: "A" },
    { term: "Assets under management (AUM)", definition: "The market value of an investment portfolio that is managed by an investment manager.", category: "A" },
    { term: "Automated market marker (AMM)", definition: "A program that allows for trading in decentralized exchanges, pricing assets using algorithms.", category: "A" },
    
    // B Terms
    { term: "Back office", definition: "Administrative and support functions necessary to run the firm, including accounting, human resources, payroll, and operations.", category: "B" },
    { term: "Banks", definition: "Financial institutions that collect deposits from savers and transform them into loans to borrowers.", category: "B" },
    { term: "Bid price", definition: "Price at which a dealer is willing to buy an asset or a security, typically qualified by a maximum quantity (bid size).", category: "B" },
    { term: "Block brokers", definition: "Brokers who help investors who want to trade large blocks of securities.", category: "B" },
    { term: "Blockchain", definition: "A system of record-keeping that is maintained by independent computers in a peer-to-peer (decentralised) network.", category: "B" },
    { term: "Brokerage services", definition: "Trading services provided to clients who want to buy and sell securities; they include not only execution services (that is, processing orders on behalf of clients) but also investment advice and research.", category: "B" },
    { term: "Brokers", definition: "Trading services providers who act as agents and, in exchange for a commission, arrange trades by finding sellers for their clients who want to buy and buyers for their clients who want to sell.", category: "B" },
    { term: "Buy-side analysts", definition: "Analysts who work for organisations, typically a type of institutional investor, that buy securities. They analyse data about companies and the markets in which they operate and review potential investments.", category: "B" },
    { term: "Buy-side firms", definition: "Institutional investors and investment managers who purchase investment products and services from sell-side firms.", category: "B" },
    { term: "Back-end sales loads", definition: "Fees associated with open-end mutual funds that are paid at the time of the sale of mutual fund interests.", category: "B" },
    { term: "Best efforts offering", definition: "Type of public offering in which the investment bank acts only as a broker and does not take the risk of having to buy securities.", category: "B" },
    { term: "Bought deal", definition: "An underwriting arrangement whereby the underwriter buys the securities issue from the issuer and then sells the securities to investors. See also firm commitment agreement.", category: "B" },
    { term: "Brokered markets", definition: "Markets in which brokers arrange trades among their clients, particularly for such assets as large blocks of securities or real estate that are unique and thus of interest as potential investments to only a limited number of investors.", category: "B" },
    { term: "Buying on margin", definition: "When an investor uses a margin loan to purchase securities, this action is referred to as 'buying on margin'. See also margin loan.", category: "B" },
    
    // C Terms
    { term: "Capitalism", definition: "An economic system that promotes private ownership as the means of production and markets as the means of allocating scarce resources.", category: "C" },
    { term: "Clearing", definition: "All activities that occur from the arrangement of the trade to its settlement.", category: "C" },
    { term: "Clearing houses", definition: "Trading services providers that arrange for final settlement of trades.", category: "C" },
    { term: "Credit rating agencies", definition: "Investment research service providers that specialise in providing opinions about the credit quality of bonds and of their issuers.", category: "C" },
    { term: "Cryptocurrency", definition: "A digital currency composed of encrypted data that acts as a medium of exchange.", category: "C" },
    { term: "Custodians", definition: "Typically, banks and brokerage firms that hold money and securities for safekeeping on behalf of their clients.", category: "C" },
    { term: "Call market", definition: "Market in which trades can be arranged only when the market is called, which is usually once a day.", category: "C" },
    { term: "Capitalisation-weighted indices", definition: "Indices for which the weight assigned to each security depends on the security's market capitalisation—that is, the market price of the security multiplied by the number of units outstanding of the security. See also cap-weighted, market weighted, or value-weighted indices.", category: "C" },
    { term: "Churning", definition: "Excessive trading to increase commissions.", category: "C" },
    { term: "Closed-end funds", definition: "Pooled investment vehicles that have a fixed number of shares and thus do not issue or redeem shares on demand. Investors who want to buy or sell closed-end funds must trade with investors willing to sell or buy these funds.", category: "C" },
    { term: "Collateral", definition: "Specific assets (generally a tangible asset) that a borrower pledges to a lender to secure a loan.", category: "C" },
    { term: "Commingled account", definition: "Pooling together the capital of two or more investors, which is then jointly managed.", category: "C" },
    { term: "Confirmation", definition: "Clearing activity that takes place before settlement in which the buyer and seller must confirm that they traded and the exact terms of their trade.", category: "C" },
    { term: "Continuous trading market", definition: "Market in which trades can be arranged and executed any time the market is open.", category: "C" },
    { term: "Crossing network", definition: "Type of alternative trading venue in which an electronic trading system matches buyers and sellers who are willing to trade at prices obtained from exchanges or other alternative trading venues but who are concerned about moving the price of the securities by submitting an order to an exchange.", category: "C" },
    { term: "Crypto wallet", definition: "Digital account that enables the user to access cryptocurrency and transact on a blockchain.", category: "C" },
    
    // D Terms
    { term: "Data vendors", definition: "Investment research service providers of historical and real-time data about companies and market conditions.", category: "D" },
    { term: "Dealers", definition: "Trading services providers who participate in their clients' trades and stand ready to buy or sell when their clients want to sell or buy, providing liquidity and profiting when they can buy securities for less than they sell them. Also called market makers.", category: "D" },
    { term: "Depositories", definition: "Typically, banks and brokerage firms that are regulated and act not only as custodians but also as monitors, playing an important role in preventing investment fraud.", category: "D" },
    { term: "Deposit-taking institutions", definition: "Financial institutions that take deposits, such as banks; also called depository institutions.", category: "D" },
    { term: "Direct finance", definition: "When providers and users of capital interact, the providers usually have a direct claim on the users (e.g., right to certain assets and earnings generated by the user). See also direct investments.", category: "D" },
    { term: "Dark pools", definition: "Type of alternative trading venue that does not display orders from clients to other market participants.", category: "D" },
    { term: "Day orders", definition: "Order execution instructions in which the order can only be executed on the day submitted, with cancelling at the end of the day.", category: "D" },
    { term: "Dealer markets", definition: "See quote-driven markets.", category: "D" },
    { term: "Direct investments", definition: "Purchase of securities issued by companies, governments, and individuals and of real assets, such as real estate, art, or timber.", category: "D" },
    { term: "Direct Listing", definition: "Permits raising capital outside of the traditional IPO process.", category: "D" },
    { term: "Distributed ledger", definition: "A database that is shared among many parties and is not controlled by a single entity, but rather involves many independent computers recording and confirming the transactions.", category: "D" },
    
    // E Terms
    { term: "Endowment funds", definition: "Long-term funds owned by non-profit institutions.", category: "E" },
    { term: "Ethical dilemmas", definition: "Situations in which values, interests, and/or rules potentially conflict.", category: "E" },
    { term: "Ethical standards", definition: "Principles that support and promote desired values or behaviours.", category: "E" },
    { term: "Ethics", definition: "A set of moral principles, or the principles of conduct governing an individual or a group.", category: "E" },
    { term: "Equal-weighted indices", definition: "Indices for which an equal weight is assigned to each security included in the index.", category: "E" },
    { term: "Exchange-traded funds (ETFs)", definition: "Pooled investment vehicles that are typically passively managed to track a particular index or sector and that trade continuously as common stocks on exchanges or through dealers.", category: "E" },
    { term: "Exercise price", definition: "Specified in an options contract, the price to trade the underlying in the future. Also called the strike price.", category: "E" },
    { term: "Experienced investor", definition: "An investor, whether an individual or a business, that has sufficient net worth and investing experience defined by regulator. Also known as an accredited investor.", category: "E" },
    
    // F Terms
    { term: "Financial assets", definition: "Claims on other assets; for example, a share of stock represents ownership in a company or a claim to some of the company's assets and earnings.", category: "F" },
    { term: "Financial capital", definition: "Money provided to individuals, companies, and governments to finance their needs.", category: "F" },
    { term: "Financial institutions", definition: "Financial intermediaries, such as banks and insurance companies, whose role is to collect money from savers and to invest it in financial assets.", category: "F" },
    { term: "Financial intermediaries", definition: "Organisations that act as middlemen between those who have money and those who need money.", category: "F" },
    { term: "Financial markets", definition: "Places where buyers and sellers can trade securities; also called securities markets or capital markets.", category: "F" },
    { term: "Financial planners", definition: "Investment professionals who help their clients set their financial goals and determine how much money they should save for future expenses and/or how much money they can spend on current expenses while still preserving their capital.", category: "F" },
    { term: "Financial services industry", definition: "Industry that offers a range of products and services to those who have money to invest and those who need money and help channel funds between them.", category: "F" },
    { term: "Fintech", definition: "Refers to technology-driven innovation in the financial services industry, and can also refer to companies — often new, start-up companies — involved in developing these technologies and to the wider sector they are a part of.", category: "F" },
    { term: "Foundations", definition: "Grant-making institutions funded by gifts and by the investment income that they produce.", category: "F" },
    { term: "Fraud", definition: "Intentional deception, such as deliberately causing or falsely reporting losses to collect insurance settlements.", category: "F" },
    { term: "Front office", definition: "Client-facing activities that provide direct revenue generation, such as sales, marketing, and customer service activities.", category: "F" },
    { term: "Front-running", definition: "The act of placing an order ahead of a customer's order to take advantage of the price impact that the customer's order will have.", category: "F" },
    { term: "Firm commitment agreement", definition: "See bought deal.", category: "F" },
    { term: "Front-end sales loads", definition: "Fees associated with open-end mutual funds that are paid at the time of purchase of mutual fund interests.", category: "F" },
    { term: "Full replication", definition: "The management strategy for an index fund in which the fund invests in every security in the benchmark index.", category: "F" },
    { term: "Funds of funds (FOF)", definition: "Investment vehicles that invest in other funds.", category: "F" },
    
    // G Terms
    { term: "Gas", definition: "In the context of Ethereum, a transactions fee.", category: "G" },
    { term: "Good-until-cancelled orders", definition: "Order execution instructions what can be executed until they are cancelled.", category: "G" },
    
    // H Terms
    { term: "High-net-worth investors", definition: "Individual investors with a higher amount of investable assets relative to retail investors.", category: "H" },
    { term: "Hash", definition: "A set of code that converts data into encrypted output in a blockchain.", category: "H" },
    { term: "Hedge funds", definition: "Private investment pools that investment managers organise and manage. They are characterised by their availability to only a limited number of investors, agreements that lock up the investors' capital for fixed periods, and performance-based managerial compensation.", category: "H" },
    { term: "Hidden orders", definition: "Orders that are only seen by the brokers or trading venues that receive them and cannot be seen by other traders until the orders can be filled.", category: "H" },
    { term: "High-water mark", definition: "Highest value, net of fees, that a fund has reached in the past. The investment manager usually earns the performance fee only if the fund is above its high-water mark.", category: "H" },
    { term: "Hurdle rate", definition: "Minimum annual rate of return that the fund must generate before the investment manager can receive a performance fee.", category: "H" },
    
    // I Terms
    { term: "Indirect finance", definition: "The use of financial intermediaries to find and channel funds between providers and users of capital. Because financial intermediaries sit between providers and users, the former do not have direct claims on the latter. See also indirect investments.", category: "I" },
    { term: "Insider trading", definition: "Trading while in possession of material non-public information.", category: "I" },
    { term: "Insurance companies", definition: "Financial institutions that help individuals and companies offset the risks they face; also among the largest investors.", category: "I" },
    { term: "Investment banks", definition: "Financial intermediaries that assist companies and governments raise capital and can provide other services, such as strategic advisory services, brokerage and dealing services, and research services; also known as merchant banks.", category: "I" },
    { term: "Investment industry", definition: "Subset of the financial services industry that comprises all the participants that are instrumental in helping savers invest their money and spenders raise capital in financial markets.", category: "I" },
    { term: "Investment managers", definition: "Investment professionals who receive authority from their clients to trade securities and assets on their behalf. Also called asset managers.", category: "I" },
    { term: "Immediate or cancel (IOC) orders", definition: "Order execution instructions that are only executed upon immediate received by the broker or trading venue.", category: "I" },
    { term: "Index fund", definition: "A portfolio of securities structured to track the returns of a specific index called the benchmark index.", category: "I" },
    { term: "Index rebalancing", definition: "The process of adjusting the weights of the securities in an index. That is, the weights given to securities whose prices have risen must be decreased and the weights given to securities whose prices have fallen must be increased.", category: "I" },
    { term: "Index reconstitution", definition: "The process of adding or removing securities included in the index.", category: "I" },
    { term: "Indirect investments", definition: "Purchase of securities of companies, trusts, and partnerships that make direct investments, such as shares in mutual funds and exchange-traded funds, limited partnership interests in hedge funds, asset-backed securities, and interests in pension funds, foundation funds, and endowment funds.", category: "I" },
    { term: "Initial public offering (IPO)", definition: "The first issuance of common shares to the public by a formerly private corporation.", category: "I" },
    { term: "Investment vehicles", definition: "Any investment that can be made with the expectation that by putting their money to use, the investor will enjoy some combination of an increase in the value of their money and a stream of cash flows.", category: "I" },
    { term: "Issuers", definition: "Typically companies and governments that sell securities to investors in exchange for cash to raise money.", category: "I" },
    
    // K Terms
    { term: "Keepers", definition: "Parties that monitor collateralised positions in smart contracts and take actions if a position becomes undercollateralised.", category: "K" },
    
    // L Terms
    { term: "Leverage Ratio", definition: "The ratio of a position's value to the value of the equity in it.", category: "L" },
    { term: "Limit order", definition: "Instruction to obtain the best price immediately available when filling an order, but a trade cannot be arranged at a price higher than the specified limit price when buying or a price lower than the specified limit price when selling.", category: "L" },
    { term: "Limit price", definition: "Ceiling price for a buy order and floor price for a sell order. A trade cannot be arranged at a price higher than the specified limit price when buying or a price lower than the specified limit price when selling.", category: "L" },
    { term: "Long positions", definition: "Positions for which investors own assets or securities. These positions increase in value when prices rise.", category: "L" },
    
    // M Terms
    { term: "Market manipulation", definition: "Abusive trading practice that involves taking actions intended to move the price of a stock to make a short-term profit.", category: "M" },
    { term: "Middle office", definition: "Core activities of a firm, such as risk management, information technology, corporate finance, portfolio management, and research.", category: "M" },
    { term: "Money laundering", definition: "A process in which criminals use financial services to transfer money from illegal operations to other legal activities; the money becomes \"clean\" in the process.", category: "M" },
    { term: "Moral hazard", definition: "Tendency of people to be less careful about avoiding losses once they have purchased insurance, potentially leading to losses occurring more often when they are insured than when they are not.", category: "M" },
    { term: "Maintenance margin", definition: "The minimum amount of equity an investor must hold in a margin account after a purchase has been made. When an investor buys on margin, there is the potential for a margin call, which occurs when the percentage of equity an investor has in the security falls below the maintenance margin. In these cases, investors must either put up more collateral or sell the security to pay off the margin loan.", category: "M" },
    { term: "Managed account", definition: "An investment service that assembles and manages an investment portfolio for an investor.", category: "M" },
    { term: "Margin", definition: "Cash or securities that are pledged as collateral.", category: "M" },
    { term: "Margin loan", definition: "Money that investors typically borrow from their brokers to purchase securities. The maximum amount an investor can borrow is often set by the government, the trading venue, or another trading services provider, such as a clearing house. Brokers may lend an investor less than the maximum amount, particularly if the broker wants to limit its exposure to that investor. The load does not have a repayment schedule and must be repaid on demand, including any interest on the borrowed money.", category: "M" },
    { term: "Market bid–ask spread", definition: "Difference between the best bid price and the best offer price.", category: "M" },
    { term: "Market order", definition: "Instructions to obtain the best price immediately available when filling the order.", category: "M" },
    { term: "Money market funds", definition: "Special class of open-end mutual funds that investors view as uninsured interest-paying bank accounts. Unlike other open-end mutual funds, regulators permit money market funds to accept deposits and satisfy redemptions at a constant price per share if they meet certain conditions.", category: "M" },
    
    // N Terms
    { term: "Net asset value (NAV)", definition: "Total net value of a fund (the value of all assets minus the value of all liabilities) divided by the fund's current total number of shares outstanding.", category: "N" },
    { term: "No-load funds", definition: "Open end mutual funds that do not charge deposit or redemption fees.", category: "N" },
    
    // O Terms
    { term: "Offer price", definition: "See ask prices.", category: "O" },
    { term: "Open-end mutual funds", definition: "Pooled investment vehicles that have the ability to issue or redeem (repurchase) shares on demand. When investors want to invest in a mutual fund, the fund issues new shares in exchange for cash that the investors deposit. When existing investors want to withdraw money, the fund redeems the investors' shares and pays them cash.", category: "O" },
    { term: "Opportunity cost", definition: "A forgone chance to make a profit.", category: "O" },
    { term: "Oracle", definition: "Data external to the blockchain that is used in smart contracts.", category: "O" },
    { term: "Order execution instructions", definition: "Instructions on how an order is to be filled, whether filled, for example, as a market order for immediate execution.", category: "O" },
    { term: "Order-driven markets", definition: "Markets that arrange trades using rules to match buy orders with sell orders.", category: "O" },
    { term: "Orders", definition: "Instructions that people who want to trade give brokers or trading venues and that specify what security to trade, whether to buy or sell, and how much should be bought or sold. They also have other instructions attached to them, such as order execution, exposure, and time-in-force instructions.", category: "O" },
    { term: "Over-the-counter (OTC) markets", definition: "Another name for quote-driven markets dating from when securities were literally traded over a counter in the dealer's office.", category: "O" },
    
    // P Terms
    { term: "Passive investment managers", definition: "Managers who follow a buy-and-hold approach and seek to match the return and risk of a benchmark.", category: "P" },
    { term: "Payout policies", definition: "Guiding principles that specify how much money an institution, such as a foundation or an endowment fund, can take from long-term funds to use for current spending.", category: "P" },
    { term: "Pension plans", definition: "Institutional investors who hold investment portfolios for the benefit of future and current retirees.", category: "P" },
    { term: "Physical capital", definition: "The means of production; tangible goods such as equipment, tools, and buildings.", category: "P" },
    { term: "Portfolio", definition: "The group of assets in which savings are invested.", category: "P" },
    { term: "Primary dealers", definition: "Dealers with which central banks trade when conducting monetary policy.", category: "P" },
    { term: "Prime brokerage", definition: "Bundle of services that brokers provide some of their clients, including typical brokerage services and financing of their clients' positions.", category: "P" },
    { term: "Professional standards", definition: "Guidelines set by professional associations based on fundamental ethical principles to guide the behaviour of individuals within the profession.", category: "P" },
    { term: "Proprietary traders", definition: "Traders who trade directly with their clients rather than by arranging trades with others on behalf of their clients.", category: "P" },
    { term: "Payments in lieu of dividends", definition: "Payments made to security lenders for dividends paid on stock borrowed in a short sale.", category: "P" },
    { term: "Payments in lieu of interest", definition: "Payments made to security lenders for interest paid on debt security borrowed in a short sale.", category: "P" },
    { term: "Pooled investments", definition: "Investment vehicles in which investors pool their funds to invest, such as a mutual fund. See also collective investment schemes.", category: "P" },
    { term: "Position", definition: "Quantity of an asset or security that a person or institution owns or owes.", category: "P" },
    { term: "Price-driven markets", definition: "See quote-driven markets.", category: "P" },
    { term: "Price-weighted index", definition: "Indices for which the weight assigned to each security is determined by dividing the price of the security by the sum of all the prices of the securities.", category: "P" },
    { term: "Primary markets", definition: "Markets in which issuers, such as companies and governments, sell their securities to investors.", category: "P" },
    { term: "Private key", definition: "A type of password used in accessing a crypto wallet.", category: "P" },
    { term: "Private placement", definition: "Type of primary market transaction in which companies sell securities directly to a small group of qualified investors, usually with the assistance of an investment bank.", category: "P" },
    { term: "Proof of stake", definition: "The validation of the next block in a blockchain, with other validators providing consensus that the next block can be created.", category: "P" },
    { term: "Proof of work (POW)", definition: "The confirmation of a transactions being added to a blockchain.", category: "P" },
    { term: "Prospectus", definition: "Document that discloses the investment policies, deposit and redemption procedures, fees and expenses, and past performance statistics associated with an investment vehicle.", category: "P" },
    { term: "Purchase fees", definition: "Fees paid by an investor in open-end mutual funds instead of front-end and back-end sales loads. See also redemption fees.", category: "P" },
    
    // Q Terms
    { term: "Quote-driven markets", definition: "Markets in which investors trade with dealers at the prices quoted by these dealers. See also dealer markets, price-driven markets, or over-the-counter markets.", category: "Q" },
    
    // R Terms
    { term: "Real assets", definition: "Physical assets, such as land, buildings, machinery, cattle, and gold.", category: "R" },
    { term: "Regulations", definition: "Rules that set standards for conduct and carry the force of law. They are set and enforced by legislative bodies and by other entities authorised by legislative bodies.", category: "R" },
    { term: "Retail investors", definition: "Individual investors with the least amount of investable assets.", category: "R" },
    { term: "Rights offering", definition: "Companies can also raise capital and issue new shares with a rights offering, whereby a company allows shareholders to buy more shares at a fixed price, the exercise price, in proportion to their existing holdings. Shareholders given this option are said to hold pre-emptive rights because they have the right of first refusal on new equity offerings. Without such rights, upon the issuance of new shares, the company could dilute the ownership of existing investors.", category: "R" },
    
    // S Terms
    { term: "Securities", definition: "Financial assets that can be traded, such as shares and bonds.", category: "S" },
    { term: "Sell-side analysts", definition: "Analysts who work for the organisations, typically an investment bank, that sell securities. They collect and analyse information about a company and its competitors and then prepare a report that is shared with potential investors.", category: "S" },
    { term: "Sell-side firms", definition: "Typically, investment banks, brokers, and dealers that provide investment products and services.", category: "S" },
    { term: "Settlement", definition: "Activity that consists of the final exchange of cash for securities following a trade.", category: "S" },
    { term: "Settlement risk", definition: "The risk that when settling a transaction, a firm performs one side of the deal but the counterparty does not complete its side of the deal as agreed, often because it has declared bankruptcy.", category: "S" },
    { term: "Sovereign wealth funds", definition: "Funds created by governments to invest surpluses for the benefit of current and future generations of their citizens.", category: "S" },
    { term: "Systemic failure", definition: "Failure of the financial system as a whole, including loss of access to credit and collapse of capital markets.", category: "S" },
    { term: "Sampling replication", definition: "The management strategy for an index fund in which the fund invests in only a representative sample of the benchmark index's securities.", category: "S" },
    { term: "Secondary markets", definition: "Market in which investors trade securities and contracts with each other but not with the original security issuer.", category: "S" },
    { term: "Security lenders", definition: "Investors who have long positions and lend their securities to short sellers.", category: "S" },
    { term: "Security lending agreements", definition: "Agreements between the security lender and short sellers such that the short sellers will pay to the lenders all dividends or interest that the lender would have received on the security.", category: "S" },
    { term: "Security market index", definition: "A group of securities representing a given security market, market segment, or asset class.", category: "S" },
    { term: "Shelf registration", definition: "Sale of new issues of seasoned securities directly to the public little by little over a long period of time rather than in a single transaction.", category: "S" },
    { term: "Short positions", definition: "Positions for which investors sell assets or securities that they do not own, a process that involves borrowing the assets or securities, selling them, and repurchasing them later to return them to their owner. These positions increase in value when prices fall.", category: "S" },
    { term: "Smart contract", definition: "A transaction protocol that automatically records, executes, and controls processes or transactions for the parties to an agreement using a blockchain network.", category: "S" },
    { term: "Sponsor", definition: "An organizer of a pooled investment vehicle, which may be organize the vehicle in the form of a trust, a limited partnership, or a limited liability company.", category: "S" },
    { term: "Stablecoin", definition: "Cryptocurrency that is pegged to another asset or a basket of assets.", category: "S" },
    { term: "Stop order", definition: "Order for which a trader has specified a stop price, a price that triggers the conversion of a stop order into a market order. The stop order may not be filled until a trade occurs at or above the stop price for a buy order and at or below the stop price for a sell order.", category: "S" },
    { term: "Stop price", definition: "Price that triggers the conversion of a stop order into a market order.", category: "S" },
    
    // T Terms
    { term: "Tax haven", definition: "A country with low or no tax on income, with financial centers that facilitate banking such that businesses and individuals avoid taxes in their home country.", category: "T" },
    { term: "Tax-advantaged accounts", definition: "Accounts that allow investors to avoid paying taxes on investment income and capital gains as they earn them. In exchange for these privileges, investors must accept stringent restrictions on when the money can be withdrawn from the account and sometimes on how the money can be used.", category: "T" },
    { term: "Time-in-force instructions", definition: "Order execution instructions that indicate when an order can be filled.", category: "T" },
    { term: "Trade execution", definition: "An agreement in which the seller and buyer have agreed upon a price of a security.", category: "T" },
    { term: "Transaction costs", definition: "Costs associated with trading, which include explicit costs (mainly brokerage commissions) and implicit costs (bid–ask spreads, price impact, and opportunity costs).", category: "T" },
    { term: "Transfer agent", definition: "Typically a bank or trust company that maintains a registry of who owns", category: "T" },
    
    // U Terms
    { term: "Underwritten offerings", definition: "Type of public offering in which the (lead) investment bank guarantees the sale of the securities at an offering price that is negotiated with the issuer.", category: "U" },
    
    // W Terms
    { term: "Wrap account", definition: "Accounts that give retail investors access to services of fee-based investment professionals and wrap charges for investment services, such as brokerage, investment advice, financial planning, and investment accounting, into a single flat fee.", category: "W" }
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
        <ScrollArea className="h-[500px] pr-4">
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
