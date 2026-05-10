"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitFork, Download, ArrowRight, Mail, Terminal, Cloud, Server, Cpu, GitBranch, Box } from "lucide-react";

const TERMINAL_LINES = [
  "$ kubectl get pods --all-namespaces",
  "$ terraform apply -auto-approve",
  "$ docker compose up --scale api=3",
  "$ aws ecs update-service --desired-count 5",
  "$ helm upgrade --install app ./chart",
  "$ kubectl rollout status deployment/api",
];

const FLOATING_TOOLS = [
  { label: "AWS", color: "#FF9900", icon: Cloud, delay: 0, x: -60, y: -20 },
  { label: "Kubernetes", color: "#326CE5", icon: Server, delay: 0.5, x: 60, y: -30 },
  { label: "Terraform", color: "#7B42BC", icon: Cpu, delay: 1, x: -50, y: 40 },
  { label: "Docker", color: "#2496ED", icon: Box, delay: 1.5, x: 70, y: 30 },
  { label: "GitHub Actions", color: "#6e7681", icon: GitBranch, delay: 2, x: 0, y: 60 },
];

const CURRENTLY_LEARNING = [
  "AI Automation",
  "MLOps",
  "Advanced Kubernetes",
  "Multi-cloud",
  "DevSecOps",
];

export default function Hero() {
  const [terminalLine, setTerminalLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [learningIdx, setLearningIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // Terminal typing animation
  useEffect(() => {
    let charIdx = 0;
    const currentLine = TERMINAL_LINES[terminalLine];
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (charIdx <= currentLine.length) {
        setDisplayText(currentLine.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTerminalLine((prev) => (prev + 1) % TERMINAL_LINES.length);
        }, 1800);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [terminalLine]);

  // Rotate learning items
  useEffect(() => {
    const interval = setInterval(() => {
      setLearningIdx((prev) => (prev + 1) % CURRENTLY_LEARNING.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number; r: number;
    }

    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 195, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 195, 255, 0.5)";
        ctx.fill();
      });

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Canvas particle bg */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,195,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Radial hero glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(0,195,255,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text content */}
        <div>
          {/* Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}
          >
            {/* Availability */}
            <div className="status-badge status-online">
              <div className="status-pulse" />
              Open to Opportunities
            </div>

            {/* Currently learning */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: 12,
                fontWeight: 500,
                fontFamily: "var(--font-jetbrains-mono)",
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#a855f7",
                overflow: "hidden",
              }}
            >
              <span>Learning:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={learningIdx}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {CURRENTLY_LEARNING[learningIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Name + title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: 13,
                color: "#00c3ff",
                marginBottom: "8px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Hello, I&apos;m
            </div>
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.05,
                color: "#f8fafc",
                marginBottom: "16px",
              }}
            >
              Dharshan U
            </h1>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "clamp(20px, 2.5vw, 30px)",
                lineHeight: 1.2,
                marginBottom: "24px",
                background: "linear-gradient(135deg, #00c3ff, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Cloud & DevOps Engineer Building Scalable Infrastructure
            </h2>
          </motion.div>

          {/* Subheadline tags */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 15,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: "32px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Specializing in{" "}
            {["AWS", "Kubernetes", "Terraform", "CI/CD", "MLOps"].map((tag, i) => (
              <span key={tag}>
                <span
                  style={{
                    color: "#94a3b8",
                    fontWeight: 500,
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: 13,
                  }}
                >
                  {tag}
                </span>
                {i < 4 ? " · " : ""}
              </span>
            ))}{" "}
            — automating infrastructure, accelerating deployments, and engineering resilient cloud-native systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,195,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #00c3ff, #0284c7)",
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: "none",
              }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "rgba(0,195,255,0.08)",
                border: "1px solid rgba(0,195,255,0.3)",
                color: "#00c3ff",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <Download size={16} />
              Resume
            </motion.a>

            <motion.a
              href="https://github.com/DharshanKanth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "rgba(110,118,129,0.1)",
                border: "1px solid rgba(110,118,129,0.3)",
                color: "#94a3b8",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <GitFork size={16} />
              GitHub
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#64748b",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <Mail size={16} />
              Contact
            </motion.a>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: "32px" }}
          >
            {[
              { value: "70%", label: "Infra Automation" },
              { value: "60%", label: "Faster Deploys" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#00c3ff",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#475569",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Terminal + floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
          className="hidden md:block"
        >
          {/* Floating tool cards */}
          {FLOATING_TOOLS.map((tool) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: tool.delay + 0.6, duration: 0.5 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${tool.x}px), calc(-50% + ${tool.y}px))`,
                zIndex: 20,
                animation: `float ${5 + tool.delay}s ease-in-out ${tool.delay}s infinite`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: `${tool.color}18`,
                  border: `1px solid ${tool.color}40`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 15px ${tool.color}20`,
                  whiteSpace: "nowrap",
                }}
              >
                <tool.icon size={13} color={tool.color} />
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: tool.color,
                    fontWeight: 500,
                  }}
                >
                  {tool.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Terminal card */}
          <div
            style={{
              background: "#070d1f",
              border: "1px solid rgba(0,195,255,0.2)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(0,195,255,0.1), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                background: "rgba(0,195,255,0.04)",
                borderBottom: "1px solid rgba(0,195,255,0.1)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 12,
                  fontFamily: "var(--font-jetbrains-mono)",
                  color: "#475569",
                }}
              >
                <Terminal size={12} style={{ display: "inline", marginRight: 6 }} />
                darshan@cloud-portfolio
              </div>
            </div>

            {/* Terminal body */}
            <div style={{ padding: "20px", minHeight: "200px" }}>
              {/* Previous static lines */}
              <div style={{ marginBottom: "8px" }}>
                {[
                  { prompt: "$ ", cmd: "kubectl get pods", out: "Running — api-pod, db-pod, cache-pod" },
                  { prompt: "$ ", cmd: "terraform plan", out: "Plan: 5 to add, 0 to change, 0 to destroy" },
                ].map((line, i) => (
                  <div key={i} style={{ marginBottom: 8 }}>
                    <div style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: 13 }}>
                      <span style={{ color: "#22c55e" }}>{line.prompt}</span>
                      <span style={{ color: "#38bdf8" }}>{line.cmd}</span>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: 12,
                        color: "#475569",
                        paddingLeft: 8,
                      }}
                    >
                      {line.out}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live typing line */}
              <div style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: 13 }}>
                <span style={{ color: "#22c55e" }}>
                  {displayText.startsWith("$") ? "" : ""}
                </span>
                <span style={{ color: "#38bdf8" }}>{displayText}</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 14,
                    background: "#22c55e",
                    marginLeft: 2,
                    verticalAlign: "middle",
                    animation: "cursorBlink 1s step-end infinite",
                  }}
                />
              </div>

              {/* Status metrics */}
              <div
                style={{
                  marginTop: 20,
                  padding: "12px",
                  background: "rgba(0,195,255,0.04)",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,195,255,0.08)",
                }}
              >
                {[
                  { label: "CI/CD Pipeline", status: "ACTIVE", color: "#22c55e" },
                  { label: "Kubernetes", status: "HEALTHY", color: "#326CE5" },
                  { label: "AWS Services", status: "CONNECTED", color: "#FF9900" },
                  { label: "Monitoring", status: "ENABLED", color: "#E6522C" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "3px 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#475569",
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: s.color,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: s.color,
                          display: "inline-block",
                        }}
                      />
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontFamily: "var(--font-jetbrains-mono)",
            color: "#334155",
            letterSpacing: "0.1em",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, rgba(0,195,255,0.5), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
