import { Coffee, Database, Monitor, Terminal } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { TOOLS } from '../data/tools'

const ICONS = [Monitor, Coffee, Database, Terminal]

export default function ToolsSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Tools</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          Built on <i>plain Java.</i>
        </h2>
      </Reveal>

      <div className="tools">
        {TOOLS.map((tool, index) => {
          const Icon = ICONS[index]
          return (
            <Reveal key={tool.key} delay={0.24 + index * 0.08} y={14}>
              <div className="tool">
                <span className="tool__k">
                  <Icon size={16} strokeWidth={1.5} />
                  {tool.key}
                </span>
                <span className="tool__v">{tool.value}</span>
                <span className="tool__d">{tool.detail}</span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SlideShell>
  )
}
