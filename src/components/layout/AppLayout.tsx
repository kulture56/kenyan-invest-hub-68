
import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigation from "@/components/home/MobileNavigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <div 
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarOpen && !isMobile ? 'ml-64' : !sidebarOpen && !isMobile ? 'ml-16' : ''
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className={`flex-1 p-2 md:p-4 overflow-auto max-w-full ${
          isMobile ? 'pb-24' : 'pb-4'
        }`}>
          <div className={`${isMobile ? 'px-1' : 'px-0'}`}>
            {children}
          </div>
        </main>
      </div>
      
      {isMobile && <MobileNavigation />}
      
      <Toaster />
      <Sonner />
    </div>
  );
};
