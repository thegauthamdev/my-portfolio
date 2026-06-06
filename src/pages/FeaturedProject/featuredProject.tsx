import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function FeaturedProjectSection() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="projects" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ marginBottom: 8 }}>
          <span className="section-label">Featured Project</span>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48,
          alignItems: "center",
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700,
              letterSpacing: "-0.04em", color: C.white, marginBottom: 16, lineHeight: 1.1,
            }}>
              AI Meeting Notetaker
            </h2>
            <p style={{ fontSize: 14, color: C.ash, lineHeight: 1.7, marginBottom: 28, maxWidth: 380 }}>
              An end-to-end AI system that joins meetings, transcribes conversations, generates structured summaries and action items, and creates tasks automatically.
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {["Python", "React", "AI Models", "Webex API", "LLM", "Automation"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-secondary">View Case Study <Icon.ExternalLink /></button>
              <button className="btn-secondary">View Architecture <Icon.ChevronRight /></button>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div style={{
      borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden", background: "#0e0e0e",
      boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
    }}>
      {/* Window chrome */}
      <div style={{
        padding: "10px 14px",
        background: "#121212",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#ffbd2e","#28ca41"].map((c,i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: C.granite, fontFamily: "var(--mono)" }}>G.</span>
          <span style={{ fontSize: 10, color: C.granite }}>Meeting Notetaker</span>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 9, color: "#4ADE80", fontFamily: "var(--mono)" }}>AI Confidence</span>
          <div style={{
            padding: "2px 6px", background: "rgba(74,222,128,0.1)",
            border: "1px solid rgba(74,222,128,0.3)", borderRadius: 3,
            fontSize: 9, color: "#4ADE80", fontFamily: "var(--mono)",
          }}>94%</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr" }}>
        {/* Sidebar */}
        <div style={{ padding: "14px 0", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          {[
            { icon: "◎", label: "Overview", active: false },
            { icon: "☐", label: "Meetings", active: false },
            { icon: "≡", label: "Summaries", active: false },
            { icon: "+", label: "Tasks", active: true },
            { icon: "⚙", label: "Settings", active: false },
          ].map((item) => (
            <div key={item.label} style={{
              padding: "7px 14px", display: "flex", alignItems: "center", gap: 8,
              background: item.active ? "rgba(255,255,255,0.05)" : "transparent",
              borderLeft: item.active ? "2px solid rgba(255,255,255,0.3)" : "2px solid transparent",
            }}>
              <span style={{ fontSize: 11, color: item.active ? C.smoke : C.granite, lineHeight: 1 }}>{item.icon}</span>
              <span style={{ fontSize: 11, color: item.active ? C.smoke : C.granite }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ padding: 14 }}>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.smoke, marginBottom: 2 }}>Meeting Summary</div>
            <div style={{ fontSize: 10, color: C.granite }}>Q1 Product Roadmap Discussion</div>
            <div style={{ fontSize: 9, color: C.granite, marginBottom: 10, opacity: 0.7 }}>May 20, 2024 · 45 min · 6 Participants</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {/* Summary */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 500, color: C.ash, marginBottom: 6 }}>Executive Summary</div>
              {[80, 65, 90, 55, 70].map((w, i) => (
                <div key={i} style={{
                  height: 6, marginBottom: 4, borderRadius: 3,
                  background: "rgba(255,255,255,0.07)",
                  width: `${w}%`,
                }} />
              ))}
            </div>

            {/* Action items */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 500, color: C.ash, marginBottom: 6 }}>Action Items</div>
              {[
                { text: "Design system updates", assign: "@gowtham", done: true },
                { text: "API rate limiting", assign: "@backend-team", done: false },
                { text: "User flow improvements", assign: "@product-team", done: false },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", flexDirection: "column", gap: 1, marginBottom: 7,
                  padding: "6px 8px",
                  background: "rgba(255,255,255,0.03)", borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: "50%",
                      border: `1.5px solid ${item.done ? "#4ADE80" : "rgba(255,255,255,0.2)"}`,
                      background: item.done ? "rgba(74,222,128,0.15)" : "transparent",
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 10, color: C.smoke }}>{item.text}</span>
                  </div>
                  <span style={{ fontSize: 9, color: C.granite, marginLeft: 17, fontFamily: "var(--mono)" }}>{item.assign}</span>
                </div>
              ))}
              <button style={{
                width: "100%", padding: "5px 0", fontSize: 9,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                color: C.granite, borderRadius: 4, cursor: "pointer", fontFamily: "var(--font)",
              }}>View All Tasks</button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 6, padding: "10px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        {[0,1,2,3].map((i) => (
          <div key={i} style={{
            width: i === 0 ? 20 : 6, height: 6, borderRadius: 3,
            background: i === 0 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)",
            transition: "width 0.2s",
          }} />
        ))}
      </div>
    </div>
  );
}