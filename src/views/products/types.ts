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

export const PRODUCT_SLUGS = [
  'digital-platform',
  'kumuluz-api',
  'business-apis',
  'crowdsensing',
  'kumuluz-ai',
] as const

export type ProductSlug = (typeof PRODUCT_SLUGS)[number]

export type ProductPageBlock = (
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | StepsBlock
  | KumuluzBlock
  | FinalCtaBlock
) & { id?: string }

export type ProductPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  sections: readonly ProductPageBlock[]
}
