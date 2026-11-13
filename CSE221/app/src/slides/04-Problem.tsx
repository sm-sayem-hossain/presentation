import { CalendarX, Droplet, Phone } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

const PROBLEMS = [
  { title: 'Blood is found through phone calls', meta: 'hours lost', Icon: Phone },
  { title: 'Nobody checks ABO or Rh first', meta: 'wrong donor', Icon: Droplet },
  { title: 'The 90-day rest period is forgotten', meta: 'donor risk', Icon: CalendarX },
]

export default function ProblemSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Problem</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline headline--wide">
          In an emergency, blood is still found
          <br />
          <i>by asking around.</i>
        </h2>
      </Reveal>

      <div className="rows">
        {PROBLEMS.map((problem, index) => (
          <Reveal key={problem.title} delay={0.24 + index * 0.09} y={16}>
            <div className="rows__row">
              <span className="rows__i">0{index + 1}</span>
              <span className="rows__ico">
                <problem.Icon size={20} strokeWidth={1.5} />
              </span>
              <span className="rows__t">{problem.title}</span>
              <span className="rows__m">{problem.meta}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}
