"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Link2, GitFork, MapPin, Send, CheckCircle, Terminal } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "dharshankanth@email.com",
    href: "mailto:dharshankanth@email.com",
    color: "#00c3ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "#22c55e",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/dharshan-u-222b66295",
    href: "https://www.linkedin.com/in/dharshan-u-222b66295",
    color: "#0ea5e9",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/DharshanKanth",
    href: "https://github.com/DharshanKanth",
    color: "#94a3b8",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: null,
    color: "#f59e0b",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setFormState("sending");

    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");

    setTimeout(() => {
      setFormState("idle");
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <SectionWrapper id="contact" altBg>
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
              CONTACT
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#f8fafc",
                marginBottom: "12px",
              }}
            >
              Let&apos;s Build{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Scalable Infrastructure
              </span>{" "}
              Together
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                fontFamily: "var(--font-inter)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Let&apos;s build scalable infrastructure together.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: 12,
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              — Reach Out
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 18px",
                        borderRadius: "10px",
                        background: "rgba(5,8,22,0.8)",
                        border: `1px solid ${item.color}20`,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${item.color}20`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "8px",
                          background: `${item.color}10`,
                          border: `1px solid ${item.color}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={16} color={item.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#475569", marginBottom: "2px" }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: 13, fontFamily: "var(--font-inter)", color: "#94a3b8", fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 18px",
                        borderRadius: "10px",
                        background: "rgba(5,8,22,0.8)",
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "8px",
                          background: `${item.color}10`,
                          border: `1px solid ${item.color}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={16} color={item.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#475569", marginBottom: "2px" }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: 13, fontFamily: "var(--font-inter)", color: "#94a3b8", fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Response time */}
            <div
              style={{
                padding: "14px 18px",
                borderRadius: "10px",
                background: "rgba(34,197,94,0.04)",
                border: "1px solid rgba(34,197,94,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  animation: "pulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 12, fontFamily: "var(--font-space-grotesk)", fontWeight: 600, color: "#22c55e" }}>
                  Available for opportunities
                </div>
                <div style={{ fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}>
                  Typical response within 24 hours
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: "#070d1f",
                border: "1px solid rgba(0,195,255,0.15)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 0 40px rgba(0,195,255,0.05)",
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
                <span style={{ marginLeft: 8, fontSize: 12, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}>
                  <Terminal size={12} style={{ display: "inline", marginRight: 6 }} />
                  new-collaboration.sh
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Name field */}
                {[
                  { id: "name", label: "name", type: "text", placeholder: "Your name", value: form.name },
                  { id: "email", label: "email", type: "email", placeholder: "your@email.com", value: form.email },
                ].map((field) => (
                  <div key={field.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <span style={{ color: "#22c55e", fontFamily: "var(--font-jetbrains-mono)", fontSize: 13 }}>$</span>
                      <label
                        htmlFor={field.id}
                        style={{
                          fontSize: 12,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#475569",
                        }}
                      >
                        input --{field.label}
                      </label>
                    </div>
                    <input
                      id={field.id}
                      type={field.type}
                      value={field.value}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${focused === field.id ? "rgba(0,195,255,0.4)" : "rgba(255,255,255,0.08)"}`,
                        color: "#e2e8f0",
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: 13,
                        outline: "none",
                        transition: "border-color 0.2s ease",
                        boxShadow: focused === field.id ? "0 0 12px rgba(0,195,255,0.1)" : "none",
                      }}
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ color: "#22c55e", fontFamily: "var(--font-jetbrains-mono)", fontSize: 13 }}>$</span>
                    <label
                      htmlFor="message"
                      style={{ fontSize: 12, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}
                    >
                      input --message
                    </label>
                  </div>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${focused === "message" ? "rgba(0,195,255,0.4)" : "rgba(255,255,255,0.08)"}`,
                      color: "#e2e8f0",
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: 13,
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s ease",
                      boxShadow: focused === "message" ? "0 0 12px rgba(0,195,255,0.1)" : "none",
                    }}
                  />
                </div>

                {/* Submit */}
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "14px",
                        borderRadius: "10px",
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        color: "#22c55e",
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      <CheckCircle size={18} />
                      Message deployed successfully!
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={formState === "sending"}
                      whileHover={formState === "idle" ? { scale: 1.02 } : {}}
                      whileTap={formState === "idle" ? { scale: 0.98 } : {}}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "14px",
                        borderRadius: "10px",
                        background:
                          formState === "sending"
                            ? "rgba(0,195,255,0.1)"
                            : "linear-gradient(135deg, #00c3ff, #0284c7)",
                        border: formState === "sending" ? "1px solid rgba(0,195,255,0.2)" : "none",
                        color: "#fff",
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: formState === "sending" ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {formState === "sending" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            style={{
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTop: "2px solid #fff",
                            }}
                          />
                          Deploying message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
