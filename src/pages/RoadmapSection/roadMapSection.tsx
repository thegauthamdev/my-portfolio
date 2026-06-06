import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function RoadmapSection() {
  const [ref, visible] = useReveal(0.1);

  const items = [
    { label: "Data Structures & Algorithms", pct: 70 },
    { label: "Operating Systems", pct: 65 },
    { label: "Computer Networks", pct: 60 },
    { label: "System Design", pct: 55 },
    { label: "Distributed Systems", pct: 45 },
    { label: "AI Engineering", pct: 60 },
  ];

  return (
    <section id="roadmap" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span className="section-label">Engineering Growth Roadmap</span>
        </div>
        <p style={{ fontSize: 13, color: C.granite, marginBottom: 32 }}>Continuously learning. Continuously improving.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 500 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-16px)",
              transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: C.ash }}>{item.label}</span>
                <span style={{ fontSize: 11, color: C.granite, fontFamily: "var(--mono)" }}>{item.pct}%</span>
              </div>
              <div style={{
                height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 2,
                  background: "rgba(255,255,255,0.5)",
                  width: visible ? `${item.pct}%` : "0%",
                  transition: `width 0.8s ease ${0.3 + i * 0.1}s`,
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <button className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px" }}>
            View Roadmap <Icon.ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}