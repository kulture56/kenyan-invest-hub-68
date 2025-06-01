
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DemographicsFormProps {
  gender: string;
  ageGroup: string;
  location: string;
  onFieldChange: (field: string, value: string) => void;
  onLocationRequest: () => void;
}

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

export const DemographicsForm: React.FC<DemographicsFormProps> = ({
  gender,
  ageGroup,
  location,
  onFieldChange,
  onLocationRequest
}) => {
  return (
    <>
      {/* Gender */}
      <div className="space-y-2">
        <Label htmlFor="gender">Gender (Optional)</Label>
        <Select
          value={gender}
          onValueChange={(value) => onFieldChange("gender", value)}
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
          value={ageGroup}
          onValueChange={(value) => onFieldChange("age_group", value)}
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
            value={location}
            onChange={(e) => onFieldChange("location", e.target.value)}
            placeholder="Enter city/country or use location services"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onLocationRequest}
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
  );
};
