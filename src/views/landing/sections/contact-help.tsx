import { motion } from 'motion/react'
import type { LandingContent } from '../../../content/landing/landing'
import { RevealGroup, revealItem } from '../../../components/motion'
import { SectionHeader } from './section-header'

type ContactHelpSectionProps = {
  content: LandingContent['landingPageSections']['contactHelp']
}

export function ContactHelpSection({ content }: ContactHelpSectionProps) {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-accent-700">
          {content.eyebrow}
        </p>
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <motion.article
              className={`group rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200${
                index === 1 || index === 5 ? ' lg:col-span-2' : ''
              }`}
              key={item.title}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              variants={revealItem}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-lg font-bold leading-snug text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
