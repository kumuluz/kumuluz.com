import type { LanguageCode } from '../../lib/router'
import type {
  SolutionPageContent,
  SolutionSlug,
} from '../../views/solutions/types'
import { agenticAiPlatformsPage } from './agentic-ai-platforms'
import { aiKnowledgeManagementPage } from './ai-knowledge-management'
import { apiManagementPage } from './api-management'
import { businessApisPage } from './business-apis'
import { cloudNativeDigitalPlatformsPage } from './cloud-native-digital-platforms'
import { crowdsensingSmartCommunitiesPage } from './crowdsensing-smart-communities'
import { enterpriseAiAssistantsPage } from './enterprise-ai-assistants'

export const solutionPages: Partial<
  Record<SolutionSlug, Record<LanguageCode, SolutionPageContent>>
> = {
  'agentic-ai-platforms': agenticAiPlatformsPage,
  'ai-knowledge-management': aiKnowledgeManagementPage,
  'api-management': apiManagementPage,
  'business-apis': businessApisPage,
  'cloud-native-digital-platforms': cloudNativeDigitalPlatformsPage,
  'crowdsensing-smart-communities': crowdsensingSmartCommunitiesPage,
  'enterprise-ai-assistants': enterpriseAiAssistantsPage,
}
