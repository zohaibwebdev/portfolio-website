export const personalInfo = {
  name: "Zohaib",
  role: "MERN Stack & AI Agent Developer",
  tagline:
    "I build scalable web applications and intelligent AI agents that solve real problems.",
  email: "zohaib@example.com",
  location: "Pakistan",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/zohaibwebdev",
    linkedin: "https://www.linkedin.com/in/zohaibwebdev/",
    twitter: "https://x.com/zohaibweb",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST / GraphQL", level: 87 },
    ],
  },
  {
    category: "AI & Agents",
    items: [
      { name: "OpenAI API", level: 93 },
      { name: "LangChain", level: 88 },
      { name: "RAG Systems", level: 85 },
      { name: "Vector DBs", level: 84 },
      { name: "Agentic Workflows", level: 90 },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Vercel / AWS", level: 85 },
      { name: "Prisma", level: 87 },
      { name: "Linux CLI", level: 88 },
    ],
  },
];

export const projects = [
  {
    title: "QWRY AI",
    description:
      "A multi-agent system that coordinates specialized AI agents to automate research, coding, and content workflows using LangChain + OpenAI.",
    tech: ["Next.js", "LangChain", "OpenAI", "MongoDB", "Redis", "Socket.io"],
    // github: "https://github.com/zohaibwebdev",
    live: "https://www.qwryai.com/",
    featured: true,
  },
  {
    title: "Nobleblocks",
    description:"Open access journal and research social network. Search 300M+ papers, run AI literature reviews, and publish.",  
    tech: ["Next.js", "OpenAI", "Redis", "Tailwind CSS"],
    // github: "https://github.com/zohaibwebdev",
    live: "https://www.nobleblocks.com/",
    featured: true,
  },
  {
    title: "Yoracle",
    description:
      "most informed Crypto Market Data Oracle, leveraging advanced AI techniques to provide unprecedented impact prediction accuracy.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    // github: "https://github.com/zohaibwebdev",
    live: "https://www.yoracle.ai/",
    featured: false,
  },
  {
    title: "AI Chatbot CLI",
    description:
      "Lightweight terminal chatbot using Node.js, readline, and OpenRouter API with full conversation memory.",
    tech: ["Node.js", "OpenAI SDK", "OpenRouter", "dotenv"],
    github: "https://github.com/zohaibwebdev",
    live: "",
    featured: false,
  },
  {
    title: "E-Commerce Storefront",
    description:
      "Full-stack MERN e-commerce with Stripe payments, admin dashboard, and product management.",
    tech: ["MERN", "Stripe", "Redux", "JWT", "Cloudinary"],
    github: "https://github.com/zohaibwebdev",
    // live: "https://example.com",
    featured: false,
  },
  {
    title: "Realtime Task Board",
    description:
      "Kanban board with real-time sync, drag-and-drop, and team collaboration features.",
    tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL"],
    github: "https://github.com/zohaibwebdev",
    // live: "https://example.com",
    featured: false,
  },
];

export const experience = [
  {
    role: "AI Agent Developer",
    company: "Code Analytics",
    period: "2024 — Present",
    description:
      "Building autonomous AI agents and RAG systems for clients across chatbots, automation, and content generation.",
  },
  {
    role: "MERN Stack Developer",
    company: "DigitalUX",
    period: "2022 — 2024",
    description:
      "Developed and maintained full-stack web apps using React, Node.js, Express, and MongoDB for startups.",
  },
  {
    role: "Frontend Developer",
    company: "Enigmatix solutions",
    period: "2021 — 2022",
    description:
      "Crafted responsive, pixel-perfect UIs with Bootstrap and Tailwind, improving performance and accessibility.",
  },
];