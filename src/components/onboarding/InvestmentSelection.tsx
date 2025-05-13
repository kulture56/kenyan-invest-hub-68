
import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface InvestmentType {
  name: string;
  description: string;
}

interface InvestmentSelectionProps {
  investments: InvestmentType[];
  selectedInvestments: string[];
  onToggle: (investment: string) => void;
}

const InvestmentSelection: React.FC<InvestmentSelectionProps> = ({
  investments,
  selectedInvestments,
  onToggle,
}) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Which investments interest you?</h3>
      <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {investments.map((investment) => (
          <Card 
            key={investment.name}
            className={`p-3 cursor-pointer transition-all ${
              selectedInvestments.includes(investment.name) 
                ? 'border-primary bg-primary/5' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => onToggle(investment.name)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{investment.name}</h4>
                <p className="text-xs text-muted-foreground">{investment.description}</p>
              </div>
              {selectedInvestments.includes(investment.name) && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSelection;
