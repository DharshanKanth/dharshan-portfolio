"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Zap, Brain, Shield, Cloud } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { personalInfo, deploymentMetrics } from "@/lib/data";

const INTEREST_TAGS = [
  { label: "Cloud-Native", icon: Cloud, color: "#00c3ff" },
  { label: "Kubernetes", icon: Zap, color: "#326CE5" },
  { label: "MLOps", icon: Brain, color: "#a855f7" },
  { label: "DevSecOps", icon: Shield, color: "#22c55e" },
  { label: "AI Automation", icon: Brain, color: "#f59e0b" },
  { label: "IaC / Terraform", icon: Zap, color: "#7B42BC" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
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
              ABOUT ME
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
              }}
            >
              The Engineer Behind the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Infrastructure
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: Bio + Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              style={{ padding: "28px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(0,195,255,0.2), rgba(59,130,246,0.2))",
                    border: "2px solid rgba(0,195,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#00c3ff",
                    flexShrink: 0,
                  }}
                >
                  DU
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#f8fafc",
                      marginBottom: "4px",
                    }}
                  >
                    {personalInfo.name}
                  </h3>
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: "#00c3ff",
                    }}
                  >
                    {personalInfo.role}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "4px",
                      fontSize: 12,
                      color: "#475569",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    <MapPin size={12} />
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter)",
                  marginBottom: "16px",
                }}
              >
                I&apos;m a Cloud & DevOps-focused Computer Science student with a passion for building
                resilient, scalable infrastructure. I thrive at the intersection of automation,
                cloud-native technologies, and intelligent systems.
              </p>

              <p
                style={{
                  fontSize: 14,
                  color: "#64748b",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter)",
                }}
              >
                From provisioning AWS infrastructure with Terraform to deploying ML models on Kubernetes,
                I bring a DevSecOps mindset to everything I build — ensuring security, reliability,
                and developer velocity are never at odds.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card"
              style={{ padding: "24px" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: "rgba(0,195,255,0.1)",
                    border: "1px solid rgba(0,195,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={20} color="#00c3ff" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "#f8fafc",
                      marginBottom: "4px",
                    }}
                  >
                    {personalInfo.education.institution}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#94a3b8",
                      fontFamily: "var(--font-inter)",
                      marginBottom: "8px",
                    }}
                  >
                    {personalInfo.education.degree}
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#22c55e",
                        background: "rgba(34,197,94,0.1)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        border: "1px solid rgba(34,197,94,0.2)",
                      }}
                    >
                      CGPA: {personalInfo.education.cgpa}/10
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#64748b",
                      }}
                    >
                      {personalInfo.education.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interest tags */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-card"
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontFamily: "var(--font-jetbrains-mono)",
                  color: "#64748b",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Interests & Focus Areas
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {INTEREST_TAGS.map((tag) => (
                  <motion.div
                    key={tag.label}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: `${tag.color}12`,
                      border: `1px solid ${tag.color}30`,
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: tag.color,
                      cursor: "default",
                    }}
                  >
                    <tag.icon size={12} />
                    {tag.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Metrics + deployment panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Animated counters grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {deploymentMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card"
                    style={{ padding: "24px", textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: 36,
                        background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "4px",
                      }}
                    >
                      {metric.value}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        color: "#94a3b8",
                        marginBottom: "4px",
                      }}
                    >
                      {metric.label}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#475569",
                      }}
                    >
                      {metric.sub}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Currently Learning card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#a855f7",
                    boxShadow: "0 0 8px #a855f7",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#a855f7",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Currently Learning
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {personalInfo.currentlyLearning.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "28px",
                        borderRadius: "6px",
                        background: "rgba(168,85,247,0.06)",
                        border: "1px solid rgba(168,85,247,0.15)",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#64748b",
                        }}
                      >
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontFamily: "var(--font-inter)",
                          color: "#94a3b8",
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </span>
                      <motion.div
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.6,
                          ease: "linear",
                        }}
                        style={{
                          marginLeft: "auto",
                          height: "2px",
                          background: "linear-gradient(90deg, #a855f7, transparent)",
                          borderRadius: "1px",
                          maxWidth: "60px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                padding: "24px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, rgba(0,195,255,0.06) 0%, rgba(59,130,246,0.06) 100%)",
                border: "1px solid rgba(0,195,255,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #00c3ff, #3b82f6, transparent)",
                }}
              />
              <p
                style={{
                  fontSize: 15,
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Building cloud-native systems one deployment at a time — where reliability,
                security, and automation are not afterthoughts, but first principles.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
