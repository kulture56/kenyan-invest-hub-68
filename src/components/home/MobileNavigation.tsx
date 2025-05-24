
import React from "react";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, MessageSquare, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileNavigation: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 px-2 py-2">
      <div className="flex justify-around">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-1 h-14 w-16"
          onClick={() => navigate('/')}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-1 h-14 w-16"
          onClick={() => navigate('/topics/jobs')}
        >
          <img src="/lovable-uploads/8b623f45-b9b4-48ee-a02a-8e8ebd58c7e0.png" alt="Careers" className="h-5 w-5" />
          <span className="text-xs">Careers</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-1 h-14 w-16"
          onClick={() => navigate('/learn')}
        >
          <img src="/lovable-uploads/800e50e9-0765-41ca-9728-eb655c16f679.png" alt="Learn" className="h-5 w-5" />
          <span className="text-xs">Learn</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-1 h-14 w-16"
          onClick={() => navigate('/glossary')}
        >
          <img src="/lovable-uploads/b2fe3736-d342-4f1d-b060-8bb25c5271de.png" alt="Glossary" className="h-5 w-5" />
          <span className="text-xs">Glossary</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-1 h-14 w-16"
          onClick={() => navigate('/streaks')}
        >
          <img src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" alt="Streaks" className="h-5 w-5" />
          <span className="text-xs">Streaks</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;
