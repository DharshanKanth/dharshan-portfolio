"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";

interface Node {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
  label: string;
  delay: number;
}

const NODES: Node[] = [
  { id: "gh", label: "GitHub", sublabel: "Source Control", color: "#e2e8f0", x: 80, y: 60 },
  { id: "actions", label: "GitHub Actions", sublabel: "CI Pipeline", color: "#2496ED", x: 240, y: 60 },
  { id: "docker", label: "Docker", sublabel: "Containerize", color: "#2496ED", x: 400, y: 60 },
  { id: "k8s", label: "Kubernetes", sublabel: "Orchestrate", color: "#326CE5", x: 560, y: 140 },
  { id: "terraform", label: "Terraform", sublabel: "Provision IaC", color: "#7B42BC", x: 400, y: 220 },
  { id: "aws", label: "AWS EC2", sublabel: "Cloud Host", color: "#FF9900", x: 240, y: 220 },
  { id: "monitor", label: "Prometheus", sublabel: "Monitor", color: "#E6522C", x: 560, y: 300 },
  { id: "grafana", label: "Grafana", sublabel: "Visualize", color: "#F46800", x: 400, y: 300 },
];

const EDGES: Edge[] = [
  { from: "gh", to: "actions", label: "Push", delay: 0 },
  { from: "actions", to: "docker", label: "Build", delay: 0.5 },
  { from: "docker", to: "k8s", label: "Deploy", delay: 1 },
  { from: "terraform", to: "aws", label: "Provision", delay: 1.5 },
  { from: "aws", to: "k8s", label: "Host", delay: 2 },
  { from: "k8s", to: "monitor", label: "Metrics", delay: 2.5 },
  { from: "monitor", to: "grafana", label: "Stream", delay: 3 },
];

const STAGE_LABELS = [
  { label: "BUILD", x: 240, color: "#2496ED" },
  { label: "DEPLOY", x: 400, color: "#326CE5" },
  { label: "SCALE", x: 560, color: "#FF9900" },
  { label: "MONITOR", x: 560, color: "#E6522C" },
];

function getNodePos(id: string): { x: number; y: number } {
  const n = NODES.find((n) => n.id === id);
  return n ? { x: n.x, y: n.y } : { x: 0, y: 0 };
}

export default function InfraVisualization() {
  return (
    <SectionWrapper id="infrastructure" altBg>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              INFRASTRUCTURE ARCHITECTURE
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
              Cloud-Native{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Deployment Pipeline
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
              End-to-end infrastructure flow from code commit to production monitoring
            </p>
          </motion.div>
        </div>

        {/* SVG Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "rgba(5,8,22,0.8)",
            border: "1px solid rgba(0,195,255,0.12)",
            borderRadius: "16px",
            padding: "40px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <svg
              viewBox="0 0 680 380"
              style={{ width: "100%", minWidth: "500px", maxHeight: "380px" }}
            >
              {/* Defs for arrow markers and gradients */}
              <defs>
                {NODES.map((n) => (
                  <radialGradient key={n.id} id={`grd-${n.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={n.color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={n.color} stopOpacity="0" />
                  </radialGradient>
                ))}
                <marker
                  id="arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,195,255,0.4)" />
                </marker>
              </defs>

              {/* Edges */}
              {EDGES.map((edge, i) => {
                const from = getNodePos(edge.from);
                const to = getNodePos(edge.to);
                const mx = (from.x + to.x) / 2;
                const my = (from.y + to.y) / 2 - 10;
                const pathD = `M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`;
                const pathLen = 200;
                return (
                  <g key={i}>
                    {/* Static dim path */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="rgba(0,195,255,0.08)"
                      strokeWidth="1.5"
                    />
                    {/* Animated flow path */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="rgba(0,195,255,0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: edge.delay * 0.3, duration: 1, ease: "easeOut" }}
                      markerEnd="url(#arrow)"
                    />
                    {/* Animated data packet */}
                    <motion.circle
                      r="3"
                      fill="#00c3ff"
                      style={{ filter: "drop-shadow(0 0 4px #00c3ff)" }}
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        delay: edge.delay * 0.4 + 0.5,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear",
                      }}
                    >
                      <animateMotion
                        dur="2.5s"
                        repeatCount="indefinite"
                        begin={`${edge.delay * 0.4 + 0.5}s`}
                      >
                        <mpath xlinkHref={`#path-${i}`} />
                      </animateMotion>
                    </motion.circle>
                    {/* Hidden path for mpath */}
                    <path id={`path-${i}`} d={pathD} fill="none" />

                    {/* Edge label */}
                    <text
                      x={mx}
                      y={my - 6}
                      textAnchor="middle"
                      fill="rgba(0,195,255,0.5)"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {edge.label}
                    </text>
                  </g>
                );
              })}

              {/* Nodes */}
              {NODES.map((node, i) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
                >
                  {/* Glow bg */}
                  <circle cx={node.x} cy={node.y} r="32" fill={`url(#grd-${node.id})`} />
                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="22"
                    fill="rgba(5,8,22,0.9)"
                    stroke={node.color}
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />
                  {/* Pulsing ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="22"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    animate={{ r: [22, 30, 22], strokeOpacity: [0.3, 0, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={node.color}
                    fontSize="8"
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="600"
                  >
                    {node.label.split(" ")[0]}
                  </text>
                  {/* Sublabel below node */}
                  <text
                    x={node.x}
                    y={node.y + 36}
                    textAnchor="middle"
                    fill="rgba(148,163,184,0.7)"
                    fontSize="8"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {node.sublabel}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>

          {/* Stage labels below */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(0,195,255,0.08)",
            }}
          >
            {["CODE", "BUILD", "CONTAINERIZE", "DEPLOY", "SCALE", "MONITOR", "AUTOMATE"].map(
              (stage, i) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#64748b",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#00c3ff",
                    }}
                  />
                  {stage}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
