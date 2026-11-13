import { MatchMark } from '../components/MatchMark'
import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

export default function TitleSlide() {
  return (
    <SlideShell className="s-hero">
      <div className="s-hero__mark">
        <MatchMark />
      </div>

      <div className="s-hero__main">
        <Reveal delay={0.04} y={14}>
          <p className="label">CSE 221 · Object Oriented Programming</p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <h1 className="s-hero__title">
            RedGrid<i>.</i>
          </h1>
        </Reveal>

        <Reveal delay={0.26} y={18}>
          <p className="s-hero__sub">
            <i>Real-time</i> blood donor network
          </p>
        </Reveal>
      </div>
    </SlideShell>
  )
}
