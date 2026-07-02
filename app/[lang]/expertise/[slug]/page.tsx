import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { expertisePages } from '@/content/expertise'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { EXPERTISE_SLUGS, type ExpertiseSlug } from '@/views/expertise/types'
import { ExpertiseRoute } from '@/views/routes/expertise-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    EXPERTISE_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = expertisePages[slug as ExpertiseSlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'expertise', slug: slug as ExpertiseSlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode

  if (!expertisePages[slug as ExpertiseSlug]) {
    notFound()
  }

  return <ExpertiseRoute language={language} slug={slug as ExpertiseSlug} />
}
