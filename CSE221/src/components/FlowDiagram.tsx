import { BellRing, Droplet, Network } from 'lucide-react'

const STEPS = [
  { label: 'Request', Icon: Droplet },
  { label: 'Match', Icon: Network },
  { label: 'Alert', Icon: BellRing },
]

export function FlowDiagram() {
  return (
    <div className="flow">
      {STEPS.map(({ label, Icon }, index) => (
        <div className="flow__group" key={label}>
          <div className="flow__step">
            <span className="flow__ico">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <span className="flow__t">{label}</span>
          </div>
          {index < STEPS.length - 1 && <div className="flow__line" />}
        </div>
      ))}
    </div>
  )
}
