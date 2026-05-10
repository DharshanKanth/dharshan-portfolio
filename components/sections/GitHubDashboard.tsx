"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink, Code2 } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { fetchGitHubRepos, fetchGitHubUser, getLanguageColor, type GitHubRepo, type GitHubUser } from "@/lib/github";

const FALLBACK_REPOS: GitHubRepo[] = [
  { id: 1, name: "Deploying-MernApp-on-K8s", description: "MERN stack application deployment on Kubernetes with rolling updates and zero downtime", html_url: "https://github.com/DharshanKanth/Deploying-MernApp-on-K8s", language: "Shell", stargazers_count: 2, forks_count: 1, updated_at: "2025-01-15", topics: ["kubernetes", "docker", "mern"] },
  { id: 2, name: "Automating-AWS-Resource-Management-with-Shell-Script-", description: "Automated AWS resource provisioning using shell scripts and Terraform IaC", html_url: "https://github.com/DharshanKanth/Automating-AWS-Resource-Management-with-Shell-Script-", language: "Shell", stargazers_count: 3, forks_count: 0, updated_at: "2025-01-20", topics: ["aws", "terraform", "automation"] },
  { id: 3, name: "devsecops-demo", description: "DevSecOps implementation with SAST, DAST, and container security scanning", html_url: "https://github.com/DharshanKanth/devsecops-demo", language: "TypeScript", stargazers_count: 1, forks_count: 1, updated_at: "2025-02-01", topics: ["devsecops", "github-actions", "security"] },
  { id: 4, name: "Git-Tutorial", description: "Comprehensive Git and DevOps workflow tutorial repository", html_url: "https://github.com/DharshanKanth/Git-Tutorial", language: "Shell", stargazers_count: 1, forks_count: 0, updated_at: "2024-12-10", topics: ["git", "tutorial"] },
];

const FALLBACK_USER: GitHubUser = {
  login: "DharshanKanth",
  name: "Dharshan U",
  public_repos: 10,
  followers: 5,
  following: 12,
  avatar_url: "",
  bio: "Cloud & DevOps Engineer | AWS | Kubernetes | Terraform",
  html_url: "https://github.com/DharshanKanth",
};

export default function GitHubDashboard() {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [user, setUser] = useState<GitHubUser>(FALLBACK_USER);
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchGitHubRepos(), fetchGitHubUser()]).then(([r, u]) => {
      if (r && r.length > 0) setRepos(r);
      if (u) setUser(u);
      setLoading(false);
    });
  }, []);

  // Language distribution from repos
  const langMap: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const totalLangCount = Object.values(langMap).reduce((a, b) => a + b, 0);
  const langEntries = Object.entries(langMap).sort((a, b) => b[1] - a[1]);

  return (
    <SectionWrapper id="github" altBg>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
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
              GITHUB DASHBOARD
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
              Open Source{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00c3ff, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Activity
              </span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                fontFamily: "var(--font-inter)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Building cloud-native systems one deployment at a time.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Stats + Language distribution */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "24px",
          }}
          className="github-top-grid"
        >
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: "28px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(110,118,129,0.2), rgba(59,130,246,0.2))",
                  border: "1px solid rgba(110,118,129,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GitFork size={28} color="#94a3b8" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#f8fafc",
                  }}
                >
                  {user.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: "#64748b",
                  }}
                >
                  @{user.login}
                </div>
              </div>
              <motion.a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "6px 12px",
                  borderRadius: "7px",
                  background: "rgba(110,118,129,0.1)",
                  border: "1px solid rgba(110,118,129,0.25)",
                  color: "#94a3b8",
                  fontSize: 11,
                  fontFamily: "var(--font-jetbrains-mono)",
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={12} />
                Profile
              </motion.a>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {[
                { label: "Repositories", value: user.public_repos },
                { label: "Followers", value: user.followers },
                { label: "Following", value: user.following },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "rgba(0,195,255,0.04)",
                    border: "1px solid rgba(0,195,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#00c3ff",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: "#475569",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: "28px" }}
          >
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-jetbrains-mono)",
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Code2 size={14} />
              Language Distribution
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {langEntries.map(([lang, count]) => {
                const pct = Math.round((count / totalLangCount) * 100);
                const color = getLanguageColor(lang);
                return (
                  <div key={lang}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "4px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: color,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 12,
                            fontFamily: "var(--font-jetbrains-mono)",
                            color: "#94a3b8",
                          }}
                        >
                          {lang}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: 11,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#475569",
                        }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: "4px",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,0.05)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        style={{
                          height: "100%",
                          background: color,
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Repository explorer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
          className="github-bottom-grid"
        >
          {/* Repo list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "#070d1f",
              border: "1px solid rgba(0,195,255,0.12)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Terminal header */}
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
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ marginLeft: 6, fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}>
                $ ls -la ~/repos
              </span>
            </div>

            {/* Repo list */}
            <div style={{ padding: "8px" }}>
              {repos.slice(0, 6).map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelectedRepo(selectedRepo?.id === repo.id ? null : repo)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background:
                      selectedRepo?.id === repo.id
                        ? "rgba(0,195,255,0.06)"
                        : "transparent",
                    border:
                      selectedRepo?.id === repo.id
                        ? "1px solid rgba(0,195,255,0.15)"
                        : "1px solid transparent",
                    marginBottom: "4px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedRepo?.id !== repo.id) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedRepo?.id !== repo.id) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {repo.language && (
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: getLanguageColor(repo.language),
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <span
                        style={{
                          fontSize: 13,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#94a3b8",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "180px",
                        }}
                      >
                        {repo.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#475569", fontSize: 11, fontFamily: "var(--font-jetbrains-mono)" }}>
                        <Star size={10} />
                        {repo.stargazers_count}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#475569", fontSize: 11, fontFamily: "var(--font-jetbrains-mono)" }}>
                        <GitFork size={10} />
                        {repo.forks_count}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Selected repo details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              background: "#070d1f",
              border: "1px solid rgba(0,195,255,0.12)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
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
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ marginLeft: 6, fontSize: 11, fontFamily: "var(--font-jetbrains-mono)", color: "#475569" }}>
                $ cat README.md
              </span>
            </div>

            <div style={{ padding: "20px" }}>
              {selectedRepo ? (
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#00c3ff",
                      marginBottom: "8px",
                    }}
                  >
                    {selectedRepo.name}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#94a3b8",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {selectedRepo.description || "No description available."}
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {selectedRepo.topics?.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: 10,
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: "#00c3ff",
                          background: "rgba(0,195,255,0.08)",
                          border: "1px solid rgba(0,195,255,0.2)",
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={selectedRepo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "16px",
                      padding: "7px 14px",
                      borderRadius: "7px",
                      background: "rgba(0,195,255,0.08)",
                      border: "1px solid rgba(0,195,255,0.2)",
                      color: "#00c3ff",
                      fontSize: 12,
                      fontFamily: "var(--font-jetbrains-mono)",
                      textDecoration: "none",
                    }}
                  >
                    <GitFork size={13} />
                    View on GitHub
                    <ExternalLink size={11} />
                  </a>
                </div>
              ) : (
                <div
                  style={{
                    color: "#334155",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: 13,
                    padding: "20px 0",
                  }}
                >
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ color: "#22c55e" }}>$</span>{" "}
                    <span style={{ color: "#475569" }}>Select a repository to explore...</span>
                  </div>
                  <div style={{ color: "#1e293b", fontSize: 12 }}>
                    {"// Click any repo from the list"}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .github-top-grid, .github-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
