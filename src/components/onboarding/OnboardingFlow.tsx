
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface OnboardingFlowProps {
  completeOnboarding: () => void;
}

const investmentTypes = [
  { name: "Stocks", description: "Buy shares in companies listed on NSE" },
  { name: "Bonds", description: "Fixed income securities issued by government/corporations" },
  { name: "T-Bills", description: "Short-term government securities" },
  { name: "SACCOs", description: "Member-owned cooperative financial institutions" },
  { name: "Real Estate", description: "Property investments" },
  { name: "Mutual Funds", description: "Professional managed investment pools" },
  { name: "Forex", description: "Foreign exchange currency trading" },
  { name: "Cryptocurrencies", description: "Digital or virtual currencies" },
];

const riskLevels = [
  { name: "Conservative", description: "Low risk, stable returns" },
  { name: "Moderate", description: "Balanced risk and return" },
  { name: "Aggressive", description: "Higher risk, potentially higher returns" },
];

const timeHorizons = [
  { name: "Short term", description: "Less than 1 year" },
  { name: "Medium term", description: "1-5 years" },
  { name: "Long term", description: "5+ years" },
];

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ completeOnboarding }) => {
  const [step, setStep] = useState(0);
  const [selectedInvestments, setSelectedInvestments] = useState<string[]>([]);
  const [selectedRisk, setSelectedRisk] = useState<string>("");
  const [selectedTimeHorizon, setSelectedTimeHorizon] = useState<string>("");

  const handleInvestmentToggle = (investment: string) => {
    if (selectedInvestments.includes(investment)) {
      setSelectedInvestments(selectedInvestments.filter(i => i !== investment));
    } else {
      setSelectedInvestments([...selectedInvestments, investment]);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      completeOnboarding();
    }
  };

  const isNextDisabled = () => {
    if (step === 0) return selectedInvestments.length === 0;
    if (step === 1) return !selectedRisk;
    if (step === 2) return !selectedTimeHorizon;
    return false;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Welcome to GELT</h2>
      <p className="text-center text-muted-foreground mb-6">Let's personalize your experience</p>
      
      <div className="flex justify-center mb-6">
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${i === step ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Which investments interest you?</h3>
          <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {investmentTypes.map((investment) => (
              <Card 
                key={investment.name}
                className={`p-3 cursor-pointer transition-all ${
                  selectedInvestments.includes(investment.name) 
                    ? 'border-primary bg-primary/5' 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => handleInvestmentToggle(investment.name)}
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
      )}

      {step === 1 && (
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
                onClick={() => setSelectedRisk(risk.name)}
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
      )}

      {step === 2 && (
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
                onClick={() => setSelectedTimeHorizon(time.name)}
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
      )}

      {step === 3 && (
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
      )}

      <div className="flex justify-between">
        {step > 0 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        <Button 
          className="ml-auto" 
          onClick={handleNext}
          disabled={isNextDisabled()}
        >
          {step < 3 ? 'Continue' : 'Get Started'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFlow;
