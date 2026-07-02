import type { Metadata } from 'next'
import { AccentProvider } from '@/components/accent-provider'
import { partnersPages } from '@/content/partners/partners'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { PartnersRoute } from '@/views/routes/partners-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'partners' },
    partnersPages['selected-work'][language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <AccentProvider color="blue">
      <PartnersRoute language={language} slug="selected-work" />
    </AccentProvider>
  )
}
