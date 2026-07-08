import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.110.0";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const DEFAULT_ALLOWED_ORIGINS = [
  "https://www.talissonsouza.com.br",
  "https://talissonsouza.com.br",
];

const ALLOWED_ORIGINS = (
  Deno.env.get("ALLOWED_ORIGINS") ?? DEFAULT_ALLOWED_ORIGINS.join(",")
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const RATE_LIMIT_WINDOW_SECONDS = 60 * 60;
const RATE_LIMIT_MAX = 3;
const encoder = new TextEncoder();

interface CaptchaPayload {
  nonce?: unknown;
  question?: unknown;
  answer?: unknown;
  expiresAt?: unknown;
  signature?: unknown;
}

interface ContactRequest {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  subject?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  preferredContact?: unknown;
  howFound?: unknown;
  message?: unknown;
  website?: unknown;
  captcha?: CaptchaPayload | null;
}

function isOriginAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  return origin === null || ALLOWED_ORIGINS.includes(origin);
}

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin");
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Vary": "Origin",
  };

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function json(
  req: Request,
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...getCorsHeaders(req),
    },
  });
}

function requiredEnv(name: string): string | null {
  const value = Deno.env.get(name)?.trim();
  return value || null;
}

function base64Url(bytes: ArrayBuffer): string {
  const binary = String.fromCharCode(...new Uint8Array(bytes));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function hmac(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return base64Url(signature);
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return diff === 0;
}

function randomInt(maxExclusive: number): number {
  const value = new Uint32Array(1);
  crypto.getRandomValues(value);
  return value[0] % maxExclusive;
}

async function buildCaptchaChallenge(secret: string) {
  const op = ["+", "-", "x"][randomInt(3)];
  let a = randomInt(15) + 1;
  let b = randomInt(15) + 1;

  if (op === "-") {
    a = randomInt(20) + 5;
    b = randomInt(a);
  }

  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  const nonce = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + CAPTCHA_TTL_MS).toISOString();
  const signature = await hmac(secret, `${nonce}:${answer}:${expiresAt}`);

  return {
    nonce,
    question: `${a} ${op} ${b}`,
    expiresAt,
    signature,
  };
}

async function verifyCaptcha(secret: string, captcha: CaptchaPayload | null | undefined): Promise<boolean> {
  if (!captcha || typeof captcha !== "object") return false;

  const nonce = typeof captcha.nonce === "string" ? captcha.nonce : "";
  const answer = typeof captcha.answer === "string" ? captcha.answer.trim() : "";
  const expiresAt = typeof captcha.expiresAt === "string" ? captcha.expiresAt : "";
  const signature = typeof captcha.signature === "string" ? captcha.signature : "";

  if (!nonce || !answer || !expiresAt || !signature) return false;
  if (!/^-?[0-9]+$/.test(answer)) return false;
  if (Number.isNaN(Date.parse(expiresAt)) || Date.parse(expiresAt) < Date.now()) return false;

  const expected = await hmac(secret, `${nonce}:${answer}:${expiresAt}`);
  return constantTimeEqual(expected, signature);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function optionalString(value: unknown): string | null {
  const trimmed = asTrimmedString(value);
  return trimmed || null;
}

function getClientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip")?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

async function sha256Hex(value: string): Promise<string> {
  const hash = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return [...new Uint8Array(hash)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function checkRateLimit(req: Request, email: string): Promise<boolean> {
  const supabaseUrl = requiredEnv("SUPABASE_URL");
  const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const salt = requiredEnv("CONTACT_RATE_LIMIT_SALT") ?? requiredEnv("CONTACT_CAPTCHA_SECRET");

  if (!supabaseUrl || !serviceRoleKey || !salt) {
    console.error("contact_rate_limit_environment_missing");
    throw new Error("service_not_configured");
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const scopes = [
    `ip:${getClientIp(req)}`,
    `email:${email.toLowerCase()}`,
  ];

  for (const scope of scopes) {
    const keyHash = await sha256Hex(`${salt}:${scope}`);
    const { data, error } = await adminClient.rpc("check_contact_rate_limit", {
      p_key_hash: keyHash,
      p_max_requests: RATE_LIMIT_MAX,
      p_window_seconds: RATE_LIMIT_WINDOW_SECONDS,
    });

    if (error) {
      console.error("contact_rate_limit_failed", error.code);
      throw new Error("rate_limit_unavailable");
    }

    if (data !== true) return false;
  }

  return true;
}

function buildInfoRow(label: string, value: string | null): string {
  if (!value) return "";
  return `
    <div style="margin-bottom: 16px;">
      <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">${label}</p>
      <p style="color: #1a1a2e; font-size: 15px; font-weight: 500; margin: 0;">${escapeHtml(value)}</p>
    </div>`;
}

const handler = async (req: Request): Promise<Response> => {
  if (!isOriginAllowed(req)) {
    return json(req, { error: "origin_not_allowed" }, 403);
  }

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: getCorsHeaders(req) });
  }

  if (req.method === "GET") {
    const captchaSecret = requiredEnv("CONTACT_CAPTCHA_SECRET");
    if (!captchaSecret) {
      console.error("contact_captcha_environment_missing");
      return json(req, { error: "service_not_configured" }, 503);
    }

    return json(req, { captcha: await buildCaptchaChallenge(captchaSecret) });
  }

  if (req.method !== "POST") {
    return json(req, { error: "method_not_allowed" }, 405);
  }

  try {
    const captchaSecret = requiredEnv("CONTACT_CAPTCHA_SECRET");
    if (!captchaSecret) {
      console.error("contact_captcha_environment_missing");
      return json(req, { error: "service_not_configured" }, 503);
    }

    let body: ContactRequest;
    try {
      body = await req.json() as ContactRequest;
    } catch {
      return json(req, { error: "bad_request" }, 400);
    }

    if (asTrimmedString(body.website)) {
      return json(req, { success: true });
    }

    if (!(await verifyCaptcha(captchaSecret, body.captcha))) {
      return json(req, { error: "invalid_captcha" }, 400);
    }

    const name = asTrimmedString(body.name);
    const email = asTrimmedString(body.email);
    const phone = optionalString(body.phone);
    const company = optionalString(body.company);
    const subject = asTrimmedString(body.subject);
    const projectType = optionalString(body.projectType);
    const budget = optionalString(body.budget);
    const timeline = optionalString(body.timeline);
    const preferredContact = optionalString(body.preferredContact);
    const howFound = optionalString(body.howFound);
    const message = asTrimmedString(body.message);

    if (!name || !email || !message || !subject) {
      return json(req, { error: "Campos obrigatorios nao preenchidos" }, 400);
    }

    if (name.length > 100) {
      return json(req, { error: "Nome deve ter no maximo 100 caracteres" }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return json(req, { error: "Email invalido" }, 400);
    }

    if (message.length > 5000) {
      return json(req, { error: "Mensagem deve ter no maximo 5000 caracteres" }, 400);
    }

    if (phone && phone.length > 30) {
      return json(req, { error: "Telefone invalido" }, 400);
    }

    if (company && company.length > 100) {
      return json(req, { error: "Nome da empresa muito longo" }, 400);
    }

    const selectFields = [subject, projectType, budget, timeline, preferredContact, howFound];
    if (selectFields.some((field) => field && field.length > 100)) {
      return json(req, { error: "Campo invalido" }, 400);
    }

    if (!(await checkRateLimit(req, email))) {
      return json(req, { error: "Muitas solicitacoes. Tente novamente mais tarde." }, 429);
    }

    const detailRows = [
      buildInfoRow("Telefone / WhatsApp", phone),
      buildInfoRow("Empresa", company),
      buildInfoRow("Assunto", subject),
      buildInfoRow("Tipo de Projeto", projectType),
      buildInfoRow("Orcamento Estimado", budget),
      buildInfoRow("Prazo Desejado", timeline),
      buildInfoRow("Contato Preferido", preferredContact),
      buildInfoRow("Como me encontrou", howFound),
    ].filter(Boolean).join("");

    const emailResponse = await resend.emails.send({
      from: "Portfolio Talisson <onboarding@resend.dev>",
      to: ["talinhodev@gmail.com"],
      reply_to: email,
      subject: `${subject} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">Nova Mensagem de Contato</h1>
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
              Enviado via formulario de contato do portfolio<br>
              ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
            </p>
          </div>
        </body>
        </html>
      `,
    });

    const responseId =
      typeof emailResponse === "object" && emailResponse !== null && "data" in emailResponse
        ? (emailResponse as { data?: { id?: string } }).data?.id
        : undefined;
    console.log("contact_email_sent", responseId ?? "unknown");

    return json(req, { success: true });
  } catch (error) {
    console.error(
      "send_contact_email_error",
      error instanceof Error ? error.message : "unknown_error",
    );
    return json(req, { error: "Erro ao enviar email. Tente novamente mais tarde." }, 500);
  }
};

serve(handler);
