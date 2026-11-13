const RINGS = [110, 165, 220]

const DONORS = [
  { group: 'O−', ring: 0, angle: -90, compatible: true },
  { group: 'O+', ring: 1, angle: -45, compatible: true },
  { group: 'A−', ring: 2, angle: 0, compatible: true },
  { group: 'A+', ring: 0, angle: 45, compatible: true },
  { group: 'B−', ring: 1, angle: 90, compatible: false },
  { group: 'B+', ring: 2, angle: 135, compatible: false },
  { group: 'AB−', ring: 0, angle: 180, compatible: false },
  { group: 'AB+', ring: 1, angle: -135, compatible: false },
].map((donor) => {
  const radians = (donor.angle * Math.PI) / 180
  const radius = RINGS[donor.ring]

  return {
    ...donor,
    x: 260 + radius * Math.cos(radians),
    y: 260 + radius * Math.sin(radians),
  }
})

export function MatchMark() {
  return (
    <svg viewBox="0 0 520 520" aria-hidden="true">
      <defs>
        <radialGradient id="mark-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(226,87,76,0.10)" />
          <stop offset="100%" stopColor="rgba(226,87,76,0)" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="260" r="150" fill="url(#mark-glow)" />

      {RINGS.map((radius) => (
        <circle
          key={radius}
          cx="260"
          cy="260"
          r={radius}
          fill="none"
          stroke="rgba(23,18,20,0.13)"
          strokeDasharray="2 7"
        />
      ))}

      {DONORS.filter((donor) => donor.compatible).map((donor) => (
        <line
          key={`link-${donor.group}`}
          x1="260"
          y1="260"
          x2={donor.x}
          y2={donor.y}
          stroke="rgba(226,87,76,0.42)"
          strokeWidth="1.2"
          strokeDasharray="4 7"
        />
      ))}

      <circle
        cx="260"
        cy="260"
        r="62"
        fill="rgba(226,87,76,0.08)"
        stroke="rgba(226,87,76,0.55)"
        strokeWidth="1.2"
      />

      <path
        d="M260 232 C282 252 282 276 260 282 C238 276 238 252 260 232 Z"
        fill="rgba(226,87,76,0.28)"
        stroke="var(--accent)"
        strokeWidth="1.3"
      />

      {DONORS.map((donor) => (
        <g key={donor.group}>
          {donor.compatible && (
            <circle
              cx={donor.x}
              cy={donor.y}
              r="12"
              fill="rgba(226,87,76,0.12)"
              stroke="rgba(226,87,76,0.35)"
            />
          )}
          <circle
            cx={donor.x}
            cy={donor.y}
            r={donor.compatible ? 5 : 3.5}
            fill={donor.compatible ? 'var(--accent)' : 'rgba(23,18,20,0.32)'}
          />
          <text
            x={donor.x}
            y={donor.y + 26}
            textAnchor="middle"
            fontFamily="var(--mono)"
            fontSize="11"
            letterSpacing="1"
            fill={
              donor.compatible ? 'rgba(23,18,20,0.72)' : 'rgba(23,18,20,0.34)'
            }
          >
            {donor.group}
          </text>
        </g>
      ))}
    </svg>
  )
}
