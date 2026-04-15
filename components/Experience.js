"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    type: "Full-time",
    company: "Dharmanandan Diamonds Pvt. Ltd",
    period: "Jul 2025 – Present",
    points: [
      "Perform data analysis and visualization using Python, Power BI, and Excel to support business decisions.",
      "Build interactive Power BI dashboards with Power Query and DAX for real-time KPI monitoring.",
      "Clean, transform, and integrate data from databases, APIs, and CSVs — ensuring accuracy and consistency.",
      "Use Python for data automation, web scraping, and ETL — improving reporting efficiency.",
      "Work part-time as a developer building tools that streamline internal workflows.",
    ],
  },
  {
    role: "Python Developer Intern",
    type: "Internship",
    company: "Confidential",
    period: "Nov 2024 – Apr 2025",
    points: [
      "Contributed to internal Python tools and automation scripts.",
      "Worked with pandas, requests, and core libraries for data processing.",
      "Gained hands-on experience with version control, debugging, and team workflows.",
    ],
  },
  {
    role: "Data Analyst",
    type: "Freelance",
    company: "Confidential",
    period: "Jul 2024 – Oct 2024",
    points: [
      "Analyzed large datasets using Power BI and Excel to uncover actionable insights.",
      "Designed interactive dashboards for non-technical stakeholders.",
      "Automated recurring reports — reducing manual effort and improving accuracy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Roles that shaped my career in data and development.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-blue-500 to-cyan-400 opacity-30" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-10 md:mb-16 md:w-1/2 ${
                isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-12 md:pl-0`}
            >
              {/* dot — mobile: aligned to left line; desktop: at center line */}
              <div
                className={`absolute top-5 w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center shadow-md shadow-brand-500/40 z-10
                  left-4 -translate-x-1/2
                  ${isLeft ? "md:left-auto md:-right-3 md:translate-x-0" : "md:left-[-12px] md:translate-x-0"}`}
              >
                <Briefcase size={12} className="text-white" />
              </div>

              <div className="glow-card p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {exp.company}
                </p>
                <p className="text-xs text-slate-500 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-700 dark:text-slate-300 flex gap-2"
                    >
                      <span className="text-brand-500 mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
