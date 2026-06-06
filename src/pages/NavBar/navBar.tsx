import { useEffect, useState } from "react";
import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";

export function Navbar({ active }: any) {
  const [scrolled, setScrolled] = useState(false);
  const links = ["home", "experience", "projects", "architecture", "skills", "roadmap", "contact"];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(11,11,11,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
      height: 56,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%",
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{
            fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.04em",
            fontFamily: "var(--font)",
          }}>G.</span>
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(l => (
            <a key={l} href={`#${l}`} className={`nav-link ${active === l ? "active" : ""}`}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>

        {/* Resume button */}
        {/* <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="btn-secondary" style={{ padding: "7px 16px", fontSize: 12 }} onClick={downloadResume}>
            Resume <Icon.Download />
          </button>
        </div> */}

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/Gowtham SD resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Resume
            <Icon.Download />
          </a>
        </div>
      </div>
    </nav>
  );
}