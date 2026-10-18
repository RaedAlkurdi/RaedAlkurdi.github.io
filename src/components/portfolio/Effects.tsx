import { useEffect, useRef, useState } from "react";

/** Loading screen, custom cursor, scroll progress, mouse spotlight, scroll reveals, card tilt, floating particles. */
export function Effects() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fine, setFine] = useState(false);
  const [dots, setDots] = useState<{ l: number; t: number; d: number; s: number }[]>([]);

  // Loader
  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 12));
      setPct(v);
      if (v >= 100) { clearInterval(id); setTimeout(() => setLoaded(true), 350); }
    }, 60);
    setDots(Array.from({ length: 24 }, () => ({ l: Math.random() * 100, t: Math.random() * 100, d: Math.random() * 10, s: 8 + Math.random() * 12 })));
    return () => clearInterval(id);
  }, []);

  // Cursor + spotlight + progress
  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setFine(isFine);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      if (spot.current) spot.current.style.background = `radial-gradient(500px circle at ${mx}px ${my}px, var(--glow), transparent 70%)`;
      const t = (e.target as HTMLElement).closest("a,button,input,textarea");
      ring.current?.classList.toggle("cursor-hover", !!t);
    };
    const loop = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const scroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("mousemove", move);
    addEventListener("scroll", scroll, { passive: true });
    if (isFine) { document.documentElement.classList.add("has-cursor"); loop(); }
    scroll();
    return () => {
      removeEventListener("mousemove", move); removeEventListener("scroll", scroll);
      cancelAnimationFrame(raf); document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  // Scroll reveal + card tilt/spotlight
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card-dark"));
    const onMove = (e: MouseEvent) => {
      const c = e.currentTarget as HTMLElement; const r = c.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty("--mx", `${x}px`); c.style.setProperty("--my", `${y}px`);
      if (c.dataset["tilt"] !== undefined) c.style.transform = `perspective(900px) rotateY(${(x / r.width - 0.5) * 8}deg) rotateX(${(0.5 - y / r.height) * 8}deg)`;
    };
    const onLeave = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.transform = ""; };
    cards.forEach((c) => { c.addEventListener("mousemove", onMove); c.addEventListener("mouseleave", onLeave); });

    // Magnetic buttons
    const mags = Array.from(document.querySelectorAll<HTMLElement>(".btn-ink,.btn-outline"));
    const mMove = (e: MouseEvent) => {
      const b = e.currentTarget as HTMLElement; const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
    };
    const mLeave = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.translate = ""; };
    mags.forEach((b) => { b.addEventListener("mousemove", mMove); b.addEventListener("mouseleave", mLeave); });

    return () => {
      io.disconnect();
      cards.forEach((c) => { c.removeEventListener("mousemove", onMove); c.removeEventListener("mouseleave", onLeave); });
      mags.forEach((b) => { b.removeEventListener("mousemove", mMove); b.removeEventListener("mouseleave", mLeave); });
    };
  });

  return (
    <>
      <div className={`loader ${loaded ? "loader-done" : ""}`} aria-hidden>
        <p className="font-display text-7xl font-bold text-primary">RA.</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">AI Engineer</p>
        <div className="absolute bottom-16 w-64">
          <div className="flex justify-between font-mono text-xs text-muted-foreground"><span>Loading</span><span className="text-primary">{pct}%</span></div>
          <div className="mt-2 h-px bg-border"><div className="h-px bg-primary transition-all" style={{ width: `${pct}%` }} /></div>
        </div>
      </div>
      <div ref={bar} className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left scale-x-0 bg-primary" />
      <div ref={spot} className="pointer-events-none fixed inset-0 z-0" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {dots.map((d, i) => (
          <span key={i} className="particle" style={{ left: `${d.l}%`, top: `${d.t}%`, animationDelay: `-${d.d}s`, animationDuration: `${d.s}s` }} />
        ))}
      </div>
      {fine && (
        <>
          <div ref={ring} className="cursor-ring" />
          <div ref={dot} className="cursor-dot" />
        </>
      )}
    </>
  );
}
