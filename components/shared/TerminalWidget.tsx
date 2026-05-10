"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  skills   — View technology stack",
    "  projects — Browse key projects",
    "  contact  — Get contact info",
    "  resume   — Download resume",
    "  clear    — Clear terminal",
  ],
  skills: [
    "Cloud:      AWS EC2, S3, IAM, Lambda, RDS, VPC, CloudWatch",
    "DevOps:     Docker, Kubernetes, Terraform, GitHub Actions, Jenkins",
    "MLOps:      FastAPI, Model Serving, Containerized ML Pipelines",
    "Languages:  Python, Bash, JavaScript, TypeScript",
    "Stack:      MERN, React, Node.js, MongoDB",
    "Tools:      Linux, Git, Prometheus, Grafana, Nginx",
  ],
  projects: [
    "1. ML Inference Microservice   — FastAPI + K8s (1k+ req/day)",
    "2. MERN App on Kubernetes      — Zero-downtime K8s deployment",
    "3. AWS Resource Automation     — Terraform IaC (70% faster setup)",
    "4. AI Agent K8s Pod Monitor    — LLM-powered observability",
    "5. DevSecOps Pipeline          — SAST + DAST + Container Security",
  ],
  contact: [
    "Email:    dharshankanth@email.com",
    "Phone:    +91 98765 43210",
    "GitHub:   github.com/DharshanKanth",
    "LinkedIn: linkedin.com/in/dharshankanth",
    "Location: Coimbatore, Tamil Nadu, India",
  ],
  resume: [
    "Initiating resume download...",
    "Fetching darshan-u-resume.pdf from cloud storage...",
    "Download complete. Opening file...",
  ],
};

interface Line {
  type: "command" | "output" | "error";
  text: string;
}

export default function TerminalWidget({ compact = false }: { compact?: boolean }) {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "DharshanKanth@cloud-portfolio ~ % Type 'help' for commands" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "command", text: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setLines([{ type: "output", text: "Terminal cleared." }]);
      return;
    }

    if (COMMANDS[trimmed]) {
      setLines(newLines);
      setIsTyping(true);

      const outputs = COMMANDS[trimmed];
      for (let i = 0; i < outputs.length; i++) {
        await new Promise((r) => setTimeout(r, 120 * i));
        setLines((prev) => [...prev, { type: "output", text: outputs[i] }]);
      }

      if (trimmed === "resume") {
        setTimeout(() => {
          window.open("/resume.pdf", "_blank");
        }, 800);
      }

      setIsTyping(false);
    } else if (trimmed === "") {
      setLines(newLines);
    } else {
      setLines([
        ...newLines,
        { type: "error", text: `Command not found: '${cmd}'. Type 'help' for available commands.` },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="terminal"
      style={{
        background: "#070d1f",
        border: "1px solid rgba(0, 195, 255, 0.2)",
        borderRadius: "10px",
        fontFamily: "var(--font-jetbrains-mono)",
        overflow: "hidden",
        boxShadow: "0 0 30px rgba(0,195,255,0.08)",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header */}
      <div
        style={{
          background: "rgba(0,195,255,0.04)",
          borderBottom: "1px solid rgba(0,195,255,0.1)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ marginLeft: 8, color: "#64748b", fontSize: 12 }}>
          darshan@cloud-portfolio ~ %
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "16px",
          fontSize: 13,
          lineHeight: 1.8,
          maxHeight: compact ? "200px" : "320px",
          overflowY: "auto",
          cursor: "text",
        }}
      >
        <AnimatePresence initial={false}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                color:
                  line.type === "command"
                    ? "#38bdf8"
                    : line.type === "error"
                    ? "#ef4444"
                    : "#94a3b8",
                fontWeight: line.type === "command" ? 500 : 400,
              }}
            >
              {line.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
          <span style={{ color: "#22c55e", marginRight: 8 }}>$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#e2e8f0",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: 13,
              flex: 1,
              caretColor: "#22c55e",
            }}
            placeholder={isTyping ? "processing..." : ""}
            autoFocus
          />
          {!isTyping && (
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 16,
                background: "#22c55e",
                animation: "cursorBlink 1s step-end infinite",
              }}
            />
          )}
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
