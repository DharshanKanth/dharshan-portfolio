"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitFork, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects" altBg>
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
              PROJECTS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
                marginBottom: "16px",
              }}
            >
              Engineering{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Case Studies
              </span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#64748b",
                fontFamily: "var(--font-inter)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Production-grade infrastructure projects demonstrating cloud-native engineering at scale
            </p>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "24px",
          }}
          className="projects-grid"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredId(proj.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                background: "rgba(5,8,22,0.95)",
                border: `1px solid ${hoveredId === proj.id ? proj.color + "50" : proj.color + "20"}`,
                borderRadius: "14px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow:
                  hoveredId === proj.id
                    ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${proj.color}15`
                    : "0 4px 24px rgba(0,0,0,0.4)",
                transform: hoveredId === proj.id ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "24px",
                  borderBottom: `1px solid ${proj.color}15`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at top right, ${proj.color}12, transparent 60%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Category badge + metrics */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "5px",
                      fontSize: 10,
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 600,
                      background: `${proj.color}15`,
                      border: `1px solid ${proj.color}30`,
                      color: proj.color,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {proj.category}
                  </span>

                  {/* Mini metrics */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {proj.metrics.slice(0, 2).map((m) => (
                      <div
                        key={m.label}
                        style={{
                          fontSize: 10,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#22c55e",
                          background: "rgba(34,197,94,0.08)",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          border: "1px solid rgba(34,197,94,0.2)",
                        }}
                      >
                        {m.value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#f8fafc",
                    marginBottom: "6px",
                  }}
                >
                  {proj.title}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: proj.color,
                    marginBottom: "12px",
                    opacity: 0.8,
                  }}
                >
                  {proj.subtitle}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748b",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {proj.description}
                </p>
              </div>

              {/* Architecture mini-diagram */}
              <div
                style={{
                  padding: "14px 24px",
                  borderBottom: `1px solid ${proj.color}10`,
                  overflowX: "auto",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: "max-content" }}>
                  {proj.architecture.map((node, ni) => (
                    <div key={ni} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div
                        style={{
                          padding: "3px 9px",
                          borderRadius: "5px",
                          fontSize: 10,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: proj.color,
                          background: `${proj.color}10`,
                          border: `1px solid ${proj.color}25`,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {node}
                      </div>
                      {ni < proj.architecture.length - 1 && (
                        <ArrowRight size={10} color={`${proj.color}50`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ padding: "14px 24px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: 10,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: "#475569",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable details */}
              <AnimatePresence>
                {expandedId === proj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "16px 24px 0",
                        borderTop: `1px solid ${proj.color}10`,
                      }}
                    >
                      <div style={{ marginBottom: "12px" }}>
                        <div
                          style={{
                            fontSize: 11,
                            fontFamily: "var(--font-jetbrains-mono)",
                            color: "#64748b",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          Problem
                        </div>
                        <p style={{ fontSize: 13, color: "#94a3b8", fontFamily: "var(--font-inter)", lineHeight: 1.6 }}>
                          {proj.problem}
                        </p>
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            fontFamily: "var(--font-jetbrains-mono)",
                            color: "#64748b",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          }}
                        >
                          Full Metrics
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                          {proj.metrics.map((m) => (
                            <div
                              key={m.label}
                              style={{
                                textAlign: "center",
                                padding: "10px",
                                borderRadius: "8px",
                                background: `${proj.color}08`,
                                border: `1px solid ${proj.color}20`,
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: "var(--font-space-grotesk)",
                                  fontWeight: 700,
                                  fontSize: 16,
                                  color: proj.color,
                                }}
                              >
                                {m.value}
                              </div>
                              <div style={{ fontSize: 10, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}>
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer actions */}
              <div
                style={{
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "7px 14px",
                      borderRadius: "7px",
                      background: "rgba(110,118,129,0.1)",
                      border: "1px solid rgba(110,118,129,0.25)",
                      color: "#94a3b8",
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains-mono)",
                      textDecoration: "none",
                    }}
                  >
                    <GitFork size={13} />
                    GitHub
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "7px 14px",
                      borderRadius: "7px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#475569",
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains-mono)",
                      cursor: "not-allowed",
                    }}
                    title="Coming soon"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </motion.button>
                </div>

                <button
                  onClick={() =>
                    setExpandedId(expandedId === proj.id ? null : proj.id)
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#475569",
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    cursor: "pointer",
                  }}
                >
                  {expandedId === proj.id ? (
                    <>
                      Less <ChevronUp size={12} />
                    </>
                  ) : (
                    <>
                      Details <ChevronDown size={12} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
