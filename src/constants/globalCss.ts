export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0B0B0B;
    --surface: #111111;
    --surface2: #161616;
    --border: #1E1E1E;
    --border-light: #2A2A2A;
    --granite: #6B6762;
    --ash: #BCBAB4;
    --light-gray: #D9D9D9;
    --smoke: #F5F5F5;
    --white: #FFFFFF;
    --font: 'Geist', 'Inter', sans-serif;
    --mono: 'Geist Mono', 'Fira Code', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--smoke);
    font-family: var(--font);
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection { background: rgba(255,255,255,0.15); }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  /* Grid background */
  .grid-bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* Dot grid */
  .dot-bg {
    background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  /* Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }

  .fade-up { animation: fadeUp 0.6s ease forwards; }
  .fade-in { animation: fadeIn 0.6s ease forwards; }

  .section-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .section-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Button styles */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--white);
    color: var(--bg);
    border: none;
    border-radius: 6px;
    font-family: var(--font);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: -0.01em;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn-primary:hover {
    background: var(--smoke);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(255,255,255,0.1);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: transparent;
    color: var(--smoke);
    border: 1px solid var(--border-light);
    border-radius: 6px;
    font-family: var(--font);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: -0.01em;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn-secondary:hover {
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.04);
    transform: translateY(-1px);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 3px 9px;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border-light);
    border-radius: 4px;
    font-size: 11px;
    font-family: var(--mono);
    color: var(--ash);
    letter-spacing: 0.02em;
  }

  /* Nav */
  .nav-link {
    color: var(--granite);
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 400;
    letter-spacing: -0.01em;
    transition: color 0.2s;
    position: relative;
    padding-bottom: 2px;
  }
  .nav-link:hover, .nav-link.active { color: var(--smoke); }
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: var(--white);
    border-radius: 50%;
  }

  /* Section label */
  .section-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--granite);
    font-family: var(--mono);
  }

  /* Scrollbar hidden */
  .no-scroll::-webkit-scrollbar { display: none; }
  .no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;