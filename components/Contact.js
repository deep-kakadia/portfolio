"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "deepkakadiya7878@gmail.com",
    href: "mailto:deepkakadiya7878@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 9624644196", href: "tel:+919624644196" },
  { icon: MapPin, label: "Location", value: "Surat, Gujarat, India" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/deepkakadiya",
    href: "https://linkedin.com/in/deepkakadiya",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/deep-kakadia",
    href: "https://github.com/deep-kakadia",
  },
];

// Get your free access key from https://web3forms.com (enter your email)
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Portfolio contact — ${formData.get("name")}`);
    formData.append("from_name", "Deep Kakadiya Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {info.map((c) => {
              const Icon = c.icon;
              const Wrap = c.href ? "a" : "div";
              return (
                <Wrap
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex items-center gap-4 group transition-all duration-300 hover:border-brand-400/60 dark:hover:border-brand-500/60 hover:shadow-[0_0_15px_-8px_rgba(99,102,241,0.35)]"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 text-white shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium truncate group-hover:text-brand-500 transition-colors">
                      {c.value}
                    </div>
                  </div>
                </Wrap>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            {/* honeypot (spam protection) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" />

            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Name
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-brand-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-brand-500 focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-brand-500 focus:outline-none transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-500 to-blue-500 text-white font-medium shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-500/10 p-3 rounded-lg">
                <CheckCircle2 size={16} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-500/10 p-3 rounded-lg">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
