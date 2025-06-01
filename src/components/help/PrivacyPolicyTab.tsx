
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const PrivacyPolicyTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Privacy Policy
        </CardTitle>
        <CardDescription>
          Last updated: January 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold">1. Information We Collect</h3>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, 
              update your profile, or communicate with us. This may include your name, email address, 
              and other profile information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">3. Analytics and Cookies</h3>
            <p className="text-muted-foreground">
              We may collect analytics data to understand how users interact with our platform. 
              This data is anonymized and used solely for improving user experience. You can 
              control analytics data collection in your profile settings.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Data Security</h3>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Your Rights</h3>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your personal information. 
              You can also opt out of certain communications and data collection practices.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us through 
              our support channels.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};
