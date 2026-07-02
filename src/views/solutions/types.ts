import type {
  CapabilitiesBlock,
  CardsBlock,
  FinalCtaBlock,
  HeroBlock,
  KumuluzBlock,
  ProseBlock,
  SplitBlock,
  StepsBlock,
} from '../blocks'

export type {
  CapabilitiesBlock,
  CapabilityItem,
  CardItem,
  CardsVariant,
  CardsBlock,
  FinalCtaBlock,
  HeroBlock,
  KumuluzBlock,
  ProseBlock,
  SplitBlock,
  StepsBlock,
} from '../blocks'

export const SOLUTION_SLUGS = [
  'agentic-ai-platforms',
  'enterprise-ai-assistants',
  'ai-knowledge-management',
  'api-management',
  'cloud-native-digital-platforms',
  'business-apis',
  'crowdsensing-smart-communities',
] as const

export type SolutionSlug = (typeof SOLUTION_SLUGS)[number]

export type SolutionContent = {
  slug: SolutionSlug
  label: string
  description: string
  title: string
  theme: string
  products: readonly string[]
}

export type SolutionPageBlock = (
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | StepsBlock
  | KumuluzBlock
  | FinalCtaBlock
) & { id?: string }

export type SolutionPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  sections: readonly SolutionPageBlock[]
}

export type SolutionsCopy = {
  seo: { title: string; description: string }
  overview: {
    eyebrow: string
    title: string
    intro: string
  }
  sectionLabels: {
    problem: string
    audience: string
    products: string
    useCases: string
    architecture: string
    businessValue: string
    cta: string
  }
  placeholder: string
  ctaLabel: string
  solutions: readonly SolutionContent[]
}
