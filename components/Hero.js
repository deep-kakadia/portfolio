"use client";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Python Developer",
  "Power BI Expert",
  "Problem Solver",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      } else {
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4"
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
        >
          <span className="gradient-text">Deep Kakadiya</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6 h-10"
        >
          <span>I&apos;m a </span>
          <span className="text-brand-500 dark:text-brand-400 font-semibold">
            {text}
          </span>
          <span className="animate-pulse text-brand-500">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10"
        >
          Turning <span className="font-semibold text-brand-500">10M+ records</span>{" "}
          into actionable business insights. I design executive dashboards, automate
          reporting workflows, and build data-driven solutions that power real
          decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 text-white font-medium shadow-md shadow-brand-500/15 hover:shadow-brand-500/25 hover:scale-[1.02] transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 font-medium hover:border-brand-500 hover:text-brand-500 transition-all flex items-center gap-2"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-7 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 font-medium hover:border-brand-500 hover:text-brand-500 transition-all flex items-center gap-2"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-5 justify-center"
        >
          <a
            href="https://linkedin.com/in/deepkakadiya"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-500 hover:text-brand-500 hover:scale-105 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/deep-kakadia"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-500 hover:text-brand-500 hover:scale-105 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:deepkakadiya7878@gmail.com"
            className="p-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-500 hover:text-brand-500 hover:scale-105 transition-all"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 inset-x-0 mx-auto w-fit flex flex-col items-center gap-2 text-slate-500 animate-float"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
