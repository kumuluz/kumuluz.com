'use client'

import { aboutPage } from '../../content/about'
import type { LanguageCode } from '../../lib/router'
import { WhyKumuluzPage } from '../about/why-kumuluz/page'

export function AboutRoute({ language }: { language: LanguageCode }) {
  return <WhyKumuluzPage language={language} page={aboutPage[language]} />
}
