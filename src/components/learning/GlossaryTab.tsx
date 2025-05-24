
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

  // Define the new financial glossary content organized by letters
  const financialGlossary = [
    // A Terms
    { term: "Active investment managers", definition: "Investment managers who try to predict which securities and assets will outperform or underperform comparable securities and assets and who act on their opinions by buying the securities and assets that they expect to outperform and selling (or simply not buying) the securities and assets that they expect to underperform.", category: "A" },
    { term: "Adverse selection", definition: "Tendency of people who are most at risk to buy insurance, causing insured losses to be greater than average losses.", category: "A" },
    { term: "Ask price", definition: "Prices at which a dealer is willing to sell an asset or a security, typically qualified by a maximum quantity (ask size). Also called offer price.", category: "A" },
    { term: "Asset allocation", definition: "The process to determine the proportion of a portfolio to hold in various asset classes or the proportion of a portfolio held in various asset classes.", category: "A" },
    { term: "Assets", definition: "Items that have value and include real assets and financial assets.", category: "A" },
    
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
    
    // C Terms
    { term: "Capitalism", definition: "An economic system that promotes private ownership as the means of production and markets as the means of allocating scarce resources.", category: "C" },
    { term: "Clearing", definition: "All activities that occur from the arrangement of the trade to its settlement.", category: "C" },
    { term: "Clearing houses", definition: "Trading services providers that arrange for final settlement of trades.", category: "C" },
    { term: "Credit rating agencies", definition: "Investment research service providers that specialise in providing opinions about the credit quality of bonds and of their issuers.", category: "C" },
    { term: "Cryptocurrency", definition: "A digital currency composed of encrypted data that acts as a medium of exchange.", category: "C" },
    { term: "Custodians", definition: "Typically, banks and brokerage firms that hold money and securities for safekeeping on behalf of their clients.", category: "C" },
    
    // D Terms
    { term: "Data vendors", definition: "Investment research service providers of historical and real-time data about companies and market conditions.", category: "D" },
    { term: "Dealers", definition: "Trading services providers who participate in their clients' trades and stand ready to buy or sell when their clients want to sell or buy, providing liquidity and profiting when they can buy securities for less than they sell them. Also called market makers.", category: "D" },
    { term: "Depositories", definition: "Typically, banks and brokerage firms that are regulated and act not only as custodians but also as monitors, playing an important role in preventing investment fraud.", category: "D" },
    { term: "Deposit-taking institutions", definition: "Financial institutions that take deposits, such as banks; also called depository institutions.", category: "D" },
    { term: "Direct finance", definition: "When providers and users of capital interact, the providers usually have a direct claim on the users (e.g., right to certain assets and earnings generated by the user). See also direct investments.", category: "D" },
    
    // E Terms
    { term: "Endowment funds", definition: "Long-term funds owned by non-profit institutions.", category: "E" },
    { term: "Ethical dilemmas", definition: "Situations in which values, interests, and/or rules potentially conflict.", category: "E" },
    { term: "Ethical standards", definition: "Principles that support and promote desired values or behaviours.", category: "E" },
    { term: "Ethics", definition: "A set of moral principles, or the principles of conduct governing an individual or a group.", category: "E" },
    
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
    
    // H Terms
    { term: "High-net-worth investors", definition: "Individual investors with a higher amount of investable assets relative to retail investors.", category: "H" },
    
    // I Terms
    { term: "Indirect finance", definition: "The use of financial intermediaries to find and channel funds between providers and users of capital. Because financial intermediaries sit between providers and users, the former do not have direct claims on the latter. See also indirect investments.", category: "I" },
    { term: "Insider trading", definition: "Trading while in possession of material non-public information.", category: "I" },
    { term: "Insurance companies", definition: "Financial institutions that help individuals and companies offset the risks they face; also among the largest investors.", category: "I" },
    { term: "Investment banks", definition: "Financial intermediaries that assist companies and governments raise capital and can provide other services, such as strategic advisory services, brokerage and dealing services, and research services; also known as merchant banks.", category: "I" },
    { term: "Investment industry", definition: "Subset of the financial services industry that comprises all the participants that are instrumental in helping savers invest their money and spenders raise capital in financial markets.", category: "I" },
    { term: "Investment managers", definition: "Investment professionals who receive authority from their clients to trade securities and assets on their behalf. Also called asset managers.", category: "I" },
    
    // M Terms
    { term: "Market manipulation", definition: "Abusive trading practice that involves taking actions intended to move the price of a stock to make a short-term profit.", category: "M" },
    { term: "Middle office", definition: "Core activities of a firm, such as risk management, information technology, corporate finance, portfolio management, and research.", category: "M" },
    { term: "Money laundering", definition: "A process in which criminals use financial services to transfer money from illegal operations to other legal activities; the money becomes \"clean\" in the process.", category: "M" },
    { term: "Moral hazard", definition: "Tendency of people to be less careful about avoiding losses once they have purchased insurance, potentially leading to losses occurring more often when they are insured than when they are not.", category: "M" },
    
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
    
    // R Terms
    { term: "Real assets", definition: "Physical assets, such as land, buildings, machinery, cattle, and gold.", category: "R" },
    { term: "Regulations", definition: "Rules that set standards for conduct and carry the force of law. They are set and enforced by legislative bodies and by other entities authorised by legislative bodies.", category: "R" },
    { term: "Retail investors", definition: "Individual investors with the least amount of investable assets.", category: "R" },
    
    // S Terms
    { term: "Securities", definition: "Financial assets that can be traded, such as shares and bonds.", category: "S" },
    { term: "Sell-side analysts", definition: "Analysts who work for the organisations, typically an investment bank, that sell securities. They collect and analyse information about a company and its competitors and then prepare a report that is shared with potential investors.", category: "S" },
    { term: "Sell-side firms", definition: "Typically, investment banks, brokers, and dealers that provide investment products and services.", category: "S" },
    { term: "Settlement", definition: "Activity that consists of the final exchange of cash for securities following a trade.", category: "S" },
    { term: "Settlement risk", definition: "The risk that when settling a transaction, a firm performs one side of the deal but the counterparty does not complete its side of the deal as agreed, often because it has declared bankruptcy.", category: "S" },
    { term: "Sovereign wealth funds", definition: "Funds created by governments to invest surpluses for the benefit of current and future generations of their citizens.", category: "S" },
    { term: "Systemic failure", definition: "Failure of the financial system as a whole, including loss of access to credit and collapse of capital markets.", category: "S" }
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
