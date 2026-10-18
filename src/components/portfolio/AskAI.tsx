import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";

const suggestions = ["What AI projects has Raed built?", "What are his main skills?", "Tell me about his experience"];

export function AskAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => { if (open) inputRef.current?.focus(); }, [open, status]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, status]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Ask about Raed" className="ask-fab">
        {open ? "×" : "✦"}
      </button>
      {open && (
        <div className="ask-panel glass-gold">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <p className="font-display font-bold">Ask about Raed<span className="text-primary">.</span></p>
              <p className="font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">AI assistant</p>
            </div>
            <span className="h-2 w-2 rounded-full bg-signal" />
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4 text-sm">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-muted-foreground">Hi! Ask me anything about Raed's projects, skills or experience.</p>
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="chip block w-full text-left">{s}</button>
                ))}
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "ask-user" : "ask-bot"}>
                {m.parts.map((p, i) => (p.type === "text" ? <span key={i} className="whitespace-pre-wrap">{p.text.replace(/\*\*/g, "")}</span> : null))}
              </div>
            ))}
            {status === "submitted" && <div className="ask-bot"><span className="typing"><i /><i /><i /></span></div>}
            {error && <p className="text-destructive">Sorry, something went wrong. Please try again.</p>}
            <div ref={endRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-end gap-2 border-t border-border p-3">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
              placeholder="Ask a question…"
              className="field resize-none !py-2.5"
            />
            {busy ? (
              <button type="button" onClick={() => stop()} className="btn-outline !px-4 !py-2.5">■</button>
            ) : (
              <button type="submit" className="btn-ink !px-4 !py-2.5" disabled={!input.trim()}>→</button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
