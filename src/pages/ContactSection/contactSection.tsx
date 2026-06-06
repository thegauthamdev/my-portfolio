import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function ContactSection() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section id="contact" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0 60px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 32,
      }}>
        <div>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
            letterSpacing: "-0.04em", color: C.white, marginBottom: 8, lineHeight: 1.1,
          }}>
            Let's build something impactful together.
          </h2>
          <p style={{ fontSize: 14, color: C.granite }}>
            Have a project or opportunity in mind? Let's connect.
          </p>
        </div>

        <button className="btn-primary" style={{ fontSize: 14, padding: "12px 24px" }}>
          Get In Touch <Icon.ArrowRight />
        </button>
      </div>
    </section>
  );
}
