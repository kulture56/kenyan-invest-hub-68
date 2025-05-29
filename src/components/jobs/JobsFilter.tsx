
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const workTypeOptions = [
  { id: "all", label: "All jobs" },
  { id: "hybrid", label: "Hybrid work" },
  { id: "remote", label: "Remote" },
];

const datePostedOptions = [
  { id: "24h", label: "Last 24 hours" },
  { id: "4days", label: "Last 4 days" },
  { id: "1week", label: "Last week" },
  { id: "2weeks", label: "2 weeks ago" },
];

const jobTypeOptions = [
  { id: "fulltime", label: "Full-time" },
  { id: "permanent", label: "Permanent" },
  { id: "contract", label: "Contract" },
  { id: "temporary", label: "Temporary" },
  { id: "parttime", label: "Part-time" },
  { id: "fixedterm", label: "Fixed term contract" },
  { id: "internship", label: "Internship / Co-op" },
  { id: "seasonal", label: "Seasonal" },
  { id: "casual", label: "Casual" },
  { id: "freelance", label: "Freelance" },
  { id: "apprenticeship", label: "Apprenticeship" },
];

const kenyanCounties = [
  "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita/Taveta", 
  "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", 
  "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", 
  "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", 
  "Samburu", "Trans Nzoia", "Uasin Gishu", "Elgeyo/Marakwet", "Nandi", 
  "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", 
  "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", 
  "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi City"
];

type FormValues = {
  workType: string;
  datePosted: string;
  jobTypes: string[];
  locations: string[];
  institution: string;
};

const JobsFilter = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      workType: "all",
      datePosted: "",
      jobTypes: [],
      locations: [],
      institution: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Filter applied:", data);
    // Here you would typically filter the jobs data
  };

  const selectedJobTypesCount = form.watch("jobTypes").length;
  const selectedLocationsCount = form.watch("locations").length;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {/* Work Type Filter */}
          <FormField
            control={form.control}
            name="workType"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="h-9 w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {workTypeOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Date Posted Filter */}
          <FormField
            control={form.control}
            name="datePosted"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="h-9 w-[180px]">
                    <SelectValue placeholder="Date posted" />
                  </SelectTrigger>
                  <SelectContent>
                    {datePostedOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Job Types Multi-select */}
          <FormField
            control={form.control}
            name="jobTypes"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-dashed justify-start text-left font-normal w-[200px]"
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      {selectedJobTypesCount > 0 ? (
                        <>Job Types ({selectedJobTypesCount})</>
                      ) : (
                        <>Job Types</>
                      )}
                      <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0" align="start">
                    <div className="max-h-60 overflow-y-auto p-2">
                      {jobTypeOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2 py-1 px-2 rounded-md hover:bg-accent"
                        >
                          <Checkbox
                            id={`job-type-${option.id}`}
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), option.id]
                                : field.value?.filter((value) => value !== option.id) || [];
                              field.onChange(updatedValue);
                            }}
                          />
                          <label
                            htmlFor={`job-type-${option.id}`}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Locations Multi-select */}
          <FormField
            control={form.control}
            name="locations"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 border-dashed justify-start text-left font-normal w-[180px]"
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      {selectedLocationsCount > 0 ? (
                        <>Location ({selectedLocationsCount})</>
                      ) : (
                        <>Location</>
                      )}
                      <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[220px] p-0" align="start">
                    <div className="max-h-60 overflow-y-auto p-2">
                      {kenyanCounties.map((county) => (
                        <div
                          key={county}
                          className="flex items-center space-x-2 py-1 px-2 rounded-md hover:bg-accent"
                        >
                          <Checkbox
                            id={`location-${county}`}
                            checked={field.value?.includes(county)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...(field.value || []), county]
                                : field.value?.filter((value) => value !== county) || [];
                              field.onChange(updatedValue);
                            }}
                          />
                          <label
                            htmlFor={`location-${county}`}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {county}
                          </label>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Institution Search */}
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <input
                    {...field}
                    placeholder="Institution"
                    className="h-9 px-3 py-2 rounded-md border border-input bg-background"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" size="sm" className="h-9">
            Apply Filters
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobsFilter;
