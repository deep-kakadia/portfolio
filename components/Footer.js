"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Deep Kakadiya</span>. All
          rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/deepkakadiya"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-brand-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/deep-kakadia"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-brand-500 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:deepkakadiya7878@gmail.com"
            className="text-slate-500 hover:text-brand-500 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
