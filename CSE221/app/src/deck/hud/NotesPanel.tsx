import { motion } from 'motion/react'

import type { SlideMeta } from '../types'

const pad = (value: number) => String(value).padStart(2, '0')

export function NotesPanel({
  slide,
  index,
  total,
}: {
  slide: SlideMeta
  index: number
  total: number
}) {
  return (
    <motion.aside
      className="notes"
      initial={{ opacity: 0, x: 42 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 42 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="notes__head">
        <span className="notes__label">Presenter notes</span>
        <span className="notes__close">N to close</span>
      </div>

      <h3 className="notes__title">{slide.title}</h3>

      <div className="notes__meta">
        <span>{slide.presenter}</span>
        <i />
        <span>{slide.duration}</span>
        <i />
        <span>
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>

      <ul className="notes__list">
        {slide.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <div className="notes__foot">
        <span>{slide.section}</span>
        <span>N / Esc</span>
      </div>
    </motion.aside>
  )
}
