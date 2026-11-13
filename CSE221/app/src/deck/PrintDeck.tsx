import { slides } from './registry'

export function PrintDeck() {
  return (
    <div className="print-root">
      {slides.map((entry) => {
        const Slide = entry.component
        return (
          <div key={entry.id} className="print-page">
            <Slide />
          </div>
        )
      })}
    </div>
  )
}
