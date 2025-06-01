
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const TermsConditionsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          GELT Terms and Conditions
        </CardTitle>
        <CardDescription>
          Effective Date: May 31, 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground">
              By accessing or using the GELT platform, you agree to be bound by these Terms and Conditions, our Privacy Policy, and our Community Guidelines. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. Eligibility</h3>
            <p className="text-muted-foreground">
              You must be at least 18 years old to use GELT. Users under 18 may use the platform under parental or guardian supervision.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">3. Account Registration</h3>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to update it as necessary.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Use of the Platform</h3>
            <p className="text-muted-foreground">
              GELT provides educational content and tools for financial empowerment, including the Home feed, Learning Center, Glossary, Streaks, Career Hub, and Messages. You agree not to use the platform for any unlawful or prohibited activities, as outlined in our Community Guidelines.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Intellectual Property</h3>
            <p className="text-muted-foreground">
              All content on GELT, including text, data, graphics, logos, videos, and software, is the property of GELT or its licensors and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. User Content</h3>
            <p className="text-muted-foreground">
              By submitting content to GELT (e.g., posts, messages, streak achievements), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content in connection with the platform. You are responsible for ensuring your content complies with our Community Guidelines.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Community Guidelines</h3>
            <p className="text-muted-foreground">
              You agree to adhere to GELT's Community Guidelines, which prohibit content such as violence, hate speech, spam, impersonation, and other harmful behaviors. Violations may result in content removal, account warnings, or termination.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">8. Premium Features</h3>
            <p className="text-muted-foreground">
              GELT offers premium features (e.g., group streaks, advanced analytics) through a subscription model. Subscription terms, including fees, billing, and cancellation, are detailed in the Account {'>'}  Settings section. You agree to comply with these terms when accessing premium features.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">9. Data Protection</h3>
            <p className="text-muted-foreground">
              GELT complies with Kenya's Data Protection Act (2019). You have the right to access, export, or delete your personal data via Account {'>'}  Settings {'>'}  Security & Privacy. Data used for Rafiki AI training is anonymized and processed in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">10. Rafiki AI Usage</h3>
            <p className="text-muted-foreground">
              Rafiki AI is a virtual assistant providing educational insights and answers about GELT features and Kenyan financial topics. GELT is not liable for any decisions made based on Rafiki's responses. All financial advice provided by Rafiki is general and should be verified with a CMA-licensed financial advisor.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">11. Reporting Content or Accounts</h3>
            <p className="text-muted-foreground">
              You may report posts or accounts violating Community Guidelines via the "Report" option (e.g., accessible through post or profile menus). Select a reason (e.g., hate speech, spam), and our moderation team will review within 24-48 hours. Outcomes are communicated via email or in-app notifications.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">12. Career Hub</h3>
            <p className="text-muted-foreground">
              The Career Hub provides access to job listings curated for the Kenyan market. GELT is not responsible for the accuracy of job listings or outcomes of applications. You agree to use the Career Hub responsibly and verify job opportunities independently.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">13. Streaks and Gamification</h3>
            <p className="text-muted-foreground">
              Streaks involve answering daily questions to earn points and compete on leaderboards. Premium users may create group streaks (up to 10 participants). You agree not to manipulate leaderboards or share misleading achievement links.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">14. Accessibility and Localization</h3>
            <p className="text-muted-foreground">
              GELT supports English and plans to offer Swahili translations for key features (e.g., Glossary, Learning Center). Accessibility features, such as text-to-speech, may be added to enhance usability.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">15. Termination</h3>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate your access to GELT at our discretion, without notice, for conduct that we believe violates these Terms and Conditions or Community Guidelines.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">16. Disclaimers and Limitation of Liability</h3>
            <p className="text-muted-foreground">
              GELT is provided on an "as-is" basis. We do not guarantee the accuracy or completeness of any information on the platform, including Rafiki AI responses or job listings. We are not liable for any damages arising from your use of GELT.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">17. Governing Law and Dispute Resolution</h3>
            <p className="text-muted-foreground">
              These Terms and Conditions are governed by the laws of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kenya. GELT may offer mediation as an alternative dispute resolution method, details of which are available upon request.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};
