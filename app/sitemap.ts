import type { MetadataRoute } from 'next'
import { buildPath, type LanguageCode, type Route } from '@/lib/router'
import { PRODUCT_SLUGS } from '@/views/products/types'
import { SOLUTION_SLUGS } from '@/views/solutions/types'
import { EXPERTISE_SLUGS } from '@/views/expertise/types'
import { COMPANY_SLUGS } from '@/views/company/types'

export const dynamic = 'force-static'

const SITE_ORIGIN = 'https://kumuluz.com'
const LANGUAGES: LanguageCode[] = ['en', 'sl']

const ROUTES: { route: Route; priority: number }[] = [
  { route: { name: 'landing' }, priority: 1.0 },
  { route: { name: 'kumuluz' }, priority: 0.9 },
  ...PRODUCT_SLUGS.map((slug) => ({
    route: { name: 'products', slug } as Route,
    priority: 0.9,
  })),
  { route: { name: 'solutions' }, priority: 0.8 },
  ...SOLUTION_SLUGS.map((slug) => ({
    route: { name: 'solutions', slug } as Route,
    priority: 0.9,
  })),
  { route: { name: 'about' }, priority: 0.7 },
  ...EXPERTISE_SLUGS.map((slug) => ({
    route: { name: 'expertise', slug } as Route,
    priority: 0.6,
  })),
  { route: { name: 'company' }, priority: 0.5 },
  ...COMPANY_SLUGS.map((slug) => ({
    route: { name: 'company', slug } as Route,
    priority: 0.5,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGUAGES.flatMap((language) =>
    ROUTES.map(({ route, priority }) => ({
      url: SITE_ORIGIN + buildPath(language, route),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          en: SITE_ORIGIN + buildPath('en', route),
          sl: SITE_ORIGIN + buildPath('sl', route),
          'x-default': SITE_ORIGIN + buildPath('en', route),
        },
      },
    })),
  )
}
