import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { WORK } from '../data/work'

export default function WorkDistributionSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Work distribution</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          Three people, <i>three systems.</i>
        </h2>
      </Reveal>

      <div className="work2">
        {WORK.map((member, index) => (
          <Reveal key={member.name} delay={0.24 + index * 0.09} y={14}>
            <div className="work2__row">
              <span className="work2__i">0{index + 1}</span>

              <div>
                <div className="work2__name">{member.name}</div>
                <div className="work2__role">{member.role}</div>
              </div>

              <ul className="work2__items">
                {member.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}
