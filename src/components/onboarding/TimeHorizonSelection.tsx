
import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TimeHorizon {
  name: string;
  description: string;
}

interface TimeHorizonSelectionProps {
  timeHorizons: TimeHorizon[];
  selectedTimeHorizon: string;
  onSelect: (timeHorizon: string) => void;
}

const TimeHorizonSelection: React.FC<TimeHorizonSelectionProps> = ({
  timeHorizons,
  selectedTimeHorizon,
  onSelect,
}) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium mb-4">What's your investment time horizon?</h3>
      <p className="text-sm text-muted-foreground mb-4">Select one option</p>
      <div className="space-y-2 mb-6">
        {timeHorizons.map((time) => (
          <Card 
            key={time.name}
            className={`p-4 cursor-pointer transition-all ${
              selectedTimeHorizon === time.name 
                ? 'border-primary bg-primary/5' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => onSelect(time.name)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{time.name}</h4>
                <p className="text-sm text-muted-foreground">{time.description}</p>
              </div>
              {selectedTimeHorizon === time.name && (
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

export default TimeHorizonSelection;
