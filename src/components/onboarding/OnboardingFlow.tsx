
import React, { useState } from "react";
import InvestmentSelection from "./InvestmentSelection";
import RiskSelection from "./RiskSelection";
import TimeHorizonSelection from "./TimeHorizonSelection";
import SummaryScreen from "./SummaryScreen";
import OnboardingStepIndicator from "./OnboardingStepIndicator";
import OnboardingNavigation from "./OnboardingNavigation";
import { investmentTypes, riskLevels, timeHorizons } from "./OnboardingData";

interface OnboardingFlowProps {
  completeOnboarding: () => void;
}

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
      <h2 className="text-2xl font-bold text-center mb-2">Personalize Your Experience</h2>
      <p className="text-center text-muted-foreground mb-6">Help us tailor GELT to your investment preferences</p>
      
      <OnboardingStepIndicator currentStep={step} totalSteps={4} />

      {step === 0 && (
        <InvestmentSelection
          investments={investmentTypes}
          selectedInvestments={selectedInvestments}
          onToggle={handleInvestmentToggle}
        />
      )}

      {step === 1 && (
        <RiskSelection
          riskLevels={riskLevels}
          selectedRisk={selectedRisk}
          onSelect={setSelectedRisk}
        />
      )}

      {step === 2 && (
        <TimeHorizonSelection
          timeHorizons={timeHorizons}
          selectedTimeHorizon={selectedTimeHorizon}
          onSelect={setSelectedTimeHorizon}
        />
      )}

      {step === 3 && (
        <SummaryScreen
          selectedInvestments={selectedInvestments}
          selectedRisk={selectedRisk}
          selectedTimeHorizon={selectedTimeHorizon}
        />
      )}

      <OnboardingNavigation
        step={step}
        totalSteps={4}
        onNext={handleNext}
        onBack={() => setStep(step - 1)}
        isNextDisabled={isNextDisabled()}
        isLastStep={step === 3}
      />
    </div>
  );
};

export default OnboardingFlow;
