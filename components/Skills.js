"use client";
import { motion } from "framer-motion";
import { BarChart3, Code2, Database, Wrench, Brain } from "lucide-react";

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
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A mix of analytical, technical, and soft skills that help me deliver
            end-to-end data solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glow-card p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-500 hover:text-white transition-colors cursor-default"
                    >
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
