import {
  BellRing,
  CalendarClock,
  Database,
  GitBranch,
  KeyRound,
  LayoutDashboard,
  Siren,
} from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { FEATURES } from '../data/features'

const ICONS = [
  KeyRound,
  CalendarClock,
  Siren,
  GitBranch,
  BellRing,
  LayoutDashboard,
  Database,
]

export default function FeaturesSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Features</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">Seven things it does.</h2>
      </Reveal>

      <div className="feats">
        {FEATURES.map((feature, index) => {
          const Icon = ICONS[index]
          return (
            <Reveal key={feature.title} delay={0.26 + index * 0.06} y={14}>
              <div className="feat">
                <span className="feat__i">0{index + 1}</span>
                <span className="feat__ico">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <div className="feat__t">{feature.title}</div>
                <div className="feat__d">{feature.detail}</div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SlideShell>
  )
}
