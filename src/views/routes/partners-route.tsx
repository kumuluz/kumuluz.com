'use client'

import type { ComponentType } from 'react'
import { partnersPages } from '../../content/partners/partners'
import type { LanguageCode } from '../../lib/router'
import { ClientsIndustriesPage } from '../partners/clients-industries/page'
import { OpenSourcePage } from '../partners/open-source/page'
import { ResearchInnovationPage } from '../partners/research-innovation/page'
import { SelectedWorkPage } from '../partners/selected-work/page'
import type { PartnersPageContent, PartnerSlug } from '../partners/types'

const components: Record<
  PartnerSlug,
  ComponentType<{ page: PartnersPageContent; language: LanguageCode }>
> = {
  'selected-work': SelectedWorkPage,
  'open-source': OpenSourcePage,
  'clients-industries': ClientsIndustriesPage,
  'research-innovation': ResearchInnovationPage,
}

export function PartnersRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug: PartnerSlug
}) {
  const Component = components[slug]
  return <Component language={language} page={partnersPages[slug][language]} />
}
