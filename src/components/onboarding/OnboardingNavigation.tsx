
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface OnboardingNavigationProps {
  step: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  isNextDisabled: boolean;
  isLastStep: boolean;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  step,
  onNext,
  onBack,
  isNextDisabled,
  isLastStep,
}) => {
  return (
    <div className="flex justify-between">
      {step > 0 && (
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      )}
      <Button 
        className="ml-auto" 
        onClick={onNext}
        disabled={isNextDisabled}
      >
        {!isLastStep ? 'Continue' : 'Get Started'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default OnboardingNavigation;
