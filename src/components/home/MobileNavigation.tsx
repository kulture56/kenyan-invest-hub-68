
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MobileNavigation: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 px-1 py-1 safe-area-pb">
      <div className="flex justify-around items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-0.5 h-12 w-16 hover:bg-purple-50"
          onClick={() => navigate('/')}
        >
          <img 
            src="/lovable-uploads/e091aef6-fef0-48e9-a419-ef485d7a1022.png" 
            alt="Home" 
            className="h-5 w-5" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' }}
          />
          <span className="text-xs text-purple-600">Home</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-0.5 h-12 w-16 hover:bg-purple-50"
          onClick={() => navigate('/topics/jobs')}
        >
          <img 
            src="/lovable-uploads/8b623f45-b9b4-48ee-a02a-8e8ebd58c7e0.png" 
            alt="Careers" 
            className="h-5 w-5" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' }}
          />
          <span className="text-xs text-purple-600">Careers</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-0.5 h-12 w-16 hover:bg-purple-50"
          onClick={() => navigate('/learn')}
        >
          <img 
            src="/lovable-uploads/800e50e9-0765-41ca-9728-eb655c16f679.png" 
            alt="Learn" 
            className="h-5 w-5" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' }}
          />
          <span className="text-xs text-purple-600">Learn</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-0.5 h-12 w-16 hover:bg-purple-50"
          onClick={() => navigate('/glossary')}
        >
          <img 
            src="/lovable-uploads/b2fe3736-d342-4f1d-b060-8bb25c5271de.png" 
            alt="Glossary" 
            className="h-5 w-5" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' }}
          />
          <span className="text-xs text-purple-600">Glossary</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex flex-col gap-0.5 h-12 w-16 hover:bg-purple-50"
          onClick={() => navigate('/streaks')}
        >
          <img 
            src="/lovable-uploads/83f25885-3df9-41ea-9f73-30dc81a20434.png" 
            alt="Streaks" 
            className="h-5 w-5" 
            style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(0.8)' }}
          />
          <span className="text-xs text-purple-600">Streaks</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;
