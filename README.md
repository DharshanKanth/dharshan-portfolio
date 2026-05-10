# Darshan U — DevOps Portfolio

A premium, production-grade portfolio website for a Cloud & DevOps Engineer. Built with a **Cloud Infrastructure Command Center** aesthetic.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-purple)](https://framer.com/motion)

## 🚀 Features

- **Cloud Infrastructure Command Center** aesthetic
- Interactive terminal widget with real commands (`help`, `skills`, `projects`, `contact`, `resume`)
- Canvas particle network in Hero section
- Animated SVG infrastructure architecture diagram
- Live GitHub API integration (repos + language stats)
- 3D tilt certification cards
- Animated DevOps pipeline visualization
- Terminal-style contact form
- Scroll-triggered animations via Framer Motion
- Fully responsive (desktop → mobile)
- Dark mode first
- SEO optimized (OpenGraph, Twitter cards, JSON-LD)

## 📁 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Canvas API | Particle network |
| GitHub REST API | Live repo data |

## 🗂️ Project Structure

```
darshan-portfolio/
├── app/
│   ├── layout.tsx          # SEO metadata, fonts, root layout
│   ├── page.tsx            # Main page (all sections composed)
│   └── globals.css         # CSS variables, animations, utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with status indicators
│   │   └── Footer.tsx      # Minimal premium footer
│   ├── sections/
│   │   ├── Hero.tsx        # Cinematic hero with particle canvas
│   │   ├── InfraVisualization.tsx  # SVG architecture diagram
│   │   ├── About.tsx       # Bio, education, metrics
│   │   ├── Skills.tsx      # Interactive skills matrix
│   │   ├── Experience.tsx  # Animated timeline
│   │   ├── Projects.tsx    # Premium project case studies
│   │   ├── Toolchain.tsx   # DevOps pipeline visualization
│   │   ├── GitHubDashboard.tsx  # Live GitHub stats
│   │   ├── Certifications.tsx   # 3D tilt cert cards
│   │   ├── Leadership.tsx  # Leadership roles
│   │   ├── ResumeCTA.tsx   # Download CTA
│   │   └── Contact.tsx     # Terminal-style contact form
│   └── shared/
│       ├── SectionWrapper.tsx   # Scroll-triggered reveals
│       ├── TerminalWidget.tsx   # Interactive terminal emulator
│       └── AnimatedCounter.tsx  # Number animation component
├── lib/
│   ├── data.ts             # All static content
│   ├── github.ts           # GitHub API helpers
│   └── utils.ts            # cn() utility
└── public/
    └── resume.pdf          # ⚠️ Replace with your actual resume
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd darshan-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🔧 Configuration

### Update Personal Details

Edit `lib/data.ts` to update:
- Personal info (email, phone, LinkedIn)
- Projects
- Skills
- Experience
- Certifications

### Resume PDF

Place your resume at:
```
public/resume.pdf
```

### Contact Details

Update contact info in:
- `lib/data.ts` → `personalInfo` object
- `components/sections/Contact.tsx` → `CONTACT_INFO` array
- `components/layout/Footer.tsx` → social links

## 🚀 Deployment (Vercel)

```bash
# Build production bundle
npm run build

# Deploy to Vercel
npx vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables (Optional)

Create `.env.local` for GitHub API rate limiting workaround:
```env
# Optional: GitHub personal access token for higher API rate limits
GITHUB_TOKEN=your_github_pat_here
```

## 📊 Sections

1. **Hero** — Particle network, terminal typing, floating tool cards
2. **Infrastructure Visualization** — Animated SVG CI/CD pipeline diagram
3. **About** — Bio, education, metrics, currently learning
4. **Skills Matrix** — Interactive filterable skill clusters
5. **Experience Timeline** — Animated with pulsing dots
6. **Projects** — 5 premium case study cards with expandable details
7. **DevOps Toolchain** — Horizontal animated pipeline
8. **GitHub Dashboard** — Live API data, language chart, repo explorer
9. **Certifications** — 3D tilt cards (AWS, RHCSA, Docker)
10. **Leadership** — Placement Coordinator & Dev Club roles
11. **Resume CTA** — Download + contact buttons
12. **Contact** — Terminal-style form with glow effects
13. **Footer** — Minimal with server status widget

## 🎨 Design System

- **Background**: `#050816` → `#0B1120` → `#111827`
- **Accent**: Cyan `#00c3ff`, Electric Blue `#3b82f6`, Teal `#06b6d4`
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (terminal)
- **Animations**: Framer Motion scroll-triggered reveals, canvas particles, SVG flow animations

---

**Designed & Engineered by Darshan U** ❤️
