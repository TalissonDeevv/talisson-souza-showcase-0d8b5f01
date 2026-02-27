import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ArticleInfo {
  slug: string;
  title: string;
  text: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
  if (!ELEVENLABS_API_KEY) {
    return new Response(
      JSON.stringify({ error: "ELEVENLABS_API_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { slug, title, text, voiceId } = await req.json() as ArticleInfo & { voiceId?: string };

    if (!slug || !text) {
      return new Response(
        JSON.stringify({ error: "slug and text are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ElevenLabs has a 5000 char limit per request.
    // For long articles, we split into chunks and stitch.
    const MAX_CHARS = 4500;
    const chunks = splitText(text, MAX_CHARS);

    const audioChunks: ArrayBuffer[] = [];

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const previousText = i > 0 ? chunks[i - 1].slice(-200) : undefined;
      const nextText = i < chunks.length - 1 ? chunks[i + 1].slice(0, 200) : undefined;

      const body: Record<string, unknown> = {
        text: chunk,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.6,
          similarity_boost: 0.8,
          style: 0.3,
          use_speaker_boost: true,
        },
      };

      if (previousText) body.previous_text = previousText;
      if (nextText) body.next_text = nextText;

      const selectedVoice = voiceId || "onwK4e9ZLuTAKqWW03F9"; // Daniel

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}?output_format=mp3_44100_128`,
        {
          method: "POST",
          headers: {
            "xi-api-key": ELEVENLABS_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ElevenLabs API error (chunk ${i + 1}/${chunks.length}): ${response.status} - ${errorText}`);
      }

      const audioBuffer = await response.arrayBuffer();
      audioChunks.push(audioBuffer);

      // Small delay between requests to avoid rate limiting
      if (i < chunks.length - 1) {
        await new Promise(r => setTimeout(r, 500));
      }
    }

    // Concatenate all audio chunks
    const totalLength = audioChunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of audioChunks) {
      combined.set(new Uint8Array(chunk), offset);
      offset += chunk.byteLength;
    }

    return new Response(combined.buffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `attachment; filename="${slug}.mp3"`,
        "X-Article-Slug": slug,
        "X-Chunks-Count": String(chunks.length),
      },
    });
  } catch (error: unknown) {
    console.error("TTS generation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function splitText(text: string, maxChars: number): string[] {
  const chunks: string[] = [];
  const paragraphs = text.split("\n\n");
  let current = "";

  for (const paragraph of paragraphs) {
    if (current.length + paragraph.length + 2 > maxChars) {
      if (current.length > 0) {
        chunks.push(current.trim());
        current = "";
      }
      // If single paragraph is too long, split by sentences
      if (paragraph.length > maxChars) {
        const sentences = paragraph.match(/[^.!?]+[.!?]+/g) || [paragraph];
        for (const sentence of sentences) {
          if (current.length + sentence.length > maxChars) {
            if (current.length > 0) chunks.push(current.trim());
            current = sentence;
          } else {
            current += sentence;
          }
        }
      } else {
        current = paragraph;
      }
    } else {
      current += (current ? "\n\n" : "") + paragraph;
    }
  }

  if (current.trim().length > 0) {
    chunks.push(current.trim());
  }

  return chunks;
}
