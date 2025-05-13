
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface SummaryScreenProps {
  selectedInvestments: string[];
  selectedRisk: string;
  selectedTimeHorizon: string;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({
  selectedInvestments,
  selectedRisk,
  selectedTimeHorizon,
}) => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-medium mb-2">All set!</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">
          We've personalized your feed based on your preferences
        </p>
        
        <div className="w-full mb-4">
          <h4 className="text-sm font-medium mb-2">Your investment interests:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedInvestments.map(investment => (
              <Badge key={investment}>{investment}</Badge>
            ))}
          </div>
        </div>
        
        <div className="w-full mb-4">
          <h4 className="text-sm font-medium mb-2">Your risk profile:</h4>
          <Badge variant="outline" className="bg-primary/5">{selectedRisk}</Badge>
        </div>
        
        <div className="w-full">
          <h4 className="text-sm font-medium mb-2">Your time horizon:</h4>
          <Badge variant="outline" className="bg-primary/5">{selectedTimeHorizon}</Badge>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
