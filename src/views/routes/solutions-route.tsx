'use client'

import { solutionPages } from '../../content/solutions'
import { solutionsCopy } from '../../content/solutions/solutions'
import type { LanguageCode } from '../../lib/router'
import { AgenticAiPlatformsPage } from '../solutions/agentic-ai-platforms/page'
import { AiKnowledgeManagementPage } from '../solutions/ai-knowledge-management/page'
import { ApiManagementPage } from '../solutions/api-management/page'
import { BusinessApisPage } from '../solutions/business-apis/page'
import { CloudNativeDigitalPlatformsPage } from '../solutions/cloud-native-digital-platforms/page'
import { CrowdsensingSmartCommunitiesPage } from '../solutions/crowdsensing-smart-communities/page'
import { EnterpriseAiAssistantsPage } from '../solutions/enterprise-ai-assistants/page'
import { SolutionDetail, SolutionsOverview } from '../solutions/overview'
import type { SolutionSlug } from '../solutions/types'

export function SolutionsRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug?: SolutionSlug
}) {
  const copy = solutionsCopy[language]

  if (!slug) {
    return <SolutionsOverview copy={copy} language={language} />
  }

  const page = solutionPages[slug]?.[language]
  if (page) {
    if (slug === 'enterprise-ai-assistants') {
      return <EnterpriseAiAssistantsPage language={language} page={page} />
    }
    if (slug === 'ai-knowledge-management') {
      return <AiKnowledgeManagementPage language={language} page={page} />
    }
    if (slug === 'api-management') {
      return <ApiManagementPage language={language} page={page} />
    }
    if (slug === 'business-apis') {
      return <BusinessApisPage language={language} page={page} />
    }
    if (slug === 'cloud-native-digital-platforms') {
      return <CloudNativeDigitalPlatformsPage language={language} page={page} />
    }
    if (slug === 'crowdsensing-smart-communities') {
      return <CrowdsensingSmartCommunitiesPage language={language} page={page} />
    }
    return <AgenticAiPlatformsPage language={language} page={page} />
  }

  const solution = copy.solutions.find((entry) => entry.slug === slug)
  if (!solution) {
    return <SolutionsOverview copy={copy} language={language} />
  }

  return <SolutionDetail copy={copy} language={language} solution={solution} />
}
