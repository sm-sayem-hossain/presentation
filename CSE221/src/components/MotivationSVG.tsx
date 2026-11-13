/* Motivation slide — left SVG, right vertical objectives */

export function MotivationSVG() {
  const donors = [
    { x: 80,  y: 90,  ok: true },
    { x: 55,  y: 220, ok: false },
    { x: 72,  y: 350, ok: true },
    { x: 80,  y: 470, ok: false },
  ]
  const recipients = [
    { x: 400, y: 140, ok: true },
    { x: 400, y: 280, ok: false },
    { x: 400, y: 420, ok: true },
  ]
  const cx = 228
  const cy = 280

  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      aria-hidden="true"
      className="mot-svg-el"
    >
      {/* ── outer ring ── */}
      <circle cx={cx} cy={cy} r={130} stroke="rgba(23,18,20,0.07)" strokeWidth={1} strokeDasharray="3 8" />
      <circle cx={cx} cy={cy} r={88}  stroke="rgba(23,18,20,0.10)" strokeWidth={1} strokeDasharray="2 6" />

      {/* ── donor → center lines (compatible = accent, else dim) ── */}
      {donors.map((d, i) =>
        d.ok ? (
          <line
            key={`dl-${i}`}
            x1={d.x + 10} y1={d.y}
            x2={cx - 88}  y2={cy}
            stroke="rgba(226,87,76,0.30)"
            strokeWidth={1}
            strokeDasharray="4 6"
          />
        ) : (
          <line
            key={`dl-${i}`}
            x1={d.x + 10} y1={d.y}
            x2={cx - 88}  y2={cy}
            stroke="rgba(23,18,20,0.10)"
            strokeWidth={1}
            strokeDasharray="2 8"
          />
        )
      )}

      {/* ── center → recipient lines ── */}
      {recipients.map((r, i) =>
        r.ok ? (
          <line
            key={`rl-${i}`}
            x1={cx + 88} y1={cy}
            x2={r.x - 10} y2={r.y}
            stroke="rgba(226,87,76,0.30)"
            strokeWidth={1}
            strokeDasharray="4 6"
          />
        ) : (
          <line
            key={`rl-${i}`}
            x1={cx + 88} y1={cy}
            x2={r.x - 10} y2={r.y}
            stroke="rgba(23,18,20,0.10)"
            strokeWidth={1}
            strokeDasharray="2 8"
          />
        )
      )}

      {/* ── donor nodes ── */}
      {donors.map((d, i) => (
        <g key={`d-${i}`}>
          <circle
            cx={d.x} cy={d.y} r={18}
            fill={d.ok ? 'rgba(226,87,76,0.10)' : 'var(--bg-soft)'}
            stroke={d.ok ? 'var(--accent)' : 'rgba(23,18,20,0.20)'}
            strokeWidth={1}
          />
          <text x={d.x} y={d.y + 4} textAnchor="middle"
            fontFamily="var(--mono)" fontSize={11} fill={d.ok ? 'var(--accent)' : 'rgba(23,18,20,0.35)'}>
            {d.ok ? 'D+' : 'D−'}
          </text>
        </g>
      ))}

      {/* ── recipient nodes ── */}
      {recipients.map((r, i) => (
        <g key={`r-${i}`}>
          <circle
            cx={r.x} cy={r.y} r={16}
            fill={r.ok ? 'rgba(226,87,76,0.08)' : 'var(--bg-soft)'}
            stroke={r.ok ? 'var(--accent)' : 'rgba(23,18,20,0.18)'}
            strokeWidth={1}
          />
          <text x={r.x} y={r.y + 4} textAnchor="middle"
            fontFamily="var(--mono)" fontSize={11} fill={r.ok ? 'var(--accent)' : 'rgba(23,18,20,0.35)'}>
            {r.ok ? 'R+' : 'R−'}
          </text>
        </g>
      ))}

      {/* ── center engine circle ── */}
      <circle cx={cx} cy={cy} r={54} fill="rgba(226,87,76,0.07)" stroke="var(--accent)" strokeWidth={1.2} />
      <circle cx={cx} cy={cy} r={6}  fill="var(--accent)" />

      {/* blood drop path inside center */}
      <path
        d={`M${cx} ${cy - 30} C${cx + 22} ${cy - 10} ${cx + 22} ${cy + 14} ${cx} ${cy + 20} C${cx - 22} ${cy + 14} ${cx - 22} ${cy - 10} ${cx} ${cy - 30}Z`}
        fill="rgba(226,87,76,0.22)"
        stroke="var(--accent)"
        strokeWidth={1}
      />

      {/* labels */}
      <text x={40} y={528} fontFamily="var(--mono)" fontSize={13} letterSpacing={2} fill="rgba(23,18,20,0.30)">DONORS</text>
      <text x={340} y={528} fontFamily="var(--mono)" fontSize={13} letterSpacing={2} fill="rgba(23,18,20,0.30)">RECIPIENTS</text>
      <text x={cx} y={528} textAnchor="middle" fontFamily="var(--mono)" fontSize={13} letterSpacing={2} fill="rgba(226,87,76,0.6)">ENGINE</text>
    </svg>
  )
}

