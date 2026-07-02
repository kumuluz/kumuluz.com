import type { LanguageCode } from '../../lib/router'
import type {
  ProductPageContent,
  ProductSlug,
} from '../../views/products/types'
import { businessApisPage } from './business-apis'
import { crowdsensingPage } from './crowdsensing'
import { digitalPlatformPage } from './digital-platform'
import { kumuluzAiPage } from './kumuluz-ai'
import { kumuluzApiPage } from './kumuluz-api'

export const productPages: Record<
  ProductSlug,
  Record<LanguageCode, ProductPageContent>
> = {
  'digital-platform': digitalPlatformPage,
  'kumuluz-api': kumuluzApiPage,
  'business-apis': businessApisPage,
  crowdsensing: crowdsensingPage,
  'kumuluz-ai': kumuluzAiPage,
}
