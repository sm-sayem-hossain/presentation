import { createContext, useContext } from 'react'

export type DeckApi = {
  index: number
  total: number
  go: (target: number) => void
  next: () => void
  prev: () => void
  notesOpen: boolean
  toggleNotes: () => void
  elapsed: number
  resetTimer: () => void
}

export const DeckContext = createContext<DeckApi | null>(null)

export function useDeck() {
  const api = useContext(DeckContext)
  if (!api) throw new Error('useDeck must be used inside <Deck>')
  return api
}
