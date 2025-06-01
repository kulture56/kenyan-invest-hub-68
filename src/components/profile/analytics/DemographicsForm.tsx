
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DemographicsFormProps {
  gender: string;
  ageGroup: string;
  location: string;
  onInputChange: (field: string, value: string) => void;
}

export const DemographicsForm: React.FC<DemographicsFormProps> = ({
  gender,
  ageGroup,
  location,
  onInputChange
}) => {
  return (
    <>
      {/* Gender */}
      <div className="space-y-2">
        <Label htmlFor="gender">Gender (Optional)</Label>
        <Select
          value={gender}
          onValueChange={(value) => onInputChange("gender", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="non_binary">Non-binary</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Age Group */}
      <div className="space-y-2">
        <Label htmlFor="age_group">Age Group (Optional)</Label>
        <Select
          value={ageGroup}
          onValueChange={(value) => onInputChange("age_group", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select age group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
            <SelectItem value="under_18">Under 18</SelectItem>
            <SelectItem value="18_24">18-24</SelectItem>
            <SelectItem value="25_34">25-34</SelectItem>
            <SelectItem value="35_44">35-44</SelectItem>
            <SelectItem value="45_54">45-54</SelectItem>
            <SelectItem value="55_64">55-64</SelectItem>
            <SelectItem value="65_plus">65+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location (Optional)</Label>
        <Input
          id="location"
          value={location}
          onChange={(e) => onInputChange("location", e.target.value)}
          placeholder="Enter your city or region"
        />
      </div>
    </>
  );
};
