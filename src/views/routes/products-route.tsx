'use client'

import type { ComponentType } from 'react'
import { productPages } from '../../content/products'
import type { LanguageCode } from '../../lib/router'
import { BusinessApisPage } from '../products/business-apis/page'
import { CrowdsensingPage } from '../products/crowdsensing/page'
import { DigitalPlatformPage } from '../products/digital-platform/page'
import { KumuluzAiPage } from '../products/kumuluz-ai/page'
import { KumuluzApiPage } from '../products/kumuluz-api/page'
import type { ProductPageContent, ProductSlug } from '../products/types'

const components: Record<
  ProductSlug,
  ComponentType<{ page: ProductPageContent; language: LanguageCode }>
> = {
  'digital-platform': DigitalPlatformPage,
  'kumuluz-api': KumuluzApiPage,
  'business-apis': BusinessApisPage,
  crowdsensing: CrowdsensingPage,
  'kumuluz-ai': KumuluzAiPage,
}

export function ProductsRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug: ProductSlug
}) {
  const Component = components[slug]
  return <Component language={language} page={productPages[slug][language]} />
}
