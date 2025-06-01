
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export const FAQTab = () => {
  const faqSections = [
    {
      title: "General Platform Usage",
      faqs: [
        {
          question: "What is GELT?",
          answer: "GELT is a Pan-African financial education and social investing platform that empowers users to learn about personal finance, track investments, engage with a financial community, and access curated job opportunities. It combines educational tools, community features, and AI assistance to support users on their financial journey."
        },
        {
          question: "Who can use GELT?",
          answer: "GELT is open to individuals aged 18 and above. Users under 18 may use the platform under the supervision of a parent or guardian. The platform is tailored for users in Kenya and East Africa, with plans to expand across Africa."
        },
        {
          question: "Is GELT a licensed financial institution?",
          answer: "No, GELT is not a licensed financial institution. It provides educational content and tools for financial empowerment. While GELT may partner with licensed institutions, it does not offer financial advice or brokerage services."
        },
        {
          question: "How does GELT protect my data?",
          answer: "GELT is committed to safeguarding your personal information. We employ industry-standard security measures to protect your data. For detailed information, please refer to our Privacy Policy."
        },
        {
          question: "Are there any fees associated with using GELT?",
          answer: "GELT offers a freemium model. Basic features are available for free, while premium features, such as advanced analytics and exclusive content, are accessible through a subscription."
        },
        {
          question: "How do I delete my account?",
          answer: "You can delete your account at any time through the account settings. Upon deletion, your personal data will be removed in accordance with our data retention policy outlined in the Privacy Policy."
        },
        {
          question: "How do I access the platform?",
          answer: "You can access GELT via: Our official website, Google Play Store (for Android devices), Apple App Store (for iOS devices)"
        },
        {
          question: "How do I create a post on GELT?",
          answer: "To create a post, go to the Home section, click the 'Post' button, and choose your content type (text, media, or poll). Add hashtags (e.g., #Investing) to categorize your post, include emojis for engagement, and publish. You can tag other users or topics to increase visibility."
        },
        {
          question: "What are Streaks, and how do they work?",
          answer: "Streaks is a gamified feature where you answer three daily questions (worth 1 point each) on Kenyan financial history or current industry topics. Questions vary (multiple choice, yes/no, open-ended) and reset monthly. Your total points determine your leaderboard position. Premium users can create group streaks (up to 10 people) with a separate leaderboard. Share achievements via a unique link."
        },
        {
          question: "How do I use the Learning Center?",
          answer: "The Learning Center offers videos on investments (e.g., treasury bills, money market funds), savings (e.g., SACCOs, M-Pesa), and financial literacy. Access it via the Learn tab, browse or search for videos, and watch content tailored to Kenya's financial market."
        },
        {
          question: "What is the Glossary, and how can I use it?",
          answer: "The Glossary provides definitions of Kenyan financial terms (e.g., 'chama,' 'SACCO') and global terms adapted for Kenya. Use the search bar to find terms or click 'Ask Rafiki' for AI-assisted explanations. The total number of terms is displayed for reference."
        },
        {
          question: "How do I save or find bookmarked posts?",
          answer: "To bookmark a post, click the bookmark icon on any post in the Home feed. Access saved posts in the Bookmarks section and use the search bar to find specific content."
        },
        {
          question: "How do I manage notifications on GELT?",
          answer: "In the Notifications section, view all or unread notifications (e.g., likes, replies, mentions). Customize notification frequency and types in Account > Settings > Preferences to suit your needs."
        },
        {
          question: "How do I message other users?",
          answer: "Go to the Messages section, use the search bar to find a contact, and send text messages or emojis. This feature connects you with GELT's community for discussions or collaboration."
        }
      ]
    },
    {
      title: "Rafiki AI",
      faqs: [
        {
          question: "What is Rafiki AI?",
          answer: "Rafiki AI is GELT's virtual financial assistant. It provides users with insights into financial topics, answers questions about GELT features and Kenyan finance, and offers personalized guidance to enhance financial literacy."
        },
        {
          question: "How can I interact with Rafiki AI?",
          answer: "Rafiki AI is available in the Glossary ('Ask Rafiki' option), Home, and other sections. Ask questions about GELT features (e.g., 'How do I start a streak?'), Kenyan finance (e.g., 'What is a money market fund?'), or general financial literacy. Rafiki provides accurate, culturally relevant answers with a disclaimer for professional advice."
        },
        {
          question: "Can Rafiki help me with Kenyan financial questions?",
          answer: "Yes, Rafiki is trained on Kenyan financial knowledge, including investment vehicles (e.g., treasury bills, SACCOs), institutions (e.g., CBK, NSE), and notable figures (e.g., James Mwangi of Equity Bank). Ask about local terms, regulations, or opportunities, and Rafiki will provide tailored insights."
        }
      ]
    },
    {
      title: "Kenyan Financial Context",
      faqs: [
        {
          question: "What investment options can I learn about on GELT?",
          answer: "GELT's Learning Center and Glossary cover Kenyan investment options like money market funds (8-12% returns), treasury bills/bonds (via CBK), SACCOs, and stocks on the Nairobi Securities Exchange (NSE). Rafiki can explain these in detail or suggest relevant videos."
        },
        {
          question: "How does GELT support financial education in Kenya?",
          answer: "GELT offers a Learning Center with videos on savings, investments, and financial literacy, tailored to Kenya's market. The Glossary defines local terms like 'chama' and global concepts like 'dividends.' Streaks test your knowledge with daily questions, and Rafiki provides personalized guidance."
        }
      ]
    },
    {
      title: "Premium Features",
      faqs: [
        {
          question: "What are the benefits of a premium subscription?",
          answer: "Premium users access advanced analytics (e.g., investment tracking insights), exclusive Learning Center content, and group streaks (compete with up to 10 friends). Upgrade via Account > Settings or check subscription details on the GELT website."
        },
        {
          question: "How do I join or create a group streak?",
          answer: "Premium users can create a group streak in the Streaks section by selecting 'Create Group Streak,' inviting up to 10 friends, and starting daily questions. Each member answers unique questions, and a group leaderboard tracks progress."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What should I do if I can't log in to GELT?",
          answer: "Check your email and password, or use the 'Forgot Password' option to reset your credentials. Ensure your app is updated via the Google Play Store or Apple App Store. If issues persist, contact support via Account > Help Center > Contact Support."
        },
        {
          question: "Why is the GELT app not working on my device?",
          answer: "Ensure your device meets the app's requirements (e.g., Android 8.0+ or iOS 14.0+). Clear the app cache, check your internet connection, or reinstall the app. For further assistance, reach out to support through the Help Center."
        }
      ]
    },
    {
      title: "Community and Safety",
      faqs: [
        {
          question: "What are GELT's Community Guidelines?",
          answer: "GELT's Community Guidelines, found in Account > Help Center, prohibit harmful content like violence, hate speech, spam, and impersonation. Follow these rules to maintain a respectful community. Report violations using the report option on posts or profiles."
        },
        {
          question: "How do I report harmful or abusive content?",
          answer: "To help us maintain a safe and respectful community, you can report posts or users directly through the report option available on every post or profile. Content that can be reported includes: Violence (Physical threats, speech intimidation, harassment), Pornography (Unwanted sexual content, NSFW images, graphic objectification), Child Safety (Exploitation, grooming, child abuse), Hate Speech (Discrimination, slurs, bullying, incitement of fear), Spam (Fake accounts, scams, bots, malicious links), Suicide and Self Harm (Content promoting or instructing self-harm), Impersonation (Pretending to be someone else), Extremism & Terrorism (Support or promotion of hate groups or extremist networks)"
        },
        {
          question: "How do I report an account or post on GELT?",
          answer: "To report an account or post, navigate to the specific post or user profile and click the 'Report' option (accessible via the post or profile menu). Select the reason for reporting (e.g., hate speech, spam, impersonation) from the provided categories. Submit the report, and GELT's moderation team will review it within 24-48 hours. You will be notified of the outcome via email or in-app notifications. For urgent issues, contact support through Account > Help Center > Contact Support."
        },
        {
          question: "How does GELT handle reported content?",
          answer: "Reported content is reviewed by our moderation team within 24-48 hours. Violations may result in content removal, user warnings, or account suspension, depending on severity. Users are notified of the outcome via email or in-app notifications."
        }
      ]
    },
    {
      title: "Accessibility and Localization",
      faqs: [
        {
          question: "Does GELT support Swahili or other local languages?",
          answer: "GELT currently supports English, with plans to add Swahili translations for the Glossary, Learning Center, and FAQs to better serve Kenyan users. Adjust your language preference in Account > Settings > Preferences."
        },
        {
          question: "Can I use GELT offline?",
          answer: "Some features, like saved Glossary terms or downloaded Learning Center videos, may be available offline in the future. Currently, an internet connection is required for most features. Check for updates in the app store."
        }
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          GELT Platform – Frequently Asked Questions (FAQs)
        </CardTitle>
        <CardDescription>
          Find answers to common questions about using the GELT Platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold mb-3 text-primary">{section.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {section.faqs.map((faq, index) => (
                  <AccordionItem key={`${sectionIndex}-${index}`} value={`item-${sectionIndex}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
