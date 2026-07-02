import type { CSSProperties, ReactNode } from 'react'

export type AccentColor =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
const STEPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const

export function accentVars(color: AccentColor): CSSProperties {
  return Object.fromEntries(
    STEPS.map((step) => [`--accent-${step}`, `var(--color-${color}-${step})`]),
  ) as CSSProperties
}
type AccentProviderProps = {
  color?: AccentColor
  children: ReactNode
}
export function AccentProvider({ color, children }: AccentProviderProps) {
  if (!color) return <>{children}</>

  return (
    <div className="contents" style={accentVars(color)}>
      {children}
    </div>
  )
}
