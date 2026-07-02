import { Building2, Check, Mail } from 'lucide-react'
import { useState } from 'react'
import type { LandingContent } from '../../../content/landing/landing'

type FinalCtaSectionProps = {
  content: LandingContent['landingPageSections']['finalCta']
}

const MAPS_URL = 'https://maps.app.goo.gl/sUypTyZYofbouHZ79'

const fieldClassName =
  'w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20'

const labelClassName = 'block text-sm font-semibold text-neutral-900'

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const { contact, form } = content
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [stage, setStage] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (option: string) => {
    setInterests((current) =>
      current.includes(option)
        ? current.filter((entry) => entry !== option)
        : [...current, option],
    )
  }

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()

    const name = [firstName, lastName].filter(Boolean).join(' ').trim()
    const subject = name ? `Website inquiry from ${name}` : 'Website inquiry'
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      jobTitle ? `Job title: ${jobTitle}` : null,
      phone ? `Phone: ${phone}` : null,
      country ? `Country: ${country}` : null,
      interests.length ? `Interest area: ${interests.join(', ')}` : null,
      stage ? `Project stage: ${stage}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    setSubmitted(true)
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className="relative border-t border-neutral-200 bg-white py-32"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden border-r border-neutral-200 bg-neutral-50 lg:block"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:96px_96px] [-webkit-mask-image:linear-gradient(to_right,transparent,black)] [mask-image:linear-gradient(to_right,transparent,black)]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-50 px-6 py-12 sm:px-10 sm:py-16 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:96px_96px] lg:hidden"
          />
          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent-700">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
              {content.text}
            </p>
            <dl className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <dt>
                  <Building2
                    aria-hidden="true"
                    className="size-6 text-neutral-400"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="text-base leading-7 text-neutral-600">
                  <a
                    className="transition-colors hover:text-neutral-900"
                    href={MAPS_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contact.address.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt>
                  <Mail
                    aria-hidden="true"
                    className="size-6 text-neutral-400"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="text-base text-neutral-600">
                  <a
                    className="transition-colors hover:text-neutral-900"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-12">
            <h3 className="text-2xl font-bold leading-snug text-neutral-900">
              {form.thankYouTitle}
            </h3>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              {form.thankYouText}
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-6"
            noValidate
            onSubmit={handleSubmit}
          >
            <div>
              <h3 className="text-xl font-bold leading-snug text-neutral-900">
                {form.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                {form.intro}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-first-name">
                  {form.firstNameLabel} *
                </label>
                <input
                  autoComplete="given-name"
                  className={fieldClassName}
                  id="contact-first-name"
                  name="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  type="text"
                  value={firstName}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-last-name">
                  {form.lastNameLabel} *
                </label>
                <input
                  autoComplete="family-name"
                  className={fieldClassName}
                  id="contact-last-name"
                  name="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  type="text"
                  value={lastName}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="contact-email">
                {form.emailLabel} *
              </label>
              <input
                autoComplete="email"
                className={fieldClassName}
                id="contact-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                value={email}
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-company">
                  {form.companyLabel} *
                </label>
                <input
                  autoComplete="organization"
                  className={fieldClassName}
                  id="contact-company"
                  name="company"
                  onChange={(event) => setCompany(event.target.value)}
                  required
                  type="text"
                  value={company}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-job-title">
                  {form.jobTitleLabel}
                </label>
                <input
                  autoComplete="organization-title"
                  className={fieldClassName}
                  id="contact-job-title"
                  name="jobTitle"
                  onChange={(event) => setJobTitle(event.target.value)}
                  type="text"
                  value={jobTitle}
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-phone">
                  {form.phoneLabel}
                </label>
                <input
                  autoComplete="tel"
                  className={fieldClassName}
                  id="contact-phone"
                  name="phone"
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  value={phone}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClassName} htmlFor="contact-country">
                  {form.countryLabel}
                </label>
                <input
                  autoComplete="country-name"
                  className={fieldClassName}
                  id="contact-country"
                  name="country"
                  onChange={(event) => setCountry(event.target.value)}
                  type="text"
                  value={country}
                />
              </div>
            </div>
            <fieldset className="space-y-3">
              <legend className={labelClassName}>{form.interestLabel}</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {form.interestOptions.map((option) => (
                  <label
                    className="group flex cursor-pointer items-center gap-2.5 text-sm text-neutral-700"
                    key={option}
                  >
                    <input
                      checked={interests.includes(option)}
                      className="peer sr-only"
                      name="interest"
                      onChange={() => toggleInterest(option)}
                      type="checkbox"
                      value={option}
                    />
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white transition-colors group-hover:border-accent-500 peer-checked:border-accent-700 peer-checked:bg-accent-700 peer-focus-visible:ring-2 peer-focus-visible:ring-accent-600/40 peer-focus-visible:ring-offset-1">
                      <Check
                        aria-hidden="true"
                        className="size-3.5 text-white"
                        strokeWidth={3}
                      />
                    </span>
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="contact-stage">
                {form.stageLabel}
              </label>
              <select
                className={fieldClassName}
                id="contact-stage"
                name="stage"
                onChange={(event) => setStage(event.target.value)}
                value={stage}
              >
                <option value="">{form.stagePlaceholder}</option>
                {form.stageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="contact-message">
                {form.messageLabel}
              </label>
              <textarea
                className={`${fieldClassName} min-h-36 resize-y`}
                id="contact-message"
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                placeholder={form.messagePlaceholder}
                required
                rows={5}
                value={message}
              />
            </div>
            <p className="text-xs leading-6 text-neutral-500">{form.consent}</p>
            <div className="flex justify-end">
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-800"
                type="submit"
              >
                {form.submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
