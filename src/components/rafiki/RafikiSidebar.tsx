
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ChartBar, Briefcase, Coins } from "lucide-react";

interface RafikiSidebarProps {
  onQuestionSelected: (question: string) => void;
}

const RafikiSidebar = ({ onQuestionSelected }: RafikiSidebarProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <h3 className="text-sm font-medium mb-3">Suggested Questions</h3>
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full justify-start text-left" 
            onClick={() => onQuestionSelected("What are the current T-Bill rates in Kenya?")}
          >
            <FileText className="mr-2 h-4 w-4 shrink-0" />
            <span className="text-xs truncate">What are the current T-Bill rates?</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-left" 
            onClick={() => onQuestionSelected("Which stocks on NSE have the highest growth potential?")}
          >
            <ChartBar className="mr-2 h-4 w-4 shrink-0" />
            <span className="text-xs truncate">Best NSE stocks to buy now?</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-left" 
            onClick={() => onQuestionSelected("Which SACCOs in Kenya offer the best dividend rates?")}
          >
            <Briefcase className="mr-2 h-4 w-4 shrink-0" />
            <span className="text-xs truncate">Best SACCOs by dividend rates?</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-left" 
            onClick={() => onQuestionSelected("Is cryptocurrency a good investment in Kenya?")}
          >
            <Coins className="mr-2 h-4 w-4 shrink-0" />
            <span className="text-xs truncate">Cryptocurrency in Kenya?</span>
          </Button>
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="text-sm font-medium mb-2">About Rafiki</h4>
          <p className="text-xs text-muted-foreground">
            Rafiki is an AI assistant trained to provide insights on Kenyan investments. 
            I can help with market trends, financial advice, and investment opportunities.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RafikiSidebar;
