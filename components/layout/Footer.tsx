"use client";

import { motion } from "framer-motion";
import { GitFork, Link2, Mail, ExternalLink, Server, Heart } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];



export default function Footer() {
  return (
    <footer
      style={{
        background: "#030710",
        borderTop: "1px solid rgba(0,195,255,0.1)",
        padding: "60px 24px 30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,195,255,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, rgba(0,195,255,0.2), rgba(59,130,246,0.2))",
                  border: "1px solid rgba(0,195,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#00c3ff",
                }}
              >
                DU
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#f8fafc",
                  }}
                >
                  Dharshan U
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#00c3ff",
                  }}
                >
                  Cloud & DevOps Engineer
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.7,
                fontFamily: "var(--font-inter)",
                maxWidth: "220px",
              }}
            >
              Building scalable cloud-native infrastructure, one deployment at a time.
            </p>

            {/* Server status widget */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "6px",
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.15)",
                width: "fit-content",
              }}
            >
              <Server size={13} color="#22c55e" />
              <span style={{ fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#22c55e" }}>
                Systems operational
              </span>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 13,
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00c3ff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>



          {/* Connect */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: 13,
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  icon: <GitFork size={15} />,
                  label: "GitHub",
                  href: "https://github.com/DharshanKanth",
                },
                {
                  icon: <Link2 size={15} />,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/dharshankanth",
                },
                {
                  icon: <Mail size={15} />,
                  label: "Email",
                  href: "mailto:dharshankanth@email.com",
                },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: 14,
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00c3ff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#64748b";
                  }}
                >
                  {icon}
                  {label}
                  <ExternalLink size={11} style={{ opacity: 0.5 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0,195,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#334155",
              fontFamily: "var(--font-inter)",
            }}
          >
            © 2025 Dharshan U. All rights reserved.
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#334155",
              fontFamily: "var(--font-inter)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Designed & Engineered by{" "}
            <span style={{ color: "#00c3ff", fontWeight: 600 }}>Dharshan U</span>
            <Heart size={13} color="#ef4444" fill="#ef4444" />
          </p>
        </div>
      </div>
    </footer>
  );
}
