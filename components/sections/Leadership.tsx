"use client";

import { motion } from "framer-motion";
import { Users, Code, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { leadership } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  users: Users,
  code: Code,
};

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" altBg>
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
              LEADERSHIP
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
              }}
            >
              Beyond the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Command Line
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
              Leadership & community contributions
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {leadership.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Users;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(5,8,22,0.9)",
                  border: `1px solid ${item.color}25`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${item.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}25`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    height: "3px",
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                <div style={{ padding: "28px" }}>
                  {/* Icon + impact */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "12px",
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 0 20px ${item.color}15`,
                      }}
                    >
                      <Icon size={24} color={item.color} />
                    </div>

                    {/* Impact badge */}
                    <div
                      style={{
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        background: `${item.color}10`,
                        border: `1px solid ${item.color}25`,
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: 15,
                        color: item.color,
                      }}
                    >
                      {item.impact}
                    </div>
                  </div>

                  {/* Role + org */}
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#f8fafc",
                      marginBottom: "4px",
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: item.color,
                      opacity: 0.8,
                      marginBottom: "14px",
                    }}
                  >
                    {item.org}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {item.achievements.map((ach, ai) => (
                      <motion.div
                        key={ai}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + ai * 0.06 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
                      >
                        <CheckCircle size={13} color={item.color} style={{ marginTop: 2, flexShrink: 0 }} />
                        <span
                          style={{
                            fontSize: 13,
                            color: "#94a3b8",
                            fontFamily: "var(--font-inter)",
                            lineHeight: 1.5,
                          }}
                        >
                          {ach}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
