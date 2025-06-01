
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQTab } from "@/components/help/FAQTab";
import { PrivacyPolicyTab } from "@/components/help/PrivacyPolicyTab";
import { TermsConditionsTab } from "@/components/help/TermsConditionsTab";
import { ContactSupportTab } from "@/components/help/ContactSupportTab";
import { ResourcesTab } from "@/components/help/ResourcesTab";

const HelpPage = () => {
  const [activeTab, setActiveTab] = useState("faqs");

  return (
    <AppLayout>
      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">GELT Help Center</h1>
          <p className="text-muted-foreground">Find answers, policies, and support resources for the GELT Platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile: Single column layout */}
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto md:h-10">
            <TabsTrigger value="faqs" className="text-xs md:text-sm px-2 py-2">FAQs</TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs md:text-sm px-2 py-2">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms" className="text-xs md:text-sm px-2 py-2">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="contact" className="text-xs md:text-sm px-2 py-2">Contact Support</TabsTrigger>
            <TabsTrigger value="resources" className="text-xs md:text-sm px-2 py-2">Resources</TabsTrigger>
          </TabsList>

          <div className="w-full">
            <TabsContent value="faqs" className="mt-0">
              <FAQTab />
            </TabsContent>

            <TabsContent value="privacy" className="mt-0">
              <PrivacyPolicyTab />
            </TabsContent>

            <TabsContent value="terms" className="mt-0">
              <TermsConditionsTab />
            </TabsContent>

            <TabsContent value="contact" className="mt-0">
              <ContactSupportTab />
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <ResourcesTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default HelpPage;
