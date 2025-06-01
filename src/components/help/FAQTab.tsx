
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export const FAQTab = () => {
  const faqs = [
    {
      question: "What is GELT Platform?",
      answer: "GELT Platform is a comprehensive financial education and community platform that helps users Grow, Empower, Learn, and Thrive in their financial journey. We provide resources, tools, and a supportive community for financial literacy and investment guidance."
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Sign Up' button and following the registration process. You'll need to provide basic information and verify your email address to get started."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely. We follow industry best practices and comply with privacy regulations like GDPR to protect your data."
    },
    {
      question: "How do I update my profile information?",
      answer: "You can update your profile by going to the Profile page from the main navigation. There you can edit your personal details, privacy settings, and analytics preferences."
    },
    {
      question: "What analytics data do you collect?",
      answer: "We only collect analytics data that you explicitly consent to share. This may include demographic information like age group, gender, and location to help us improve our platform. All data is anonymized and used solely for platform improvement."
    },
    {
      question: "How do I change my notification preferences?",
      answer: "You can manage your notification preferences in the Settings page under the Notifications tab. You can control email notifications, push notifications, and other alert preferences."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account at any time. Contact our support team through the Contact Support section, and we'll help you with the account deletion process."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "If you encounter inappropriate content, you can report it using the report button on posts or by contacting our support team directly. We review all reports promptly and take appropriate action."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
        <CardDescription>
          Find quick answers to common questions about the GELT Platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};
