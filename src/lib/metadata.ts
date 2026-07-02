import type { Metadata } from 'next'
import { buildPath, type LanguageCode, type Route } from './router'

const SITE_ORIGIN = 'https://kumuluz.com'
const SITE_NAME = 'Kumuluz'
const OG_IMAGE = '/kumuluz-logo.svg'

const OG_LOCALE: Record<LanguageCode, string> = {
  en: 'en_US',
  sl: 'sl_SI',
}

type Seo = { title: string; description: string }

export function buildPageMetadata(
  language: LanguageCode,
  route: Route,
  seo: Seo,
): Metadata {
  const canonical = SITE_ORIGIN + buildPath(language, route)

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        en: SITE_ORIGIN + buildPath('en', route),
        sl: SITE_ORIGIN + buildPath('sl', route),
        'x-default': SITE_ORIGIN + buildPath('en', route),
      },
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: OG_LOCALE[language],
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
  }
}
