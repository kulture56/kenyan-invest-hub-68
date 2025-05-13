
import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const OnboardingStepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i === currentStep ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingStepIndicator;
