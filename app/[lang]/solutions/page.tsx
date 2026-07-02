import type { Metadata } from 'next'
import { AccentProvider } from '@/components/accent-provider'
import { solutionsCopy } from '@/content/solutions/solutions'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { SolutionsRoute } from '@/views/routes/solutions-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'solutions' },
    solutionsCopy[language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <AccentProvider color="blue">
      <SolutionsRoute language={language} />
    </AccentProvider>
  )
}
