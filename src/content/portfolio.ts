// Portfolio content shared by the page.
export const profile = {
  name: "Raed Alkurdi",
  title: "MSc student in Complex Adaptive Systems @ Chalmers",
  intro: "Connecting complex systems theory to code that actually runs.",
  email: "alkurdiraed2@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raed-alkurdi-a0a0642aa" },
  ],
  bio: "I'm studying Complex Adaptive Systems at Chalmers on the Machine Learning & Data Science track, and hold a BSc in Mechanical Engineering from Chalmers. I like knowing how models work, so I build them from the ground up and test them on real data.",
  personal: "Most of my time right now goes into agentic AI: how agents plan, use tools and handle several steps at once. In my free time I play football and watch a lot of it.",
};

export const skills = [
  { group: "Languages", items: ["Python", "C++", "SQL", "TypeScript"] },
  { group: "ML frameworks", items: ["PyTorch", "scikit-learn", "XGBoost"] },
  { group: "Data & analysis", items: ["pandas", "NumPy", "Jupyter"] },
  { group: "Focus areas", items: ["Deep Learning", "Transformers", "Regression", "Classification"] },
];

export type Project = { title: string; description: string; tags: string[]; github?: string; demo?: string };

export const projects: Project[] = [
  {
    title: "Support Ticket Assistant (in progress)",
    description: "Building an NLP assistant for support ticket classification and routing. Combines confidence calibration, RAG-based reply drafts and a LangGraph workflow with human approval before sending.",
    tags: ["NLP", "RAG", "LangGraph", "In progress"],
  },
  {
    title: "Premier League Market Value Predictor",
    description: "Built a regression model to estimate Premier League player market values using Transfermarkt data. Tested on the 2024/25 season, achieving a mean absolute error of about €10.88 million.",
    tags: ["ML", "Regression", "Data Science"],
    github: "https://github.com/RaedAlkurdi/premier-league-market-value-predictor",
  },
  {
    title: "Customer Churn Prediction",
    description: "Built churn prediction models on 7,043 telecom customers, comparing logistic regression and XGBoost. Tuned the decision threshold on validation data; logistic regression achieved 71.4% test recall at a 0.35 threshold.",
    tags: ["ML", "Classification", "Data Science"],
    github: "https://github.com/RaedAlkurdi/customer-churn-project",
  },
  {
    title: "Transformer from Scratch",
    description: "Built a decoder-only Transformer from scratch in PyTorch with causal self-attention, embeddings and residual connections. Trained on Alice's Adventures in Wonderland for character-level text generation, without nn.Transformer or pretrained weights.",
    tags: ["Deep Learning", "NLP", "PyTorch"],
    github: "https://github.com/RaedAlkurdi/transformer-from-scratch",
  },
];

export const experience = [
  { period: "Aug 2026 to Jun 2028", role: "MSc, Complex Adaptive Systems", org: "Chalmers University of Technology", text: "I'm on the Machine Learning & Data Science track, studying machine learning, data science and complex adaptive systems." },
  { period: "Aug 2023 to Jun 2026", role: "BSc, Mechanical Engineering", org: "Chalmers University of Technology", text: "I completed my bachelor's degree in mechanical engineering at Chalmers." },
];
