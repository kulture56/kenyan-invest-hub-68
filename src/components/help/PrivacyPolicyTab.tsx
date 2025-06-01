
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const PrivacyPolicyTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          GELT Privacy Policy
        </CardTitle>
        <CardDescription>
          Effective Date: May 31, 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p className="text-muted-foreground">
              GELT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Pan-African financial education and social investing platform.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Personal Information</h4>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, including:
                  - Name, email address, and profile information
                  - Account credentials and preferences
                  - Posts, messages, and user-generated content
                  - Streak achievements and learning progress
                  - Communication preferences and settings
                </p>
              </div>
              <div>
                <h4 className="font-medium">Usage Information</h4>
                <p className="text-muted-foreground">
                  We automatically collect information about your use of the platform:
                  - Device information and IP addresses
                  - Browser type and operating system
                  - Platform usage patterns and feature interactions
                  - Learning Center video views and completion rates
                  - Glossary term searches and Rafiki AI interactions
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold">3. How We Use Your Information</h3>
            <p className="text-muted-foreground">
              We use the collected information to:
              - Provide and maintain the GELT platform services
              - Personalize your learning experience and content recommendations
              - Enable Rafiki AI to provide relevant financial insights
              - Facilitate community interactions and messaging
              - Track Streaks progress and leaderboard standings
              - Send notifications and important platform updates
              - Improve platform features and user experience
              - Ensure platform security and prevent fraud
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Rafiki AI and Data Processing</h3>
            <p className="text-muted-foreground">
              Rafiki AI processes your questions and interactions to provide personalized financial education. All data used for Rafiki's responses is anonymized and processed in accordance with Kenya's Data Protection Act (2019). Rafiki's insights are for educational purposes only and should not replace professional financial advice from CMA-licensed advisors.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Data Sharing and Disclosure</h3>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share information in the following circumstances:
              - With your consent or at your direction
              - With service providers who assist in platform operations
              - To comply with legal obligations or protect our rights
              - In connection with business transfers or acquisitions
              - For anonymized analytics to improve platform features
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Data Security</h3>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Your Rights (Kenya Data Protection Act 2019)</h3>
            <p className="text-muted-foreground">
              Under Kenya's Data Protection Act, you have the right to:
              - Access your personal data we hold
              - Correct inaccurate or incomplete data
              - Delete your personal data (right to be forgotten)
              - Restrict processing of your data
              - Data portability (receive your data in a structured format)
              - Object to processing for direct marketing
              - Withdraw consent for data processing
              
              To exercise these rights, visit Account {'>'}  Settings {'>'}  Security & Privacy or contact our support team.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">8. Data Retention</h3>
            <p className="text-muted-foreground">
              We retain your personal information only as long as necessary to provide services and fulfill legal obligations. When you delete your account, we remove your personal data in accordance with our data retention policy, while preserving anonymized data for platform improvement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">9. Children's Privacy</h3>
            <p className="text-muted-foreground">
              GELT is intended for users 18 and older. Users under 18 may use the platform under parental or guardian supervision. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">10. International Data Transfers</h3>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than Kenya. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">11. Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notifications. Your continued use of GELT after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">12. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or our data practices, contact us through:
              - Help Center {'>'}  Contact Support
              - Email: privacy@geltplatform.com
              - Our Data Protection Officer for matters related to Kenya's Data Protection Act
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};
