
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = "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";
    
    const requestData = await req.json();
    const { query, contextPrompt = "", formatting = {} } = requestData;
    
    if (!query) {
      throw new Error('Query is required');
    }

    console.log("Received query:", query);
    console.log("Context prompt:", contextPrompt);
    console.log("Formatting options:", formatting);

    // Build the system prompt with context
    let systemPrompt = `You are Rafiki, a knowledgeable AI investment assistant specialized in Kenyan financial markets.
Your responses should be helpful, informative, and focused on providing accurate financial advice.
Include specific details about Kenyan investment options, market trends, and financial instruments when relevant.
You should be professional but warm in your communication style.

When appropriate, suggest relevant learning modules or career opportunities:
- For beginners, recommend "Stock Market Fundamentals" or "Investment Basics"
- For intermediate users, suggest "SACCO Investment Guide" or "Cryptocurrency Basics"
- For career inquiries, mention opportunities like Investment Analyst, Financial Advisor, or SACCO management roles
- Always tailor suggestions to the user's query and experience level`;

    // Add contextual information if available
    if (contextPrompt) {
      systemPrompt += `\n\n${contextPrompt}`;
    }

    // Handle special formatting
    if (formatting.hasPoll) {
      systemPrompt += `\n\nThe user is trying to create a poll. Please format your response to acknowledge this and suggest 3-5 appropriate poll options based on their query.`;
    }

    if (formatting.hasChart) {
      systemPrompt += `\n\nThe user is requesting chart data. Please provide relevant statistics and numerical data that could be visualized in a chart, along with your analysis.`;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o",  // Using gpt-4o for enhanced capabilities
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          { role: 'user', content: query }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const responseData = await response.json();
    console.log("OpenAI response received");
    
    // Extract the assistant's reply from the OpenAI response
    const assistantReply = responseData.choices[0].message.content;

    return new Response(JSON.stringify({ response: assistantReply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in rafiki-chat function:', error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
