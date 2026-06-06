import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "20px 60px",
      maxWidth: "100%",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.white }}>G.</span>

        <span style={{ fontSize: 11, color: C.granite }}>
          © 2024 Gowtham. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {[
            { icon: <Icon.GitHub />, label: "GitHub" },
            { icon: <Icon.LinkedIn />, label: "LinkedIn" },
            { icon: <Icon.Email />, label: "Email" },
          ].map((item) => (
            <button key={item.label} style={{
              background: "none", border: "none", color: C.granite,
              cursor: "pointer", transition: "color 0.2s",
              padding: 0, display: "flex", alignItems: "center",
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.smoke}
              onMouseLeave={e => e.currentTarget.style.color = C.granite}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 36, height: 36, borderRadius: "50%",
            background: C.white, border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.bg, transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
