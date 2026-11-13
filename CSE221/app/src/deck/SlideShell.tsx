import type { ReactNode } from 'react'

export function SlideShell({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <section className={`slide ${className}`}>{children}</section>
}
