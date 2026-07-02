import type { LandingContent } from '../../../content/landing/landing'
import { CardD } from '../../../components/cards/card-d'
import { RevealGroup } from '../../../components/motion'
import { SectionHeader } from './section-header'

type SelectedWorkSectionProps = {
  content: LandingContent['landingPageSections']['selectedWork']
}

export function SelectedWorkSection({ content }: SelectedWorkSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="work">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-6">
          {content.projects.map((project, index) => (
            <CardD
              className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
              expertise={project.expertise}
              key={project.title}
              label={project.label}
              text={project.text}
              title={project.title}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
