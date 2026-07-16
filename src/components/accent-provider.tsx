import type { ReactNode } from 'react'

export type AccentColor =
  | 'red'
  | 'orange'
  | 'emerald'
  | 'blue'
  | 'indigo'
  | 'purple'

export function accentClassName(color: AccentColor): string {
  return `accent-${color}`
}

type AccentProviderProps = {
  color?: AccentColor
  children: ReactNode
}
export function AccentProvider({ color, children }: AccentProviderProps) {
  if (!color) return <>{children}</>

  return <div className={`contents ${accentClassName(color)}`}>{children}</div>
}
