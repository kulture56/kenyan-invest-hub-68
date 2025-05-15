import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Book, FileText, HelpCircle, Zap, ChevronLeft, ChevronRight } from "lucide-react";
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
}) => <a href={href} className={cn("flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200", active ? "bg-primary/10 text-primary font-medium shadow-sm" : "hover:bg-primary/5 hover:text-primary hover:translate-x-1")}>
    <div className={cn("flex items-center justify-center w-5 h-5 transition-transform", active && "text-primary")}>
      {icon}
    </div>
    <span className="text-sm">{label}</span>
  </a>;
export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggle
}) => {
  const isMobile = useIsMobile();
  if (isMobile && !isOpen) {
    return null;
  }
  return <>
      <div className={cn("fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-card border-r border-border transition-all duration-300 overflow-hidden", isMobile && !isOpen && "-translate-x-full", isMobile && "absolute shadow-xl", !isMobile && !isOpen && "w-0")}>
        <div className="flex items-center h-16 px-4 border-b border-border justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">G</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GELT</span>
          </a>
          {!isMobile && <Button variant="ghost" size="icon" onClick={toggle} className="ml-auto">
              <ChevronLeft className={`h-4 w-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
            </Button>}
        </div>

        <div className="flex-1 overflow-auto py-4 px-3 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
          <nav className="space-y-1">
            <NavItem icon={<Home className="w-4 h-4" />} label="Home" href="/" active />
            <NavItem icon={<Briefcase className="w-4 h-4" />} label="Jobs" href="/topics/jobs" />
            <NavItem icon={<Book className="w-4 h-4" />} label="Learn" href="/learn" />
            <NavItem icon={<FileText className="w-4 h-4" />} label="Glossary" href="/glossary" />
            <NavItem icon={<Zap className="w-4 h-4" />} label="Streaks" href="/streaks" />
          </nav>

          <div className="mt-6 border-t border-border pt-4">
            <Button variant="outline" size="sm" className="w-full justify-start gap-3 font-normal hover:bg-primary/10 hover:text-primary">
              <HelpCircle className="w-4 h-4" /> Help Center
            </Button>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <img src="/lovable-uploads/93b40e8a-192d-4ff9-9614-6ad174a7617b.png" alt="Rafiki" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Rafiki®️</h4>
                <p className="text-xs text-muted-foreground">AI Assistant</p>
              </div>
            </div>
            <a href="/rafiki" className="mt-2 text-xs text-primary hover:underline block px-3 hover:text-accent transition-colors">
              Ask Rafiki for investment advice →
            </a>
          </div>
        </div>

        <div className="p-3 border-t border-border">
          <div className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
            <h5 className="text-sm font-medium">Sign up for updates</h5>
            <p className="text-xs text-muted-foreground mt-1">Get investment alerts and market news.</p>
            <Button size="sm" className="mt-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar toggle button - appears only at sidebar closed state */}
      {isMobile && !isOpen && <Button variant="outline" size="icon" className="fixed left-4 bottom-20 z-50 rounded-full shadow-lg bg-background" onClick={toggle}>
          <ChevronRight className="h-4 w-4" />
        </Button>}
    </>;
};