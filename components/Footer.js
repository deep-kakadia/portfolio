"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-default px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Deep Kakadiya. Built &amp; designed by me.
        </p>
        <div className="flex gap-2">
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
              className="rounded-lg border border-default p-2 text-muted transition-colors hover:text-accent"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
