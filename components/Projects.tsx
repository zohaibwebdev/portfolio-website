"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-transform"
            >
              {p.featured && (
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/20 text-accent mb-4">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}