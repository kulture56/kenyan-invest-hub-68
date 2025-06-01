
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
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <p className="text-muted-foreground">Find answers, policies, and support resources</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="faqs" className="mt-6">
            <FAQTab />
          </TabsContent>

          <TabsContent value="privacy" className="mt-6">
            <PrivacyPolicyTab />
          </TabsContent>

          <TabsContent value="terms" className="mt-6">
            <TermsConditionsTab />
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <ContactSupportTab />
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <ResourcesTab />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default HelpPage;
