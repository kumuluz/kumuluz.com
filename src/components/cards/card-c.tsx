import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { accentClassName, type AccentColor } from '../accent-provider'
import { revealItem } from '../motion'

type CardCProps = {
  icon: LucideIcon
  label: string
  title: string
  text: string
  href?: string
  accent?: AccentColor
}

export function CardC({
  icon: Icon,
  label,
  title,
  text,
  href,
  accent,
}: CardCProps) {
  const sharedProps = {
    className: `group block rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 ${
      href
        ? 'hover:border-accent-400/70 hover:bg-accent-500/10'
        : 'hover:bg-neutral-900'
    } ${href && accent ? accentClassName(accent) : ''}`,
    transition: { duration: 0.2, ease: 'easeOut' },
    variants: revealItem,
    whileHover: { scale: 1.02 },
  } as const

  const content = (
    <>
      <div className="flex size-10 items-center justify-center rounded-md bg-accent-500/15 text-accent-200">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <p className="mt-5 min-h-[3rem] text-xs font-bold uppercase leading-4 tracking-[0.14em] text-accent-200">
        {label}
      </p>
      <h3 className="mt-3 min-h-[3.25rem] text-lg font-bold leading-snug transition-colors group-hover:text-accent-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>
    </>
  )

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {content}
      </motion.a>
    )
  }

  return <motion.article {...sharedProps}>{content}</motion.article>
}
