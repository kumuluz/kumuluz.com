import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AccentProvider } from '@/components/accent-provider'
import { JsonLd } from '@/components/json-ld'
import { solutionsCopy } from '@/content/solutions/solutions'
import { solutionAccents } from '@/lib/accents'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data'
import { SolutionsRoute } from '@/views/routes/solutions-route'
import { SOLUTION_SLUGS, type SolutionSlug } from '@/views/solutions/types'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    SOLUTION_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const copy = solutionsCopy[language]
  const solution = copy.solutions.find((entry) => entry.slug === slug)
  if (!solution) return {}
  return buildPageMetadata(
    language,
    { name: 'solutions', slug: slug as SolutionSlug },
    {
      title: `${solution.label} | Kumuluz`,
      description: solution.description,
    },
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode

  if (!SOLUTION_SLUGS.includes(slug as SolutionSlug)) {
    notFound()
  }

  const solutionSlug = slug as SolutionSlug
  const solution = solutionsCopy[language].solutions.find(
    (entry) => entry.slug === solutionSlug,
  )
  const route = { name: 'solutions', slug: solutionSlug } as const

  return (
    <AccentProvider color={solutionAccents[solutionSlug]}>
      {solution && (
        <JsonLd
          data={[
            serviceSchema({
              language,
              route,
              name: solution.label,
              description: solution.description,
            }),
            breadcrumbSchema(language, [
              { name: 'Home', route: { name: 'landing' } },
              { name: 'Solutions', route: { name: 'solutions' } },
              { name: solution.label, route },
            ]),
          ]}
        />
      )}
      <SolutionsRoute language={language} slug={solutionSlug} />
    </AccentProvider>
  )
}
