import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function ExperienceSection() {
  const [ref, visible] = useReveal(0.1);
  const bullets = [
    "Built and maintained scalable backend services using Java, Spring Boot and REST APIs.",
    "Integrated GitLab, Jenkins, Jira and external systems to automate SDLC workflows.",
    "Developed AI-powered tools to enhance developer productivity and automate manual tasks.",
    "Designed secure authentication, role-based access and multi-tenant architecture.",
  ];
  const tags = ["Java","Spring Boot","Python","React","PostgreSQL","Docker","GitLab","Jenkins","AWS"];

  return (
    <section id="experience" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <span className="section-label">Experience</span>
          <button className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px" }}>
            View All Experience <Icon.ArrowRight />
          </button>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          {/* Timeline marker */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4, flexShrink: 0 }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.4)", background: C.bg,
            }} />
            <div style={{ width: 1, height: 120, background: "rgba(255,255,255,0.07)", marginTop: 6 }} />
          </div>

          {/* Date */}
          <div style={{ width: 130, flexShrink: 0, paddingTop: 2 }}>
            <div style={{ fontSize: 12, color: C.granite, fontFamily: "var(--mono)" }}>Sep 2023 – Present</div>
          </div>

          {/* Company icon */}
          <div style={{
            width: 40, height: 40, borderRadius: 8, flexShrink: 0,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon.Layers />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 14 }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: C.white, letterSpacing: "-0.02em", marginBottom: 3 }}>
                Software Development Engineer
              </h3>
              <div style={{ fontSize: 13, color: C.granite }}>LTIMindtree</div>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: C.granite, marginTop: 2, flexShrink: 0, fontSize: 14 }}>·</span>
                  <span style={{ fontSize: 13.5, color: C.ash, lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}