import { C } from "../../constants/designToken";

export function ArchViz() {
  return (
    <div style={{
      position: "relative", width: 240, height: 240,
      pointerEvents: "none",
    }}>
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
        {/* Connecting lines */}
        <line x1="155" y1="50" x2="155" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="80" y1="115" x2="120" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="190" y1="115" x2="155" y2="115" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="155" y1="150" x2="155" y2="178" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
        {/* Dots */}
        {[
          [155,50],[155,80],[80,115],[120,115],[190,115],[155,150],[155,178]
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="rgba(255,255,255,0.2)"/>
        ))}
      </svg>

      {/* Floating nodes */}
      {[
        { label: "AI / ML\nIntelligence", top: 0, right: 0, w: 100, highlight: false },
        { label: "Backend\nSystems", top: 72, right: 12, w: 108, highlight: true },
        { label: "Automation\n& Workflows", top: 72, right: 130, w: 100, highlight: false },
        { label: "External\nIntegrations", top: 72, right: -92, w: 100, highlight: false },
        { label: "Developer\nProductivity", top: 154, right: 12, w: 108, highlight: false },
      ].map((n, i) => (
        <div key={i} style={{
          position: "absolute", top: n.top,
          right: n.right,
          width: n.w,
          padding: "6px 10px",
          background: n.highlight ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${n.highlight ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 6,
          fontSize: 10, color: n.highlight ? C.smoke : C.granite,
          fontFamily: "var(--font)", fontWeight: n.highlight ? 500 : 400,
          lineHeight: 1.4, textAlign: "center",
          letterSpacing: "-0.01em",
          whiteSpace: "pre-line",
        }}>
          {n.label}
        </div>
      ))}
    </div>
  );
}