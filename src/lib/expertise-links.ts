import { buildPath, type LanguageCode } from './router'
import { type ProductSlug } from '../views/products/types'
import { type SolutionSlug } from '../views/solutions/types'

const productSlugByLabel: Record<string, ProductSlug> = {
  'Kumuluz Digital Platform': 'digital-platform',
  'Kumuluz API': 'kumuluz-api',
  'Kumuluz Business APIs': 'business-apis',
  'Kumuluz Business API-ji': 'business-apis',
  'Kumuluz Crowdsensing': 'crowdsensing',
  KumuluzAI: 'kumuluz-ai',
  'KumuluzAI Platform': 'kumuluz-ai',
}

const solutionSlugByLabel: Record<string, SolutionSlug> = {
  'Agentic AI Platforms': 'agentic-ai-platforms',
  'Enterprise AI Assistants': 'enterprise-ai-assistants',
  'AI Knowledge Management': 'ai-knowledge-management',
  'API Management & API Economy': 'api-management',
  'Cloud-native Digital Platforms': 'cloud-native-digital-platforms',
  'Business APIs': 'business-apis',
  'Crowdsensing & Smart Communities': 'crowdsensing-smart-communities',
  'Agentic AI platforme': 'agentic-ai-platforms',
  'Enterprise AI asistenti': 'enterprise-ai-assistants',
  'AI upravljanje znanja': 'ai-knowledge-management',
  'Upravljanje API-jev in API ekonomija': 'api-management',
  'Cloud-native digitalne platforme': 'cloud-native-digital-platforms',
  'Poslovni API-ji': 'business-apis',
  'Crowdsensing in pametne skupnosti': 'crowdsensing-smart-communities',
}

export function productSlugForLabel(label: string): ProductSlug | null {
  return productSlugByLabel[label] ?? null
}

export function solutionSlugForLabel(label: string): SolutionSlug | null {
  return solutionSlugByLabel[label] ?? null
}

const BLOG_URL = 'https://blog.kumuluz.com/'

const topNavRouteByLabel: Record<string, 'about'> = {
  'Why Kumuluz?': 'about',
  'Zakaj Kumuluz?': 'about',
}

export function topNavHref(
  label: string,
  language: LanguageCode,
): string | null {
  const route = topNavRouteByLabel[label]
  return route ? buildPath(language, { name: route }) : null
}

export function contactHref(language: LanguageCode): string {
  return `${buildPath(language, { name: 'landing' })}#contact`
}

export function footerLinkHref(
  label: string,
  language: LanguageCode,
): string | null {
  const productSlug = productSlugForLabel(label)

  if (productSlug) {
    return buildPath(language, { name: 'products', slug: productSlug })
  }

  const solutionSlug = solutionSlugForLabel(label)

  if (solutionSlug) {
    return buildPath(language, { name: 'solutions', slug: solutionSlug })
  }

  if (label === 'Insights' || label === 'Vsebine') {
    return BLOG_URL
  }

  if (label === 'Why Kumuluz?' || label === 'Zakaj Kumuluz?') {
    return buildPath(language, { name: 'about' })
  }

  if (label === 'Contact' || label === 'Kontakt') {
    return contactHref(language)
  }

  return null
}

export function dropdownLinkHref(
  label: string,
  language: LanguageCode,
): string | null {
  const productSlug = productSlugForLabel(label)

  if (productSlug) {
    return buildPath(language, { name: 'products', slug: productSlug })
  }

  const solutionSlug = solutionSlugForLabel(label)

  if (solutionSlug) {
    return buildPath(language, { name: 'solutions', slug: solutionSlug })
  }

  return null
}
