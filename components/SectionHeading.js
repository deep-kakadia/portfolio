"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, subtitle, align = "left" }) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      <span className={`kicker ${centered ? "justify-center" : ""}`}>{kicker}</span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-muted ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
