import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AccentProvider } from '@/components/accent-provider'
import { JsonLd } from '@/components/json-ld'
import { productPages } from '@/content/products'
import { productAccents } from '@/lib/accents'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import {
  breadcrumbSchema,
  softwareApplicationSchema,
} from '@/lib/structured-data'
import { PRODUCT_SLUGS, type ProductSlug } from '@/views/products/types'
import { ProductsRoute } from '@/views/routes/products-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

const PRODUCT_SCHEMA_META: Record<
  ProductSlug,
  { name: string; applicationCategory: string }
> = {
  'kumuluz-ai': {
    name: 'KumuluzAI Platform',
    applicationCategory: 'Enterprise AI Platform',
  },
  'kumuluz-api': {
    name: 'Kumuluz API',
    applicationCategory: 'API Management Platform',
  },
  'business-apis': {
    name: 'Kumuluz Business APIs',
    applicationCategory: 'Business API Platform',
  },
  'digital-platform': {
    name: 'Kumuluz Digital Platform',
    applicationCategory: 'Cloud-native Digital Platform',
  },
  crowdsensing: {
    name: 'Kumuluz Crowdsensing',
    applicationCategory: 'Crowdsensing Data Platform',
  },
}

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    PRODUCT_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = productPages[slug as ProductSlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'products', slug: slug as ProductSlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode

  const productSlug = slug as ProductSlug
  const page = productPages[productSlug]?.[language]

  if (!page) {
    notFound()
  }

  const meta = PRODUCT_SCHEMA_META[productSlug]
  const route = { name: 'products', slug: productSlug } as const

  return (
    <AccentProvider color={productAccents[productSlug]}>
      <JsonLd
        data={[
          softwareApplicationSchema({
            language,
            route,
            name: meta.name,
            description: page.seo.description,
            applicationCategory: meta.applicationCategory,
          }),
          breadcrumbSchema(language, [
            { name: 'Home', route: { name: 'landing' } },
            { name: meta.name, route },
          ]),
        ]}
      />
      <ProductsRoute language={language} slug={productSlug} />
    </AccentProvider>
  )
}
