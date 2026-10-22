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
  {
    title: "Premier League Market Value Predictor",
    description: "Predicts a Premier League player's estimated market value from season statistics. Built on Transfermarkt data — appearances, player details and historical valuations — deriving goals, assists, minutes played, age and position. Trained on seasons up to 2023/24 and tested on 2024/25, reaching a mean absolute error of about €10.88 million.",
    tags: ["ML", "Regression", "Data Science"],
    github: "https://github.com/RaedAlkurdi/premier-league-market-value-predictor",
  },
  {
    title: "Customer Churn Prediction",
    description: "Identifies telecom customers likely to cancel, using IBM's Telco Customer Churn dataset of 7,043 customers. Compared a baseline, logistic regression and XGBoost, choosing the model and decision threshold on validation data. At a 0.35 threshold, logistic regression caught 267 of 374 churners in the test set — 71.4% recall.",
    tags: ["ML", "Classification", "Data Science"],
    github: "https://github.com/RaedAlkurdi/customer-churn-project",
  },
  {
    title: "Transformer from Scratch",
    description: "A small decoder-only, character-level Transformer built from scratch in PyTorch — no nn.Transformer or pretrained weights — to learn how attention and text generation work. Starting from a bigram model, it adds token and position embeddings, two causal self-attention heads, a feed-forward layer and residual connections, trained on Alice's Adventures in Wonderland (144,600 characters) to generate text one character at a time.",
    tags: ["Deep Learning", "NLP", "PyTorch"],
    github: "https://github.com/RaedAlkurdi/transformer-from-scratch",
  },
];

export const experience = [
  { period: "Aug 2026 — Jun 2028", role: "MSc, Complex Adaptive Systems — Machine Learning & Data Science track", org: "Chalmers University of Technology", text: "Master's studies focused on machine learning, data science and complex adaptive systems." },
  { period: "Aug 2023 — Jun 2026", role: "BSc, Mechanical Engineering", org: "Chalmers University of Technology", text: "Bachelor's degree in Mechanical Engineering." },
];
