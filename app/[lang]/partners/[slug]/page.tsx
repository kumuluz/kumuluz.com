import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AccentProvider } from '@/components/accent-provider'
import { partnersPages } from '@/content/partners/partners'
import { partnerAccents } from '@/lib/accents'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { PARTNER_SLUGS, type PartnerSlug } from '@/views/partners/types'
import { PartnersRoute } from '@/views/routes/partners-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    PARTNER_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = partnersPages[slug as PartnerSlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'partners', slug: slug as PartnerSlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode

  if (!partnersPages[slug as PartnerSlug]) {
    notFound()
  }

  return (
    <AccentProvider color={partnerAccents[slug as PartnerSlug]}>
      <PartnersRoute language={language} slug={slug as PartnerSlug} />
    </AccentProvider>
  )
}
