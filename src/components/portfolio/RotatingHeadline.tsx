import { useEffect, useState } from "react";

const phrases = ["machine learning models", "AI agents", "automation workflows", "data pipelines"];

export function RotatingHeadline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (!motion.matches) {
        timer = setInterval(() => setActive((current) => (current + 1) % phrases.length), 3200);
      } else {
        setActive(0);
      }
    };
    sync();
    motion.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <p className="rotating-headline mt-6 font-display text-2xl text-muted-foreground sm:text-3xl">
      <span className="sr-only">I build machine learning models, AI agents, automation workflows, and data pipelines.</span>
      <span aria-hidden="true">I build </span>
      <span className="headline-phrases" aria-hidden="true">
        {phrases.map((phrase, index) => (
          <span key={phrase} className={`headline-phrase text-gradient font-bold ${active === index ? "headline-phrase-active" : ""}`}>
            {phrase}<span className="cursor">_</span>
          </span>
        ))}
      </span>
    </p>
  );
}