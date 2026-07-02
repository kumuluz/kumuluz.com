import type { LanguageCode } from '@/lib/router'
import type { ProductSlug } from './types'

export const FAMILY_ORDER: readonly ProductSlug[] = [
  'kumuluz-ai',
  'digital-platform',
  'kumuluz-api',
  'business-apis',
  'crowdsensing',
]

export type FamilyMember = {
  slug: ProductSlug
  label: string
  title: string
  text: string
}

const en: Record<ProductSlug, FamilyMember> = {
  'kumuluz-ai': {
    slug: 'kumuluz-ai',
    label: 'AgenticAI',
    title: 'KumuluzAI Platform',
    text: 'Build, run and orchestrate AI agents and assistants with enterprise context, control and integration.',
  },
  'digital-platform': {
    slug: 'digital-platform',
    label: 'Platform',
    title: 'Kumuluz Digital Platform',
    text: 'A cloud-native foundation for digital services, integrations and application workflows.',
  },
  'kumuluz-api': {
    slug: 'kumuluz-api',
    label: 'API',
    title: 'Kumuluz API',
    text: 'Expose, secure, manage and monitor APIs across your digital ecosystem.',
  },
  'business-apis': {
    slug: 'business-apis',
    label: 'Business',
    title: 'Kumuluz Business APIs',
    text: 'Reusable business capabilities such as notifications, cases, tasks and customer interactions.',
  },
  crowdsensing: {
    slug: 'crowdsensing',
    label: 'Crowdsensing',
    title: 'Kumuluz Crowdsensing',
    text: 'AI-enhanced collection and processing of distributed real-world data for smart services.',
  },
}

const sl: Record<ProductSlug, FamilyMember> = {
  'kumuluz-ai': {
    slug: 'kumuluz-ai',
    label: 'AgenticAI',
    title: 'KumuluzAI Platform',
    text: 'Gradite, poganjajte in orkestrirajte AI agente in asistente s poslovnim kontekstom, nadzorom in integracijo.',
  },
  'digital-platform': {
    slug: 'digital-platform',
    label: 'Platforma',
    title: 'Kumuluz Digital Platform',
    text: 'Cloud-native osnova za digitalne storitve, integracije in workflowe aplikacij.',
  },
  'kumuluz-api': {
    slug: 'kumuluz-api',
    label: 'API',
    title: 'Kumuluz API',
    text: 'Izpostavite, zavarujte, upravljajte in spremljajte API-je v digitalnem ekosistemu.',
  },
  'business-apis': {
    slug: 'business-apis',
    label: 'Business',
    title: 'Kumuluz Business APIs',
    text: 'Ponovno uporabne poslovne zmožnosti, kot so obvestila, primeri, naloge in interakcije s strankami.',
  },
  crowdsensing: {
    slug: 'crowdsensing',
    label: 'Crowdsensing',
    title: 'Kumuluz Crowdsensing',
    text: 'AI-podprto zbiranje in obdelava porazdeljenih podatkov iz resničnega sveta za pametne storitve.',
  },
}

export function familyMembers(language: LanguageCode): FamilyMember[] {
  const map = language === 'sl' ? sl : en
  return FAMILY_ORDER.map((slug) => map[slug])
}
