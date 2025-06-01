
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  Calendar,
  Building
} from "lucide-react";

interface JobApplication {
  id: string;
  job_title: string;
  company_name: string;
  application_date: string;
  status: 'applied' | 'in_review' | 'interview' | 'rejected' | 'accepted';
  job_url?: string;
  notes?: string;
}

const JobApplicationTracker: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('application_date', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast({
        title: "Error",
        description: "Failed to load job applications.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'in_review':
        return <Eye className="h-4 w-4 text-orange-500" />;
      case 'interview':
        return <Calendar className="h-4 w-4 text-purple-500" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'in_review':
        return 'bg-orange-100 text-orange-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressValue = (status: string) => {
    switch (status) {
      case 'applied':
        return 25;
      case 'in_review':
        return 50;
      case 'interview':
        return 75;
      case 'accepted':
        return 100;
      case 'rejected':
        return 0;
      default:
        return 0;
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Application Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading applications...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Application Tracker ({applications.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {applications.length === 0 ? (
          <div className="text-center py-8">
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No job applications yet</p>
            <p className="text-sm text-muted-foreground">Start applying to jobs to track your progress here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{app.job_title}</h4>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {app.company_name}
                    </p>
                  </div>
                  <Badge className={getStatusColor(app.status)}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(app.status)}
                      {app.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{getProgressValue(app.status)}%</span>
                  </div>
                  <Progress value={getProgressValue(app.status)} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Applied: {new Date(app.application_date).toLocaleDateString()}</span>
                  {app.job_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={app.job_url} target="_blank" rel="noopener noreferrer">
                        View Job
                      </a>
                    </Button>
                  )}
                </div>
                
                {app.notes && (
                  <div className="text-sm text-muted-foreground bg-gray-50 p-2 rounded">
                    <strong>Notes:</strong> {app.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JobApplicationTracker;
