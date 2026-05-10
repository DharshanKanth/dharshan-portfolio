import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dharshan U — Cloud & DevOps Engineer",
  description:
    "Portfolio of Dharshan U — Cloud & DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD pipelines, MLOps, and scalable infrastructure automation.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "Kubernetes",
    "Terraform",
    "AWS",
    "MLOps",
    "CI/CD",
    "Infrastructure Automation",
    "Docker",
    "GitHub Actions",
    "DevSecOps",
    "Dharshan U",
  ],
  authors: [{ name: "Dharshan U" }],
  creator: "Dharshan U",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshanu.dev",
    title: "Dharshan U — Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps Engineer building scalable infrastructure with AWS, Kubernetes, Terraform, and CI/CD automation.",
    siteName: "Dharshan U Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharshan U — Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps Engineer building scalable infrastructure with AWS, Kubernetes, Terraform, and CI/CD automation.",
    creator: "@DharshanKanth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dharshan U",
              jobTitle: "Cloud & DevOps Engineer",
              url: "https://darshanu.dev",
              sameAs: [
                "https://github.com/DharshanKanth",
                "https://linkedin.com/in/dharshankanth",
              ],
              knowsAbout: [
                "AWS",
                "Kubernetes",
                "Terraform",
                "Docker",
                "CI/CD",
                "MLOps",
                "DevSecOps",
                "GitHub Actions",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
        {children}
      </body>
    </html>
  );
}
