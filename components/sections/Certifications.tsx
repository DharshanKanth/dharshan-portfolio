"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <SectionWrapper id="certifications">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
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
              CERTIFICATIONS
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
                Credentials
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Certs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: 3,
                scale: 1.02,
              }}
              style={{
                perspective: "800px",
                transformStyle: "preserve-3d",
                cursor: "default",
              }}
            >
              <div
                style={{
                  background: cert.bgColor,
                  border: `1px solid ${hoveredId === cert.id ? cert.color : cert.borderColor}`,
                  borderRadius: "16px",
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                  boxShadow:
                    hoveredId === cert.id
                      ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${cert.color}20`
                      : "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Top gradient stripe */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }}
                />

                {/* Floating badge glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${cert.color}20, transparent)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 0 20px ${cert.color}20`,
                  }}
                >
                  <Award size={26} color={cert.color} />
                </div>

                {/* Cert info */}
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: cert.color,
                    letterSpacing: "0.1em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  {cert.issuer}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#f8fafc",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#475569",
                    marginBottom: "20px",
                  }}
                >
                  {cert.code}
                </div>

                {/* Status + verify */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: 11,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: "#22c55e",
                    }}
                  >
                    <CheckCircle size={13} />
                    {cert.status}
                  </div>
                  <motion.a
                    href={cert.verifyUrl}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: 11,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: cert.color,
                      textDecoration: "none",
                      opacity: 0.7,
                    }}
                  >
                    Verify
                    <ExternalLink size={11} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
