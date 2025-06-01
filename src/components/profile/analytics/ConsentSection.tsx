
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ConsentSectionProps {
  analyticsConsent: boolean;
  onConsentChange: (consent: boolean) => void;
}

export const ConsentSection: React.FC<ConsentSectionProps> = ({
  analyticsConsent,
  onConsentChange
}) => {
  return (
    <div className="p-4 border rounded-lg bg-blue-50/50">
      <div className="flex items-start space-x-3">
        <Checkbox
          id="analytics_consent"
          checked={analyticsConsent}
          onCheckedChange={(checked) => onConsentChange(checked as boolean)}
        />
        <div className="space-y-1">
          <Label htmlFor="analytics_consent" className="font-medium">
            Analytics Data Consent
          </Label>
          <p className="text-sm text-muted-foreground">
            I agree to share anonymized analytics data to improve the GELT Platform. 
            This data helps us understand user demographics and improve our services.
          </p>
        </div>
      </div>
    </div>
  );
};
