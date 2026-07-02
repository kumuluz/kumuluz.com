import type { LanguageCode } from '../../lib/router'

export function HeaderLogo({
  className,
  language,
}: {
  className?: string
  language: LanguageCode
}) {
  return (
    <a
      className={`block h-6 w-[115px] shrink-0 text-accent-500 ${className ?? ''}`}
      href={`/${language}/`}
    >
      <img
        src="/kumuluz-logo.svg"
        alt="kumuluz logo"
        className="h-full w-full object-contain"
      />
    </a>
  )
}
