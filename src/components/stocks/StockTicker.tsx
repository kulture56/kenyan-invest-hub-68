import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ChartBar, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data structure that mimics what we'd get from an API
interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

// Initial mock data for popular NSE stocks
const initialStockData: StockData[] = [{
  symbol: "SCOM",
  name: "Safaricom",
  price: 24.55,
  change: 0.55,
  changePercent: 2.29
}, {
  symbol: "EQTY",
  name: "Equity Group",
  price: 39.80,
  change: -0.25,
  changePercent: -0.62
}, {
  symbol: "KCB",
  name: "KCB Group",
  price: 36.15,
  change: 0.15,
  changePercent: 0.42
}, {
  symbol: "EABL",
  name: "East African Breweries",
  price: 144.25,
  change: -2.75,
  changePercent: -1.87
}, {
  symbol: "BAT",
  name: "BAT Kenya",
  price: 428.00,
  change: 3.00,
  changePercent: 0.71
}, {
  symbol: "COOP",
  name: "Co-operative Bank",
  price: 11.90,
  change: 0.10,
  changePercent: 0.85
}];
const fetchStockData = async (): Promise<StockData[]> => {
  // In a real implementation, this would fetch data from an NSE API
  // For now, we're using mock data and adding small random fluctuations to simulate changes
  return initialStockData.map(stock => ({
    ...stock,
    price: parseFloat((stock.price + (Math.random() * 0.4 - 0.2)).toFixed(2)),
    change: parseFloat((stock.change + (Math.random() * 0.1 - 0.05)).toFixed(2)),
    changePercent: parseFloat((stock.changePercent + (Math.random() * 0.3 - 0.15)).toFixed(2))
  }));
};
interface StockTickerProps {
  className?: string;
  compact?: boolean;
}
export const StockTicker: React.FC<StockTickerProps> = ({
  className,
  compact = false
}) => {
  const [tickerItems, setTickerItems] = useState<StockData[]>(initialStockData);
  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ['nseStockData'],
    queryFn: fetchStockData,
    refetchInterval: 15000,
    // Refetch every 15 seconds
    enabled: true
  });
  useEffect(() => {
    if (data) {
      setTickerItems(data);
    }
  }, [data]);
  if (error) {
    console.error("Failed to fetch stock data:", error);
  }

  // Add the return statement with JSX content
  return <div className={cn("w-full overflow-hidden", className)}>
      
    </div>;
};
export default StockTicker;