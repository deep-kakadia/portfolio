"use client";
import { motion } from "framer-motion";
import { Sparkles, Shield, Gem, ScanFace, Dumbbell, Smartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    icon: Sparkles,
    title: "MyChitram: AI Photo Gallery SaaS",
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
    title: "Crime Branch Surat: Power BI Dashboard",
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
    desc: "Python automation controlling the Sarin Advisor software, automating diamond imports, inclusion analysis, and cutting-parameter configuration.",
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
    desc: "End-to-end automation for DiamCalc that generates 3D models, 4P files, and PDF reports for diamond analysis at scale.",
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
    desc: "Fitness & wellness websites: one offering online courses (nutrition, exercise), the other a gym platform with memberships and trainers.",
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
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Projects"
          title="Selected work"
          subtitle="A selection spanning data analytics, AI, automation, and full-stack applications."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="card card-hover flex flex-col p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <Icon size={22} className="text-accent" />
                  {p.featured && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-2 font-display text-base font-semibold">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{p.desc}</p>

                <ul className="mb-5 flex-1 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 border-t border-default pt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] text-muted">
                      #{t}
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
