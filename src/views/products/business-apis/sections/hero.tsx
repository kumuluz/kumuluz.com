import { ArrowRight } from 'lucide-react'
import { BusinessApisBackground } from '../../../../components/backgrounds/products/business-apis'
import { ReferencesMarquee } from '../../../../components/references-marquee'
import { Button } from '../../../../components/button'
import { RevealGroup, RevealItem } from '../../../../components/motion'
import type { HeroBlock } from '../../types'

export function ProductHero({
  hero,
  primaryHref,
  secondaryHref,
}: {
  hero: HeroBlock
  primaryHref: string
  secondaryHref: string
}) {
  return (
    <div className="relative isolate overflow-hidden">
      <BusinessApisBackground />
      <section className="relative px-5 pt-18 sm:px-6 lg:px-0">
        <div className="mx-auto grid max-w-[120rem] items-center gap-8 py-14 sm:py-16 lg:min-h-[calc(100svh-16rem)] lg:gap-8 lg:border-x lg:border-neutral-200 lg:px-28 lg:py-16 xl:px-36">
          <RevealGroup className="w-full max-w-[760px] lg:mx-auto lg:max-w-[900px] lg:text-center xl:max-w-[980px]">
            <RevealItem>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-600">
                {hero.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] text-neutral-900 sm:text-[2.5rem] lg:mx-auto lg:text-[2.75rem]">
                {hero.title}
              </h1>
            </RevealItem>
            {hero.body.map((paragraph) => (
              <RevealItem key={paragraph}>
                <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 sm:text-[1.0625rem] sm:leading-8 lg:mx-auto">
                  {paragraph}
                </p>
              </RevealItem>
            ))}
            {hero.primaryCta || hero.secondaryCta ? (
              <RevealItem className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-center">
                {hero.primaryCta ? (
                  <Button
                    href={primaryHref}
                    icon={ArrowRight}
                    iconLayout="trailing"
                  >
                    {hero.primaryCta}
                  </Button>
                ) : null}
                {hero.secondaryCta ? (
                  <Button href={secondaryHref} tone="secondary">
                    {hero.secondaryCta}
                  </Button>
                ) : null}
              </RevealItem>
            ) : null}
          </RevealGroup>
        </div>
      </section>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-[120rem] -translate-x-1/2 lg:block">
          <div className="h-full border-x border-neutral-200" />
        </div>
        {hero.trustLine ? (
          <div className="relative z-10 mx-auto max-w-[120rem] px-5 sm:px-6 lg:px-28 xl:px-36">
            <p className="pb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 sm:ml-10 lg:ml-0">
              {hero.trustLine}
            </p>
          </div>
        ) : null}
        <ReferencesMarquee />
      </div>
    </div>
  )
}
