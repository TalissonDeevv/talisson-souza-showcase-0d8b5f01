import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let token: string | null = null;
    let language = "pt";

    if (req.method === "GET") {
      token = url.searchParams.get("token");
      language = url.searchParams.get("lang") || "pt";
    } else {
      const body = await req.json();
      token = body.token;
      language = body.language || "pt";
    }

    if (!token) {
      return new Response(
        JSON.stringify({ error: language === "pt" ? "Token ausente" : "Missing token" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Find subscriber by token
    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, name, is_confirmed")
      .eq("confirmation_token", token)
      .maybeSingle();

    if (findError) throw findError;

    if (!subscriber) {
      return new Response(
        JSON.stringify({
          error: language === "pt"
            ? "Token inválido ou já utilizado."
            : "Invalid or already used token.",
        }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (subscriber.is_confirmed) {
      return new Response(
        JSON.stringify({
          message: language === "pt"
            ? "Email já confirmado anteriormente."
            : "Email already confirmed.",
          already_confirmed: true,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Confirm and invalidate token
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        is_confirmed: true,
        confirmed_at: new Date().toISOString(),
        confirmation_token: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriber.id);

    if (updateError) throw updateError;

    // Send welcome email
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      await sendWelcomeEmail(resendKey, subscriber.email, subscriber.name, language);
    }

    return new Response(
      JSON.stringify({
        message: language === "pt"
          ? "Inscrição confirmada com sucesso!"
          : "Subscription confirmed successfully!",
        confirmed: true,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter confirm error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function sendWelcomeEmail(
  resendKey: string,
  email: string,
  name: string | null,
  language: string
) {
  const greeting = name
    ? (language === "pt" ? `Bem-vindo(a), ${name}!` : `Welcome, ${name}!`)
    : (language === "pt" ? "Bem-vindo(a)!" : "Welcome!");

  const subject = language === "pt"
    ? "Bem-vindo(a) à newsletter!"
    : "Welcome to the newsletter!";

  const html = `
    <div style="font-family: 'Space Grotesk', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; background: #0a0a0a; color: #ece8e1;">
      <h1 style="font-size: 22px; font-weight: 600; margin-bottom: 16px; color: #ece8e1;">
        ${greeting}
      </h1>
      <p style="font-size: 15px; line-height: 1.7; color: #8a8580; margin-bottom: 24px;">
        ${language === "pt"
          ? "Sua inscrição foi confirmada. A partir de agora, você receberá conteúdos sobre tecnologia, arquitetura de software, carreira e estratégia."
          : "Your subscription is confirmed. From now on, you will receive content about technology, software architecture, career and strategy."}
      </p>
      <p style="font-size: 15px; line-height: 1.7; color: #8a8580; margin-bottom: 24px;">
        ${language === "pt"
          ? "Enquanto isso, explore os artigos disponíveis:"
          : "In the meantime, explore the available articles:"}
      </p>
      <a href="https://talissonsouza.com/${language === "en" ? "en-us/articles" : "artigos"}" style="display: inline-block; padding: 12px 28px; background: #ece8e1; color: #0a0a0a; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">
        ${language === "pt" ? "Ver artigos" : "View articles"}
      </a>
      <p style="font-size: 12px; color: #555; margin-top: 32px; line-height: 1.6;">
        ${language === "pt"
          ? "Você pode cancelar sua inscrição a qualquer momento pelo link nos emails."
          : "You can unsubscribe at any time via the link in the emails."}
      </p>
    </div>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Talisson Souza <newsletter@talissonsouza.com>",
      to: [email],
      subject,
      html,
    }),
  });
}
