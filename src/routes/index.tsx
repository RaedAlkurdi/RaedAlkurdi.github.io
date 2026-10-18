import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { profile, skills, projects, experience } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raed Alkurdi — ML & Agentic AI Portfolio" },
      { name: "description", content: "Portfolio of Raed Alkurdi, MSc student in Complex Adaptive Systems at Chalmers, building machine learning and agentic AI projects." },
      { property: "og:title", content: "Raed Alkurdi — ML & Agentic AI Portfolio" },
      { property: "og:description", content: "Machine learning, reinforcement learning and agentic AI projects by Raed Alkurdi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["projects", "Projects"],
  ["about", "About"],
  ["experience", "Experience"],
  ["contact", "Contact"],
] as const;

function Label({ n, children }: { n: string; children: string }) {
  return <p className="section-label">{n} / {children}</p>;
}

function Index() {
  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));
  const [form, setForm] = useState({ name: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="container-page flex h-14 items-center justify-between">
          <a href="#top" className="font-mono text-sm font-bold">raed.alkurdi</a>
          <nav className="hidden gap-6 sm:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="font-mono text-xs text-muted-foreground hover:text-foreground">{l.toLowerCase()}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="container-page py-24 sm:py-32 fade-in">
          <p className="section-label">~/hello</p>
          <h1 className="mt-4 font-mono text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}<span className="cursor">_</span>
          </h1>
          <p className="mt-6 font-mono text-sm text-muted-foreground sm:text-base">{profile.title}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-ink">View projects →</a>
            <a href="#contact" className="btn-outline">Get in touch</a>
          </div>
        </section>

        <section id="projects" className="container-page border-t border-border py-20">
          <Label n="01">projects</Label>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={filter === t ? "chip chip-active" : "chip"}>{t}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <article key={p.title} className="flex flex-col bg-background p-6 transition-colors hover:bg-secondary">
                <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-mono text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="mt-4 flex gap-4 font-mono text-xs">
                  {p.github && <a href={p.github} className="link">github ↗</a>}
                  {p.demo && <a href={p.demo} className="link">demo ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="container-page grid gap-12 border-t border-border py-20 lg:grid-cols-2">
          <div>
            <Label n="02">about</Label>
            <p className="mt-6 text-lg leading-relaxed">{profile.bio}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="font-mono text-sm font-semibold">{s.group}</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {s.items.map((i) => <li key={i}>— {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="container-page border-t border-border py-20">
          <div className="flex items-end justify-between gap-4">
            <Label n="03">experience</Label>
            <a href="#" className="btn-outline">Download CV</a>
          </div>
          <ol className="mt-10 border-l border-border">
            {experience.map((e) => (
              <li key={e.role} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                <h3 className="mt-1 font-mono font-semibold">{e.role}</h3>
                <p className="text-sm">{e.org}</p>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{e.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="container-page grid gap-12 border-t border-border py-20 lg:grid-cols-2">
          <div>
            <Label n="04">contact</Label>
            <h2 className="mt-6 font-mono text-3xl font-bold">Let's build something intelligent.</h2>
            <a href={`mailto:${profile.email}`} className="link mt-6 inline-block font-mono">{profile.email}</a>
            <div className="mt-4 flex gap-5 font-mono text-sm">
              {profile.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link">{l.label} ↗</a>)}
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${form.name}`)}&body=${encodeURIComponent(form.message)}`;
            }}
          >
            <input required placeholder="Your name" className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <textarea required rows={5} placeholder="Message" className="field" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="btn-ink">Send message →</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-page flex h-16 items-center justify-between font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Gothenburg, SE</span>
        </div>
      </footer>
    </div>
  );
}
