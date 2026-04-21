import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string; // Honeypot field
}

// Simple in-memory rate limiter (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 requests
  const windowMs = 60 * 1000; // per minute
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetAt) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  
  if (record.count >= limit) {
    return false; // Rate limit exceeded
  }
  
  // Increment count
  record.count++;
  return true;
}

function validateContactData(data: ContactRequest): { valid: boolean; error?: string } {
  // Honeypot check
  if (data.website && data.website.trim() !== '') {
    console.log('Honeypot triggered - potential bot submission');
    return { valid: false, error: 'Invalid submission' };
  }

  // Validate name
  if (!data.name || data.name.trim().length === 0 || data.name.length > 100) {
    return { valid: false, error: 'Nom invalide' };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
    return { valid: false, error: 'Email invalide' };
  }

  // Validate phone (optional)
  if (data.phone && data.phone.length > 20) {
    return { valid: false, error: 'Téléphone invalide' };
  }

  // Validate message
  if (!data.message || data.message.trim().length === 0 || data.message.length > 2000) {
    return { valid: false, error: 'Message invalide' };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Trop de requêtes, réessayez plus tard.' 
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    const contactData: ContactRequest = await req.json();

    // Validate input data
    const validation = validateContactData(contactData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: validation.error || 'Données invalides' 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    const { name, email, phone, message } = contactData;

    console.log('Received contact request from:', email);

    // Sanitize and prepare email content
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedPhone = phone?.trim() || 'Non fourni';
    const sanitizedMessage = message.trim();

    const emailContent = `
📧 Nouveau message – Digital-web33

👤 Nom : ${sanitizedName}
📧 Email : ${sanitizedEmail}
📱 Téléphone : ${sanitizedPhone}

💬 Message :
${sanitizedMessage}
    `.trim();

    // Send email with Resend (using verified domain)
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));
    
    const emailResponse = await resend.emails.send({
      from: 'Digital Web 33 <no-reply@methodes-douces-bordeaux.fr>',
      reply_to: 'contact@digital-web33.fr',
      to: 'eric.gata@gmail.com',
      subject: 'Nouveau message – Digital-web33',
      text: emailContent,
    });

    console.log('Email sent successfully via Resend:', emailResponse);

    // Return success immediately
    return new Response(
      JSON.stringify({ success: true, message: 'Email envoyé avec succès' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Erreur lors de l\'envoi de l\'email' 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
