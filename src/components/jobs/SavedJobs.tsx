
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { 
  Bookmark, 
  ExternalLink, 
  Trash2,
  Building,
  Calendar
} from "lucide-react";

interface SavedJob {
  id: string;
  job_title: string;
  company_name: string;
  job_url?: string;
  saved_date: string;
}

const SavedJobs: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const fetchSavedJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('saved_jobs')
        .select('*')
        .order('saved_date', { ascending: false });

      if (error) throw error;
      setSavedJobs(data || []);
    } catch (error) {
      console.error('Error fetching saved jobs:', error);
      toast({
        title: "Error",
        description: "Failed to load saved jobs.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const removeSavedJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('saved_jobs')
        .delete()
        .eq('id', jobId);

      if (error) throw error;

      setSavedJobs(prev => prev.filter(job => job.id !== jobId));
      toast({
        title: "Job Removed",
        description: "Job has been removed from your saved list.",
      });
    } catch (error) {
      console.error('Error removing saved job:', error);
      toast({
        title: "Error",
        description: "Failed to remove saved job.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bookmark className="h-5 w-5" />
            Saved Jobs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading saved jobs...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bookmark className="h-5 w-5" />
          Saved Jobs ({savedJobs.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {savedJobs.length === 0 ? (
          <div className="text-center py-8">
            <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No saved jobs yet</p>
            <p className="text-sm text-muted-foreground">Save jobs you're interested in to apply later</p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{job.job_title}</h4>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {job.company_name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {job.job_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={job.job_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </a>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeSavedJob(job.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Saved: {new Date(job.saved_date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SavedJobs;
