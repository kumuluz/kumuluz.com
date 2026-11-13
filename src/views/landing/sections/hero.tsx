import { ArrowRight } from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { AwardSeals } from '../../../components/award-seals'
import { LandingBackground } from '../../../components/backgrounds/landing'
import { Button } from '../../../components/button'
import { RevealGroup, RevealItem } from '../../../components/motion'
import { ReferencesMarquee } from '../../../components/references-marquee'

type HeroSectionProps = {
  content: LandingContent['hero']
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <LandingBackground />
      <section className="relative px-5 pt-18 sm:px-6 lg:px-0">
        <div className="mx-auto grid max-w-[120rem] sm:items-center lg:items-end gap-8 py-12 lg:py-32 lg:border-l lg:border-neutral-200 lg:gap-8 lg:px-28 lg:min-h-[calc(100svh-16rem)] xl:px-36">
          {/* From 90rem the seals share the copy's grid cell: bottom-aligned with
              the CTA buttons, right edge on the header's Contact button (the
              3.5rem nav inset vs the 9rem content padding; past 120rem the
              header container is centred). */}
          <div className="grid">
            <RevealGroup className="col-start-1 row-start-1 w-full max-w-[680px] lg:max-w-[760px] xl:max-w-[820px]">
              <RevealItem>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-600">
                  {content.eyebrow}
                </p>
              </RevealItem>
              <RevealItem>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] text-neutral-900 sm:text-[2.5rem] lg:text-[2.75rem]">
                  {content.title}{' '}
                </h1>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-neutral-400 sm:text-[2.5rem] lg:text-[2.75rem]">
                  {content.body}{' '}
                </h1>
              </RevealItem>
              <RevealItem className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" icon={ArrowRight} iconLayout="trailing">
                  {content.primaryCta}
                </Button>
                <Button href="#services" tone="secondary">
                  {content.secondaryCta}
                </Button>
              </RevealItem>
            </RevealGroup>
            <div className="col-start-1 row-start-1 -mr-22 hidden w-[27.5rem] self-end justify-self-end min-[90rem]:block min-[120rem]:-mr-[min(calc(50vw_-_54.5rem),7rem)]">
              <AwardSeals
                contrastCaptions={{ from: 'always', id: 'award-seals-hero' }}
                items={content.awards.items}
                label={content.awards.label}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-[120rem] -translate-x-1/2 lg:block">
          <div className="h-full border-l border-neutral-200" />
        </div>
        <div className="relative z-10 mx-auto max-w-[120rem] px-5 sm:px-6 lg:px-28 xl:px-36">
          {/* Below 90rem the seals stack under the hero copy, above the trust line. */}
          <div className="pb-10 sm:pb-12 min-[90rem]:hidden">
            <AwardSeals
              items={content.awards.items}
              label={content.awards.label}
            />
          </div>
          <p className="pb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 sm:ml-10 lg:ml-0">
            {content.trustLine}
          </p>
        </div>
        <ReferencesMarquee />
      </div>
    </div>
  )
}
