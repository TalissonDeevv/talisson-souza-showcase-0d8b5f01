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

    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, unsubscribed_at")
      .eq("unsubscribe_token", token)
      .maybeSingle();

    if (findError) throw findError;

    if (!subscriber) {
      return new Response(
        JSON.stringify({
          error: language === "pt"
            ? "Token inválido."
            : "Invalid token.",
        }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (subscriber.unsubscribed_at) {
      return new Response(
        JSON.stringify({
          message: language === "pt"
            ? "Você já cancelou sua inscrição anteriormente."
            : "You have already unsubscribed.",
          already_unsubscribed: true,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        unsubscribed_at: new Date().toISOString(),
        is_confirmed: false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriber.id);

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({
        message: language === "pt"
          ? "Inscrição cancelada com sucesso."
          : "Successfully unsubscribed.",
        unsubscribed: true,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
