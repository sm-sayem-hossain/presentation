import { HardDrive, ShieldCheck, Zap } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { MotivationSVG } from '../components/MotivationSVG'

const OBJECTIVES = [
  {
    title: 'Instant matching',
    detail: 'Compatible donors in the same district, first.',
    Icon: Zap,
  },
  {
    title: 'Medical rules first',
    detail: 'ABO, Rh and the 90-day rest period are code — not advice.',
    Icon: ShieldCheck,
  },
  {
    title: 'Local ownership',
    detail: 'No server, no cloud. Binary files on the machine.',
    Icon: HardDrive,
  },
]

export default function MotivationSlide() {
  return (
    <SlideShell className="sheet mot-slide">

      {/* ── top: title full width ── */}
      <div className="mot-top">
        <Reveal delay={0.04} y={14}>
          <p className="label">Motivation &amp; objective</p>
        </Reveal>
        <Reveal delay={0.1} y={26}>
          <h2 className="headline headline--wide">
            Save the search. <i>Spend it on the patient.</i>
          </h2>
        </Reveal>
        <Reveal delay={0.2} y={14}>
          <p className="sub">
            Every minute spent confirming a donor is a minute lost from care.
          </p>
        </Reveal>
      </div>

      {/* ── bottom: left SVG + right objectives ── */}
      <div className="mot-body">
        <Reveal delay={0.25} y={20} className="mot-svg-wrap">
          <MotivationSVG />
        </Reveal>

        <div className="mot-objs">
          {OBJECTIVES.map((obj, i) => (
            <Reveal key={obj.title} delay={0.32 + i * 0.1} y={16}>
              <div className="objective">
                <span className="objective__i">0{i + 1}</span>
                <span className="objective__ico">
                  <obj.Icon size={22} strokeWidth={1.4} />
                </span>
                <div className="objective__t">{obj.title}</div>
                <div className="objective__d">{obj.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </SlideShell>
  )
}
