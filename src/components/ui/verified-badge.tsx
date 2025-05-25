
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ 
  className, 
  size = "sm" 
}) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  };

  return (
    <CheckCircle 
      className={cn(
        "text-blue-500 fill-current",
        sizeClasses[size],
        className
      )} 
    />
  );
};

// Kenyan Financial Institutions that should have verified badges
export const verifiedInstitutions = [
  "Equity Bank Kenya",
  "KCB Bank Kenya", 
  "Cooperative Bank of Kenya",
  "NCBA Bank Kenya",
  "Absa Bank Kenya",
  "Standard Chartered Kenya",
  "Stanbic Bank Kenya",
  "Diamond Trust Bank Kenya",
  "Family Bank Kenya",
  "CBA Bank Kenya",
  "Safaricom PLC",
  "Kenya Commercial Bank",
  "National Bank of Kenya",
  "HF Group",
  "Britam Holdings",
  "CIC Insurance Group",
  "Jubilee Holdings",
  "Kenya Re",
  "Centum Investment",
  "NSE - Nairobi Securities Exchange",
  "Central Bank of Kenya",
  "Capital Markets Authority Kenya",
  "SASRA Kenya",
  "IRA Kenya",
  "Kenya Association of Stockbrokers",
  "CMA Kenya"
];

export const isVerifiedInstitution = (name: string): boolean => {
  return verifiedInstitutions.some(institution => 
    name.toLowerCase().includes(institution.toLowerCase()) ||
    institution.toLowerCase().includes(name.toLowerCase())
  );
};
