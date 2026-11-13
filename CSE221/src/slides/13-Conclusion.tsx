import { Boxes, GitBranch, ShieldCheck } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

const CLAIMS = [
  { text: 'Matching is a rule engine, not a group chat.', Icon: GitBranch },
  { text: 'Donor safety is enforced by the system.', Icon: ShieldCheck },
  { text: 'One class hierarchy carries the whole design.', Icon: Boxes },
]

export default function ConclusionSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Conclusion</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline headline--wide">
          Compatible. Rested. <i>Contacted.</i>
        </h2>
      </Reveal>

      <div className="body-block">
        <div className="claims">
          {CLAIMS.map((claim, index) => (
            <Reveal key={claim.text} delay={0.24 + index * 0.09} y={16}>
              <div className="claim">
                <span className="claim__i">0{index + 1}</span>
                <span className="claim__ico">
                  <claim.Icon size={19} strokeWidth={1.5} />
                </span>
                <span className="claim__t">{claim.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.52} y={10}>
          <p className="hint">Next — connect the Swing screens to the persistence layer.</p>
        </Reveal>
      </div>
    </SlideShell>
  )
}
