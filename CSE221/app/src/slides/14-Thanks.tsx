import { Droplet } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

export default function ThanksSlide() {
  return (
    <SlideShell className="s-thanks">
      <div className="s-thanks__mark">
        <Droplet size={420} strokeWidth={0.5} />
      </div>

      <Reveal delay={0.06} y={26}>
        <h1 className="s-thanks__t">
          Thank you<i>.</i>
        </h1>
      </Reveal>

      <Reveal delay={0.3} y={12}>
        <p className="s-thanks__b">Questions</p>
      </Reveal>
    </SlideShell>
  )
}
