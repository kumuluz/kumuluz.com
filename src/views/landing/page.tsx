'use client'

import { MotionConfig } from 'motion/react'
import type { LandingContent } from '../../content/landing/landing'
import type { LanguageCode } from '../../lib/router'
import { AgenticOperationsSection } from './sections/agentic-operations'
import { ContactHelpSection } from './sections/contact-help'
import { ContactStepsSection } from './sections/contact-steps'
import { HeroSection } from './sections/hero'
import { IntroSection } from './sections/intro'
import { FinalCtaSection } from './sections/final-cta'
import { KumuluzSection } from './sections/kumuluz'
import { PositioningSection } from './sections/positioning'
import { ProofSection } from './sections/proof'
import { SelectedWorkSection } from './sections/selected-work'
import { WhySection } from './sections/why'

type LandingPageProps = {
  content: LandingContent
  language: LanguageCode
}

export function LandingPage({ content, language }: LandingPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection content={content.hero} />
      <PositioningSection content={content.landingPageSections.positioning} />
      <IntroSection content={content.intro} />
      <KumuluzSection content={content.landingPageSections.kumuluz} />
      <AgenticOperationsSection
        content={content.landingPageSections.agenticOperations}
      />
      <WhySection content={content.landingPageSections.why} />
      <ProofSection content={content.landingPageSections.proof} />
      <SelectedWorkSection content={content.landingPageSections.selectedWork} />
      <ContactHelpSection content={content.landingPageSections.contactHelp} />
      <ContactStepsSection content={content.landingPageSections.contactSteps} />
      <FinalCtaSection
        content={content.landingPageSections.finalCta}
        language={language}
      />
    </MotionConfig>
  )
}
