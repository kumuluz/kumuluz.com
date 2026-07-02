import { buildPath, type LanguageCode, type Route } from './router'

const SITE_ORIGIN = 'https://kumuluz.com'

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`
const WEBSITE_ID = `${SITE_ORIGIN}/#website`

const SUNESIS = {
  '@type': 'Organization',
  name: 'Sunesis',
  url: 'https://sunesis.si/en/',
} as const

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Kumuluz',
    url: `${SITE_ORIGIN}/`,
    description:
      'Kumuluz is an enterprise platform family for AgenticAI, API management, Business APIs, cloud-native digital services, deterministic workflows and AI-enhanced crowdsensing.',
    parentOrganization: SUNESIS,
  }
}

export function websiteSchema(language: LanguageCode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Kumuluz',
    url: `${SITE_ORIGIN}/`,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: language,
  }
}

export function softwareApplicationSchema(opts: {
  language: LanguageCode
  route: Route
  name: string
  description: string
  applicationCategory: string
}) {
  const url = SITE_ORIGIN + buildPath(opts.language, opts.route)
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: opts.name,
    applicationCategory: opts.applicationCategory,
    description: opts.description,
    creator: SUNESIS,
    url,
  }
}

export function serviceSchema(opts: {
  language: LanguageCode
  route: Route
  name: string
  description: string
}) {
  const url = SITE_ORIGIN + buildPath(opts.language, opts.route)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: 'Enterprise platform solution',
    description: opts.description,
    provider: SUNESIS,
    areaServed: 'Europe',
  }
}

export function breadcrumbSchema(
  language: LanguageCode,
  crumbs: { name: string; route: Route }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: SITE_ORIGIN + buildPath(language, crumb.route),
    })),
  }
}
