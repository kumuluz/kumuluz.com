import { ChevronDown } from 'lucide-react'
import { topNavHref } from '../../lib/expertise-links'
import type { LanguageCode } from '../../lib/router'
import type { HeaderProps, NavItem } from './types'

type DesktopNavigationProps = {
  activeItem: NavItem | null
  content: HeaderProps['content']
  language: LanguageCode
  onActiveItemChange: (item: NavItem | null) => void
}

export function DesktopNavigation({
  activeItem,
  content,
  language,
  onActiveItemChange,
}: DesktopNavigationProps) {
  return (
    <div className="relative hidden h-full items-center gap-1 cursor-pointer text-left lg:flex">
      {content.items.map((item) => {
        const isActive = activeItem?.label === item.label
        const opens = item.groups.length > 0

        const className = `relative flex h-full items-center gap-1 px-4 text-left text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-accent-400 ${
          isActive
            ? 'text-neutral-900'
            : 'text-neutral-700 hover:text-neutral-900'
        }`

        const chevron = item.hasDropdown ? (
          <span
            className={`flex transition-transform duration-300 ${
              isActive ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <ChevronDown
              aria-hidden="true"
              className="size-4 shrink-0"
              strokeWidth={2.25}
            />
          </span>
        ) : null

        if (!opens) {
          const href = topNavHref(item.label, language)
          if (href) {
            const isExternal = href.startsWith('http')
            return (
              <a
                className={className}
                href={href}
                key={item.label}
                onFocus={() => onActiveItemChange(null)}
                onMouseEnter={() => onActiveItemChange(null)}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                {item.label}
              </a>
            )
          }
        }

        return (
          <button
            className={className}
            key={item.label}
            onFocus={() => onActiveItemChange(opens ? item : null)}
            onMouseEnter={() => onActiveItemChange(opens ? item : null)}
            type="button"
          >
            {item.label}
            {chevron}
          </button>
        )
      })}
    </div>
  )
}
