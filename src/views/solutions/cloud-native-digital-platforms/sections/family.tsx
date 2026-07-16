import { motion } from 'motion/react'
import { accentClassName } from '../../../../components/accent-provider'
import { Reveal, RevealGroup, revealItem } from '../../../../components/motion'
import { familyProductLink, familyTitleRank } from '../../../../lib/accents'
import { useLocation } from '../../../../lib/navigation'
import { getLanguageFromPath } from '../../../../lib/router'
import type { KumuluzBlock } from '../../types'
import { Section } from './section-shell'

export function FamilySection({
  block,
  id,
}: {
  block: KumuluzBlock
  id?: string
}) {
  const language = getLanguageFromPath(useLocation())
  const items = [...block.items].sort(
    (a, b) => familyTitleRank(a.title) - familyTitleRank(b.title),
  )

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
      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const link = familyProductLink(item.title, language)
          const className = `group block rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 ${
            link
              ? 'hover:border-accent-400/70 hover:bg-accent-500/10'
              : 'hover:bg-neutral-900'
          }`
          const motionProps = {
            className,
            transition: { duration: 0.2, ease: 'easeOut' },
            variants: revealItem,
            whileHover: { scale: 1.02 },
          } as const
          const content = (
            <>
              {item.label ? (
                <p
                  className={`text-xs font-bold uppercase leading-4 tracking-[0.14em] ${
                    link
                      ? 'text-neutral-400 group-hover:text-accent-200'
                      : 'text-accent-200'
                  }`}
                >
                  {item.label}
                </p>
              ) : null}
              <h3
                className={`text-lg font-bold leading-snug ${item.label ? 'mt-3' : ''}`}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                {item.text}
              </p>
            </>
          )

          return link ? (
            <motion.a
              {...motionProps}
              className={`${className} ${accentClassName(link.accent)}`}
              href={link.href}
              key={item.title}
            >
              {content}
            </motion.a>
          ) : (
            <motion.article {...motionProps} key={item.title}>
              {content}
            </motion.article>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
