"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

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

const inputClass =
  "mt-1.5 w-full rounded-lg border border-default bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[rgb(var(--accent))]";
const labelClass = "text-xs uppercase tracking-wider text-muted";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Portfolio contact from ${formData.get("name")}`);
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
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="Contact"
          title="Let's work together"
          subtitle="Have a project or a dataset that needs sense made of it? Send me a note."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
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
                  className="card card-hover flex items-center gap-4 p-4"
                >
                  <Icon size={18} className="shrink-0 text-accent" />
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted">
                      {c.label}
                    </div>
                    <div className="truncate text-sm">{c.value}</div>
                  </div>
                </Wrap>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card space-y-4 p-6"
            onSubmit={handleSubmit}
          >
            {/* honeypot (spam protection) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" />

            <div>
              <label className={labelClass}>Name</label>
              <input name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
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
              <div className="flex items-center gap-2 rounded-lg border border-default bg-surface-2 p-3 text-sm text-accent">
                <CheckCircle2 size={16} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
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
