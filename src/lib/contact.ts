import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  message: z.string().trim().min(1, "Please enter a message.").max(5000, "Message must be 5,000 characters or fewer."),
});

// Web3Forms access keys are public form identifiers, not private API credentials.
const accessKey = "9bcadd0a-54d4-4966-8c82-7bd1f9170ab6";

export async function sendContact(input: unknown, signal?: AbortSignal) {
  const data = contactSchema.parse(input);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...data,
      access_key: accessKey,
      subject: "New message from Raed's portfolio",
      from_name: "Raed Alkurdi Portfolio",
      replyto: data.email,
      botcheck: false,
    }),
    signal: signal ?? null,
  });
  const result: unknown = await response.json();
  if (!response.ok || typeof result !== "object" || result === null || !("success" in result) || result.success !== true) {
    throw new Error("Your message couldn’t be sent. Please try again or use the email link.");
  }
}