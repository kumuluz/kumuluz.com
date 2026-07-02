'use client'

import { ArrowRight, Construction } from 'lucide-react'
import { MotionConfig } from 'motion/react'
import { Button } from '../../components/button'
import { RevealGroup, RevealItem } from '../../components/motion'
import { contactHref } from '../../lib/expertise-links'
import { buildPath, type LanguageCode } from '../../lib/router'
import type { SolutionContent, SolutionsCopy } from './types'

const gridGlow =
  'bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:96px_96px]'

export function SolutionsOverview({
  copy,
  language,
}: {
  copy: SolutionsCopy
  language: LanguageCode
}) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${gridGlow} [mask-image:radial-gradient(120%_120%_at_85%_0%,black,transparent_70%),radial-gradient(120%_120%_at_15%_0%,black,transparent_70%)]`}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-44 sm:px-6">
          <RevealGroup className="mx-auto max-w-3xl text-center">
            <RevealItem>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-600">
                {copy.overview.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-neutral-900">
                {copy.overview.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-[1.0625rem]">
                {copy.overview.intro}
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.solutions.map((solution) => (
              <a
                className="group flex flex-col rounded-lg border border-neutral-200 bg-white p-6 transition hover:border-accent-300 hover:shadow-[0_16px_48px_rgba(23,23,23,0.08)]"
                href={buildPath(language, {
                  name: 'solutions',
                  slug: solution.slug,
                })}
                key={solution.slug}
              >
                <h2 className="flex items-center gap-1.5 text-lg font-semibold text-neutral-900 group-hover:text-accent-700">
                  {solution.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                    strokeWidth={2.25}
                  />
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
                  {solution.description}
                </p>
                <p className="mt-5 flex flex-wrap gap-1.5">
                  {solution.products.map((product) => (
                    <span
                      className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700"
                      key={product}
                    >
                      {product}
                    </span>
                  ))}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}

export function SolutionDetail({
  copy,
  solution,
  language,
}: {
  copy: SolutionsCopy
  solution: SolutionContent
  language: LanguageCode
}) {
  const labels = copy.sectionLabels

  const placeholderSections: { key: string; title: string }[] = [
    { key: 'problem', title: labels.problem },
    { key: 'audience', title: labels.audience },
    { key: 'useCases', title: labels.useCases },
    { key: 'architecture', title: labels.architecture },
    { key: 'businessValue', title: labels.businessValue },
  ]

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${gridGlow} [mask-image:radial-gradient(120%_120%_at_85%_0%,black,transparent_70%),radial-gradient(120%_120%_at_15%_0%,black,transparent_70%)]`}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-44 sm:px-6">
          <RevealGroup className="mx-auto max-w-3xl text-center">
            <RevealItem>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-600">
                {copy.overview.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-neutral-900">
                {solution.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {solution.theme}
              </p>
            </RevealItem>
            <RevealItem className="mt-8 flex justify-center">
              <Button href={contactHref(language)} icon={ArrowRight}>
                {copy.ctaLabel}
              </Button>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            <Construction aria-hidden="true" className="size-4" />
            Wireframe — content in progress
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-[#f7f9fb] p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-700">
                {labels.products}
              </h2>
              <ul className="mt-4 space-y-2">
                {solution.products.map((product) => (
                  <li
                    className="flex items-center gap-2 text-sm font-medium text-neutral-800"
                    key={product}
                  >
                    <span className="size-1.5 rounded-full bg-accent-600" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {placeholderSections.map((section) => (
              <div
                className="rounded-lg border border-dashed border-neutral-300 bg-white p-6"
                key={section.key}
              >
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-neutral-400">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {copy.placeholder}
                </p>
                <div className="mt-4 space-y-2" aria-hidden="true">
                  <div className="h-2.5 w-full rounded bg-neutral-100" />
                  <div className="h-2.5 w-11/12 rounded bg-neutral-100" />
                  <div className="h-2.5 w-3/4 rounded bg-neutral-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">{labels.cta}</h2>
          <p className="mt-4 text-base leading-8 text-neutral-300">
            {solution.theme}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={contactHref(language)}
              icon={ArrowRight}
              tone="primary"
            >
              {copy.ctaLabel}
            </Button>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
