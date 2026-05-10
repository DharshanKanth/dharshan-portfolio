"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { toolchainStages } from "@/lib/data";

export default function Toolchain() {
  return (
    <SectionWrapper id="toolchain">
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
              DEVOPS TOOLCHAIN
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
              }}
            >
              The{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pipeline
              </span>{" "}
              in Action
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                fontFamily: "var(--font-inter)",
                marginTop: "12px",
                maxWidth: "500px",
                margin: "12px auto 0",
              }}
            >
              End-to-end DevOps lifecycle from code commit to production monitoring
            </p>
          </motion.div>
        </div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "rgba(5,8,22,0.8)",
            border: "1px solid rgba(0,195,255,0.12)",
            borderRadius: "16px",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Pipeline animated line background */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              right: "40px",
              height: "2px",
              background: "rgba(0,195,255,0.08)",
              transform: "translateY(-50%)",
            }}
          />
          {/* Animated data flow line */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              height: "2px",
              width: "40px",
              background: "linear-gradient(90deg, transparent, #00c3ff, transparent)",
              transform: "translateY(-50%)",
            }}
            animate={{ left: ["40px", "calc(100% - 40px)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Stages */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${toolchainStages.length}, 1fr)`,
              gap: "16px",
              position: "relative",
            }}
            className="pipeline-stages"
          >
            {toolchainStages.map((stage, i) => (
              <div key={stage.id}>
                {/* Stage card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    padding: "20px 12px",
                    borderRadius: "12px",
                    background: `${stage.color}10`,
                    border: `1px solid ${stage.color}30`,
                    cursor: "default",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  {/* Stage number */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: stage.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontWeight: 700,
                      color: "#050816",
                      boxShadow: `0 0 12px ${stage.color}60`,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon placeholder / initials */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "10px",
                      background: `${stage.color}15`,
                      border: `1px solid ${stage.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: stage.color,
                    }}
                  >
                    {stage.tool.split(" ")[0].slice(0, 3).toUpperCase()}
                  </div>

                  {/* Labels */}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#f8fafc",
                        marginBottom: "3px",
                      }}
                    >
                      {stage.label}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: stage.color,
                        opacity: 0.8,
                      }}
                    >
                      {stage.tool}
                    </div>
                  </div>

                  {/* Health indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px #22c55e",
                    }}
                  />
                </motion.div>

                {/* Arrow connector */}
                {i < toolchainStages.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-8px",
                      transform: "translateY(-50%)",
                      zIndex: 5,
                    }}
                  >
                    <ArrowRight size={14} color="rgba(0,195,255,0.3)" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom pipeline stats */}
          <div
            style={{
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(0,195,255,0.08)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { label: "Build Time", value: "< 3 min", color: "#00c3ff" },
              { label: "Deploy Freq", value: "10x/day", color: "#22c55e" },
              { label: "Rollback Time", value: "< 30s", color: "#f59e0b" },
              { label: "Pipeline Success", value: "98.5%", color: "#a855f7" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
                style={{
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "8px",
                  background: `${stat.color}08`,
                  border: `1px solid ${stat.color}20`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: stat.color,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#475569",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pipeline-stages {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .pipeline-stages {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
