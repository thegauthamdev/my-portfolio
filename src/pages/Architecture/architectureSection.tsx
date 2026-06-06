import { C } from "../../constants/designToken";
import { Icon } from "../../constants/icons";
import { useReveal } from "../../hooks/intersectionObserver";

export function ArchitectureSection() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="architecture" ref={ref} className={`section-reveal ${visible ? "visible" : ""}`} style={{
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span className="section-label">System Architecture</span>
        </div>
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: C.granite }}>AI Meeting Notetaker – High Level Architecture</p>
        </div>

        <ArchDiagram />

        <div style={{ marginTop: 24 }}>
          <button className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px" }}>
            View All Architectures <Icon.ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArchDiagram() {
  const nodes = [
    { id: "meeting", label: "Webex / Zoom\nMeeting", x: 30, y: 80 },
    { id: "bot", label: "Meeting Bot", x: 160, y: 80 },
    { id: "transcribe", label: "Transcription\nService", x: 290, y: 80 },
    { id: "llm", label: "LLM Processing", x: 420, y: 80 },
    { id: "summary", label: "Summary &\nAction Items", x: 420, y: 200 },
    { id: "tasks", label: "Task\nManagement", x: 290, y: 200 },
    { id: "dashboard", label: "User\nDashboard", x: 160, y: 200 },
  ];

  const edges = [
    { x1: 100, y1: 95, x2: 160, y2: 95 },
    { x1: 230, y1: 95, x2: 290, y2: 95 },
    { x1: 360, y1: 95, x2: 420, y2: 95 },
    { x1: 475, y1: 130, x2: 475, y2: 200 },
    { x1: 420, y1: 215, x2: 360, y2: 215 },
    { x1: 290, y1: 215, x2: 230, y2: 215 },
  ];

  return (
    <div style={{
      padding: "28px 24px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8, overflow: "auto",
    }}>
      <svg width="570" height="280" viewBox="0 0 570 280" fill="none" style={{ overflow: "visible" }}>
        {/* Arrows */}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.25)" />
          </marker>
          <marker id="arrow-r" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto-start-reverse">
            <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.15)" />
          </marker>
        </defs>

        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="rgba(255,255,255,0.2)" strokeWidth="1"
            markerEnd="url(#arrow)" strokeDasharray={i >= 3 ? "4,3" : "none"} />
        ))}

        {/* Reverse arrows for return path */}
        {[
          { x1: 160, y1: 225, x2: 230, y2: 225 },
          { x1: 160, y1: 130, x2: 160, y2: 200 },
        ].map((e, i) => (
          <line key={`r-${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="rgba(255,255,255,0.12)" strokeWidth="1"
            markerEnd="url(#arrow)" strokeDasharray="3,3" />
        ))}

        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x} y={n.y - 20} width={100} height={50}
              rx="6" ry="6"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
            />
            {n.label.split("\n").map((line, li) => (
              <text
                key={li}
                x={n.x + 50} y={n.y + (li * 14) - 2}
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="10"
                fontFamily="Geist, sans-serif"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
