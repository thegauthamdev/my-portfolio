import { useEffect, useState } from "react";
import { Icon } from "../../constants/icons";
import { C } from "../../constants/designToken";
// import { ArchViz } from "../ArchViz/archViz";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  const metrics = [
    { icon: <Icon.TrendingUp />, val: "1.5+", label: "Years Experience" },
    { icon: <Icon.Box />, val: "6+", label: "Production Systems" },
    { icon: <Icon.Cpu />, val: "AI-Powered", label: "Solutions" },
    { icon: <Icon.Zap />, val: "Automation", label: "First Mindset" },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Gowtham SD resume.pdf";
    link.download = "Gowtham_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: 80,
    }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      {/* Vertical label */}
      <div style={{
        position: "absolute", left: 24, top: "50%", transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center",
        fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
        color: C.granite, fontFamily: "var(--mono)", opacity: 0.6,
        whiteSpace: "nowrap",
      }}>
        Available for Opportunities
      </div>

      {/* Status dot */}
      <div style={{
        position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{
          width: 7, height: 7, borderRadius: "50%", background: "#4ADE80",
          animation: "pulse-dot 2s ease-in-out infinite",
          boxShadow: "0 0 8px rgba(74,222,128,0.5)",
        }} />
      </div>

      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 60px",
        display: "grid", gridTemplateColumns: "340px 1fr", gap: 60,
        alignItems: "center", width: "100%",
      }}>
        {/* LEFT: Profile image */}
        <div style={{
          opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <div style={{
            position: "relative", width: 320, height: 420,
            borderRadius: 12, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {/* Placeholder profile — premium gradient stand-in */}
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(160deg, #1a1a1a 0%, #141414 40%, #0f0f0f 100%)",
              display: "flex", alignItems: "flex-end", justifyContent: "center",
              position: "relative",
            }}>
              {/* Silhouette placeholder */}
              <svg viewBox="0 0 320 420" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2a2a2a"/>
                    <stop offset="100%" stopColor="#181818"/>
                  </linearGradient>
                </defs>
                {/* Body silhouette */}
                <ellipse cx="160" cy="160" rx="55" ry="55" fill="#252525"/>
                <path d="M60 420 Q80 280 160 280 Q240 280 260 420" fill="#1e1e1e"/>
                <text x="160" y="380" textAnchor="middle" fill="#2e2e2e" fontSize="11" fontFamily="Geist, sans-serif" letterSpacing="2">
                  GOWTHAM
                </text>
              </svg>

              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                background: "linear-gradient(to top, rgba(11,11,11,0.8), transparent)",
              }} />
            </div>

            {/* Hover shimmer */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
              borderRadius: 12,
            }} />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div style={{ position: "relative" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
            padding: "5px 14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.ash }} />
            <span style={{
              fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
              color: C.ash, fontFamily: "var(--mono)", fontWeight: 500,
            }}>
              Software Development Engineer | AI Engineer
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(52px, 6vw, 72px)", fontWeight: 700,
            letterSpacing: "-0.04em", lineHeight: 1.0,
            color: C.white, marginBottom: 20,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}>
            Gowtham
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 15, lineHeight: 1.6, color: C.ash,
            maxWidth: 400, marginBottom: 28, letterSpacing: "-0.01em",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}>
            Building scalable backend systems and AI-powered applications that automate real-world workflows and drive impact.
          </p>

          {/* Metrics */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ color: C.granite, marginBottom: 4 }}>{m.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.03em" }}>{m.val}</div>
                <div style={{ fontSize: 11, color: C.granite, letterSpacing: "-0.01em" }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{
            display: "flex", gap: 10, flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          }}>
            <button className="btn-primary" onClick={downloadResume}><Icon.Download /> Download Resume</button>
            <button className="btn-secondary"><Icon.Code /> Case Studies</button>
            <button className="btn-secondary"><Icon.GitHub /> GitHub</button>
            <button className="btn-secondary"><Icon.LinkedIn /> LinkedIn</button>
          </div>

          {/* Architecture visualization */}
          {/* <div style={{
            position: "absolute", right: -20, top: -20,
            opacity: mounted ? 0.9 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}>
            <ArchViz />
          </div> */}
        </div>
      </div>
    </section>
  );
}