
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const TermsConditionsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Terms & Conditions
        </CardTitle>
        <CardDescription>
          Last updated: January 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground">
              By accessing and using the GELT Platform, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. Use License</h3>
            <p className="text-muted-foreground">
              Permission is granted to temporarily use the GELT Platform for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">3. User Accounts</h3>
            <p className="text-muted-foreground">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding your account 
              credentials.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Prohibited Uses</h3>
            <p className="text-muted-foreground">
              You may not use our platform for any unlawful purpose or to solicit others to perform 
              unlawful acts. You may not violate any laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Financial Advice Disclaimer</h3>
            <p className="text-muted-foreground">
              Content on the GELT Platform is for educational purposes only and should not be 
              considered as financial advice. Always consult with qualified financial professionals 
              before making investment decisions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Limitation of Liability</h3>
            <p className="text-muted-foreground">
              GELT Platform shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of the platform.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Changes to Terms</h3>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of any 
              significant changes via email or platform notifications.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};
