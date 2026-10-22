// Portfolio content shared by the page.
export const profile = {
  name: "Raed Alkurdi",
  title: "MSc student in Complex Adaptive Systems at Chalmers",
  intro: "My projects range from training a Transformer from scratch to predicting football player values and customer churn.",
  email: "alkurdiraed2@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raed-alkurdi-a0a0642aa" },
  ],
  bio: "I'm studying Complex Adaptive Systems at Chalmers University of Technology, on the Machine Learning & Data Science track. I also have a BSc in Mechanical Engineering from Chalmers. I like understanding how models work, so I've built a Transformer from scratch in PyTorch and worked through regression pipelines using real data. My projects give me a way to try out research ideas and see how well the models predict.",
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
    description: "I'm building an assistant that reads support messages, predicts their intent and routes them or flags them for human review. The project compares TF-IDF with logistic regression against a fine-tuned pretrained encoder and calibrates confidence scores. It retrieves help articles to draft replies based on those sources. A LangGraph workflow brings these steps together, with a person approving every reply before it's sent.",
    tags: ["NLP", "RAG", "LangGraph", "In progress"],
  },
  {
    title: "Premier League Market Value Predictor",
    description: "I built a model to predict Premier League players' estimated market values from season statistics. I used Transfermarkt appearances, player details and historical valuations to derive features including goals, assists, minutes played, age and position. I trained it on seasons up to 2023/24 and tested it on 2024/25. Its mean absolute error was about €10.88 million.",
    tags: ["ML", "Regression", "Data Science"],
    github: "https://github.com/RaedAlkurdi/premier-league-market-value-predictor",
  },
  {
    title: "Customer Churn Prediction",
    description: "I used IBM's Telco Customer Churn dataset of 7,043 customers to predict who would cancel. I compared a baseline with logistic regression and XGBoost, then used validation data to choose the model and decision threshold. At a threshold of 0.35, logistic regression identified 267 of the 374 customers who churned in the test set, giving 71.4% recall.",
    tags: ["ML", "Classification", "Data Science"],
    github: "https://github.com/RaedAlkurdi/customer-churn-project",
  },
  {
    title: "Transformer from Scratch",
    description: "I built a small decoder-only Transformer in PyTorch to understand attention and text generation, without nn.Transformer or pretrained weights. I started with a bigram model, then added token and position embeddings, two causal self-attention heads, a feed-forward layer and residual connections. I trained it on Alice's Adventures in Wonderland (144,600 characters) to generate text one character at a time.",
    tags: ["Deep Learning", "NLP", "PyTorch"],
    github: "https://github.com/RaedAlkurdi/transformer-from-scratch",
  },
];

export const experience = [
  { period: "Aug 2026 to Jun 2028", role: "MSc, Complex Adaptive Systems", org: "Chalmers University of Technology", text: "I'm on the Machine Learning & Data Science track, studying machine learning, data science and complex adaptive systems." },
  { period: "Aug 2023 to Jun 2026", role: "BSc, Mechanical Engineering", org: "Chalmers University of Technology", text: "I completed my bachelor's degree in mechanical engineering at Chalmers." },
];
