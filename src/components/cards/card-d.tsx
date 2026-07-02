import { motion } from 'motion/react'
import { revealItem } from '../motion'

type CardDProps = {
  label: string
  title: string
  text: string
  expertise: string
  className?: string
}

export function CardD({ label, title, text, expertise, className }: CardDProps) {
  return (
    <motion.article
      className={`flex h-full flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition-colors duration-200 hover:bg-neutral-100${className ? ` ${className}` : ''}`}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={revealItem}
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-xs min-h-[2rem] font-bold uppercase tracking-[0.14em] text-accent-700">
        {label}
      </p>
      <h3 className="mt-4 min-h-[3.25rem] text-xl font-bold leading-snug text-neutral-950">
        {title}
      </h3>
      <div className="flex flex-1 flex-col justify-between gap-4">
        <p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p>
        <p className="mt-5 text-sm font-semibold leading-6 text-neutral-800">
          {expertise}
        </p>
      </div>
    </motion.article>
  )
}
