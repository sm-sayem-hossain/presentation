import { BloodMatrix } from '../components/BloodMatrix'
import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

export default function MatchingSlide() {
  return (
    <SlideShell className="s-match">
      <Reveal delay={0.04} y={14} className="s-match__head">
        <p className="label">Core logic</p>
        <h2 className="s-match__title">
          Compatibility,
          <br />
          <i>then</i> recovery.
        </h2>
      </Reveal>

      <div className="s-match__grid">
        <div className="matrix-block">
          <BloodMatrix />
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat__n">
              27<span>/64</span>
            </div>
            <div className="stat__l">donor → recipient pairs pass ABO and Rh rules</div>
          </div>

          <div className="stat">
            <div className="stat__n">
              90<span>days</span>
            </div>
            <div className="stat__l">minimum rest before a donor can be alerted again</div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
