'use client'

import { MotionConfig } from 'motion/react'
import type { LanguageCode } from '../../../lib/router'
import type { SolutionPageBlock, SolutionPageContent } from '../types'
import { CapabilitiesSection } from './sections/capabilities'
import { CardsSection } from './sections/cards'
import { FamilySection } from './sections/family'
import { FinalCtaSection } from './sections/final-cta'
import { SolutionHero } from './sections/hero'
import { ProseSection } from './sections/prose'
import { SplitSection } from './sections/split'
import { StepsSection } from './sections/steps'

type AiKnowledgeManagementPageProps = {
  page: SolutionPageContent
  language: LanguageCode
}

export function AiKnowledgeManagementPage({
  page,
  language,
}: AiKnowledgeManagementPageProps) {
  const contactHref = `/${language}/#contact`

  const isLight = (block: SolutionPageBlock) =>
    block.type !== 'kumuluz' && block.type !== 'finalCta'

  function renderBlock(block: SolutionPageBlock, index: number) {
    const key = index

    if (block.type === 'kumuluz') {
      return <FamilySection block={block} id={block.id} key={key} />
    }

    if (block.type === 'finalCta') {
      return (
        <FinalCtaSection
          block={block}
          key={key}
          primaryHref={contactHref}
          secondaryHref={contactHref}
        />
      )
    }

    const lightBefore = page.sections.slice(0, index).filter(isLight).length
    const bg = lightBefore % 2 === 0 ? 'white' : 'muted'

    switch (block.type) {
      case 'split':
        return <SplitSection bg={bg} block={block} id={block.id} key={key} />
      case 'prose':
        return <ProseSection bg={bg} block={block} id={block.id} key={key} />
      case 'cards':
        return <CardsSection bg={bg} block={block} id={block.id} key={key} />
      case 'capabilities':
        return (
          <CapabilitiesSection bg={bg} block={block} id={block.id} key={key} />
        )
      case 'steps':
        return <StepsSection bg={bg} block={block} id={block.id} key={key} />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <SolutionHero
        hero={page.hero}
        primaryHref={contactHref}
        secondaryHref="#capabilities"
      />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}
