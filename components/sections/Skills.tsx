"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills" altBg>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "9999px",
                background: "rgba(0,195,255,0.08)",
                border: "1px solid rgba(0,195,255,0.2)",
                fontSize: 12,
                fontFamily: "var(--font-jetbrains-mono)",
                color: "#00c3ff",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              SKILLS MATRIX
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
              }}
            >
              Technology{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Arsenal
              </span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                fontFamily: "var(--font-inter)",
                marginTop: "12px",
              }}
            >
              Click a category to explore — hover skills for details
            </p>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                border: `1px solid ${activeCategory === cat.id ? cat.color : cat.borderColor}`,
                background:
                  activeCategory === cat.id ? cat.bgColor : "rgba(5,8,22,0.6)",
                color: activeCategory === cat.id ? cat.color : "#64748b",
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow:
                  activeCategory === cat.id
                    ? `0 0 15px ${cat.color}20`
                    : "none",
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories
            .filter((cat) => !activeCategory || cat.id === activeCategory)
            .map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: catIdx * 0.05 }}
                style={{
                  background: "rgba(5,8,22,0.8)",
                  border: `1px solid ${cat.borderColor}`,
                  borderRadius: "12px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: cat.color,
                    }}
                  >
                    {cat.label}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 11,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: "#334155",
                    }}
                  >
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skills list */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: si * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      style={{
                        padding: "5px 11px",
                        borderRadius: "6px",
                        background:
                          hoveredSkill === skill ? cat.bgColor : "rgba(255,255,255,0.03)",
                        border: `1px solid ${hoveredSkill === skill ? cat.color : "rgba(255,255,255,0.06)"}`,
                        fontSize: 12,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color:
                          hoveredSkill === skill ? cat.color : "#64748b",
                        cursor: "default",
                        transition: "all 0.2s ease",
                        boxShadow:
                          hoveredSkill === skill
                            ? `0 0 10px ${cat.color}20`
                            : "none",
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    background: `radial-gradient(circle at bottom right, ${cat.color}15, transparent)`,
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            ))}
        </div>

        {/* Radar/Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "48px",
            padding: "28px",
            borderRadius: "12px",
            background: "rgba(5,8,22,0.6)",
            border: "1px solid rgba(0,195,255,0.1)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { label: "Total Skills", value: skillCategories.reduce((a, c) => a + c.skills.length, 0), color: "#00c3ff" },
            { label: "Cloud Services", value: 8, color: "#FF9900" },
            { label: "DevOps Tools", value: 7, color: "#326CE5" },
            { label: "Languages", value: 5, color: "#22c55e" },
            { label: "Frameworks", value: 6, color: "#a855f7" },
            { label: "Certifications", value: 3, color: "#f59e0b" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.05 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: 32,
                  color: stat.color,
                  marginBottom: "4px",
                }}
              >
                {stat.value}+
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-jetbrains-mono)",
                  color: "#475569",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
