import { ChevronLeft, ChevronRight, Maximize2, StickyNote } from 'lucide-react'
import { useEffect, useState } from 'react'

const pad = (value: number) => String(value).padStart(2, '0')

const clock = (seconds: number) =>
  `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`

type HudProps = {
  index: number
  total: number
  section: string
  presenter: string
  elapsed: number
  notesOpen: boolean
  onPrev: () => void
  onNext: () => void
  onToggleNotes: () => void
  onResetTimer: () => void
}

export function Hud({
  index,
  total,
  section,
  presenter,
  elapsed,
  notesOpen,
  onPrev,
  onNext,
  onToggleNotes,
  onResetTimer,
}: HudProps) {
  const progress = ((index + 1) / total) * 100
  const timerClass =
    elapsed >= 600 ? 'timer timer--over' : elapsed >= 540 ? 'timer timer--warn' : 'timer'

  const [active, setActive] = useState(true)

  useEffect(() => {
    let timer = 0

    const wake = () => {
      setActive(true)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setActive(false), 2600)
    }

    window.addEventListener('mousemove', wake)
    wake()

    return () => {
      window.removeEventListener('mousemove', wake)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div className="hud">
      <div className="hud__progress">
        <i style={{ width: `${progress}%` }} />
      </div>

      <div className={`hud__bar${active ? ' is-visible' : ''}`}>
        <div className="hud__info">
          <b>{presenter}</b>
          <span>·</span>
          <span>{section}</span>
          <span>·</span>
          <span>
            {pad(index + 1)} / {pad(total)}
          </span>
        </div>

        <div className="hud__controls">
          <button
            type="button"
            className={timerClass}
            title="Click to reset the timer (R)"
            onClick={onResetTimer}
          >
            {clock(elapsed)}
          </button>

          <button
            type="button"
            className={`btn${notesOpen ? ' btn--on' : ''}`}
            title="Presenter notes (N)"
            onClick={onToggleNotes}
          >
            <StickyNote size={14} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            className="btn"
            title="Fullscreen (F)"
            onClick={() => {
              if (!document.fullscreenElement) {
                void document.documentElement.requestFullscreen().catch(() => undefined)
                return
              }
              void document.exitFullscreen().catch(() => undefined)
            }}
          >
            <Maximize2 size={14} strokeWidth={1.7} />
          </button>

          <button type="button" className="btn" title="Previous (←)" onClick={onPrev}>
            <ChevronLeft size={17} strokeWidth={1.7} />
          </button>

          <button type="button" className="btn" title="Next (→)" onClick={onNext}>
            <ChevronRight size={17} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </div>
  )
}
