
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, apiKey } = await req.json();
    
    if (!message) {
      return new Response(JSON.stringify({ 
        error: 'Message is required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!apiKey) {
      return new Response(JSON.stringify({ 
        error: 'OpenAI API key is required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Processing message:", message);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: 'system',
            content: `You are Rafiki AI Assistant, a knowledgeable AI investment assistant specialized in Kenyan financial markets.
Your responses should be helpful, informative, and focused on providing accurate financial advice.
Include specific details about Kenyan investment options, market trends, and financial instruments when relevant.
You should be professional but warm in your communication style.

When appropriate, suggest relevant investment opportunities:
- For beginners, recommend safe options like Money Market Funds or Treasury Bills
- For intermediate users, suggest diversified portfolios including stocks on NSE
- For advanced users, discuss complex strategies and alternative investments
- Always tailor suggestions to the user's query and risk tolerance`
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      
      let errorMessage = 'Failed to get response from OpenAI';
      if (errorData.error?.code === 'insufficient_quota') {
        errorMessage = 'OpenAI API quota exceeded. Please check your API key billing and usage limits.';
      } else if (errorData.error?.code === 'invalid_api_key') {
        errorMessage = 'Invalid OpenAI API key. Please check your API key.';
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

    const data = await response.json();
    const assistantReply = data.choices?.[0]?.message?.content;
    
    if (!assistantReply) {
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
    console.error('Error in ai-chat function:', error);
    
    return new Response(JSON.stringify({ 
      error: `Server error: ${error.message || 'An unexpected error occurred'}`
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
