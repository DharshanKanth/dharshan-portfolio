"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  altBg?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  altBg = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 overflow-hidden ${altBg ? "section-alt-bg" : "section-bg"} ${className}`}
    >
      {/* Grid background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: altBg
            ? "linear-gradient(rgba(0,195,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,255,0.04) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,195,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
