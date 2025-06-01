
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactSupportTab = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    message: "",
    email: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Sent",
      description: "We've received your message and will respond within 24 hours."
    });
    setFormData({ subject: "", category: "", message: "", email: "" });
  };

  const categories = [
    { value: "account", label: "Account Issues" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing Questions" },
    { value: "privacy", label: "Privacy Concerns" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Contact Support
          </CardTitle>
          <CardDescription>
            Get help from our support team or find other ways to reach us
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder="Brief description of your issue"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Please provide details about your issue or question..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">For general inquiries:</p>
            <p className="font-medium">support@geltplatform.com</p>
            <p className="text-sm text-muted-foreground mt-2">
              Response time: Within 24 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">For urgent matters:</p>
            <p className="font-medium">+254 700 123 456</p>
            <p className="text-sm text-muted-foreground mt-2">
              Monday - Friday: 9:00 AM - 6:00 PM EAT
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
