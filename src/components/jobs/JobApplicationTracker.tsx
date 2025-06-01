import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  ExternalLink, 
  Calendar,
  Building,
  FileText,
  Trash2,
  Edit
} from "lucide-react";

type ApplicationStatus = "applied" | "in_review" | "interview" | "rejected" | "accepted";

interface JobApplication {
  id: string;
  job_title: string;
  company_name: string;
  application_date: string;
  status: ApplicationStatus;
  job_url?: string;
  notes?: string;
}

const JobApplicationTracker: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "",
    job_url: "",
    status: "applied" as ApplicationStatus,
    notes: ""
  });

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
      setApplications(data as JobApplication[] || []);
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

  const addApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // For now, using a placeholder user_id. In a real app, this would come from authentication
      const { data, error } = await supabase
        .from('job_applications')
        .insert([{
          job_title: formData.job_title,
          company_name: formData.company_name,
          job_url: formData.job_url || null,
          status: formData.status,
          notes: formData.notes || null,
          user_id: '00000000-0000-0000-0000-000000000000' // Placeholder user_id
        }])
        .select()
        .single();

      if (error) throw error;

      setApplications(prev => [data as JobApplication, ...prev]);
      setFormData({
        job_title: "",
        company_name: "",
        job_url: "",
        status: "applied",
        notes: ""
      });
      setIsAddingNew(false);
      
      toast({
        title: "Application Added",
        description: "Job application has been tracked successfully.",
      });
    } catch (error) {
      console.error('Error adding application:', error);
      toast({
        title: "Error",
        description: "Failed to add job application.",
        variant: "destructive"
      });
    }
  };

  const updateStatus = async (id: string, newStatus: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from('job_applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setApplications(prev => 
        prev.map(app => 
          app.id === id ? { ...app, status: newStatus } : app
        )
      );
      
      toast({
        title: "Status Updated",
        description: "Application status has been updated.",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update application status.",
        variant: "destructive"
      });
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setApplications(prev => prev.filter(app => app.id !== id));
      toast({
        title: "Application Deleted",
        description: "Job application has been removed.",
      });
    } catch (error) {
      console.error('Error deleting application:', error);
      toast({
        title: "Error",
        description: "Failed to delete application.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case "applied": return "bg-blue-100 text-blue-800";
      case "in_review": return "bg-yellow-100 text-yellow-800";
      case "interview": return "bg-purple-100 text-purple-800";
      case "rejected": return "bg-red-100 text-red-800";
      case "accepted": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatStatus = (status: ApplicationStatus) => {
    switch (status) {
      case "in_review": return "In Review";
      case "interview": return "Interview";
      case "rejected": return "Rejected";
      case "accepted": return "Accepted";
      default: return "Applied";
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Job Application Tracker</CardTitle>
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
        <div className="flex justify-between items-center">
          <CardTitle>Job Application Tracker ({applications.length})</CardTitle>
          <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Application
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Job Application</DialogTitle>
              </DialogHeader>
              <form onSubmit={addApplication} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Job Title</label>
                  <Input
                    value={formData.job_title}
                    onChange={(e) => setFormData(prev => ({ ...prev, job_title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    value={formData.company_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Job URL (Optional)</label>
                  <Input
                    type="url"
                    value={formData.job_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, job_url: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Select value={formData.status} onValueChange={(value: ApplicationStatus) => setFormData(prev => ({ ...prev, status: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="in_review">In Review</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Notes (Optional)</label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Interview feedback, follow-up actions, etc."
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Application</Button>
                  <Button type="button" variant="outline" onClick={() => setIsAddingNew(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {applications.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No job applications tracked yet</p>
            <p className="text-sm text-muted-foreground">Start tracking your job applications to stay organized</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{app.job_title}</h4>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {app.company_name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(app.status)}>
                      {formatStatus(app.status)}
                    </Badge>
                    {app.job_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={app.job_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => deleteApplication(app.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Applied: {new Date(app.application_date).toLocaleDateString()}
                  </div>
                  
                  <Select value={app.status} onValueChange={(value: ApplicationStatus) => updateStatus(app.id, value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="in_review">In Review</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {app.notes && (
                  <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
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
