import type { Metadata } from 'next'
import { AccentProvider } from '@/components/accent-provider'
import { aboutPage } from '@/content/about'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { AboutRoute } from '@/views/routes/about-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(language, { name: 'about' }, aboutPage[language].seo)
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <AccentProvider color="blue">
      <AboutRoute language={language} />
    </AccentProvider>
  )
}
