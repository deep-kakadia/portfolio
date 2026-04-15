"use client";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Appreciation Letter — DCP Crime Branch, Surat",
    date: "Aug 2024",
    desc: "Officially recognized by the Surat City Crime Branch for exceptional contribution to the Data Analytics Program.",
    featured: true,
  },
  {
    icon: BadgeCheck,
    title: "Data Analytics Internship — Cognifyz Technologies",
    date: "Aug 2025",
    desc: "Completed a remote Data Analysis internship with real-world data-driven projects.",
  },
  {
    icon: Award,
    title: "Power BI — 7-Hour Course Completion",
    date: "Aug 2025",
    desc: "Certified completion of an intensive Power BI training course.",
  },
];

export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`glow-card p-6 ${
                  c.featured ? "ring-1 ring-brand-500/30" : ""
                }`}
              >
                <div className="p-3 inline-flex rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 text-white mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-1 text-sm">{c.title}</h3>
                <p className="text-xs text-brand-500 mb-3">{c.date}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
