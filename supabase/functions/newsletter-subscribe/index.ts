import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiter (per edge function instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateLimitMap) {
    if (now > val.resetAt) rateLimitMap.delete(key);
  }
}, 60_000);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, name, language = "pt", honeypot } = await req.json();

    // Honeypot anti-spam: if this hidden field has a value, it's a bot
    if (honeypot) {
      // Silently accept to not reveal the trap
      return new Response(
        JSON.stringify({
          message: language === "pt"
            ? "Verifique seu email para confirmar a inscrição."
            : "Check your email to confirm your subscription.",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: language === "pt" ? "Email é obrigatório" : "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: language === "pt" ? "Email inválido" : "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (email.trim().length > 255) {
      return new Response(
        JSON.stringify({ error: language === "pt" ? "Email muito longo" : "Email too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedName = name ? String(name).trim().slice(0, 100) : null;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, is_confirmed, unsubscribed_at, name")
      .eq("email", sanitizedEmail)
      .maybeSingle();

    if (existing) {
      if (existing.is_confirmed && !existing.unsubscribed_at) {
        return new Response(
          JSON.stringify({
            message: language === "pt"
              ? "Este email já está inscrito na newsletter."
              : "This email is already subscribed.",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Re-subscribe: reset tokens and status
      const { data: updated, error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          is_confirmed: false,
          confirmation_token: crypto.randomUUID(),
          unsubscribe_token: crypto.randomUUID(),
          unsubscribed_at: null,
          name: sanitizedName || existing.name,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id)
        .select("confirmation_token")
        .single();

      if (updateError) throw updateError;

      if (resendKey) {
        await sendConfirmationEmail(resendKey, sanitizedEmail, sanitizedName, updated.confirmation_token, language);
      }

      return new Response(
        JSON.stringify({
          message: language === "pt"
            ? "Verifique seu email para confirmar a inscrição."
            : "Check your email to confirm your subscription.",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // New subscriber
    const { data: newSub, error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: sanitizedEmail, name: sanitizedName })
      .select("confirmation_token")
      .single();

    if (insertError) {
      if (insertError.code === "23505") {
        return new Response(
          JSON.stringify({
            message: language === "pt"
              ? "Este email já está inscrito."
              : "This email is already subscribed.",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw insertError;
    }

    if (resendKey) {
      await sendConfirmationEmail(resendKey, sanitizedEmail, sanitizedName, newSub.confirmation_token, language);
    }

    return new Response(
      JSON.stringify({
        message: language === "pt"
          ? "Verifique seu email para confirmar a inscrição."
          : "Check your email to confirm your subscription.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function sendConfirmationEmail(
  resendKey: string,
  email: string,
  name: string | null,
  token: string,
  language: string
) {
  const siteUrl = "https://talissonsouza.com";
  const confirmUrl = `${siteUrl}/${language === "en" ? "en-us/" : ""}newsletter/confirmar?token=${token}`;

  const subject = language === "pt"
    ? "Confirme sua inscrição na newsletter"
    : "Confirm your newsletter subscription";

  const greeting = name
    ? (language === "pt" ? `Olá, ${name}!` : `Hello, ${name}!`)
    : (language === "pt" ? "Olá!" : "Hello!");

  const html = `
    <div style="font-family: 'Space Grotesk', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; background: #0a0a0a; color: #ece8e1;">
      <h1 style="font-size: 22px; font-weight: 600; margin-bottom: 16px; color: #ece8e1;">
        ${subject}
      </h1>
      <p style="font-size: 15px; line-height: 1.7; color: #8a8580; margin-bottom: 24px;">
        ${greeting}
      </p>
      <p style="font-size: 15px; line-height: 1.7; color: #8a8580; margin-bottom: 32px;">
        ${language === "pt"
          ? "Você solicitou inscrição na newsletter de Talisson Souza. Clique no botão abaixo para confirmar:"
          : "You requested to subscribe to Talisson Souza's newsletter. Click below to confirm:"}
      </p>
      <a href="${confirmUrl}" style="display: inline-block; padding: 12px 28px; background: #ece8e1; color: #0a0a0a; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">
        ${language === "pt" ? "Confirmar inscrição" : "Confirm subscription"}
      </a>
      <p style="font-size: 12px; color: #555; margin-top: 32px; line-height: 1.6;">
        ${language === "pt"
          ? "Se você não solicitou esta inscrição, ignore este email."
          : "If you did not request this subscription, please ignore this email."}
      </p>
    </div>
  `;

  // Use onboarding@resend.dev as fallback if custom domain is not verified
  // TODO: Change to "Talisson Souza <newsletter@talissonsouza.com.br>" once domain is verified in Resend
  const fromAddress = "Talisson Souza <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [email],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.error("Resend email error:", res.status, errBody);
  }
}
