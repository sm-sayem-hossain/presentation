import { AnimatePresence, motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { DeckContext } from './DeckContext'
import { Hud } from './hud/Hud'
import { NotesPanel } from './hud/NotesPanel'
import { slides } from './registry'
import type { TransitionKind } from './types'

const STAGE_W = 1600
const STAGE_H = 900

function initialSlideIndex(total: number) {
  const raw = new URLSearchParams(window.location.search).get('slide')
  const parsed = raw ? Number.parseInt(raw, 10) : 1
  if (!Number.isFinite(parsed)) return 0
  return Math.max(0, Math.min(total - 1, parsed - 1))
}

type Custom = { direction: 1 | -1 }

const variants: Record<TransitionKind, Variants> = {
  morph: {
    enter: { opacity: 0, scale: 1.03 },
    center: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 0.995,
      transition: { duration: 0.42, ease: [0.65, 0, 0.35, 1] },
    },
  },
  push: {
    enter: (custom: Custom) => ({ opacity: 0, x: custom.direction * 90 }),
    center: { opacity: 1, x: 0 },
    exit: (custom: Custom) => ({
      opacity: 0,
      x: custom.direction * -70,
      transition: { duration: 0.42, ease: [0.65, 0, 0.35, 1] },
    }),
  },
  curtain: {
    enter: { opacity: 0, clipPath: 'inset(0% 50% 0% 50%)' },
    center: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' },
    exit: {
      opacity: 0,
      clipPath: 'inset(0% 50% 0% 50%)',
      transition: { duration: 0.46, ease: [0.76, 0, 0.24, 1] },
    },
  },
}

function useStageScale() {
  const fit = () => {
    const contain = Math.min(
      window.innerWidth / STAGE_W,
      window.innerHeight / STAGE_H,
    )
    const cover = Math.max(
      window.innerWidth / STAGE_W,
      window.innerHeight / STAGE_H,
    )
    // Fill the window without clipping more than ~7% per edge.
    return Math.min(cover, contain * 1.14)
  }
  const [scale, setScale] = useState(fit)

  useEffect(() => {
    const onResize = () => setScale(fit())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return scale
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    void document.documentElement.requestFullscreen().catch(() => undefined)
    return
  }
  void document.exitFullscreen().catch(() => undefined)
}

export function Deck() {
  const start = initialSlideIndex(slides.length)
  const [index, setIndex] = useState(start)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [notesOpen, setNotesOpen] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)

  const indexRef = useRef(start)
  const scale = useStageScale()

  const total = slides.length
  const slide = slides[index]

  const go = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(total - 1, target))
      const current = indexRef.current
      if (clamped === current) return
      setDirection(clamped > current ? 1 : -1)
      indexRef.current = clamped
      setIndex(clamped)
      setRunning(true)
    },
    [total],
  )

  const next = useCallback(() => go(indexRef.current + 1), [go])
  const prev = useCallback(() => go(indexRef.current - 1), [go])
  const toggleNotes = useCallback(() => setNotesOpen((open) => !open), [])
  const resetTimer = useCallback(() => setElapsed(0), [])

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => setElapsed((value) => value + 1), 1000)
    return () => window.clearInterval(id)
  }, [running])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          event.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault()
          prev()
          break
        case 'Home':
          event.preventDefault()
          go(0)
          break
        case 'End':
          event.preventDefault()
          go(total - 1)
          break
        case 'n':
        case 'N':
          event.preventDefault()
          toggleNotes()
          break
        case 'f':
        case 'F':
          event.preventDefault()
          toggleFullscreen()
          break
        case 'Escape':
          setNotesOpen(false)
          break
        case 'r':
        case 'R':
          setElapsed(0)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, next, prev, total, toggleNotes])

  useEffect(() => {
    let locked = false
    let acc = 0

    const onWheel = (event: WheelEvent) => {
      if (locked) return
      acc += event.deltaY
      if (Math.abs(acc) < 70) return
      locked = true
      if (acc > 0) next()
      else prev()
      acc = 0
      window.setTimeout(() => {
        locked = false
      }, 850)
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [next, prev])

  useEffect(() => {
    let startX = 0

    const onStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX
    }
    const onEnd = (event: TouchEvent) => {
      const dx = event.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 60) {
        if (dx < 0) next()
        else prev()
      }
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  const api = useMemo(
    () => ({
      index,
      total,
      go,
      next,
      prev,
      notesOpen,
      toggleNotes,
      elapsed,
      resetTimer,
    }),
    [index, total, go, next, prev, notesOpen, toggleNotes, elapsed, resetTimer],
  )

  const Slide = slide.component

  return (
    <DeckContext.Provider value={api}>
      <div className="stage-wrap">
        <div className="stage" style={{ transform: `scale(${scale})` }}>
          <AnimatePresence initial={false} custom={{ direction } satisfies Custom}>
            <motion.div
              key={slide.id}
              className="slide-frame"
              custom={{ direction } satisfies Custom}
              variants={variants[slide.transition]}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
            >
              <Slide />
            </motion.div>
          </AnimatePresence>

          <div className="vignette" />
        </div>

        <Hud
          index={index}
          total={total}
          section={slide.section}
          presenter={slide.presenter}
          elapsed={elapsed}
          notesOpen={notesOpen}
          onPrev={prev}
          onNext={next}
          onToggleNotes={toggleNotes}
          onResetTimer={resetTimer}
        />

        <AnimatePresence>
          {notesOpen && (
            <NotesPanel key={slide.id} slide={slide} index={index} total={total} />
          )}
        </AnimatePresence>
      </div>
    </DeckContext.Provider>
  )
}
