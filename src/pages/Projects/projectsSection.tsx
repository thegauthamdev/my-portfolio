import { useState } from "react";
import { useReveal } from "../../hooks/intersectionObserver";
import { Icon } from "../../constants/icons";
import { C } from "../../constants/designToken";

export function ProjectsSection() {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      icon: <Icon.Code />,
      title: "AI Code Reviewer",
      desc: "AI-powered MR reviewer that analyzes code diffs and provides intelligent suggestions.",
      tags: ["Python", "AI", "GitLab"],
    },
    {
      icon: <Icon.GitBranch />,
      title: "Integration Platform",
      desc: "Unified platform to integrate multiple external systems with real-time sync.",
      tags: ["Java", "REST APIs", "OAuth"],
    },
    {
      icon: <Icon.Zap />,
      title: "Build Automation",
      desc: "Automated build, test and deployment pipelines with real-time monitoring.",
      tags: ["Jenkins", "Docker", "CI/CD"],
    },
    {
      icon: <Icon.Monitor />,
      title: "Operational Dashboard",
      desc: "Real-time dashboard for monitoring builds, deployments and system health.",
      tags: ["React", "TypeScript", "WebSocket"],
    },
    {
      icon: <Icon.Database />,
      title: "Expense Tracker",
      desc: "Personal expense tracker with analytics and intelligent insights.",
      tags: ["React", "Python", "AI"],
    },
  ];

  return (
    <section ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <span className="section-label">Selected Projects</span>
          <button className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px" }}>
            View All Projects <Icon.ArrowRight />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "18px 16px",
                background: hovered === i ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered === i ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform: hovered === i ? "translateY(-2px)" : "none",
              }}
            >
              <div style={{ color: C.granite, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: 13.5, fontWeight: 600, color: C.smoke, marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 12, color: C.granite, lineHeight: 1.5, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
              </div>
              <button style={{
                display: "flex", alignItems: "center", gap: 4,
                background: "none", border: "none", color: C.granite,
                fontSize: 11, cursor: "pointer", fontFamily: "var(--font)",
                padding: 0, transition: "color 0.2s",
              }}>
                View Project <Icon.ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}