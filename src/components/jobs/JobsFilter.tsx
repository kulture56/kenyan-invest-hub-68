
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Briefcase, DollarSign, Globe, Filter, X } from "lucide-react";

interface JobsFilterProps {
  onFiltersChange?: (filters: any) => void;
}

const JobsFilter: React.FC<JobsFilterProps> = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");
  const [experience, setExperience] = useState("all");
  const [salaryRange, setSalaryRange] = useState([0, 500000]);
  const [isDiasporaOpportunity, setIsDiasporaOpportunity] = useState(false);
  const [remoteWork, setRemoteWork] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const salaryRanges = [
    { label: "Entry Level (KSh 20K - 50K)", min: 20000, max: 50000 },
    { label: "Mid Level (KSh 50K - 100K)", min: 50000, max: 100000 },
    { label: "Senior Level (KSh 100K - 200K)", min: 100000, max: 200000 },
    { label: "Executive (KSh 200K+)", min: 200000, max: 500000 },
  ];

  const jobCategories = [
    "Finance & Banking",
    "Technology",
    "Healthcare",
    "Education",
    "Marketing",
    "Sales",
    "Engineering",
    "Legal",
    "Human Resources",
    "Operations"
  ];

  const experienceLevels = [
    { value: "all", label: "All Experience Levels" },
    { value: "entry", label: "Entry Level (0-2 years)" },
    { value: "mid", label: "Mid Level (3-5 years)" },
    { value: "senior", label: "Senior Level (6-10 years)" },
    { value: "executive", label: "Executive (10+ years)" }
  ];

  const handleSalaryRangeSelect = (range: { min: number; max: number }) => {
    setSalaryRange([range.min, range.max]);
    updateActiveFilters(`Salary: KSh ${range.min.toLocaleString()} - ${range.max.toLocaleString()}`);
  };

  const updateActiveFilters = (filterName: string) => {
    const exists = activeFilters.includes(filterName);
    if (exists) {
      setActiveFilters(activeFilters.filter(f => f !== filterName));
    } else {
      setActiveFilters([...activeFilters, filterName]);
    }
  };

  const removeFilter = (filterName: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filterName));
    // Reset corresponding state based on filter name
    if (filterName.includes("Salary")) {
      setSalaryRange([0, 500000]);
    } else if (filterName === "Diaspora Opportunities") {
      setIsDiasporaOpportunity(false);
    } else if (filterName === "Remote Work") {
      setRemoteWork(false);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setLocation("");
    setJobType("all");
    setExperience("all");
    setSalaryRange([0, 500000]);
    setIsDiasporaOpportunity(false);
    setRemoteWork(false);
    setActiveFilters([]);
  };

  return (
    <div className="space-y-4">
      {/* Search and Location */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search jobs, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Location (e.g., Nairobi, Mombasa, Remote)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">Active Filters</Label>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="gap-1">
                  {filter}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeFilter(filter)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Filter className="h-4 w-4" />
            Job Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Job Type */}
          <div className="space-y-2">
            <Label>Job Type</Label>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <Label>Experience Level</Label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Salary Range with Kenyan Indicators */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Salary Range (KSh per month)
            </Label>
            
            {/* Quick Salary Range Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {salaryRanges.map((range, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto p-2"
                  onClick={() => handleSalaryRangeSelect(range)}
                >
                  {range.label}
                </Button>
              ))}
            </div>
            
            {/* Custom Range Slider */}
            <div className="px-2">
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                max={500000}
                min={0}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>KSh {salaryRange[0].toLocaleString()}</span>
                <span>KSh {salaryRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Special Filters */}
          <div className="space-y-3">
            <Label>Special Opportunities</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="diaspora"
                checked={isDiasporaOpportunity}
                onCheckedChange={(checked) => {
                  setIsDiasporaOpportunity(checked as boolean);
                  if (checked) {
                    updateActiveFilters("Diaspora Opportunities");
                  } else {
                    removeFilter("Diaspora Opportunities");
                  }
                }}
              />
              <Label htmlFor="diaspora" className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4" />
                Diaspora Opportunities
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remote"
                checked={remoteWork}
                onCheckedChange={(checked) => {
                  setRemoteWork(checked as boolean);
                  if (checked) {
                    updateActiveFilters("Remote Work");
                  } else {
                    removeFilter("Remote Work");
                  }
                }}
              />
              <Label htmlFor="remote" className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4" />
                Remote Work Available
              </Label>
            </div>
          </div>

          {/* Apply Filters Button */}
          <Button className="w-full" onClick={() => onFiltersChange?.({
            searchTerm,
            location,
            jobType,
            experience,
            salaryRange,
            isDiasporaOpportunity,
            remoteWork
          })}>
            Apply Filters
          </Button>
        </CardContent>
      </Card>

      {/* Job Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Popular Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {jobCategories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="justify-start text-xs h-auto p-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsFilter;
