import { PRODUCT_SLUGS, type ProductSlug } from '../views/products/types'
import { SOLUTION_SLUGS, type SolutionSlug } from '../views/solutions/types'
import { EXPERTISE_SLUGS, type ExpertiseSlug } from '../views/expertise/types'
import { COMPANY_SLUGS, type CompanySlug } from '../views/company/types'

export type LanguageCode = 'en' | 'sl'

export type Route =
  | { name: 'landing' }
  | { name: 'about' }
  | { name: 'kumuluz' }
  | { name: 'products'; slug: ProductSlug }
  | { name: 'solutions'; slug?: SolutionSlug }
  | { name: 'expertise'; slug?: ExpertiseSlug }
  | { name: 'company'; slug?: CompanySlug }

const productSlugSet = new Set<string>(PRODUCT_SLUGS)
const solutionSlugSet = new Set<string>(SOLUTION_SLUGS)
const expertiseSlugSet = new Set<string>(EXPERTISE_SLUGS)
const companySlugSet = new Set<string>(COMPANY_SLUGS)

export function getLanguageFromPath(pathname: string): LanguageCode {
  return pathname.startsWith('/sl') ? 'sl' : 'en'
}

export function parseRoute(pathname: string): Route {
  const productsMatch = pathname.match(/\/products\/([^/]+)/)

  if (productsMatch && productSlugSet.has(productsMatch[1])) {
    return { name: 'products', slug: productsMatch[1] as ProductSlug }
  }

  const solutionsMatch = pathname.match(/\/solutions\/([^/]+)/)

  if (solutionsMatch && solutionSlugSet.has(solutionsMatch[1])) {
    return { name: 'solutions', slug: solutionsMatch[1] as SolutionSlug }
  }

  if (/\/solutions(\/|$)/.test(pathname)) {
    return { name: 'solutions' }
  }

  const expertiseMatch = pathname.match(/\/expertise\/([^/]+)/)

  if (expertiseMatch && expertiseSlugSet.has(expertiseMatch[1])) {
    return { name: 'expertise', slug: expertiseMatch[1] as ExpertiseSlug }
  }

  if (/\/expertise(\/|$)/.test(pathname)) {
    return { name: 'expertise' }
  }

  const companyMatch = pathname.match(/\/company\/([^/]+)/)

  if (companyMatch && companySlugSet.has(companyMatch[1])) {
    return { name: 'company', slug: companyMatch[1] as CompanySlug }
  }

  if (/\/company(\/|$)/.test(pathname)) {
    return { name: 'company' }
  }

  if (/\/kumuluz(\/|$)/.test(pathname)) {
    return { name: 'kumuluz' }
  }

  if (/\/about(\/|$)/.test(pathname)) {
    return { name: 'about' }
  }

  return { name: 'landing' }
}

export function buildPath(language: LanguageCode, route: Route): string {
  if (route.name === 'products') {
    return `/${language}/products/${route.slug}/`
  }

  if (route.name === 'solutions') {
    return route.slug
      ? `/${language}/solutions/${route.slug}/`
      : `/${language}/solutions/`
  }

  if (route.name === 'expertise') {
    return route.slug
      ? `/${language}/expertise/${route.slug}/`
      : `/${language}/expertise/`
  }

  if (route.name === 'company') {
    return route.slug
      ? `/${language}/company/${route.slug}/`
      : `/${language}/company/`
  }

  if (route.name === 'kumuluz') {
    return `/${language}/kumuluz/`
  }

  if (route.name === 'about') {
    return `/${language}/about/`
  }

  return `/${language}/`
}
