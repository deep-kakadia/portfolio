"use client";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Trophy,
    title: "Appreciation Letter: DCP Crime Branch, Surat",
    date: "Aug 2024",
    desc: "Officially recognized by the Surat City Crime Branch for exceptional contribution to the Data Analytics Program.",
    featured: true,
  },
  {
    icon: BadgeCheck,
    title: "Data Analytics Internship at Cognifyz Technologies",
    date: "Aug 2025",
    desc: "Completed a remote Data Analysis internship with real-world data-driven projects.",
  },
  {
    icon: Award,
    title: "Power BI: 7-Hour Course Completion",
    date: "Aug 2025",
    desc: "Certified completion of an intensive Power BI training course.",
  },
];

export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Recognition" title="Certifications & awards" />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="card card-hover p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Icon size={20} className="text-accent" />
                  <span className="text-xs text-muted">{c.date}</span>
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
