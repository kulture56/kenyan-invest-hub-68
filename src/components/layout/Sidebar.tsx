
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Users, Book, Coins, Heart, ChartBar, FileText, Info, HandCoins, Currency, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active = false }) => (
  <a 
    href={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 transition-colors",
      active && "bg-primary/10 text-primary font-medium"
    )}
  >
    <div className="flex items-center justify-center w-5 h-5">
      {icon}
    </div>
    <span className="text-sm">{label}</span>
  </a>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const isMobile = useIsMobile();

  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-card border-r border-border transition-transform duration-200 overflow-hidden",
        isMobile && !isOpen && "-translate-x-full",
        isMobile && "absolute",
        !isMobile && !isOpen && "w-16"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-border">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">G</span>
          </div>
          {(isOpen || !isMobile) && <span className="font-bold text-xl">GELT</span>}
        </a>
      </div>

      <div className="flex-1 overflow-auto py-4 px-3">
        <nav className="space-y-1">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" href="/" active />
          <NavItem icon={<Briefcase className="w-4 h-4" />} label="Jobs" href="/topics/jobs" />
          <NavItem icon={<Users className="w-4 h-4" />} label="SACCOs" href="/topics/saccos" />
          <NavItem icon={<Coins className="w-4 h-4" />} label="MMFs" href="/topics/mmfs" />
          <NavItem icon={<ChartBar className="w-4 h-4" />} label="Stocks" href="/topics/stocks" />
          <NavItem icon={<Currency className="w-4 h-4" />} label="Funds" href="/topics/funds" />
          <NavItem icon={<Heart className="w-4 h-4" />} label="Banks" href="/topics/banks" />
          <NavItem icon={<HandCoins className="w-4 h-4" />} label="Indices" href="/topics/indices" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="T-Bills & Bonds" href="/topics/bills-bonds" />
          <NavItem icon={<Briefcase className="w-4 h-4" />} label="Venture Capital" href="/topics/vc" />
          <NavItem icon={<Currency className="w-4 h-4" />} label="Insurance" href="/topics/insurance" />
          <NavItem icon={<Coins className="w-4 h-4" />} label="Cryptocurrencies" href="/topics/crypto" />
        </nav>

        <div className="mt-6 border-t border-border pt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-3 font-normal"
          >
            <Search className="w-4 h-4" /> Explore Topics
          </Button>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-xs font-bold">R</span>
            </div>
            <div>
              <h4 className="text-sm font-medium">Rafiki</h4>
              <p className="text-xs text-muted-foreground">AI Assistant</p>
            </div>
          </div>
          <a
            href="/rafiki"
            className="mt-2 text-xs text-primary hover:underline block px-3"
          >
            Ask Rafiki for investment advice →
          </a>
        </div>
      </div>

      <div className="p-3 border-t border-border">
        {isOpen || !isMobile ? (
          <div className="p-3 bg-muted/50 rounded-lg">
            <h5 className="text-sm font-medium">Sign up for updates</h5>
            <p className="text-xs text-muted-foreground mt-1">Get investment alerts and market news</p>
            <Button size="sm" className="mt-2 w-full">
              Subscribe
            </Button>
          </div>
        ) : (
          <Button size="icon" variant="ghost">
            <Info className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
