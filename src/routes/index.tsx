import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Effects } from "@/components/portfolio/Effects";
import { HeroPhoto } from "@/components/portfolio/HeroPhoto";
import { RotatingHeadline } from "@/components/portfolio/RotatingHeadline";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { profile, skills, projects, experience } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raed Alkurdi | Portfolio" },
      { name: "description", content: "I'm Raed Alkurdi, a Complex Adaptive Systems master's student at Chalmers. See my machine learning projects, skills and education." },
      { property: "og:title", content: "Raed Alkurdi | Portfolio" },
      { property: "og:description", content: "Machine learning projects, skills and studies — including a Transformer built from scratch, customer churn prediction and a support ticket assistant in progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Education"],
  ["contact", "Contact"],
] as const;

const principles = [
  ["Always learning", "I learn best by building, so I start with the part I don't understand yet."],
  ["Working with data", "I handle the whole pipeline, from raw data and feature engineering to training, evaluation and reporting results."],
  ["Studying the theory", "My MSc in Complex Adaptive Systems leaves room to study the maths behind the models."],
];


function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="reveal">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{children}</h2>
    </div>
  );
}

function Index() {
  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));
  const tools = skills.flatMap((s) => s.items);

  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <Effects />
      <header id="site-header" className="fixed inset-x-0 top-4 z-20 px-4 transition-transform duration-500">
        <div className="glass-gold mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-6 pr-2">
          <a href="#top" className="font-display text-lg font-bold">RA<span className="text-primary">.</span></a>
          <nav className="hidden gap-1 md:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="btn-ink btn-glow !py-2">Get in touch</a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="container-page grid min-h-screen items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="fade-in">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-signal" /> Based in Gothenburg, Sweden
            </span>
            <h1 className="mt-6 text-6xl font-bold leading-[0.95] sm:text-7xl">Raed<br />Alkurdi</h1>
            <RotatingHeadline />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.title}. {profile.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-ink">See my projects</a>
              <a href="#contact" className="btn-outline">Get in touch</a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div data-tilt className="card-dark flex h-full items-end justify-center overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(circle_at_50%_70%,var(--glow),transparent_70%)]" />
              <HeroPhoto />
            </div>
            {[["Agentic AI", "-left-6 top-10"], ["Deep Learning", "-right-6 top-1/3"], ["ML", "-left-8 bottom-1/4"], ["Data Science", "-right-4 bottom-8"]].map(([t, pos], i) => (
              <span key={t} className={`glass float absolute ${pos} rounded-full px-3 py-1.5 font-mono text-xs text-primary`} style={{ animationDelay: `${i * 0.6}s` }}>{t}</span>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container-page py-24">
          <Heading label="About">A bit <span className="text-gradient">about me</span></Heading>
          <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{profile.bio}</p>
          <p className="reveal mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{profile.personal}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(([t, d], i) => (
              <div key={t} className="card-dark reveal p-7" style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}>
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24">
          <div className="container-page">
            <Heading label="Skills">What I <span className="text-gradient">work with</span></Heading>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s, i) => (
                <div key={s.group} className="card-dark reveal p-6" style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}>
                  <h3 className="font-bold">{s.group}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{s.items.length} {s.group === "Focus areas" ? "topics" : s.group === "Languages" ? "languages" : "tools"}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 overflow-hidden border-y border-border py-5">
            <div className="marquee flex w-max gap-8 font-display text-2xl font-bold text-muted-foreground">
              {[...tools, ...tools].map((t, i) => (
                <span key={i} className="flex items-center gap-8">{t}<span className="text-primary">✦</span></span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container-page py-24">
          <Heading label="Projects">What I've <span className="text-gradient">been building</span></Heading>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={filter === t ? "chip chip-active" : "chip"}>{t}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <article key={p.title} data-tilt className="card-dark reveal group flex flex-col p-7" style={{ "--d": `${(i % 3) * 0.1}s` } as React.CSSProperties}>
                <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-5 font-mono text-xs">
                  {p.github && <a href={p.github} className="link">View on GitHub ↗</a>}
                  {p.demo && <a href={p.demo} className="link">Try the demo ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container-page py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Heading label="Education">Academic <span className="text-gradient">background</span></Heading>
          </div>
          <ol className="mt-12 space-y-5">
            {experience.map((e) => (
              <li key={e.role} className="card-dark reveal grid gap-2 p-7 md:grid-cols-[10rem_1fr]">
                <p className="font-mono text-xs text-primary">{e.period}</p>
                <div>
                  <h3 className="text-lg font-bold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  {e.text && <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="container-page py-24">
          <div className="card-dark reveal grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <Heading label="Contact">Let's build something <span className="text-shimmer">intelligent</span></Heading>
              <a href={`mailto:${profile.email}`} className="mt-8 inline-block font-mono text-primary">{profile.email}</a>
              <div className="mt-4 flex gap-5 font-mono text-sm">
                {profile.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link">{l.label} ↗</a>)}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-page flex h-16 items-center justify-between font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Gothenburg, Sweden</span>
        </div>
      </footer>
    </div>
  );
}
