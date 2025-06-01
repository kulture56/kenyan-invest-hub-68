
import React from "react";

export const PrivacyNotice: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg bg-green-50/50">
      <h4 className="font-medium text-sm mb-2">Privacy Commitment</h4>
      <ul className="text-sm text-muted-foreground space-y-1">
        <li>• All analytics data is completely anonymized</li>
        <li>• Data is used only for platform improvement</li>
        <li>• We comply with GDPR and other privacy regulations</li>
        <li>• You can withdraw consent at any time</li>
      </ul>
    </div>
  );
};
