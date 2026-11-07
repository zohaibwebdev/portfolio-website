"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary uppercase tracking-widest">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[42px] w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-primary">{exp.period}</span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}