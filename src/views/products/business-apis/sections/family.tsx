import { motion } from 'motion/react'
import { accentClassName } from '../../../../components/accent-provider'
import { Reveal, RevealGroup, revealItem } from '../../../../components/motion'
import { productAccents } from '../../../../lib/accents'
import { useLocation } from '../../../../lib/navigation'
import {
  buildPath,
  getLanguageFromPath,
  parseRoute,
} from '../../../../lib/router'
import { familyMembers } from '../../family-data'
import type { KumuluzBlock } from '../../types'
import { Section } from './section-shell'

export function FamilySection({
  block,
  id,
}: {
  block: KumuluzBlock
  id?: string
}) {
  const pathname = useLocation()
  const language = getLanguageFromPath(pathname)
  const route = parseRoute(pathname)
  const activeSlug = route.name === 'products' ? route.slug : undefined
  const members = familyMembers(language)

  return (
    <Section bg="dark" id={id}>
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            {block.title}
          </h2>
        </Reveal>
        <Reveal
          className="mt-6 space-y-5 text-sm leading-7 text-neutral-300"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {members.map((item) => {
          const isActive = item.slug === activeSlug
          const href = buildPath(language, {
            name: 'products',
            slug: item.slug,
          })
          return (
            <motion.a
              aria-current={isActive ? 'page' : undefined}
              className={`group block rounded-lg border p-5 transition-colors duration-200 ${
                isActive
                  ? 'border-accent-400/70 bg-accent-700 ring-1 ring-accent-400/40'
                  : 'border-white/10 bg-white/[0.04] hover:border-accent-400/70 hover:bg-accent-500/10'
              } ${accentClassName(productAccents[item.slug])}`}
              href={href}
              key={item.slug}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              variants={revealItem}
              whileHover={{ scale: 1.02 }}
            >
              <p
                className={`text-xs font-bold uppercase leading-4 tracking-[0.14em] ${
                  isActive
                    ? 'text-accent-200'
                    : 'text-neutral-400 group-hover:text-accent-200'
                }`}
              >
                {item.label}
              </p>
              <h3
                className={`mt-3 text-lg font-bold leading-snug ${
                  isActive ? 'text-accent-50' : ''
                }`}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                {item.text}
              </p>
            </motion.a>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
