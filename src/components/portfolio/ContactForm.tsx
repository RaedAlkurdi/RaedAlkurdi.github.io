import { useRef, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, sendContact } from "@/lib/contact";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const pending = useRef(false);

  return (
    <form className="space-y-4" aria-label="Contact Raed" onSubmit={async (event) => {
      event.preventDefault();
      if (pending.current) return;
      const parsed = contactSchema.safeParse(form);
      if (!parsed.success) {
        setStatus("error");
        setFeedback(parsed.error.issues[0]?.message ?? "Please check your details.");
        return;
      }
      const fields = new FormData(event.currentTarget);
      if (fields.get("botcheck")) return;
      pending.current = true;
      setStatus("sending");
      setFeedback("");
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        await sendContact(parsed.data, controller.signal);
        setStatus("success");
        setFeedback("Message sent. Thanks for getting in touch!");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
        setFeedback("Your message couldn’t be sent. Please try again or use the email link.");
      } finally {
        clearTimeout(timeout);
        pending.current = false;
      }
    }}>
      <input name="botcheck" type="checkbox" className="hidden" tabIndex={-1} aria-hidden="true" />
      <input name="name" required maxLength={100} autoComplete="name" aria-label="Your name" placeholder="Your name" className="field" disabled={status === "sending"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input name="email" type="email" required maxLength={254} autoComplete="email" aria-label="Your email" placeholder="Your email" className="field" disabled={status === "sending"} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea name="message" required maxLength={5000} rows={5} aria-label="Your message" placeholder="Your message" className="field" disabled={status === "sending"} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <Button type="submit" disabled={status === "sending"} className="btn-ink h-auto">
        {status === "sending" ? <LoaderCircle className="animate-spin motion-reduce:animate-none" /> : <Send />}
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
      <p role={status === "error" ? "alert" : "status"} aria-live="polite" className={`min-h-6 text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}>{feedback}</p>
    </form>
  );
}