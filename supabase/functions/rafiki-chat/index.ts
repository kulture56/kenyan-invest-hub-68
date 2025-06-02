
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
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not set in Supabase secrets');
      return new Response(JSON.stringify({ 
        error: 'OpenAI API key is not configured. Please add your OpenAI API key in the Supabase secrets.' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const requestData = await req.json();
    const { query, contextPrompt = "", formatting = {} } = requestData;
    
    if (!query) {
      return new Response(JSON.stringify({ 
        error: 'Query is required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Received query:", query);
    console.log("Using GPT-4o model with new API key");

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

    console.log("Making request to OpenAI with GPT-4o model...");

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o",
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

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error details:', errorData);
      
      let errorMessage = 'Failed to get response from OpenAI';
      if (errorData.error?.code === 'insufficient_quota') {
        errorMessage = 'OpenAI API quota exceeded. Please check your API key billing and usage limits.';
      } else if (errorData.error?.code === 'invalid_api_key') {
        errorMessage = 'Invalid OpenAI API key. Please check your API key configuration.';
      } else if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      }
      
      return new Response(JSON.stringify({ 
        error: errorMessage 
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const responseData = await response.json();
    console.log("OpenAI response received successfully");
    
    // Extract the assistant's reply from the OpenAI response
    const assistantReply = responseData.choices?.[0]?.message?.content;
    
    if (!assistantReply) {
      console.error('No response content received from OpenAI');
      return new Response(JSON.stringify({ 
        error: 'No response content received from OpenAI' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ response: assistantReply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in rafiki-chat function:', error);
    
    return new Response(JSON.stringify({ 
      error: `Server error: ${error.message || 'An unexpected error occurred'}`
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
