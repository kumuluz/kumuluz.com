'use client'

import { MotionConfig } from 'motion/react'
import type { LanguageCode } from '../../../lib/router'
import type { AboutPageBlock, AboutPageContent } from '../types'
import { CapabilitiesSection } from './sections/capabilities'
import { CardsSection } from './sections/cards'
import { FamilyCardsSection } from './sections/family-cards'
import { FamilySection } from './sections/family'
import { FinalCtaSection } from './sections/final-cta'
import { SolutionHero } from './sections/hero'
import { ProseSection } from './sections/prose'
import { SplitSection } from './sections/split'
import { StepsSection } from './sections/steps'

type WhyKumuluzPageProps = {
  page: AboutPageContent
  language: LanguageCode
}

export function WhyKumuluzPage({ page, language }: WhyKumuluzPageProps) {
  const contactHref = `/${language}/#contact`

  const isDarkCards = (block: AboutPageBlock) =>
    block.type === 'cards' && block.variant === 'icon-dark'

  const isLight = (block: AboutPageBlock) =>
    block.type !== 'kumuluz' && block.type !== 'finalCta' && !isDarkCards(block)

  function renderBlock(block: AboutPageBlock, index: number) {
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
          secondaryHref={`/${language}/solutions/`}
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
        return block.variant === 'icon-dark' ? (
          <FamilyCardsSection block={block} id={block.id} key={key} />
        ) : (
          <CardsSection bg={bg} block={block} id={block.id} key={key} />
        )
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
        secondaryHref="#platform-family"
      />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}
