"use client";

import { motion } from "framer-motion";
import { Download, GitFork, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function ResumeCTA() {
  return (
    <SectionWrapper id="resume">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <div
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
              marginBottom: "32px",
            }}
          >
            READY TO COLLABORATE
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#f8fafc",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Interested in scalable systems,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              cloud infrastructure,
            </span>{" "}
            or DevOps collaboration?
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            Whether you need a DevOps engineer who can build CI/CD pipelines from scratch, architect
            cloud infrastructure on AWS, or orchestrate Kubernetes workloads — let&apos;s connect.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,195,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #00c3ff, #0284c7)",
                color: "#fff",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,195,255,0.2)",
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "rgba(0,195,255,0.08)",
                border: "1px solid rgba(0,195,255,0.3)",
                color: "#00c3ff",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Contact Me
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="https://github.com/DharshanKanth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "rgba(110,118,129,0.1)",
                border: "1px solid rgba(110,118,129,0.25)",
                color: "#94a3b8",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <GitFork size={18} />
              View GitHub
            </motion.a>
          </div>

          {/* Stats */}
          <div
            style={{
              marginTop: "64px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "24px",
              padding: "32px",
              borderRadius: "16px",
              background: "rgba(0,195,255,0.03)",
              border: "1px solid rgba(0,195,255,0.08)",
            }}
          >
            {[
              { value: "10+", label: "GitHub Repos" },
              { value: "3", label: "Certifications" },
              { value: "2", label: "Internships" },
              { value: "8.4", label: "CGPA" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#00c3ff",
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
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
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
