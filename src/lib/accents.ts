import type { AccentColor } from '@/components/accent-provider'
import { productSlugForLabel } from '@/lib/expertise-links'
import { buildPath, type LanguageCode, parseRoute } from '@/lib/router'
import { FAMILY_ORDER } from '@/views/products/family-data'
import type { ProductSlug } from '@/views/products/types'
import type { SolutionSlug } from '@/views/solutions/types'

export const DEFAULT_ACCENT: AccentColor = 'blue'

export const solutionAccents: Record<SolutionSlug, AccentColor> = {
  'agentic-ai-platforms': 'blue',
  'enterprise-ai-assistants': 'blue',
  'ai-knowledge-management': 'blue',
  'api-management': 'blue',
  'cloud-native-digital-platforms': 'blue',
  'business-apis': 'blue',
  'crowdsensing-smart-communities': 'blue',
}

export const productAccents: Record<ProductSlug, AccentColor> = {
  'digital-platform': 'red',
  'kumuluz-api': 'orange',
  'business-apis': 'emerald',
  crowdsensing: 'purple',
  'kumuluz-ai': 'indigo',
}

export function accentForPath(pathname: string): AccentColor {
  const route = parseRoute(pathname)

  switch (route.name) {
    case 'products':
      return productAccents[route.slug]
    case 'solutions':
      return route.slug ? solutionAccents[route.slug] : DEFAULT_ACCENT
    default:
      return DEFAULT_ACCENT
  }
}

export function familyProductLink(
  title: string,
  language: LanguageCode,
): { slug: ProductSlug; href: string; accent: AccentColor } | null {
  const slug = productSlugForLabel(title)

  if (!slug) return null

  return {
    slug,
    href: buildPath(language, { name: 'products', slug }),
    accent: productAccents[slug],
  }
}

export function familyTitleRank(title: string): number {
  const slug = productSlugForLabel(title)
  const index = slug ? FAMILY_ORDER.indexOf(slug) : -1

  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}
