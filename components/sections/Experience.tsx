"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
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
              EXPERIENCE
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
              }}
            >
              Professional{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Timeline
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, rgba(0,195,255,0.5), rgba(168,85,247,0.5), transparent)",
            }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 0 0 ${exp.color}40`,
                      `0 0 0 12px ${exp.color}00`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${exp.color}15`,
                    border: `2px solid ${exp.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}`,
                    }}
                  />
                </motion.div>
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: "rgba(5,8,22,0.9)",
                  border: `1px solid ${exp.color}25`,
                  borderRadius: "12px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${exp.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}25`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#f8fafc",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: exp.color,
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: 12,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#64748b",
                        marginBottom: "4px",
                      }}
                    >
                      <Calendar size={11} />
                      {exp.duration}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: 10,
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 600,
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {exp.achievements.map((ach, ai) => (
                    <motion.div
                      key={ai}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + ai * 0.06 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: exp.color,
                          marginTop: "7px",
                          flexShrink: 0,
                          boxShadow: `0 0 6px ${exp.color}`,
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <span
                          style={{
                            fontSize: 13,
                            color: "#94a3b8",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {ach.text}
                        </span>
                        {ach.metric && (
                          <span
                            style={{
                              marginLeft: "8px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                              fontSize: 11,
                              fontFamily: "var(--font-jetbrains-mono)",
                              color: "#22c55e",
                              background: "rgba(34,197,94,0.08)",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              border: "1px solid rgba(34,197,94,0.2)",
                              verticalAlign: "middle",
                            }}
                          >
                            <TrendingUp size={10} />
                            {ach.metric}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "3px 9px",
                        borderRadius: "5px",
                        fontSize: 11,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#64748b",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
