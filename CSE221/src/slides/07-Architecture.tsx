import { Boxes, ChevronRight, Cog, HardDrive, Monitor } from 'lucide-react'
import { Fragment } from 'react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { LAYERS } from '../data/architecture'

const ICONS = [Monitor, Cog, Boxes, HardDrive]

export default function ArchitectureSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Architecture</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          Four layers, <i>one loop.</i>
        </h2>
      </Reveal>

      <div className="arch-wrap">
        <div className="arch2">
          {LAYERS.map((layer, index) => {
            const Icon = ICONS[index]
            return (
              <Fragment key={layer.key}>
                <Reveal delay={0.22 + index * 0.09} y={16} className="arch2__col">
                  <span className="arch2__i">0{index + 1}</span>
                  <div className="arch2__head">
                    <Icon size={19} strokeWidth={1.6} />
                    <span className="arch2__name">{layer.key}</span>
                  </div>
                  <ul className="arch2__list">
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>

                {index < LAYERS.length - 1 && (
                  <div className="arch2__sep">
                    <ChevronRight size={16} strokeWidth={1.5} />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>

        <Reveal delay={0.6} y={8}>
          <p className="hint">
            Calls flow down · data flows back up — no layer skips the one below it.
          </p>
        </Reveal>
      </div>
    </SlideShell>
  )
}
