"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

 
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  setStatus("sending");
  setStatusMessage("");

  const formData = new FormData(form);

  // Add Web3Forms access key
  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!
  );

  formData.append("subject", "New Portfolio Contact Message");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    let errorMessage = "Unable to send your message. Please try again.";

    let data: unknown;

    try {
      data = await res.json();
    } catch {
      throw new Error("The contact service returned an invalid response.");
    }

    if (
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      errorMessage = data.message;
    }

    if (
      res.ok &&
      typeof data === "object" &&
      data !== null &&
      "success" in data &&
      data.success === true
    ) {
      setStatus("sent");
      setStatusMessage("Message sent successfully.");

      form.reset();

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 4000);
    } else {
      setStatus("error");
      setStatusMessage(errorMessage);
    }
  } catch (error) {
    setStatus("error");
    setStatusMessage(
      error instanceof Error
        ? error.message
        : "Unable to send your message. Please try again."
    );
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
            {statusMessage && (
              <p
                role="status"
                className={status === "error" ? "text-red-400" : "text-green-400"}
              >
                {statusMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}