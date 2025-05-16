
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, ChevronLeft, ChevronRight, Menu } from "lucide-react";
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

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  href,
  active = false
}) => (
  <a 
    href={href} 
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200", 
      active ? "bg-primary/10 text-primary font-medium shadow-sm" : "hover:bg-primary/5 hover:text-primary hover:translate-x-1"
    )}
  >
    <div className={cn("flex items-center justify-center w-5 h-5 transition-transform", active && "text-primary")}>
      {icon}
    </div>
    <span className="text-sm">{label}</span>
  </a>
);

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggle
}) => {
  const isMobile = useIsMobile();
  
  if (isMobile && !isOpen) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed left-4 bottom-20 z-50 rounded-full shadow-lg bg-background text-primary" 
        onClick={toggle}
      >
        <Menu className="h-4 w-4 text-primary" />
      </Button>
    );
  }
  
  return (
    <>
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-card border-r border-border transition-all duration-300 overflow-hidden",
          isMobile && !isOpen && "-translate-x-full",
          isMobile && "absolute shadow-xl",
          !isMobile && !isOpen && "w-16"
        )}
      >
        <div className="flex items-center h-16 px-4 border-b border-border justify-between">
          <a href="/" className={cn("flex items-center gap-2", !isOpen && !isMobile && "justify-center w-full")}>
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">G</span>
            </div>
            {(isOpen || isMobile) && (
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GELT</span>
                <span className="text-[10px] leading-tight text-muted-foreground">Grow. Empower. Learn. Thrive</span>
              </div>
            )}
          </a>
          
          <Button variant="ghost" size="icon" onClick={toggle} className={cn("text-primary", !isOpen && !isMobile && "hidden")}>
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          
          {!isOpen && !isMobile && (
            <Button variant="ghost" size="icon" onClick={toggle} className="text-primary w-full">
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div 
          className={cn(
            "flex-1 overflow-auto py-4 px-3 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30", 
            !isOpen && !isMobile && "px-2"
          )}
        >
          <nav className="space-y-1">
            <NavItem 
              icon={<Home className="w-4 h-4 text-primary" />} 
              label={isOpen || isMobile ? "Home" : ""} 
              href="/" 
              active 
            />
            <NavItem 
              icon={<img src="/lovable-uploads/8b623f45-b9b4-48ee-a02a-8e8ebd58c7e0.png" alt="Jobs" className="w-4 h-4" />} 
              label={isOpen || isMobile ? "Career Hub" : ""} 
              href="/topics/jobs" 
            />
            <NavItem 
              icon={<img src="/lovable-uploads/800e50e9-0765-41ca-9728-eb655c16f679.png" alt="Learn" className="w-4 h-4" />} 
              label={isOpen || isMobile ? "Learning Center" : ""} 
              href="/learn" 
            />
            <NavItem 
              icon={<img src="/lovable-uploads/b2fe3736-d342-4f1d-b060-8bb25c5271de.png" alt="Glossary" className="w-4 h-4" />}
              label={isOpen || isMobile ? "Financial Glossary" : ""} 
              href="/glossary" 
            />
            <NavItem 
              icon={<img src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" alt="Streaks" className="w-4 h-4" />} 
              label={isOpen || isMobile ? "Learning Streaks" : ""} 
              href="/streaks" 
            />
          </nav>

          {(isOpen || isMobile) && (
            <>
              <div className="mt-6 border-t border-border pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start gap-3 font-normal hover:bg-primary/10 hover:text-primary"
                >
                  <img src="/lovable-uploads/602cec52-f456-44c8-9fef-dc523c21efed.png" className="h-4 w-4" /> Help Center
                </Button>
              </div>
            </>
          )}
        </div>

        {(isOpen || isMobile) && (
          <div className="p-3 border-t border-border">
            <div className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
              <h5 className="text-sm font-medium">Sign up for updates</h5>
              <p className="text-xs text-muted-foreground mt-1">Get investment alerts and market news.</p>
              <Button size="sm" className="mt-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile sidebar toggle button - appears only at sidebar closed state */}
      {isMobile && !isOpen && (
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed left-4 bottom-20 z-50 rounded-full shadow-lg bg-background" 
          onClick={toggle}
        >
          <Menu className="h-4 w-4 text-primary" />
        </Button>
      )}
    </>
  );
};
