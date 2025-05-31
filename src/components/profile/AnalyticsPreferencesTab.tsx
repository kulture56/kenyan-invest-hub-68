
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Save, MapPin, Shield } from "lucide-react";

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

  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Non-Binary", label: "Non-Binary" },
    { value: "Prefer Not to Say", label: "Prefer Not to Say" }
  ];

  const ageGroupOptions = [
    { value: "", label: "Select age group" },
    { value: "Under 18", label: "Under 18" },
    { value: "18-24", label: "18-24" },
    { value: "25-34", label: "25-34" },
    { value: "35-44", label: "35-44" },
    { value: "45-54", label: "45-54" },
    { value: "55+", label: "55+" },
    { value: "Prefer Not to Say", label: "Prefer Not to Say" }
  ];

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
        <div className="p-4 border rounded-lg bg-blue-50/50">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="analytics_consent"
              checked={formData.analytics_consent}
              onCheckedChange={(checked) => handleInputChange("analytics_consent", checked as boolean)}
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

        {formData.analytics_consent && (
          <>
            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender (Optional)</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Age Group */}
            <div className="space-y-2">
              <Label htmlFor="age_group">Age Group (Optional)</Label>
              <Select
                value={formData.age_group}
                onValueChange={(value) => handleInputChange("age_group", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your age group" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroupOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Enter city/country or use location services"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleLocationRequest}
                  title="Use current location"
                >
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                You can enter your city/country manually or click the location icon to use your current location.
              </p>
            </div>
          </>
        )}

        {!formData.analytics_consent && (
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-muted-foreground text-center">
              Please consent to analytics data sharing to configure these preferences.
            </p>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="p-4 border rounded-lg bg-green-50/50">
          <h4 className="font-medium text-sm mb-2">Privacy Commitment</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• All analytics data is completely anonymized</li>
            <li>• Data is used only for platform improvement</li>
            <li>• We comply with GDPR and other privacy regulations</li>
            <li>• You can withdraw consent at any time</li>
          </ul>
        </div>

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
