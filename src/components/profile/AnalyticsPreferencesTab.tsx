
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save, Shield } from "lucide-react";
import { ConsentSection } from "./analytics/ConsentSection";
import { DemographicsForm } from "./analytics/DemographicsForm";
import { PrivacyNotice } from "./analytics/PrivacyNotice";

interface UserProfile {
  gender: string | null;
  age_group: string | null;
  location: string | null;
  analytics_consent: boolean;
}

interface AnalyticsPreferencesTabProps {
  profile: UserProfile | null;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const AnalyticsPreferencesTab: React.FC<AnalyticsPreferencesTabProps> = ({
  profile,
  onUpdateProfile
}) => {
  const [formData, setFormData] = useState({
    gender: profile?.gender || "",
    age_group: profile?.age_group || "",
    location: profile?.location || "",
    analytics_consent: profile?.analytics_consent || false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd reverse geocode these coordinates
          const locationString = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
          handleInputChange("location", locationString);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const handleSave = () => {
    const updates = {
      gender: formData.gender || null,
      age_group: formData.age_group || null,
      location: formData.location.trim() || null,
      analytics_consent: formData.analytics_consent
    };
    
    onUpdateProfile(updates);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Analytics Preferences
        </CardTitle>
        <CardDescription>
          Help us improve GELT Platform by sharing optional analytics data. 
          All data is anonymized and used only for platform improvement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Analytics Consent */}
        <ConsentSection
          analyticsConsent={formData.analytics_consent}
          onConsentChange={(consent) => handleInputChange("analytics_consent", consent)}
        />

        {formData.analytics_consent && (
          <DemographicsForm
            gender={formData.gender}
            ageGroup={formData.age_group}
            location={formData.location}
            onFieldChange={handleInputChange}
            onLocationRequest={handleLocationRequest}
          />
        )}

        {!formData.analytics_consent && (
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-muted-foreground text-center">
              Please consent to analytics data sharing to configure these preferences.
            </p>
          </div>
        )}

        {/* Privacy Notice */}
        <PrivacyNotice />

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
