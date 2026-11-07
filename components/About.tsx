"use client";
import { motion } from "framer-motion";
import { Code2, Bot, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineer",
    description:
      "End-to-end development with React, Next.js, Node.js, Express, and MongoDB — from UI to API to database.",
  },
  {
    icon: Bot,
    title: "AI Agent Developer",
    description:
      "Designing autonomous agents, RAG pipelines, and LLM-powered applications with LangChain and OpenAI.",
  },
  {
    icon: Rocket,
    title: "Product Mindset",
    description:
      "I ship clean, scalable, and user-focused software — focused on performance, DX, and real-world impact.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Building the <span className="gradient-text">Future</span> with Code & AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}