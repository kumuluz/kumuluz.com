import { motion } from 'motion/react'
import type { LandingContent } from '../../../content/landing/landing'
import { RevealGroup, revealItem } from '../../../components/motion'
import { SectionHeader } from './section-header'

type ContactStepsSectionProps = {
  content: LandingContent['landingPageSections']['contactSteps']
}

export function ContactStepsSection({ content }: ContactStepsSectionProps) {
  return (
    <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-accent-700">
          {content.eyebrow}
        </p>
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <motion.article
              className="group relative rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200"
              key={step.title}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              variants={revealItem}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-base font-bold text-accent-700 transition group-hover:bg-accent-700 group-hover:text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {step.text}
              </p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
