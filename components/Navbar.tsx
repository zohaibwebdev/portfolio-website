"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold gradient-text">
          Zohaib.dev
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-primary hover:bg-accent transition text-sm font-medium"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-4"
        >
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {l.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}