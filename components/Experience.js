"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Data Analyst",
    type: "Full-time",
    company: "Dharmanandan Diamonds Pvt. Ltd",
    period: "Jul 2025 – Present",
    points: [
      "Perform data analysis and visualization using Python, Power BI, and Excel to support business decisions.",
      "Build interactive Power BI dashboards with Power Query and DAX for real-time KPI monitoring.",
      "Clean, transform, and integrate data from databases, APIs, and CSVs, ensuring accuracy and consistency.",
      "Use Python for data automation, web scraping, and ETL to improve reporting efficiency.",
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
      "Automated recurring reports to reduce manual effort and improve accuracy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="Experience"
          title="Where I've worked"
          subtitle="Roles that shaped my path in data and development."
        />

        <div className="relative pl-8 md:pl-10">
          {/* single hairline rail */}
          <div className="absolute left-0 top-1 bottom-1 w-px border-l border-default md:left-1" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="relative mb-8 last:mb-0"
            >
              {/* dot */}
              <span className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent md:-left-9" />

              <div className="card p-6">
                <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                  <span className="chip">{exp.type}</span>
                </div>
                <p className="text-sm text-[rgb(var(--text))]">{exp.company}</p>
                <p className="mb-4 text-xs text-muted">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
