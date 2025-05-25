
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, Briefcase, DollarSign, Globe, Heart, Bookmark } from "lucide-react";

const EnhancedJobsFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [showDiasporaOnly, setShowDiasporaOnly] = useState(false);

  // Common Kenyan salary ranges
  const salaryRanges = [
    "KES 30,000 - 50,000",
    "KES 50,000 - 80,000", 
    "KES 80,000 - 120,000",
    "KES 120,000 - 200,000",
    "KES 200,000 - 350,000",
    "KES 350,000 - 500,000",
    "KES 500,000+",
    "USD 1,000 - 2,000 (Diaspora)",
    "USD 2,000 - 4,000 (Diaspora)",
    "USD 4,000 - 6,000 (Diaspora)",
    "USD 6,000+ (Diaspora)"
  ];

  const locations = [
    "Nairobi",
    "Mombasa", 
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Remote (Kenya)",
    "United States",
    "United Kingdom", 
    "Canada",
    "Australia",
    "Dubai, UAE",
    "Remote (Global)"
  ];

  const jobTypes = [
    "Full-time",
    "Part-time", 
    "Contract",
    "Internship",
    "Freelance",
    "Remote"
  ];

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={showDiasporaOnly ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowDiasporaOnly(!showDiasporaOnly)}
            className="flex items-center gap-1"
          >
            <Globe className="h-4 w-4" />
            Diaspora Opportunities
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            Applied Jobs (3)
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Bookmark className="h-4 w-4" />
            Saved Jobs (7)
          </Button>
        </div>

        <Separator />

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Location */}
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Salary Range */}
          <Select value={selectedSalaryRange} onValueChange={setSelectedSalaryRange}>
            <SelectTrigger>
              <DollarSign className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Salary Range" />
            </SelectTrigger>
            <SelectContent>
              {salaryRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Job Type */}
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger>
              <Briefcase className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Application Progress Tracker */}
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Application Progress</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              Applied: 3 jobs
            </Badge>
            <Badge variant="outline" className="text-xs">
              Under Review: 2 jobs  
            </Badge>
            <Badge variant="outline" className="text-xs">
              Interview Scheduled: 1 job
            </Badge>
            <Badge variant="destructive" className="text-xs">
              Rejected: 1 job
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedJobsFilter;
