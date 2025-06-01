
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import JobsFilter from "./JobsFilter";
import JobApplicationTracker from "./JobApplicationTracker";
import SavedJobs from "./SavedJobs";
import { Search, Briefcase } from "lucide-react";

const JobsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Career Hub</h1>
        <p className="text-muted-foreground">Find opportunities and track your applications</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="search" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Job Search
          </TabsTrigger>
          <TabsTrigger value="applications" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Applications
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Saved Jobs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="mt-6">
          <div className="space-y-6">
            <JobsFilter />
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Job Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No jobs posted yet</h3>
                  <p className="text-muted-foreground mb-4">
                    We're working on bringing you the best job opportunities in the financial sector.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Check back soon or adjust your filters to see available positions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <JobApplicationTracker />
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <SavedJobs />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobsHub;
