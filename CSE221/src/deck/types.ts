import type { ComponentType } from 'react'

export type Presenter = 'Fuad' | 'Sayem' | 'Muslima'

export type TransitionKind = 'morph' | 'push' | 'curtain'

export type SlideMeta = {
  id: string
  title: string
  section: string
  presenter: Presenter
  duration: string
  transition: TransitionKind
  notes: string[]
  component: ComponentType
}
