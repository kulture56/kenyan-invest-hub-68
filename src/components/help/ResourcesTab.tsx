
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Video, 
  Users, 
  TrendingUp, 
  FileEdit,
  MessageCircle
} from "lucide-react";

export const ResourcesTab = () => {
  const resources = [
    {
      id: 1,
      title: "Financial Education Videos",
      description: "Comprehensive video library covering investment basics, SACCO operations, and NSE trading strategies.",
      icon: <Video className="h-5 w-5" />,
      type: "Video Library",
      action: "Browse Videos",
      link: "/learn"
    },
    {
      id: 2,
      title: "Investment Glossary",
      description: "Essential financial terms and definitions to help you navigate the Kenyan investment landscape.",
      icon: <BookOpen className="h-5 w-5" />,
      type: "Reference",
      action: "View Glossary",
      link: "/glossary"
    },
    {
      id: 3,
      title: "SACCO Directory",
      description: "Complete directory of registered SACCOs in Kenya with ratings, services, and contact information.",
      icon: <Users className="h-5 w-5" />,
      type: "Directory",
      action: "Browse SACCOs",
      link: "#sacco-directory"
    },
    {
      id: 4,
      title: "Market Analysis Reports",
      description: "Weekly and monthly market analysis covering NSE performance, sector insights, and investment opportunities.",
      icon: <TrendingUp className="h-5 w-5" />,
      type: "Reports",
      action: "Read Reports",
      link: "#market-reports"
    },
    {
      id: 5,
      title: "Resume-Building Tools",
      description: "Professional templates and guided tools to create compelling resumes for financial sector careers.",
      icon: <FileEdit className="h-5 w-5" />,
      type: "Career Tools",
      action: "Build Resume",
      link: "#resume-builder",
      isNew: true
    },
    {
      id: 6,
      title: "Interview Tips",
      description: "Comprehensive guides and practice questions for financial sector job interviews and career advancement.",
      icon: <MessageCircle className="h-5 w-5" />,
      type: "Career Guidance",
      action: "View Tips",
      link: "#interview-tips",
      isNew: true
    },
    {
      id: 7,
      title: "Regulatory Guidelines",
      description: "Up-to-date information on CMA regulations, tax implications, and compliance requirements for investors.",
      icon: <FileText className="h-5 w-5" />,
      type: "Legal",
      action: "View Guidelines",
      link: "#regulations"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Learning Resources</h2>
        <p className="text-muted-foreground">
          Access comprehensive resources to enhance your financial knowledge and career prospects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {resource.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {resource.title}
                      {resource.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          New
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {resource.type}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {resource.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full gap-2"
                asChild={resource.link.startsWith('/')}
              >
                {resource.link.startsWith('/') ? (
                  <a href={resource.link}>
                    {resource.action}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span>
                    {resource.action}
                    <ExternalLink className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Resource Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <TrendingUp className="h-5 w-5" />
            Featured Resource: Career Development Hub
          </CardTitle>
          <CardDescription className="text-blue-600">
            New tools to boost your financial sector career
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">Resume-Building Tools</h4>
              <p className="text-sm text-blue-700">
                Professional templates specifically designed for financial sector positions including:
              </p>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Banking and finance templates</li>
                <li>• Investment advisor formats</li>
                <li>• SACCO management layouts</li>
                <li>• Entry-level financial positions</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">Interview Tips & Guidance</h4>
              <p className="text-sm text-blue-700">
                Comprehensive interview preparation including:
              </p>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Common financial sector questions</li>
                <li>• Technical skill assessments</li>
                <li>• Behavioral interview techniques</li>
                <li>• Salary negotiation strategies</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Building Resume
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              View Interview Tips
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
