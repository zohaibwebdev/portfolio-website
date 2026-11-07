"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-0 left-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-primary transition"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-5 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none transition resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✓"
                : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}