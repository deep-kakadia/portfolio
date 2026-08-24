"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Languages } from "lucide-react";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Records Analyzed", value: "10M+" },
  { label: "Happy Clients", value: "5+" },
];

const facts = [
  { icon: MapPin, text: "Surat, Gujarat" },
  { icon: Briefcase, text: "Dharmanandan Diamonds" },
  { icon: GraduationCap, text: "BCA Graduate" },
  { icon: Languages, text: "English, Hindi, Gujarati" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="About"
          title="A data analyst who likes clear answers"
          subtitle="I turn raw numbers into stories that drive decisions, and build the tools that keep the data flowing."
        />

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 leading-relaxed text-muted"
          >
            <p>
              I&apos;m Deep Kakadiya, a Data Analyst with hands-on experience using{" "}
              <span className="font-medium text-[rgb(var(--text))]">
                Python, Power BI, and Excel
              </span>{" "}
              to transform raw data into actionable business insights.
            </p>
            <p>
              I&apos;ve built market analysis reports that influenced strategic
              decisions, designed executive dashboards on datasets of 10M+ records, and
              automated reporting workflows using Python and pandas.
            </p>
            <p>
              I have a strong foundation in statistical analysis, data storytelling, and
              translating complex data into clear business recommendations, while also
              building full-stack tools that streamline real workflows.
            </p>

            <ul className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
              {facts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon size={17} className="text-accent" />
                  <span className="text-sm text-[rgb(var(--text))]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="card p-6">
                <div className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted md:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
