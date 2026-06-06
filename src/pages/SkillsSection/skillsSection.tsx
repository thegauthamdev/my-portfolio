import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function SkillsSection() {
  const [ref, visible] = useReveal(0.1);

  const domains = [
    {
      title: "Backend Engineering",
      icon: <Icon.Database />,
      skills: ["Python", "Java", "Spring Boot", "REST APIs", "Auth & Security", "PostgreSQL", "Redis"],
    },
    {
      title: "AI Engineering",
      icon: <Icon.Cpu />,
      skills: ["Prompt Engineering", "LLM Integrations", "AI Workflows", "Automation", "RAG", "OpenAI API"],
    },
    {
      title: "Frontend",
      icon: <Icon.Monitor />,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "DevOps & Infra",
      icon: <Icon.GitBranch />,
      skills: ["GitLab CI/CD", "Jenkins", "Docker", "AWS", "Linux"],
    },
  ];

  return (
    <section id="skills" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <span className="section-label">Technical Expertise</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {domains.map((d, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ color: C.granite, marginBottom: 10 }}>{d.icon}</div>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: C.smoke, marginBottom: 14, letterSpacing: "-0.01em" }}>
                {d.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {d.skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering principles */}
        <div style={{ marginTop: 40 }}>
          <div style={{ marginBottom: 20 }}>
            <span className="section-label">Engineering Principles</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { icon: <Icon.Layers />, title: "Clean Architecture", desc: "Separation of concerns, modular design" },
              { icon: <Icon.Shield />, title: "Security First", desc: "Auth, RBAC, multi-tenant by design" },
              { icon: <Icon.Zap />, title: "Automation First", desc: "Build once, run everywhere, always" },
              { icon: <Icon.TrendingUp />, title: "Scalability", desc: "Systems that grow with demand" },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
              }}>
                <div style={{ color: C.granite, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: C.smoke, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 11.5, color: C.granite, lineHeight: 1.4 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}