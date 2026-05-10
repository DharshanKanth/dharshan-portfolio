"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const STATUS_ITEMS = [
  { label: "CI/CD", color: "#22c55e" },
  { label: "K8s", color: "#326CE5" },
  { label: "AWS", color: "#FF9900" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(5, 8, 22, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 195, 255, 0.1)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                background: "linear-gradient(135deg, rgba(0,195,255,0.2), rgba(59,130,246,0.2))",
                border: "1px solid rgba(0,195,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 15,
                color: "#00c3ff",
                boxShadow: "0 0 12px rgba(0,195,255,0.2)",
              }}
            >
              DU
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#f8fafc",
                  lineHeight: 1.2,
                }}
              >
                Dharshan U
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 10,
                  color: "#00c3ff",
                  letterSpacing: "0.05em",
                }}
              >
                Cloud & DevOps
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#00c3ff";
                  (e.target as HTMLAnchorElement).style.background = "rgba(0,195,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#94a3b8";
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: status + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Status indicators */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              className="hidden lg:flex"
            >
              {STATUS_ITEMS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: item.color,
                      boxShadow: `0 0 6px ${item.color}`,
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "8px 18px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, rgba(0,195,255,0.15), rgba(59,130,246,0.15))",
                border: "1px solid rgba(0,195,255,0.3)",
                color: "#00c3ff",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk)",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
              className="hidden md:block"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "6px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              className="md:hidden"
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 22,
                    height: 2,
                    background: "#94a3b8",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    transform:
                      mobileOpen
                        ? i === 0
                          ? "rotate(45deg) translate(5px, 5px)"
                          : i === 1
                          ? "scaleX(0)"
                          : "rotate(-45deg) translate(5px, -5px)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(5, 8, 22, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,195,255,0.1)",
              padding: "16px 24px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(0,195,255,0.08)",
                  color: "#94a3b8",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                margin: "16px 0 0",
                padding: "12px",
                borderRadius: "8px",
                background: "rgba(0,195,255,0.1)",
                border: "1px solid rgba(0,195,255,0.2)",
                color: "#00c3ff",
                textAlign: "center",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
