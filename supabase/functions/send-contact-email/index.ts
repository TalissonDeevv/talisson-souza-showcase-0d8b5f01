import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  subject: string;
  projectType?: string | null;
  budget?: string | null;
  timeline?: string | null;
  preferredContact?: string | null;
  howFound?: string | null;
  message: string;
}

// In-memory rate limiting (per IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildInfoRow(label: string, value: string | null | undefined): string {
  if (!value) return "";
  return `
    <div style="margin-bottom: 16px;">
      <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">${label}</p>
      <p style="color: #1a1a2e; font-size: 15px; font-weight: 500; margin: 0;">${escapeHtml(value)}</p>
    </div>`;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || req.headers.get("cf-connecting-ip")
      || "unknown";

    if (isRateLimited(clientIp)) {
      console.warn(`Rate limited IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Muitas solicitações. Tente novamente mais tarde." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const body: ContactRequest = await req.json();
    const { name, email, phone, company, subject, projectType, budget, timeline, preferredContact, howFound, message } = body;

    if (!name || !email || !message || !subject) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Nome deve ter no máximo 100 caracteres" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Mensagem deve ter no máximo 5000 caracteres" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const detailRows = [
      buildInfoRow("Telefone / WhatsApp", phone),
      buildInfoRow("Empresa", company),
      buildInfoRow("Assunto", subject),
      buildInfoRow("Tipo de Projeto", projectType),
      buildInfoRow("Orçamento Estimado", budget),
      buildInfoRow("Prazo Desejado", timeline),
      buildInfoRow("Contato Preferido", preferredContact),
      buildInfoRow("Como me encontrou", howFound),
    ].filter(Boolean).join("");

    const emailResponse = await resend.emails.send({
      from: "Portfólio Talisson <onboarding@resend.dev>",
      to: ["talinhodev@gmail.com"],
      reply_to: email,
      subject: `💼 ${subject} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">📬 Nova Mensagem de Contato</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">${escapeHtml(subject)}</p>
          </div>
          
          <div style="background: #fff; padding: 30px; border: 1px solid #e5e5e5; border-top: none;">
            <div style="margin-bottom: 20px;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Nome</p>
              <p style="color: #1a1a2e; font-size: 16px; font-weight: 600; margin: 0;">${escapeHtml(name)}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Email</p>
              <p style="margin: 0;"><a href="mailto:${escapeHtml(email)}" style="color: #3b82f6; text-decoration: none; font-size: 15px;">${escapeHtml(email)}</a></p>
            </div>

            ${detailRows}
            
            <div style="margin-bottom: 20px;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Mensagem</p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="color: #1a1a2e; font-size: 15px; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </div>
          </div>

          <div style="background: #f8f9fa; padding: 16px 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
              Enviado via formulário de contato do portfólio<br>
              ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro ao enviar email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
