import type { LucideIcon } from 'lucide-react'

export type CardItem = {
  icon?: LucideIcon
  label?: string
  title: string
  text: string
  meta?: string
}

export type CapabilityItem = {
  icon?: LucideIcon
  title: string
  text: string
  bulletsTitle?: string
  bullets?: readonly string[]
  wide?: boolean
}

export type CompareColumn = {
  title: string
  bullets: readonly string[]
}

export type HeroBlock = {
  type: 'hero'
  eyebrow: string
  title: string
  body: readonly string[]
  primaryCta?: string
  secondaryCta?: string
  trustLine?: string
}

export type SplitBlock = {
  type: 'split'
  title: string
  body: readonly string[]
  quote?: string
}

export type ProseBlock = {
  type: 'prose'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  quote?: string
}

export type CapabilitiesBlock = {
  type: 'capabilities'
  title: string
  intro?: string
  items: readonly CapabilityItem[]
}

export type CompareBlock = {
  type: 'compare'
  title: string
  intro?: string
  columns: readonly CompareColumn[]
}

export type TableBlock = {
  type: 'table'
  title: string
  intro?: string
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}

export type CardsVariant =
  | 'accent'
  | 'check'
  | 'tag'
  | 'numbered'
  | 'feature'
  | 'compact'
  | 'icon-dark'

export type CardsBlock = {
  type: 'cards'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  items: readonly CardItem[]
  columns?: 2 | 3 | 4
  variant?: CardsVariant
  align?: 'left' | 'center'
  cta?: string
  ctaHref?: string
}

export type ListBlock = {
  type: 'list'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  items: readonly string[]
  variant?: 'pills' | 'columns'
}

export type StepsBlock = {
  type: 'steps'
  title: string
  intro?: string
  numbered?: boolean
  variant?: 'cards'
  items: readonly { title: string; text: string }[]
}

export type KumuluzBlock = {
  type: 'kumuluz'
  title: string
  body: readonly string[]
  items: readonly { label?: string; title: string; text: string }[]
  cta?: string
  ctaHref?: string
}

export type FinalCtaBlock = {
  type: 'finalCta'
  title: string
  body: readonly string[]
  primaryCta: string
  secondaryCta?: string
}
