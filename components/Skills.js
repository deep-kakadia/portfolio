"use client";
import { motion } from "framer-motion";
import { BarChart3, Code2, Database, Wrench, Brain } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Data Analysis & BI",
    icon: BarChart3,
    items: [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel (Advanced)",
      "Dashboard Design",
      "Data Visualization",
      "Statistical Analysis",
      "Market Analysis",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "Pandas", "NumPy", "Web Scraping", "ETL", "JavaScript"],
  },
  {
    title: "Data Handling",
    icon: Database,
    items: [
      "Data Cleaning",
      "Data Transformation",
      "API Integration",
      "MongoDB",
      "CSV/Excel Processing",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    items: [
      "Data Storytelling",
      "Stakeholder Communication",
      "Business Understanding",
      "Critical Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Skills"
          title="What I work with"
          subtitle="A mix of analytical, technical, and communication skills for delivering end-to-end data solutions."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="card card-hover p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon size={18} className="text-accent" />
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
