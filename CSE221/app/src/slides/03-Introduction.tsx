import { FlowDiagram } from '../components/FlowDiagram'
import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

const DEFS = [
  { k: 'What', t: 'A desktop blood network', d: 'donor · recipient · admin' },
  { k: 'How', t: 'Compatibility first', d: 'ABO / Rh + 90-day rest' },
  { k: 'Where', t: 'Entirely local', d: 'binary .dat files, no server' },
]

export default function IntroductionSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Introduction</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          A blood network that already knows <i>who to call.</i>
        </h2>
      </Reveal>

      <div className="split">
        <Reveal delay={0.22} y={18}>
          <div>
            <p className="sub">
              RedGrid connects an emergency request to donors who can safely give — in the
              same district, in the same minute.
            </p>
            <FlowDiagram />
          </div>
        </Reveal>

        <div className="defs">
          {DEFS.map((def, index) => (
            <Reveal key={def.k} delay={0.3 + index * 0.08} y={14}>
              <div className="def">
                <span className="def__k">{def.k}</span>
                <div>
                  <div className="def__t">{def.t}</div>
                  <div className="def__d">{def.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
