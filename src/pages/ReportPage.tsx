
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { AlertTriangle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const reportSchema = z.object({
  reportType: z.string({
    required_error: "Please select a report type",
  }),
  additionalInfo: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

type ReportFormValues = z.infer<typeof reportSchema>;

const ReportPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      additionalInfo: "",
    },
  });

  const onSubmit = (data: ReportFormValues) => {
    // In a real app, this would send the report to an API
    console.log("Report submitted:", { postId, ...data });
    
    toast({
      title: "Report submitted",
      description: "Thank you for helping keep our community safe.",
    });
    
    navigate(-1);
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Report Content</h1>
          <p className="text-muted-foreground">
            Help us keep our community safe by reporting harmful content
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-800">Important</h3>
            <p className="text-sm text-yellow-700">
              Please keep evidence such as screenshots or recordings of the content you're reporting.
              This helps us take appropriate action.
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="reportType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What are you reporting?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="violence" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          A) Violence: Physical threats, speech intimidation, harassment
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="pornography" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          B) Pornography: Unwanted sexual content, NSFW images, graphic objectification
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="child_safety" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          C) Child Safety: Exploitation, grooming, child abuse (online or physical)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="hate_speech" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          E) Hate Speech: Discrimination, slurs, bullying, incitement of fear, hateful symbols/media/emojis
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="spam" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          F) Spam: Fake accounts, scams, bots, malicious links
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="self_harm" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          G) Suicide and Self Harm: Content promoting or instructing self-harm
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="impersonation" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          H) Impersonation: Pretending to be someone else, including misleading fan or parody accounts
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="extremism" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          I) Extremism & Terrorism: Support or promotion of hate groups or extremist network
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Other: Can't find what you're looking for?
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide any additional details that might help us understand the issue better"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    If you selected "Other" above, please describe the issue here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Your Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We may need to contact you for more information about this report.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., +254712345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button type="submit">Submit Report</Button>
            </div>
          </form>
        </Form>
      </div>
    </AppLayout>
  );
};

export default ReportPage;
