"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary top-10 -left-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-10 -right-20" />
      <div className="glow-orb w-[300px] h-[300px] bg-cyan top-1/3 left-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-gray-300">
            Available for freelance & full-time
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-300">
            {personalInfo.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border hover:border-primary transition font-medium"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex gap-6 justify-center"
        >
          {[
            { Icon: Github, href: personalInfo.socials.github },
            { Icon: Linkedin, href: personalInfo.socials.linkedin },
            { Icon: Twitter, href: personalInfo.socials.twitter },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Icon className="w-5 h-5 text-gray-300" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}