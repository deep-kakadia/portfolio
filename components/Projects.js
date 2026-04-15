"use client";
import { motion } from "framer-motion";
import { Sparkles, Shield, Gem, ScanFace, Dumbbell, Smartphone } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "Clickora — AI Photo Gallery SaaS",
    desc: "Multi-tenant SaaS where event guests find themselves in photos with a single selfie. Face embeddings + vector similarity for sub-second matching.",
    highlights: [
      "4-tier subscription model with feature gating",
      "Role-based admin with IP restrictions",
      "Analytics dashboard with interactive charts",
      "AI avatar + cartoon + reel generation",
    ],
    tags: ["Python", "Flask", "Computer Vision", "NoSQL", "HTML5", "CSS3", "JS"],
    featured: true,
  },
  {
    icon: Shield,
    title: "Crime Branch Surat — Power BI Dashboard",
    desc: "Analyzed 4M+ crime records for DCP Office Surat, identifying patterns across location, time, and crime type. Officially certified by the Deputy Commissioner.",
    highlights: [
      "4M+ records analyzed",
      "City & sub-city level crime distribution",
      "Certified by DCP Office, Surat",
    ],
    tags: ["Power BI", "Excel", "Statistical Analysis"],
    featured: true,
  },
  {
    icon: Gem,
    title: "Sarin Technology Advisor Automation",
    desc: "Python automation controlling the Sarin Advisor software — automates diamond imports, inclusion analysis, and cutting-parameter configuration.",
    highlights: [
      "Micron-level precision handling",
      "Template-driven scenario analysis",
      "Optimal result filtering by value & quality",
    ],
    tags: ["Python", "pywin32", "PyAutoGUI", "Pandas"],
  },
  {
    icon: ScanFace,
    title: "Face Clustering & Identification System",
    desc: "Intelligent face clustering that groups and retrieves photos of the same person from large image/video databases using embedding vectors.",
    highlights: [
      "Selfie-based instant retrieval",
      "Video frame-by-frame recognition",
      "Auto-trim with timestamps",
    ],
    tags: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Gem,
    title: "DiamCalc Automation System",
    desc: "End-to-end automation for DiamCalc — generates 3D models, 4P files, and PDF reports for diamond analysis at scale.",
    highlights: [
      "Automated 3D model & report generation",
      "Scalable template-driven pipeline",
      "Reduced manual work drastically",
    ],
    tags: ["Python", "Pandas", "Desktop Automation"],
  },
  {
    icon: ScanFace,
    title: "Face Login System (Attendance)",
    desc: "AI-based Face Login performing real-time face detection & recognition for employee attendance with liveness detection.",
    highlights: [
      "Touchless, automatic attendance",
      "Excel logging on recognition",
      "Anti-spoofing liveness checks",
    ],
    tags: ["Python", "Face Recognition", "Pandas", "Excel Automation"],
  },
  {
    icon: Dumbbell,
    title: "Zascon Master & VFitClub",
    desc: "Fitness & wellness websites — one offering online courses (nutrition, exercise), the other a gym platform with memberships and trainers.",
    highlights: [
      "Course content design & SEO",
      "Membership & trainer profiles",
      "Performance-optimized UX",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
  },
  {
    icon: Smartphone,
    title: "Personal Android Apps",
    desc: "Mobile Face Recognition, Expense Tracker with smart reminders, and Cricket Live Scoring with offline WiFi-hotspot score sharing.",
    highlights: [
      "Selfie-based photo retrieval",
      "Split-expense who-owes-whom",
      "Turf cricket rulebook + live analytics",
    ],
    tags: ["Android", "APK", "Mobile UX", "Offline Networking"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of work spanning data analytics, AI, automation, and full-stack
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.25 }}
                className={`glow-card p-6 flex flex-col ${
                  p.featured ? "lg:col-span-1 ring-1 ring-brand-500/20" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 text-white">
                    <Icon size={22} />
                  </div>
                  {p.featured && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-500 bg-brand-500/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {p.desc}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs text-slate-700 dark:text-slate-300 flex gap-2"
                    >
                      <span className="text-brand-500">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
