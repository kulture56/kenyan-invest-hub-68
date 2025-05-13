
import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface RiskLevel {
  name: string;
  description: string;
}

interface RiskSelectionProps {
  riskLevels: RiskLevel[];
  selectedRisk: string;
  onSelect: (risk: string) => void;
}

const RiskSelection: React.FC<RiskSelectionProps> = ({
  riskLevels,
  selectedRisk,
  onSelect,
}) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">What's your risk tolerance?</h3>
      <p className="text-sm text-muted-foreground mb-4">Select one option</p>
      <div className="space-y-2 mb-6">
        {riskLevels.map((risk) => (
          <Card 
            key={risk.name}
            className={`p-4 cursor-pointer transition-all ${
              selectedRisk === risk.name 
                ? 'border-primary bg-primary/5' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => onSelect(risk.name)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{risk.name}</h4>
                <p className="text-sm text-muted-foreground">{risk.description}</p>
              </div>
              {selectedRisk === risk.name && (
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

export default RiskSelection;
