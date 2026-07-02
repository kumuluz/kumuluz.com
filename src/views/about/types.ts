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

export type AboutPageBlock = (
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | StepsBlock
  | KumuluzBlock
  | FinalCtaBlock
) & { id?: string }

export type AboutPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  sections: readonly AboutPageBlock[]
}
