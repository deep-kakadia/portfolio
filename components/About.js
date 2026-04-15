"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Languages } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Records Analyzed", value: "10M+" },
  { label: "Happy Clients", value: "5+" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A passionate Data Analyst who loves turning raw numbers into stories that
            drive decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            <p>
              I'm <span className="font-semibold text-brand-500">Deep Kakadiya</span>, a
              Data Analyst with hands-on experience using{" "}
              <span className="font-semibold">Python, Power BI, and Excel</span> to
              transform raw data into actionable business insights.
            </p>
            <p>
              I've built market analysis reports that influenced strategic decisions,
              designed executive dashboards on datasets of 10M+ records, and automated
              reporting workflows using Python and pandas.
            </p>
            <p>
              I have a strong foundation in statistical analysis, data storytelling, and
              translating complex data into clear business recommendations — while also
              building full-stack tools that streamline real workflows.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-500" />
                <span className="text-sm">Surat, Gujarat</span>
              </li>
              <li className="flex items-center gap-3">
                <Briefcase size={18} className="text-brand-500" />
                <span className="text-sm">Dharmanandan Diamonds</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap size={18} className="text-brand-500" />
                <span className="text-sm">BCA Graduate</span>
              </li>
              <li className="flex items-center gap-3">
                <Languages size={18} className="text-brand-500" />
                <span className="text-sm">English, Hindi, Gujarati</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glow-card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
