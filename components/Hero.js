"use client";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, Github, Linkedin } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding"
    >
      {/* Subtle dot grid, no gradients or floating blobs. */}
      <div className="pointer-events-none absolute inset-0 -z-10 dot-grid" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-default px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for data & automation work
          </span>
        </motion.div>

        <motion.h1
          {...fade}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8 font-display text-5xl font-bold tracking-tight md:text-7xl"
        >
          Deep Kakadiya
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-muted md:text-xl"
        >
          Data Analyst · Python Developer · Power BI
        </motion.p>

        <motion.p
          {...fade}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted"
        >
          I turn <span className="font-medium text-accent">10M+ records</span> into
          decisions. I build executive dashboards, automate reporting, and ship
          data-driven tools that hold up in the real world.
        </motion.p>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-ghost"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a href="/resume.pdf" download className="btn-ghost">
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex justify-center gap-3"
        >
          {[
            { href: "https://linkedin.com/in/deepkakadiya", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/deep-kakadia", Icon: Github, label: "GitHub" },
            { href: "mailto:deepkakadiya7878@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg border border-default p-3 text-muted transition-colors hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 text-muted"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
