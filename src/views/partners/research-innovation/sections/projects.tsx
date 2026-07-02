import { CardD } from '../../../../components/cards/card-d'
import { RevealGroup } from '../../../../components/motion'
import type { ProjectsBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

const gridColumns: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function ProjectsSection({
  block,
  bg,
}: {
  block: ProjectsBlock
  bg: SectionBg
}) {
  const columns = block.columns ?? 3

  return (
    <Section bg={bg} id={block.id}>
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      <RevealGroup className={`mt-12 grid gap-5 ${gridColumns[columns]}`}>
        {block.items.map((item) => (
          <CardD
            expertise={item.meta}
            key={item.title}
            label={item.label}
            text={item.text}
            title={item.title}
          />
        ))}
      </RevealGroup>
    </Section>
  )
}
