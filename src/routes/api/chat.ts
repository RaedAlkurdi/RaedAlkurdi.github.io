import { createFileRoute } from "@tanstack/react-router";
import type { UIMessage } from "ai";
import { profile, skills, projects, experience } from "@/content/portfolio";

function buildInstructions() {
  return `You are the portfolio assistant for ${profile.name} (${profile.title}). Answer visitors' questions about his projects, skills and experience, in a friendly, concise way (2-5 sentences unless asked for more). Speak about him in the third person. Only use the facts below; if something is not covered, say you don't know and suggest contacting him at ${profile.email}. Politely decline unrelated requests.

BIO: ${profile.bio}

SKILLS:
${skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`).join("\n")}

PROJECTS:
${projects.map((p) => `- ${p.title} [${p.tags.join(", ")}]: ${p.description}`).join("\n")}

EXPERIENCE:
${experience.map((e) => `- ${e.period}: ${e.role} at ${e.org}. ${e.text}`).join("\n")}`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });

        let messages: UIMessage[];
        try {
          ({ messages } = (await request.json()) as { messages: UIMessage[] });
          if (!Array.isArray(messages)) throw new Error();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }
        // Keep requests small: last 12 messages only.
        messages = messages.slice(-12);

        const { convertToModelMessages } = await import("ai");
        const { createResponsesCall } = await import("@/server/ai/responses");
        const call = createResponsesCall(
          request,
          { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey, model: "openai/gpt-6-astra" },
          await convertToModelMessages(messages),
          buildInstructions(),
        );
        return call.response();
      },
    },
  },
});
