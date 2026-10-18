// Placeholder content — replace with real details.
export const profile = {
  name: "Raed Alkurdi",
  title: "MSc Complex Adaptive Systems @ Chalmers",
  intro: "I build learning systems and autonomous agents — from machine learning models to agentic AI that reasons, plans and acts.",
  email: "alkurdiraed2@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raed-alkurdi-a0a0642aa" },
  ],
  bio: "I'm a master's student at Chalmers University of Technology in Complex Adaptive Systems, on the Machine Learning & Data Science track, with a BSc in Mechanical Engineering from Chalmers. I'm drawn to how simple rules give rise to intelligent behavior — which led me to machine learning, reinforcement learning and agentic AI. I enjoy turning research ideas into working, well-engineered systems.",
};

export const skills = [
  { group: "Languages", items: ["Python", "C++", "SQL", "TypeScript"] },
  { group: "ML frameworks", items: ["PyTorch", "JAX", "scikit-learn", "Hugging Face"] },
  { group: "Agent tooling", items: ["LangGraph", "Tool calling", "RAG", "Evals"] },
  { group: "Research areas", items: ["Reinforcement learning", "Multi-agent systems", "GNNs", "Complex systems"] },
];

export type Project = { title: string; description: string; tags: string[]; github?: string; demo?: string };

export const projects: Project[] = [
  { title: "Multi-Agent Research Assistant", description: "A team of LLM agents that plan, search and summarize literature into structured reports.", tags: ["Agentic AI", "LLM"], github: "#", demo: "#" },
  { title: "RL Locomotion Agent", description: "PPO agent trained to walk in simulated terrain with curriculum learning.", tags: ["RL", "ML"], github: "#" },
  { title: "Tool-Using LLM Agent", description: "An agent that chooses and chains APIs to complete multi-step tasks, with an evaluation harness.", tags: ["Agentic AI", "LLM"], github: "#", demo: "#" },
  { title: "Graph Neural Networks Study", description: "Benchmarking message-passing architectures on molecular property prediction.", tags: ["ML", "Research"], github: "#" },
  { title: "Time-Series Forecasting", description: "Transformer vs. classical models for energy demand forecasting.", tags: ["ML"], github: "#" },
  { title: "Emergent Flocking Simulation", description: "Agent-based model where collective behavior emerges from local rules, tuned with evolution.", tags: ["Complex Systems", "Research"], github: "#", demo: "#" },
];

export const experience = [
  { period: "Aug 2026 — Jun 2028", role: "MSc, Complex Adaptive Systems — Machine Learning & Data Science track", org: "Chalmers University of Technology", text: "Master's studies focused on machine learning, data science and complex adaptive systems." },
  { period: "Aug 2023 — Jun 2026", role: "BSc, Mechanical Engineering", org: "Chalmers University of Technology", text: "Bachelor's degree in Mechanical Engineering." },
];
