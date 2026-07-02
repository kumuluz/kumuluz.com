import { ArrowRight, Blocks } from 'lucide-react'
import { Button } from '../../../../components/button'
import { CardC } from '../../../../components/cards/card-c'
import { Reveal, RevealGroup } from '../../../../components/motion'
import { familyProductLink, familyTitleRank } from '../../../../lib/accents'
import { useLocation } from '../../../../lib/navigation'
import { getLanguageFromPath } from '../../../../lib/router'
import type { CardsBlock } from '../../types'
import { Heading, Section } from './section-shell'

export function FamilyCardsSection({
  block,
  id,
}: {
  block: CardsBlock
  id?: string
}) {
  const language = getLanguageFromPath(useLocation())
  const items = [...block.items].sort(
    (a, b) => familyTitleRank(a.title) - familyTitleRank(b.title),
  )

  return (
    <Section bg="dark" id={id}>
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        invert
        title={block.title}
      />
      {block.body && block.body.length > 0 ? (
        <Reveal
          className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-neutral-300"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      ) : null}
      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => {
          const link = familyProductLink(item.title, language)

          return (
            <CardC
              accent={link?.accent}
              href={link?.href}
              icon={item.icon ?? Blocks}
              key={item.title}
              label={item.label ?? ''}
              text={item.text}
              title={item.title}
            />
          )
        })}
      </RevealGroup>
      {block.cta ? (
        <Reveal className="mt-10">
          <Button
            href={block.ctaHref ?? '#'}
            icon={ArrowRight}
            tone="primary-dark"
          >
            {block.cta}
          </Button>
        </Reveal>
      ) : null}
    </Section>
  )
}
