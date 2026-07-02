import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { revealItem } from '../motion'

type CardAProps = {
  icon: LucideIcon
  title: string
  text?: string
}

export function CardA({ icon: Icon, title, text }: CardAProps) {
  return (
    <motion.article
      className="group min-h-52 rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 hover:border-neutral-200 hover:bg-white"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={revealItem}
      whileHover={{ scale: 1.01 }}
    >
      <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-accent-700 transition group-hover:bg-accent-700 group-hover:text-white">
        <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
      </div>
      <h3 className="text-lg font-semibold leading-snug text-neutral-900">
        {title}
      </h3>
      {text ? (
        <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
      ) : null}
    </motion.article>
  )
}
