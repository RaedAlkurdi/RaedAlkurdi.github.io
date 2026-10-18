// Placeholder content — replace with real details.
export const profile = {
  name: "Raed Alkurdi",
  title: "MSc Complex Adaptive Systems @ Chalmers",
  intro: "I build learning systems and autonomous agents — from machine learning models to agentic AI that reasons, plans and acts.",
  email: "raed@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Scholar", href: "https://scholar.google.com/" },
  ],
  bio: "I'm a master's student at Chalmers University of Technology studying Complex Adaptive Systems. I'm drawn to how simple rules give rise to intelligent behavior — which led me to machine learning, reinforcement learning and agentic AI. I enjoy turning research ideas into working, well-engineered systems.",
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
  { period: "2025 — now", role: "MSc, Complex Adaptive Systems", org: "Chalmers University of Technology", text: "Coursework in machine learning, neural networks and dynamical systems." },
  { period: "2025", role: "ML Research Intern", org: "Sample AI Lab", text: "Built evaluation pipelines for LLM agents." },
  { period: "2024", role: "Data Science Intern", org: "Sample Company", text: "Developed forecasting models used in production." },
  { period: "2021 — 2024", role: "BSc, Engineering Physics", org: "Sample University", text: "Thesis on stochastic simulation of complex networks." },
];
