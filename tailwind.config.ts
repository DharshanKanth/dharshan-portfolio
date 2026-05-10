import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background layers
        "bg-primary": "#050816",
        "bg-secondary": "#0B1120",
        "bg-tertiary": "#111827",
        // Accent palette
        cloud: {
          50: "#e0f9ff",
          100: "#b3f0ff",
          200: "#80e5ff",
          300: "#4dd9ff",
          400: "#26ceff",
          500: "#00c3ff",
          600: "#009fcc",
          700: "#007a99",
          800: "#005566",
          900: "#003040",
        },
        cyber: {
          50: "#e6f7ff",
          100: "#bae8ff",
          200: "#7dd3fc",
          300: "#38bdf8",
          400: "#0ea5e9",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
        },
        // Tool brand colors
        k8s: "#326CE5",
        "aws-orange": "#FF9900",
        "docker-blue": "#2496ED",
        "terraform-purple": "#7B42BC",
        "github-gray": "#6e7681",
        "jenkins-red": "#D33833",
        "rhcsa-red": "#EE0000",
        // Status colors
        "status-green": "#22c55e",
        "status-yellow": "#eab308",
        "status-red": "#ef4444",
        "status-blue": "#3b82f6",
        // Glow colors
        "glow-cyan": "rgba(0, 195, 255, 0.15)",
        "glow-blue": "rgba(59, 130, 246, 0.15)",
        "glow-green": "rgba(34, 197, 94, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "scan-line": "scanLine 4s linear infinite",
        "data-flow": "dataFlow 2s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        typewriter: "typewriter 3s steps(40) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        dataFlow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 195, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 195, 255, 0.7), 0 0 40px rgba(0, 195, 255, 0.3)" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scaleX(1)" },
          "10%": { transform: "scaleX(1.1)" },
          "20%": { transform: "scaleX(0.9)" },
          "30%": { transform: "scaleX(1.05)" },
          "40%": { transform: "scaleX(0.95)" },
          "50%": { transform: "scaleX(1)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "90%, 100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,195,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,255,0.03) 1px, transparent 1px)",
        "grid-pattern-dense":
          "linear-gradient(rgba(0,195,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,255,0.05) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,195,255,0.12), transparent)",
        "card-gradient": "linear-gradient(135deg, rgba(11,17,32,0.9) 0%, rgba(5,8,22,0.95) 100%)",
        "glow-border": "linear-gradient(135deg, rgba(0,195,255,0.4), rgba(59,130,246,0.4), rgba(0,195,255,0.1))",
      },
      backgroundSize: {
        "grid": "40px 40px",
        "grid-dense": "20px 20px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 195, 255, 0.3)",
        "glow-cyan-lg": "0 0 40px rgba(0, 195, 255, 0.4)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 195, 255, 0.15)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      borderColor: {
        "glow": "rgba(0, 195, 255, 0.2)",
        "glow-hover": "rgba(0, 195, 255, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
